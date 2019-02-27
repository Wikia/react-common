const fs = require('fs');
const path = require('path');

const get = require('lodash/get');
const glob = require('glob');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const set = require('lodash/set');
const uniq = require('lodash/uniq');

/**
 * Generate preview for icons (so the preview
 * is a bit nicer than just putting them on the page)
 */

const sourceDirectory = './source/icons';
const targetFileName = './source/icons/demo.md';

const ICON_CATEGORIES = Object.freeze({
    REGULAR: 'Regular',
    SMALL: 'Small',
    TINY: 'Tiny',
});

const ICON_STYLE = Object.freeze({
    [ICON_CATEGORIES.REGULAR]: "{width: '24px', height: '24px'}",
    [ICON_CATEGORIES.SMALL]: "{width: '18px', height: '18px'}",
    [ICON_CATEGORIES.TINY]: "{width: '12px', height: '12px'}",
});

/**
 * Generate icons list from directories
 */
const iconsImportComponents = [];
const iconsDemoData = {};

function addIconToList(iconFullName) {
    iconsImportComponents.push(iconFullName);

    // categorize icon - based on base name and size
    let category = ICON_CATEGORIES.REGULAR;
    if (iconFullName.endsWith('Small')) {
        category = ICON_CATEGORIES.SMALL;
    }
    if (iconFullName.endsWith('Tiny')) {
        category = ICON_CATEGORIES.TINY;
    }
    const iconName = iconFullName.replace(/Tiny$/, '').replace(/Small$/, '');

    const data = get(iconsDemoData, iconName, {});
    data[category] = iconFullName;
    set(iconsDemoData, iconName, data);
}

// generate both lists
glob.sync(`${sourceDirectory}/*/`, {}).forEach(
    dir => addIconToList(dir.replace(sourceDirectory, '').replace(/\//g, ''))
);

// generate import declarations
const imports = iconsImportComponents.map(
    componentName => `const ${componentName} = require('./${componentName}').default;`
).sort().join('\n');

// generate variants
function generateIconVariant(iconName, variantName) {
    const component = get(iconsDemoData, `${iconName}.${variantName}`);
    const style = ICON_STYLE[variantName];

    return component && `
        <IconVariant>
            <VariantName>${component}</VariantName>
            <VariantComponent><${component} style={${style}}/></VariantComponent>
        </IconVariant>`;
}

function generateIconLine(iconName) {
    const iconVariants = Object.values(ICON_CATEGORIES)
        .map(
            variantName => generateIconVariant(iconName, variantName)
        )
        .filter(Boolean)
        .join('\n        ');

    return `
    <Icon>
        <IconName>${iconName}</IconName>
        <Variants>
            ${iconVariants}
        </Variants>
    </Icon>`;
}
const iconsDemoBody = Object.keys(iconsDemoData).map(iconName => generateIconLine(iconName)).join('\n');

// generate file itself
function generateDemoFile() {
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
    ${iconsDemoBody}
</IconsDemo>
\`\`\`
`;
    fs.writeFileSync(targetFileName, iconsDemoTemplate);
}

// execute
generateDemoFile();
