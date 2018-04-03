import React from 'react';
import renderer from 'react-test-renderer';
import {mount} from 'enzyme';
import sinon from 'sinon';

import BannerNotifications from './index';

const noop = () => {};
const messages1 = [
  {
    type: 'message',
    message: 'this is a single message',
    id: '1',
  },
];
const messages4 = [
  {
    type: 'message',
    message: 'this is a message',
    id: '1',
  },
  {
    type: 'success',
    message: 'this is a success',
    id: '2',
  },
  {
    type: 'warning',
    message: 'this is a warning',
    id: '3',
  },
  {
    type: 'alert',
    message: 'this is an alert',
    id: '4',
  },
];

/* eslint-disable no-alert */
test('BannerNotifications renders correctly', () => {
  let component = renderer.create(
    <BannerNotifications messages={[]} onClose={noop} />,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <BannerNotifications messages={messages1} onClose={noop} />,
  );
  expect(component.toJSON()).toMatchSnapshot();

  component = renderer.create(
    <BannerNotifications messages={messages4} onClose={noop} />,
  );
  expect(component.toJSON()).toMatchSnapshot();
});

test('BannerNotifications onClose hander is invoked', () => {
  const mockOnClick = sinon.spy();
  const wrapper = mount(
    <BannerNotifications messages={messages1} onClose={mockOnClick} />
  );

  wrapper.find('.wds-banner-notification__close').simulate('click');
  expect(mockOnClick.withArgs('1').calledOnce).toBe(true);
});
