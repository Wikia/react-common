module.exports = {
    outputDir: '.',
    styleguideDir: './docs',
    sourceDirectories: [
        'components',
        'hocs',
        'hooks',
        'models',
        'systems',
        'assets',
        'icons',
    ],
    sourceFiles: [
        'theme/breakpoints.js',
        'theme/colors.js',
        'theme/index.js',
        'theme/typography.js'
    ],
    externalDependencies: [
        'date-fns',
        // we ony use one function from date-fns
        'date-fns/distance_in_words_strict',
        'prop-types',
        'react',
        'react-dom',
        'react-select',
        'react-redux',
        'immutable',
        'react-i18next',
        'i18next',
    ],
};
