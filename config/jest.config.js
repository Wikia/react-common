module.exports = {
    rootDir: '..',
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg$': '<rootDir>/config/jest.fileMock.js',
    },
    testURL: 'http://localhost',
    setupTestFrameworkScriptFile: '<rootDir>/config/jest.setup.js',
    snapshotSerializers: [
        'enzyme-to-json/serializer',
    ],
    // collectCoverage: true,
    collectCoverageFrom: [
        'source/components/**/*.js',
        'source/hocs/**/*.js',
        'source/systems/**/*.js',
        'source/**/*.spec.js',
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
