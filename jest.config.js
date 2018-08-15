module.exports = {
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.svg$': 'identity-obj-proxy',
  },
  testURL: 'http://localhost',
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
