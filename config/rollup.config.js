import fs from 'fs-extra';
import glob from 'glob';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import postprocess from 'rollup-plugin-postprocess';
import sass from 'rollup-plugin-sass';
import commonjs from 'rollup-plugin-commonjs';
import string from 'rollup-plugin-string/dist/rollup-plugin-string';
import svg from 'rollup-plugin-react-svg';

const config = require('./config');
const babelConfig = require('./babel.config');

const sources = [];
config.sourceDirectories.forEach(
    // glob only dirs
    directory => glob.sync(`source/${directory}/*/`, {}).forEach(
        // drop the '/' from the end
        file => sources.push(file.substring(0, file.length - 1))
    )
);
config.sourceFiles.forEach(
    sourceFile => sources.push(`source/${sourceFile}`)
);

/**
 * Check if import should be "external" or not:
 * - External deps are left as-is
 * - Non-external ones are parsed and included
 */
const isThisExternalDependency = (fileName) => {
    return config.externalDependencies.indexOf(fileName) > -1
        || fileName.startsWith('../../icons')
        || fileName.startsWith('../../assets');
}

const buildConfig = file => {
    const inputFileName = file.endsWith('.js') ? file : `${file}/index.js`;
    const outputFileName = file.endsWith('.js') ? file.replace('source/', '') : `${file.replace('source/', '')}.js`;

    return {
        input: inputFileName,
        output: [
            {
                file: `${config.outputDir}/${outputFileName}`,
                format: 'cjs',
            },
        ],
        external: isThisExternalDependency,
        plugins: [
            string({
                include: 'node_modules/design-system/dist/svg/sprite.svg',
            }),
            resolve({
                module: true,
            }),
            sass({
                output: function (styles, styleNodes) {
                    const filteredNodes = styleNodes.filter(node => node.id.indexOf(`${file}/`) !== -1);

                    if (!filteredNodes.length) {
                        return;
                    }

                    fs.outputFileSync(`${config.outputDir}/${file.replace('source/', '')}.css`, filteredNodes[0].content);
                },
            }),
            svg({
                svgo: {
                    plugins: [
                        {
                            cleanupIDs: {
                                remove: false,
                                prefix: `id-${file}-`,
                                minify: false,
                            },
                        },
                    ],
                },
                exclude: 'node_modules/design-system/dist/svg/sprite.svg',
            }),
            babel(babelConfig),
            commonjs({
                         namedExports: {
                             'node_modules/react-is/index.js': [
                                 'isElement',
                                 'isValidElementType',
                                 'ForwardRef',
                             ],
                         }
                     }),
            postprocess([
                /**
                 * reference the assets directly
                 */
                [ '../../assets', '@wikia/react-common/assets', ],
                [ '../../icons', '@wikia/react-common/icons', ],
            ]),
        ],
    };
};

export default sources.map(
    source => buildConfig(source),
);
