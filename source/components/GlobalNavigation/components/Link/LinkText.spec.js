import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import LinkText from './LinkText';

jest.mock('react-i18next', () => ({
    useTranslation: () => [value => value],
}));

const defaultProps = {
    link: {
        type: 'link-text',
        title: {
            type: 'translatable-text',
            key: 'global-navigation-wikis-community-central',
        },
        href: '//community.wikia.com/wiki/Community_Central',
        'tracking-label': 'link.community-central',
    },
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<LinkText {...computedProps} />);
}

test('LinkText renders correctly with default params', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('LinkText renders correctly with isStandaloneLink flag', () => {
    expect(renderComponent({ isStandaloneLink: true })).toMatchSnapshot();
});
