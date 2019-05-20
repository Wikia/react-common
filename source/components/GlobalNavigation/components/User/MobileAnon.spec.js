import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import MobileAnon from './MobileAnon';

const defaultProps = {
    model: {
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
    },
};

jest.mock('../../hocs/withRedirectUrl', () => Component => props => (
    <Component {...props} getUrlWithRedirect={(href, param) => `${href} + ${param}`} />
));

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<MobileAnon {...computedProps} />);
}

test('MobileAnon renders correctly', () => {
    expect(renderComponent().dive()).toMatchSnapshot();
});
