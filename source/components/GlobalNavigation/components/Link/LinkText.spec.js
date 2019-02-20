import React from 'react';
import renderer from 'react-test-renderer';
import merge from 'lodash/merge';

import LinkText from './LinkText';

const defaultProps = {
    link: {
        type: 'link-text',
        title: {
            type: 'translatable-text',
            key: 'global-navigation-wikis-community-central',
        },
        href: '\/\/community.wikia.com\/wiki\/Community_Central',
        'tracking-label': 'link.community-central',
    }
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return renderer.create(<LinkText {...computedProps} />);
}

test('LinkText renders correctly with default params', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
});

test('LinkText renders correctly with isStandaloneLink flag', () => {
    expect(renderComponent({ isStandaloneLink: true }).toJSON()).toMatchSnapshot();
});
