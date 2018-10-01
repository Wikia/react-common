import glob from 'glob';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import commonjs from 'rollup-plugin-commonjs';
import string from 'rollup-plugin-string/dist/rollup-plugin-string';

const config = require('./config');
const babelConfig = require('./babel.config');

const sources = [];
config.sourceDirectories.forEach(
    directory => glob.sync(`${directory}/*`, {}).forEach(file => sources.push(file))
);

const buildConfig = path => ({
    input: `${path}/index.js`,
    output: [
        {
            file: `${config.outputDir}/${path}.js`,
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
            output: true,
        }),
        babel(babelConfig),
        commonjs(),
    ],
});

export default sources.map(
    source => buildConfig(source),
);
