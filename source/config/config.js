module.exports = {
    outputDir: '..',
    styleguideDir: 'docs',
    sourceDirectories: [
        'components',
        'hocs',
    ],
    externalDependencies: [
        'date-fns',
        // we ony use one function from date-fns
        'date-fns/distance_in_words_strict',
        'prop-types',
        'react',
        'react-dom',
    ],
};
