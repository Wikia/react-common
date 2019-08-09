import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import MobileUser from './MobileUser';

const defaultProps = {
    model: {
        notifications: {
            header: {
                title: {
                    key: 'some-label',
                },
            },
        },
    },
    openModal: () => null,
    track: () => null,
    isOpen: false,
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<MobileUser {...computedProps} />);
}

test('MobileUser renders correctly for user', () => {
    expect(renderComponent({ model: { user: { mockedUser: 'mocked-user-value' } } })).toMatchSnapshot();
});

test('MobileUser renders correctly for anon', () => {
    expect(renderComponent({ model: { anon: { mockedAnon: 'mocked-anon-value' } } })).toMatchSnapshot();
});

test('MobileUser returns null when no data is provided', () => {
    expect(renderComponent()).toMatchSnapshot();
});
