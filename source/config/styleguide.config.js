const fs = require('fs');
const path = require('path');

const pkg = require('../package.json');

const config = require('./config');
const schema = require('./styleguide.config.json');
const templateBody = require('./styleguide.template');
const webpackConfig = require('./styleguide.webpack.config');
const { theme, styles } = require('./styleguide.styles');

function resolve(...paths) {
    return fs.realpathSync(path.join(__dirname, ...paths));
}

function getSections() {
    return schema.map(({
        name,
        content,
        components,
        description,
        sections,
        hocs,
    }) => {
        const section = {
            content,
            description,
            name,
            sections,
        };

        if (components) {
            section.components = () => components.map(
                componentName => resolve('../components', componentName, 'index.js')
            );
        }

        if (hocs) {
            section.sections = hocs.map(
                hocName => ({
                    name: hocName,
                    content: resolve('../hocs', hocName, 'README.md'),
                })
            );
        }

        return section;
    });
}

module.exports = {
    title: 'react-design-system',
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
    styleguideDir: `../${config.outputDir}/${config.styleguideDir}`,
    components: '../components/**/index.js',
    sections: getSections(),
    getExampleFilename(componentPath) {
        return componentPath.replace(/index\.js$/, 'README.md');
    },
    getComponentPathLine(componentPath) {
        const name = path.basename(path.dirname(componentPath));

        return `import ${name} from '${pkg.name}/components/${name}';`;
    },
    webpackConfig,
};
