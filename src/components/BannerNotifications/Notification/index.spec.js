import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import sinon from 'sinon';

import Notification from './index';

const noop = () => {};

/* eslint-disable no-alert */
test('Notification renders correctly', () => {
  let component = renderer.create(
    <Notification type={'message'} message={'lorem ipsum - messge'} onClose={noop} />,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <Notification type={'success'} message={'lorem ipsum - success'} onClose={noop} />,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <Notification type={'warning'} message={'lorem ipsum - warning'} onClose={noop} />,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <Notification type={'alert'} message={'lorem ipsum - alert'} onClose={noop} />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('Notification onClose hander is invoked', () => {
  const mockOnClick = sinon.spy();
  const wrapper = shallow(
    <Notification type={'message'} message={'lorem ipsum - messge'} onClose={mockOnClick} />
  );

  wrapper.find('.wds-banner-notification__close').simulate('click');

  expect(mockOnClick.calledOnce).toBe(true);
});
