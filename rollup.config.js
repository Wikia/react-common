import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import string from 'rollup-plugin-string/dist/rollup-plugin-string';

import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      name: 'react-design-system',
    },
    {
      file: pkg.module,
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
      output: 'dist/styles.css',
    }),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      plugins: [
        'babel-plugin-transform-object-rest-spread',
        'external-helpers',
      ],
      presets: [
        'babel-preset-react',
        ['env', {
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
};
