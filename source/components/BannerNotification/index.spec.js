import React from 'react';
import renderer from 'react-test-renderer';
import {
    mount,
} from 'enzyme';
import sinon from 'sinon';

import BannerNotification from './index';

const noop = () => {};

/* eslint-disable no-alert */
test('BannerNotification renders correctly', () => {
    let component = renderer.create(
        <BannerNotification type="message" text="lorem ipsum - messge" onClose={noop} />,
    );
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <BannerNotification type="success" text="lorem ipsum - success" onClose={noop} />,
    );
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <BannerNotification type="warning" text="lorem ipsum - warning" onClose={noop} />,
    );
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <BannerNotification type="alert" text="lorem ipsum - alert" onClose={noop} />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('BannerNotification renders correctly without action', () => {
    let component = renderer.create(
        <BannerNotification type="message" text="lorem ipsum - messge" />,
    );
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <BannerNotification type="success" text="lorem ipsum - success" />,
    );
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <BannerNotification type="warning" text="lorem ipsum - warning" />,
    );
    expect(component.toJSON()).toMatchSnapshot();

    component = renderer.create(
        <BannerNotification type="alert" text="lorem ipsum - alert" />,
    );
    expect(component.toJSON()).toMatchSnapshot();
});

test('BannerNotification onClose hander is invoked', () => {
    const mockOnClick = sinon.spy();
    const wrapper = mount(
        <BannerNotification type="message" text="lorem ipsum - messge" onClose={mockOnClick} />
    );

    wrapper.find('.wds-banner-notification__close').at(0).simulate('click');

    expect(mockOnClick.calledOnce).toBe(true);
});
