module.exports = {
  theme: {
    color: {
      link: '#00acac',
      linkHover: '#008989',
    },
    fontFamily: {
      base: 'Rubik, Helvetica, Arial, sans-serif',
    },
    fontSize: {
      base: 14,
      text: 15,
      small: 13,
      h1: 36,
      h2: 24,
      h3: 18,
      h4: 16,
      h5: 15,
      h6: 15,
    },
  },
  template: './styleguide/index.html',
  // skipComponentsWithoutExample: true,
  // verbose: true,
  // showUsage: true,
  styleguideDir: './docs/',
  components: 'components/**/*.js',
  sections: [
    {
      content: 'README.md',
    },
    {
      name: 'Icons',
      components: 'components/icons/**/*.js',
    },
    {
      name: 'UI',
      components: 'components/ui/**/*.js',
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
