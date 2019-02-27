import fs from 'fs-extra';
import glob from 'glob';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
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

const buildConfig = file =>
    ({
        input: `${file}/index.js`,
        output: [
            {
                file: `${config.outputDir}/${file.replace('source/', '')}.js`,
                format: 'cjs',
            },
        ],
        external: config.externalDependencies,
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
                                    minify: true,
                                },
                            },
                        ],
                    },
                    exclude: 'node_modules/design-system/dist/svg/sprite.svg',
                }),
            babel(babelConfig),
            commonjs(),
        ],
    });

export default sources.map(
    source => buildConfig(source),
);
