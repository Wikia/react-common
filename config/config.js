// keep this file es5-friendly
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
        'theme/generateTheme.js',
        'theme/index.js',
        'theme/typography.js',
        'utils/eventLogger.js',
        'utils/vignette.js',
        'utils/environment.js',
        'utils/uuidv4.js',
    ],
    /**
     * Those are going to be specified in rollup's `external` in addition
     * to `package.json`'s `dependencies`.
     */
    additionalDependencies: [
        // we ony use one function from date-fns
        'date-fns/distance_in_words_strict',
    ],
};
