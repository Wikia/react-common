import { mount } from 'enzyme';
import React from 'react';

import Avatar from './index';

test('Avatar renders', () => {
    const props = {
        alt: 'alt',
        badge: 'admin',
        href: 'href',
        src: 'src',
    };
    const component = mount(<Avatar {...props} />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders without href', () => {
    const props = {
        alt: 'alt',
        src: 'src',
    };
    const component = mount(<Avatar {...props} />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders without src', () => {
    const props = {
        alt: 'alt',
        href: 'href',
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
    const props = {
        badge: 'someIncorrectBadgePermission',
    };
    const component = mount(<Avatar {...props} />);
    expect(component).toMatchSnapshot();
});
