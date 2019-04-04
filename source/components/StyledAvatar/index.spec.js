import { mount } from 'enzyme';
import React from 'react';
import sinon from 'sinon';
import wait from 'waait';

import StyledAvatar from './index';

const origFetch = global.fetch;

// eslint-disable-next-line jest/no-hooks
beforeAll(() => {
    // Mock `fetch`
    const fetchResponse = { value: 'avatar_url' };
    global.fetch = jest.fn().mockImplementation(() => Promise.resolve({ json: () => fetchResponse, value: 'avatar_url' }));
});

// eslint-disable-next-line jest/no-hooks
afterAll(() => {
    global.fetch = origFetch;
});

test('Avatar renders with default props', () => {
    const component = mount(<StyledAvatar />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders with size 30px', () => {
    const component = mount(<StyledAvatar size="30" badge="sysop" />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders with size >= 48px', () => {
    const component = mount(<StyledAvatar size="50" badge="sysop" />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders with size >= 120px', () => {
    const component = mount(<StyledAvatar size="124" />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders with props', () => {
    const props = {
        alt: 'alt',
        badge: 'sysop',
        className: 'class-name',
        href: 'href',
        src: 'src',
        title: 'title',
    };
    const component = mount(<StyledAvatar {...props} />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders with link builder', () => {
    const component = mount(<StyledAvatar linkBuilder={avatarImage => <div>{avatarImage}</div>} />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders with badge', () => {
    const props = {
        badge: 'sysop',
    };
    const component = mount(<StyledAvatar {...props} />);
    expect(component).toMatchSnapshot();
});

test('Avatar renders when incorrect badgePermission is set', () => {
    // silencing Warning: Failed prop type: Invalid prop `badge` of value `someIncorrectBadgePermission` supplied to `Avatar`, expected one of ["admin","content-moderator","discussion-moderator","global-discussions-moderator","helper","staff","vstf"]
    const consoleStub = sinon.stub(console, 'error');
    const props = {
        badge: 'someIncorrectBadgePermission',
    };
    const component = mount(<StyledAvatar {...props} />);
    consoleStub.restore();
    expect(component).toMatchSnapshot();
});

test('Avatar image is fetched when given userId prop', async () => {
    const userId = 123;
    const props = {
        userId,
    };
    const wrapper = mount(<StyledAvatar {...props} />);
    expect(window.fetch).toBeCalledWith(`https://services.wikia.com/user-attribute/user/${userId}/attr/avatar`);

    // wait 0ms (resolve promise in fetch in componentDidMount)
    await wait(0);

    expect(wrapper.state('imageSrc')).toBe('avatar_url');
});

test('Avatar image is fetched when given userId prop (and href)', async () => {
    const userId = 123;
    const props = {
        userId,
        href: 'http://example.com',
    };
    const wrapper = mount(<StyledAvatar {...props} />);
    expect(window.fetch).toBeCalledWith(`https://services.wikia.com/user-attribute/user/${userId}/attr/avatar`);

    // wait 0ms (resolve promise in fetch in componentDidMount)
    await wait(0);

    expect(wrapper.state('imageSrc')).toBe('avatar_url');
});
