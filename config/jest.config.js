process.env.TZ = 'UTC';

module.exports = {
    rootDir: '..',
    moduleNameMapper: {
        '\\.(s?css)$': 'identity-obj-proxy',
        '\\.svg$': '<rootDir>/config/jest.fileMock.js',
    },
    testURL: 'http://localhost',
    setupFilesAfterEnv: [
        '<rootDir>/config/jest.setup.js',
    ],
    snapshotSerializers: [
        'enzyme-to-json/serializer',
    ],
    collectCoverageFrom: [
        'source/components/**/*.js',
        'source/hocs/**/*.js',
        'source/hooks/**/*.js',
        'source/systems/**/*.js',
        'source/**/*.spec.js',
    ],
    coverageThreshold: {
        global: {
            branches: 95,
            functions: 95,
            lines: 95,
            statements: 95,
        },
    },
};
