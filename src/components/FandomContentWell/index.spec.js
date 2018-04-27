import React from 'react';
import renderer from 'react-test-renderer';

import FandomContentWell from './index';

test('FandomContentWell renders correctly with default values', () => {
  const component = renderer.create(
    <FandomContentWell />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomContentWell renders correctly with extra class name', () => {
  const component = renderer.create(
    <FandomContentWell className="extra-class-name" />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('FandomContentWell renders correctly with a children', () => {
  const component = renderer.create(
    <FandomContentWell>
      <strong>bold</strong>&nbsp;text
    </FandomContentWell>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
