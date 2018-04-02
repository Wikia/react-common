module.exports = {
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
        test: /\.s?css$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
};
