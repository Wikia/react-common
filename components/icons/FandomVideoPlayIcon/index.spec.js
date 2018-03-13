import React from 'react';
import renderer from 'react-test-renderer';

import FandomVideoPlayIcon from './index';

test('FandomVideoPlayIcon renders correctly with default values', () => {
  const component = renderer.create(
    <FandomVideoPlayIcon />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomVideoPlayIcon renders correctly with custom size (string, px)', () => {
  const component = renderer.create(
    <FandomVideoPlayIcon size={'35px'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomVideoPlayIcon renders correctly with custom size (number)', () => {
  const component = renderer.create(
    <FandomVideoPlayIcon size={'20'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomVideoPlayIcon renders correctly with custom colors', () => {
  const component = renderer.create(
    <FandomVideoPlayIcon color={'#f00'} backgroundColor={'#fee'} shadowColor={'#300'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
