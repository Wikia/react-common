import React from 'react';
import renderer from 'react-test-renderer';

import FandomLoader from './index';

test('FandomLoader renders correctly with default values', () => {
  const component = renderer.create(
    <FandomLoader />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomLoader renders correctly with custom size (string)', () => {
  const component = renderer.create(
    <FandomLoader size={'78'} stroke={'6'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomLoader renders correctly with custom size (number)', () => {
  const component = renderer.create(
    <FandomLoader size={'20'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomLoader renders correctly with custom colors (named color)', () => {
  const component = renderer.create(
    <FandomLoader color={'red'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomLoader renders correctly with custom colors (short hex)', () => {
  const component = renderer.create(
    <FandomLoader color={'#0f0'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomLoader renders correctly with custom colors (rgb)', () => {
  const component = renderer.create(
    <FandomLoader color={'rgb(0,0,255)'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
