import React from 'react';
import renderer from 'react-test-renderer';

import IconSprite from './index';

test('IconSprite component renders', () => {
  const component = renderer.create(<IconSprite />);
  expect(component.toJSON()).toMatchSnapshot();
});
