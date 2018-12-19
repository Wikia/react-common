const fs = require('fs');
const path = require('path');

const glob = require('glob');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const uniq = require('lodash/uniq');

const sourceDir = 'design-system/dist/svg/';

/**
 * 0) Remove all previously generated directories
 * Walk the path above and:
 * 1) list all the SVGs
 * 2) Categorize it based on the to the file name
 * 3) Create React Components that just export imported SVG code
 * 4) Create README.md and tests for importing
 */

const ASSET_CATEGORIES = Object.freeze({
    'wds-icons': {
        directory: 'icons',
        prefix: '',
    },
    'wds-avatar-badges': {
        directory: 'avatars',
        prefix: 'Badge',
    },
    'wds-avatar': {
        directory: 'avatars',
        prefix: '',
    },
    'wds-company-logo': {
        directory: 'assets',
        prefix: 'Logo',
    },
    'wds-company-store': {
        directory: 'assets',
        prefix: '',
    },
});

const ASSET_CATEGORIES_KEYS = Object.keys(ASSET_CATEGORIES);

/**
 * (0)
 */
ASSET_CATEGORIES_KEYS.forEach(
    (category) => {
        const name = `./${ASSET_CATEGORIES[category].directory}`;
        console.log(`Deleting ${name}`);
        rimraf.sync(name);
    }
);

const assets = [];
/**
 * (2)
 */
function convertAssetSource(assetFileName) {
    const file = path.basename(assetFileName);

    const categoryName = ASSET_CATEGORIES_KEYS.find(c => file.startsWith(c));

    if (!categoryName) {
        console.error(`Unknown asset category for filename ${file}, skipping`);
        return;
    }

    const category = ASSET_CATEGORIES[categoryName];

    const componentName = category.prefix + file
        .replace(categoryName, '')
        .replace(/\.svg$/g, '')
        .replace(/(-[a-z])/g, r => r[1].toUpperCase());

    assets.push({
        category: categoryName,
        directory: category.directory,
        from: assetFileName,
        to: componentName,
    });
}

/**
 * (1)
 */
glob.sync(`node_modules/${sourceDir}wds-*.svg`, {}).forEach(
    file => convertAssetSource(file)
);

/**
 * (3)
 */
function generateComponent(assetData) {
    console.log(`Writing ${assetData.directory}/${assetData.to}`);

    const outDirectory = `${__dirname}/../${assetData.directory}/${assetData.to}`;

    const jsxTemplate = `// This file is generated automatically via extract-assets-from-ds.js
export default from '${sourceDir}${assetData.from}';
`;
    mkdirp.sync(outDirectory);
    fs.writeFileSync(`${outDirectory}/index.js`, jsxTemplate);
}

assets.forEach(asset => generateComponent(asset));

/**
 * (4)
 */
function generateReadmeAndTest(directory, components) {
    console.log(`Writing tests and README.md for ${directory}`);

    const outDirectory = `${__dirname}/../${directory}`;

    // generate README.md
    const readmeTemplate = `Files and directories in this directory are automatically re-generated. See the source/scripts/extract-assets-from-ds.js.
`;
    fs.writeFileSync(`${outDirectory}/README.md`, readmeTemplate);

    const componentTest = components.map(
        name => `export { default as ${name} } from './${name}';`
    );
    fs.writeFileSync(`${outDirectory}/index.js`, componentTest.push('').join('\n'));

    // generate test for including the components inside
    const indexSpecTemplate = `// we're checking here if we can import the index
// eslint-disable-next-line no-unused-vars
import all from './index';

const foo = 'foo';

test('importing index.js works', () => {
    expect(foo).toEqual('foo');
});
`;
    fs.writeFileSync(`${outDirectory}/index.spec.js`, indexSpecTemplate);
}

const assetDirs = uniq(assets.map(a => a.directory));
assetDirs.forEach(
    dir => generateReadmeAndTest(dir, assets.filter(a => a.directory === dir).map(a => a.to))
);
