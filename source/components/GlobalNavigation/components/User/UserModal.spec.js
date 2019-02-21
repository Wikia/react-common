import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import UserModal from './UserModal';

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
    track: () => null,
    isOpen: false,
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<UserModal {...computedProps} />);
}

test('UserModal renders correctly with default params', () => {
    expect(renderComponent()).toMatchSnapshot();
});


test('UserModal renders correctly with isOpen set as true', () => {
    expect(renderComponent({ isOpen: true })).toMatchSnapshot();
});
