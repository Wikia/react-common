import React from 'react';
import renderer from 'react-test-renderer';

import Fieldset from './index';

/* eslint-disable no-alert */

test('Fieldset renders correctly with default values', () => {
  const component = renderer.create(
    <Fieldset />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Fieldset renders correctly with a children', () => {
  const component = renderer.create(
    <Fieldset>
      <strong>bold</strong>&nbsp;text
    </Fieldset>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
