import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';

import Avatar from './NewAvatar';

// eslint-disable-next-line jest/no-hooks
beforeEach(() => {
    // Mock `fetch`
    const fetchResponse = { value: 'avatar_url' };
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => fetchResponse, value: 'avatar_url' }));
    // Mock `Response.json()`
//    jest.spyOn(Object.prototype, 'json').mockImplementation(obj => obj);
});

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

test('Avatar renders with link builder', () => {
    const component = mount(<Avatar linkBuilder={avatarImage => <div>{avatarImage}</div>} />);
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

test('Avatar image is fetched when given userId prop', () => {
    const userId = 123;
    const props = {
        userId,
    };
    const wrapper = mount(<Avatar {...props} />);
    expect(window.fetch).toBeCalledWith(`https://services.wikia.com/user-attribute/user/${userId}/attr/avatar`);
    expect(wrapper.state('imageSrc')).toBe('avatar_url');
});
