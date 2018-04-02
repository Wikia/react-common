import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Button from './index';

/* eslint-disable no-alert */

test('Button renders correctly with default values', () => {
  const component = renderer.create(
    <Button />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Button renders correctly with a callback and a label', () => {
  const component = renderer.create(
    <Button onClick={() => {}}>a button</Button>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Button renders correctly with a children', () => {
  const component = renderer.create(
    <Button>
      <strong>bold</strong>&nbsp;text
    </Button>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Button triggers onClick event', () => {
  const mockOnClick = sinon.spy();
  const wrapper = shallow(
    <Button onClick={mockOnClick}>clickable</Button>
  );

  wrapper.find('button').simulate('click');

  expect(mockOnClick.calledOnce).toBe(true);
});

test('Button renders correctly with custom types values', () => {
  let component = renderer.create(
    <Button disabled>disabled</Button>,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <Button secondary>secondary</Button>,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <Button text>text</Button>,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <Button square>&hellip;</Button>,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <Button squished>squished</Button>,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <Button secondary squished>secondary squished</Button>,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <Button stretched>stretched</Button>,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <Button className="custom-class">with custom class name</Button>,
  );
  expect(component.toJSON()).toMatchSnapshot();
});
