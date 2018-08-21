import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Icon from './index';

test('Icon component renders', () => {
  const component = renderer.create(
    <Icon name="share" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Icon component renders with small icon', () => {
  const component = renderer.create(
    <Icon name="arrow-small" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Icon component renders with a tiny icon', () => {
  const component = renderer.create(
    <Icon name="cross-tiny" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Icon component renders with a tiny icon (via attribute)', () => {
  const component = renderer.create(
    <Icon name="cross" tiny />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Icon component renders with an additional CSS class', () => {
  const component = renderer.create(
    <Icon name="trash" className="trashy-icon" />
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Icon component renders with a small icon (via attribute)', () => {
  const component = renderer.create(
    <Icon name="cross" small />
  );
  expect(component.toJSON()).toMatchSnapshot();
});
