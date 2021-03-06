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
                componentName => resolve('../source/components', componentName, 'index.js')
            );
        }

        if (gallery) {
            const assetComponents = [];

            glob.sync(`source/${gallery}/*/index.js`, {}).forEach(
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
                    content: resolve(`../source/${directory}`, itemName, 'README.md'),
                })
            );
        }

        return section;
    });
}



module.exports = {
    title: 'react-common',
    template: {
        head: {
            links: [{
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap',
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
    styleguideDir: `../${config.styleguideDir}`,
    components: '../source/components/**/index.js',
    sections: getSections(),
    getExampleFilename(componentPath) {
        return componentPath.replace(/index\.js$/, 'README.md');
    },
    getComponentPathLine(componentPath) {
        const name = path.basename(path.dirname(componentPath));
        const subPath = componentPath.replace(/^\.\.\//, '').replace(/\/index\.js$/, '');

        return `import ${name} from '${pkg.name}/${subPath}';`;
    },
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    webpackConfig,
    compilerConfig: {
        transforms: {
            dangerousTaggedTemplateString: true,
        },
    },
    require: [
        path.join(__dirname, '../source/styleguide.css')
    ],
};
