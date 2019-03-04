import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import CommunityBar from './CommunityBar';

const defaultProps = {
    siteName: {
        title: { type: 'text', value: 'Xkxd Wiki' },
        mobile_title: { type: 'text', value: 'Xkxd Wiki' },
        href: '//xkxd.fandom.com',
        tracking_label: 'sitename',
    },
    model: {
        'tracking-label': 'track-logo',
    },
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<CommunityBar {...computedProps} />);
}

test('CommunityBar renders correctly with default props', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('CommunityBar renders correctly when mobileTitle is empty', () => {
    expect(renderComponent({ siteName: { mobile_title: null } })).toMatchSnapshot();
});
