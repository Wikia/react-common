import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import LinkGroup from './LinkGroup';

const defaultProps = {
    link: {
        type: 'link-group',
        title: {
            type: 'translatable-text',
            key: 'global-navigation-wikis-header',
        },
        'tracking-label': 'link.wikis',
        items: [{
            type: 'link-text',
            title: {
                type: 'translatable-text',
                key: 'global-navigation-wikis-explore',
            },
            href: '\/\/fandom.wikia.com\/explore',
            'tracking-label': 'link.explore',
        }, {
            type: 'link-text',
            title: {
                type: 'translatable-text',
                key: 'global-navigation-wikis-community-central',
            },
            href: '\/\/community.wikia.com\/wiki\/Community_Central',
            'tracking-label': 'link.community-central',
        }, {
            type: 'link-button',
            title: {
                type: 'translatable-text',
                key: 'global-navigation-create-wiki-link-start-wikia',
            },
            href: '\/\/www.wikia.com\/Special:CreateNewWiki',
            'tracking-label': 'link.start-a-wiki',
        }],
    },
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<LinkGroup {...computedProps} />);
}

test('LinkGroup renders correctly', () => {
    expect(renderComponent()).toMatchSnapshot();
});
