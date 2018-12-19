module.exports = {
    rootDir: '..',
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg$': 'identity-obj-proxy',
    },
    testURL: 'http://localhost',
    setupTestFrameworkScriptFile: '<rootDir>/config/jest.setup.js',
    snapshotSerializers: [
        'enzyme-to-json/serializer',
    ],
    collectCoverage: true,
    collectCoverageFrom: [
        'components/**/*.js',
        'hocs/**/*.js',
        'systems/**/*.js',
        '**/*.spec.js',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
