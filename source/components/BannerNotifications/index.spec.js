import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';

import BannerNotifications from './index';

const noop = () => {};
const messages1 = [
    {
        type: 'message',
        text: 'this is a single message',
        id: '1',
    },
];
const messages4 = [
    {
        type: 'message',
        text: 'this is a message',
        id: '1',
    },
    {
        type: 'success',
        text: 'this is a success',
        id: '2',
    },
    {
        type: 'warning',
        text: 'this is a warning',
        id: '3',
    },
    {
        type: 'alert',
        text: 'this is a permanent alert',
        id: '4',
        permanent: true,
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

    wrapper.find('.wds-banner-notification__close').at(0).simulate('click');
    expect(mockOnClick.withArgs('1').calledOnce).toBe(true);
});
