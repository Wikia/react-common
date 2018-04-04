module.exports = {
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
