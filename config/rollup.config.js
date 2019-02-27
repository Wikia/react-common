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

const buildConfig = file =>
    ({
        input: `${file}/index.js`,
        output: [
            {
                file: `${config.outputDir}/${file.replace('source/', '')}.js`,
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
                output: true,
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
            commonjs(),
            postprocess([
                /**
                 * reference the assets directly
                 */
                [ '../../assets', '@wikia/react-common/assets', ],
                [ '../../icons', '@wikia/react-common/icons', ],
            ]),
        ],
    });

export default sources.map(
    source => buildConfig(source),
);
