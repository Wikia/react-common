module.exports = {
  // skipComponentsWithoutExample: true,
  // verbose: true,
  // showUsage: true,
  styleguideDir: './docs/',
  components: 'components/**/*.js',
  sections: [
    {
      name: 'UI',
      components: 'components/ui/**/*.js',
    },
    {
      name: 'Icons',
      components: 'components/icons/**/*.js',
    },
  ],
  getExampleFilename(componentPath) {
    return componentPath.replace(/index\.jsx?$/, 'examples.md');
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            plugins: ['babel-plugin-transform-object-rest-spread'],
            presets: [require.resolve('babel-preset-react'), [
              'env',
              {
                targets: {
                  browsers: [
                    'last 5 versions',
                    '> 2%',
                    'IE 11',
                    'IE 10',
                  ],
                },
              },
            ]],
          },
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
      ],
    },
  },
};
