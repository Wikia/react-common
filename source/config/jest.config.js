module.exports = {
    rootDir: '..',
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg$': 'identity-obj-proxy',
    },
    testURL: 'http://127.0.0.1/',
    setupTestFrameworkScriptFile: '<rootDir>/config/jest.setup.js',
    snapshotSerializers: [
        'enzyme-to-json/serializer',
    ],
    collectCoverage: true,
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
