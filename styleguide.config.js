const fs = require('fs');
const path = require('path');
const {theme, styles} = require('./styleguide/styles.js');
const webpackConfig = require('./styleguide/webpack.config.js');
const pkg = require('./package.json');
const schema = require('./components.json');
const templateBody = require('./styleguide/template');

function resolve(...paths) {
  return fs.realpathSync(path.join(__dirname, ...paths));
}

function getSections() {
  return schema.map(({name, content, components, description, sections}) => {
    const section = {
      content,
      description,
      name,
      sections,
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
  title: `react-design-system`,
  template: {
    head: {
      links: [{
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Rubik:400,700',
      }],
    },
    body: {
      raw: templateBody,
    },
  },
  theme,
  styles,
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
  webpackConfig,
  require: [
    path.join(__dirname, 'node_modules/design-system/dist/css/styles.css'),
  ],
};
