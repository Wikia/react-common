import React from 'react';
import renderer from 'react-test-renderer';
import merge from 'lodash/merge';

import LinkLogOut from './LinkLogOut';

const defaultProps = {
    link: {
        type: 'link-logout',
        href: 'https:\/\/www.wikia.com\/logout',
        title: {
            type: 'translatable-text',
            key: 'global-navigation-user-sign-out',
        },
        'param-name': 'returnto',
        'tracking-label': 'account.sign-out',
    },
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return renderer.create(<LinkLogOut {...computedProps} />);
}

test('LinkLogOut renders correctly with default params', () => {
    expect(renderComponent().toJSON()).toMatchSnapshot();
});

test('LinkLogOut renders correctly with additional className', () => {
    expect(renderComponent({ className: 'so-classy' }).toJSON()).toMatchSnapshot();
});
