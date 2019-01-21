const fs = require('fs');
const path = require('path');

const glob = require('glob');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const upperFirst = require('lodash/upperFirst');
const words = require('lodash/words');

/**
 * 0) Remove all previously generated icons
 * 1) list all the SVGs
 * 2) Categorize it based on the to the file name (tiny 12x12, small 18x18, normal 24x24)
 * 3) Create React Components that just export imported SVG code
 * 4) Create README.md and tests for importing
 */

/**
 * (0)
 */
console.log('Deleting icons');
rimraf.sync('./icons');

const iconsSource = [];
/**
 * (1) & (2)
 */
function getIconInfo(filename) {
    const file = filename.replace(/.*_icons\//, '');
    let name = words(
        path.basename(filename)
            .replace('.svg', '')
            .replace('-', ' ')
            .toLowerCase()
    ).map(word => upperFirst(word)).join('');
    let size = parseInt(filename.replace(/.*\/([0-9]{2})x[0-9]{2}\/.*/, '$1'), 10);

    switch (size) {
        case '12x12':
            name = `${name}Tiny`;
            break;
        case '18x18':
            name = `${name}Small`;
            break;
        default:
            // keep the name intact
            size = 24;
    }

    return {
        name: `Icon${name}`,
        file,
        size,
    };
}

glob.sync('./_icons/*/*.svg', {}).forEach(
    file => iconsSource.push(getIconInfo(file))
);

/**
 * (3)
 */
function generateComponent({ name, file, size }) {
    console.log(`Writing ${name}`);

    const outDirectory = `${__dirname}/../icons/${name}`;
    const jsxTemplate = `// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ${name}Svg from '../../_icons/${file}';

const ${name} = styled(${name}Svg)\`
    fill: currentColor;
    height: \${props => props.size}px;
    width: \${props => props.size}px;
\`;

${name}.propTypes = {
    size: PropTypes.number,
};

${name}.defaultProps = {
    size: ${size},
};

// @component
export default ${name};
`;
    mkdirp.sync(outDirectory);
    fs.writeFileSync(`${outDirectory}/index.js`, jsxTemplate);

    const readmeTemplate = `
\`\`\`js
<${name} />
\`\`\`
`;
    fs.writeFileSync(`${outDirectory}/README.md`, readmeTemplate);
}

iconsSource.forEach(icon => generateComponent(icon));

// /**
//  * (4)
//  */
// function generateReadmeAndTest(directory, components) {
//     console.log(`Writing tests and README.md for ${directory}`);

//     const outDirectory = `${__dirname}/../${directory}`;

//     // generate README.md
//     const readmeTemplate = `Files and directories in this directory are automatically re-generated. See the source/scripts/extract-assets-from-ds.js.
// `;
//     fs.writeFileSync(`${outDirectory}/README.md`, readmeTemplate);

//     const componentTest = components.map(
//         name => `export { default as ${name} } from './${name}';`
//     );
//     componentTest.push('');

//     fs.writeFileSync(`${outDirectory}/index.js`, componentTest.join('\n'));

//     // generate test for including the components inside
//     const indexSpecTemplate = `// we're checking here if we can import the index
// // eslint-disable-next-line no-unused-vars
// import all from './index';

// const foo = 'foo';

// test('importing index.js works', () => {
//     expect(foo).toEqual('foo');
// });
// `;
//     fs.writeFileSync(`${outDirectory}/index.spec.js`, indexSpecTemplate);
// }

// const assetDirs = uniq(assets.map(a => a.directory));
// assetDirs.forEach(
//     dir => generateReadmeAndTest(dir, assets.filter(a => a.directory === dir).map(a => a.to))
// );
