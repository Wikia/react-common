import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import UserLoggedIn from './UserLoggedIn';

const defaultProps = {
    data: {
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
            {
                type: 'link-mock',
                href: 'https://www.wikia.com/mock',
                title: {
                    type: 'translatable-text',
                    key: 'global-navigation-user-sign-out',
                },
                'param-name': 'mock-param',
                'tracking-label': 'account.mock-out',
            },
        ],
    },
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<UserLoggedIn {...computedProps} />);
}

test('UserLoggedIn renders correctly', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('UserLoggedIn renders toggle correctly', () => {
    const wrapper = renderComponent();
    const Toggle = wrapper.find('Dropdown').props().toggle(<div />);

    expect(shallow(Toggle)).toMatchSnapshot();
});
