import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import Avatar from './index';

test('Avatar renders with default props', () => {
    const component = mount(<Avatar />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders with props', () => {
    const props = {
        alt: 'alt',
        badge: 'admin',
        className: 'class-name',
        href: 'href',
        src: 'src',
        title: 'title',
    };
    const component = mount(<Avatar {...props} />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders with badge', () => {
    const props = {
        badge: 'admin',
    };
    const component = mount(<Avatar {...props} />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders when incorrect badgePermission is set', () => {
    // silencing Warning: Failed prop type: Invalid prop `badge` of value `someIncorrectBadgePermission` supplied to `Avatar`, expected one of ["admin","content-moderator","discussion-moderator","global-discussions-moderator","helper","staff","vstf"]
    const consoleStub = sinon.stub(console, 'error');
    const props = {
        badge: 'someIncorrectBadgePermission',
    };
    const component = mount(<Avatar {...props} />);
    consoleStub.restore();
    expect(component).toMatchSnapshot();
});
