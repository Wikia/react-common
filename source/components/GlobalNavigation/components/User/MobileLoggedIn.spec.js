import React, { useContext } from 'react';
import { shallow } from 'enzyme';
import ShallowRenderer from 'react-test-renderer/shallow';
import merge from 'lodash/merge';

import MobileLoggedIn from './MobileLoggedIn';

const defaultProps = {
    user: {
        avatar_url: 'https://fandomdesignsystem.com/images/FANDOM-Avatar.jpg',
        username: 'Ryba777',
        'tracking-label': 'account',
        items: [
            {
                type: 'link-text',
                title: {
                    type: 'translatable-text',
                    key: 'global-navigation-user-view-profile',
                },
                href: '//starwars.wikia.com/wiki/User:Ryba777',
                'tracking-label': 'account.profile',
            },
            {
                type: 'link-text',
                title: {
                    type: 'translatable-text',
                    key: 'global-navigation-user-my-talk',
                },
                href: '//starwars.wikia.com/wiki/User_talk:Ryba777',
                'tracking-label': 'account.talk',
            },
            {
                type: 'link-text',
                title: {
                    type: 'translatable-text',
                    key: 'global-navigation-user-my-preferences',
                },
                href: '//starwars.wikia.com/wiki/Special:Preferences',
                'tracking-label': 'account.preferences',
            },
            {
                type: 'link-text',
                title: {
                    type: 'translatable-text',
                    key: 'global-navigation-user-help',
                },
                href: '//community.wikia.com/wiki/Help:Contents',
                'tracking-label': 'account.help',
            },
            {
                type: 'link-logout',
                href: 'https://www.wikia.com/logout',
                title: {
                    type: 'translatable-text',
                    key: 'global-navigation-user-sign-out',
                },
                'param-name': 'returnto',
                'tracking-label': 'account.sign-out',
            },
        ],
    },
    openModal: () => null,
    track: () => null,
    isOpen: false,
    header: 'some-label',
};

function renderComponent(props) {
    const renderer = new ShallowRenderer();
    const computedProps = merge({}, defaultProps, props);

    renderer.render(<MobileLoggedIn {...computedProps} />);

    return renderer.getRenderOutput();
}

// TODO: remove mocks when enzyme/react-test-renderer will fully support hooks
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(() => ({ unreadCount: 0 })),
}));

/* eslint-disable-next-line jest/no-hooks */
beforeEach(() => {
    jest.resetModules();
});

test('MobileLoggedIn renders correctly with unread counter', () => {
    useContext.mockImplementation(() => ({ unreadCount: 1 }));

    expect(renderComponent()).toMatchSnapshot();
});

test('MobileLoggedIn renders correctly without unread counter', () => {
    useContext.mockImplementation(() => ({ unreadCount: 0 }));

    expect(renderComponent()).toMatchSnapshot();
});

test('MobileLoggedIn renders correctly with over 99 notifications in counter', () => {
    useContext.mockImplementation(() => ({ unreadCount: 120 }));

    expect(renderComponent()).toMatchSnapshot();
});

test('MobileLoggedIn renders correctly with isOpen passed as true', () => {
    expect(renderComponent({ isOpen: true })).toMatchSnapshot();
});

test('MobileLoggedIn calls openModal onClick', () => {
    const openModalSpy = jest.fn();
    const output = renderComponent({ openModal: openModalSpy });
    const wrapper = shallow(<div>{output}</div>);

    wrapper.find('Button').props().onClick();

    expect(openModalSpy).toBeCalledWith('user');
});
