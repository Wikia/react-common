import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import string from 'rollup-plugin-string/dist/rollup-plugin-string';

import pkg from './package.json';

const buildConfig = ({
    input,
    outputCjs,
    outputEs,
    outputCss,
}) => ({
    input,
    output: [
        {
            file: outputCjs,
            format: 'cjs',
            name: 'react-design-system',
        },
        {
            file: outputEs,
            format: 'es',
        },
    ],
    external: [
        'design-system',
        'lodash.uniqueid',
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
            output: outputCss,
        }),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            plugins: [
                'babel-plugin-transform-object-rest-spread',
                'external-helpers',
            ],
            presets: [
                'babel-preset-react', ['env', {
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
    ],
});

export default [
    buildConfig({
        input: 'src/index.js',
        outputCjs: pkg.main,
        outputEs: pkg.module,
        outputCss: pkg.style,
    }),
    buildConfig({
        input: 'src/icons.js',
        outputCjs: pkg.mainIcons,
        outputEs: pkg.moduleIcons,
        outputCss: pkg.styleIcons,
    }),
];
