import React from 'react';
import renderer from 'react-test-renderer';

import Loader from './index';

test('Loader renders correctly with default values', () => {
  const component = renderer.create(
    <Loader />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Loader renders correctly with custom size (string)', () => {
  const component = renderer.create(
    <Loader size={'78'} stroke={'6'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Loader renders correctly with custom size (number)', () => {
  const component = renderer.create(
    <Loader size={'20'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Loader renders correctly with custom colors (named color)', () => {
  const component = renderer.create(
    <Loader color={'red'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Loader renders correctly with custom colors (short hex)', () => {
  const component = renderer.create(
    <Loader color={'#0f0'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Loader renders correctly with custom colors (rgb)', () => {
  const component = renderer.create(
    <Loader color={'rgb(0,0,255)'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
