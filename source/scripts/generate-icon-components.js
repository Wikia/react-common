const fs = require('fs');
const path = require('path');

const glob = require('glob');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const upperFirst = require('lodash/upperFirst');
const words = require('lodash/words');
const set = require('lodash/set');
const get = require('lodash/get');

/**
 * 0) Remove all previously generated icons
 * 1) list all the SVGs
 * 2) Categorize it based on the to the file name (tiny 12x12, small 18x18, normal 24x24)
 * 3) Create React Components that just export imported SVG code
 * 4) Create README.md and tests for importing
 * 5) Create demo page for styleguide
 */

/**
 * (0)
 */
console.log('Deleting icons');
rimraf.sync('./icons');

const iconsSource = [];
const iconsPreviewData = {};
/**
 * (1) & (2)
 */
function getIconInfo(filename) {
    const file = filename.replace(/.*_icons\//, '');
    let name = words(
        path.basename(filename)
            .replace('.svg', '')
            .toLowerCase()
    ).map(word => upperFirst(word)).join('');
    let size = parseInt(filename.replace(/.*\/([0-9]{2})px\/.*/, '$1'), 10);

    switch (size) {
        case 12:
            set(iconsPreviewData, `${name}.tiny`, `Icon${name}Tiny`);
            name = `${name}Tiny`;
            break;
        case 18:
            set(iconsPreviewData, `${name}.small`, `Icon${name}Small`);
            name = `${name}Small`;
            break;
        default:
            set(iconsPreviewData, `${name}.normal`, `Icon${name}`);
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
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ${name}Svg from '../../_icons/${file}';

const ${name} = styled(({ size, ...rest }) => <${name}Svg height={size} width={size} {...rest} />)\`
    fill: currentColor;
    height: \${props => props.size}px;
    width: \${props => props.size}px;
\`;

${name}.propTypes = {
    /** Size of the icon */
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

/**
 * (4)
 */
function generateReadmeAndTest(components) {
    console.log(`Writing tests and README.md for icons`);

    const outDirectory = `${__dirname}/../icons`;

    // generate README.md
    const readmeTemplate = `Files and directories in this directory are automatically re-generated. See the source/scripts/generate-icon-components.js.
`;
    fs.writeFileSync(`${outDirectory}/README.md`, readmeTemplate);

    const componentTestExports = components.map(
        name => `export { default as ${name} } from './${name}';`
    );
    componentTestExports.push('');

    fs.writeFileSync(`${outDirectory}/index.js`, componentTestExports.join('\n'));

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

generateReadmeAndTest(iconsSource.map(icon => icon.name).sort());

/**
 * (5)
 */
function generateDemoPage(icons) {
    console.log(`Writing demo for icons`);

    // genrate import list
    const imports = icons
        .map(icon => Object.values(iconsPreviewData[icon]))
        .reduce((acc, val) => acc.concat(val), [])
        .sort()
        .map(componentName => `const ${componentName} = require('./${componentName}').default;`)
        .join('\n');

    // generate icon components
    const renderIconVariant = (iconName, iconVariant) => {
        const component = get(iconsPreviewData, `${iconName}.${iconVariant}`);

        return component && `
            <IconVariant>
                <VariantName>${component}</VariantName>
                <VariantComponent><${component}/></VariantComponent>
            </IconVariant>`;
    }
    const renderIconLine = (iconName) => {
        const variants = iconsPreviewData[iconName];

        const iconVariants = ['normal', 'small', 'tiny']
            .map(variantName => renderIconVariant(iconName, variantName))
            .filter(Boolean)
            .join('\n');

        return `
    <Icon>
        <IconName>${iconName}</IconName>
        <Variants>${iconVariants}</Variants>
    </Icon>`;
    }

    const iconComponents = icons
        .map(icon => renderIconLine(icon))
        .join('\n        ');

    const iconsDemoTemplate = `
There are three basic icon sizes: regular (24px), small (18px) and tiny (12px).
Every icon component has \`size\` prop that can modify it's height and width;
in addition every icon's \`fill\` color is defaulted to current color.

Usage:
\`\`\`js static
@import <IconComponent> from '@wikia/react-common/icons/<IconComponent>';
\`\`\`

Here's the list of all the icons in different sizes; hover over icon to see component's name

\`\`\`jsx noeditor
const React = require('react');
const styled = require('styled-components').default;
${imports}

const IconsDemo = styled.div\`
\`;
const Icon = styled.div\`
    align-items: center;
    display: flex;
    margin-bottom: 12px;
    padding: 6px;

    &:hover {
        background: #fff;
    }
\`;
const IconName = styled.div\`
    flex-basis: 200px;
    font-size: 16px;
    font-weight: 600;
    margin-right: 12px;
    text-align: right;
\`;
const Variants = styled.div\`
    display: grid;
    flex: 1;
    grid-template-columns: 100px 100px 100px;
\`;
const IconVariant = styled.div\`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 12px;
    position: relative;

    &:hover span {
        display: flex;
    }
\`;
const VariantName = styled.span\`
    align-items: center;
    background: #fff;
    bottom: -20px;
    display: none;
    font-size: 14px;
    height: 20px;
    justify-content: center;
    left: 0;
    position: absolute;
    right: 0;
    text-align: center;
\`;
const VariantComponent = styled.div\`
\`;

<IconsDemo>
    ${iconComponents}
</IconsDemo>
\`\`\`
`;
    fs.writeFileSync(`${__dirname}/../icons/IconsDemo.md`, iconsDemoTemplate);
}

generateDemoPage(Object.keys(iconsPreviewData).sort());

