import React from 'react';
import renderer from 'react-test-renderer';

import Button from './index';

test('Button renders correctly with default values', () => {
  const component = renderer.create(
    <Button />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
