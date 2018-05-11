import React from 'react';
import renderer from 'react-test-renderer';

import FandomBackgroundImage from './index';

test('FandomBackgroundImage renders correctly with default values', () => {
  const component = renderer.create(
    <FandomBackgroundImage />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomBackgroundImage renders correctly with custom width', () => {
  const component = renderer.create(
    <FandomBackgroundImage width={10} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomBackgroundImage renders correctly with custom class name', () => {
  const component = renderer.create(
    <FandomBackgroundImage className={'my-background'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
