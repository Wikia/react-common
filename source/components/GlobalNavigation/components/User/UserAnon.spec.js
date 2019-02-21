import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import UserAnon from './UserAnon';

const defaultProps = {
    data: {
        signin: {
            type: 'link-signin',
            href: 'https://www.wikia.com/signin',
            title: {
                type: 'translatable-text',
                key: 'global-navigation-user-sign-in',
            },
            'param-name': 'redirectto',
            'tracking-label': 'account.sign-in',
        },
        register: {
            type: 'link-register',
            href: 'https://www.wikia.com/register',
            title: {
                type: 'translatable-text',
                key: 'global-navigation-user-register',
            },
            'param-name': 'register-param',
            'tracking-label': 'account.register',
        },
    },
};

jest.mock('../../hocs/withRedirectUrl', () => Component => props => (
    <Component {...props} getUrlWithRedirect={(href, param) => `${href} + ${param}`} />
));

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<UserAnon {...computedProps} />);
}

test('UserAnon renders correctly', () => {
    expect(renderComponent().dive()).toMatchSnapshot();
});

test('UserAnon renders toggle correctly', () => {
    const wrapper = renderComponent().dive();
    const Toggle = wrapper.find('Dropdown').props().toggle(<div />);

    expect(shallow(Toggle)).toMatchSnapshot();
});
