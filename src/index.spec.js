import React from 'react';
import renderer from 'react-test-renderer';

import components from './index';

const foo = 'foo';

test('importing index.js works', () => {
  expect(foo).toEqual('foo');
});
