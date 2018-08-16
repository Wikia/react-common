import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import sass from 'rollup-plugin-sass';
import string from 'rollup-plugin-string';

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
    'react',
    'prop-types',
    'lodash.uniqueid',
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
    // commonjs(),
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      plugins: [
        'babel-plugin-transform-object-rest-spread',
        'external-helpers',
      ],
      // externalHelpers: true,
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
