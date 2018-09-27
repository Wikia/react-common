import glob from 'glob';
import rimraf from 'rimraf';
import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import commonjs from 'rollup-plugin-commonjs';
import string from 'rollup-plugin-string/dist/rollup-plugin-string';

const sourceDirectories = [
    'components',
];

const sources = [];
sourceDirectories.forEach(
    directory => glob.sync(`${directory}/*`, {}).forEach(file => sources.push(file))
);

// remove existing files
sourceDirectories.forEach(
    directory => rimraf.sync(`../${directory}`)
);

const buildConfig = path => ({
    input: `${path}/index.js`,
    output: [
        {
            file: `../${path}.js`,
            format: 'cjs',
        },
    ],
    external: [
        'design-system',
        'prop-types',
        'react',
    ],
    plugins: [
        string({
            include: 'node_modules/design-system/dist/svg/sprite.svg',
        }),
        resolve({
            module: true,
        }),
        sass({
            output: true,
            // insert: true,
        }),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            plugins: [
                '@babel/plugin-syntax-object-rest-spread',
            ],
            presets: [
                '@babel/preset-react', ['@babel/preset-env', {
                    modules: false,
                    targets: {
                        browsers: [
                            'last 5 versions',
                            '> 2%',
                            'IE 11',
                            'IE 10',
                        ],
                    },
                }],
            ],
        }),
        commonjs(),
    ],
});

export default sources.map(
    source => buildConfig(source),
);
