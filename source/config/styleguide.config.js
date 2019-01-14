const fs = require('fs');
const path = require('path');

const docgen = require('react-docgen');
const glob = require('glob');

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
        items,
        components,
        directory,
        description,
        sections,
        gallery,
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

        if (gallery) {
            const assetComponents = [];

            glob.sync(`${gallery}/*/index.js`, {}).forEach(
                (file) => {
                    assetComponents.push(resolve(`../${file}`));
                }
            );

            section.components = () => assetComponents;
        }

        if (items && directory) {
            section.sections = items.map(
                itemName => ({
                    name: itemName,
                    content: resolve(`../${directory}`, itemName, 'README.md'),
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
    styleguideComponents: {
        Wrapper: resolve('./styleguide.ExampleWrapper.js'),
    },
    styleguideDir: `../${config.outputDir}/${config.styleguideDir}`,
    components: '../components/**/index.js',
    sections: getSections(),
    getExampleFilename(componentPath) {
        return componentPath.replace(/index\.js$/, 'README.md');
    },
    getComponentPathLine(componentPath) {
        const name = path.basename(path.dirname(componentPath));
        const subPath = componentPath.replace(/^\.\.\//, '').replace(/\/index\.js$/, '');

        return `import ${name} from '${pkg.name}/${subPath}';`;
    },
    propsParser(filePath, source, resolver, handlers) {
        /**
         * `react-docgen` cannot parse this fine syntax, so let's ignore it
         */
        if (source.indexOf('export default from') > -1) {
            return {};
        }
        return docgen.parse(source, resolver, handlers);
    },
    webpackConfig,
};
