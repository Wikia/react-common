import React from 'react'
import { shallow } from 'enzyme';
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

    return shallow(<LinkLogOut {...computedProps} />);
}

test('LinkLogOut renders correctly with default params', () => {
    expect(renderComponent().dive()).toMatchSnapshot();
});

test('LinkLogOut renders correctly with additional className', () => {
    expect(renderComponent({ className: 'so-classy' }).dive()).toMatchSnapshot();
});
