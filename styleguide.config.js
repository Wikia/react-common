const fs = require('fs');
const path = require('path');
const {theme, styles} = require('./styleguide/styles.js');
const pkg = require('./package.json');
const schema = require('./components.json');

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

function getSections() {
  return schema.map(({name, content, components}) => {
    const section = {
      name,
      content,
    };

    if (components) {
      section.components = () => components.map(
        componentName => resolve('src/components', componentName, 'index.js')
      );
    }

    return section;
  });
}

module.exports = {
  title: `react-design-system v${pkg.version}`,
  template: './styleguide/index.html',
  theme,
  styles,
  // skipComponentsWithoutExample: true,
  // verbose: true,
  // showUsage: true,
  styleguideDir: './docs/',
  components: 'src/components/**/index.js',
  sections: getSections(),
  getExampleFilename(componentPath) {
    return componentPath.replace(/index\.jsx?$/, 'README.md');
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(path.dirname(componentPath));
    const dir = path.dirname(componentPath);

    return `import {${name}} from '${pkg.name}';`;
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
