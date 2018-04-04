import React from 'react';
import renderer from 'react-test-renderer';

import VideoPlayIcon from './index';

test('VideoPlayIcon renders correctly with default values', () => {
  const component = renderer.create(
    <VideoPlayIcon />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('VideoPlayIcon renders correctly with custom size (string, px)', () => {
  const component = renderer.create(
    <VideoPlayIcon size={'35px'} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('VideoPlayIcon renders correctly with custom size (number)', () => {
  const component = renderer.create(
    <VideoPlayIcon size={20} />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
