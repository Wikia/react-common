import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import User from './User';

const defaultProps = {
    data: {},
};

function renderComponent(props) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<User {...computedProps} />);
}

test('User renders correctly for user', () => {
    expect(renderComponent({ data: { user: { mockedUser: 'mocked-user-value' } } })).toMatchSnapshot();
});

test('User renders correctly for anon', () => {
    expect(renderComponent({ data: { anon: { mockedAnon: 'mocked-anon-value' } } })).toMatchSnapshot();
});

test('User returns null when no data is provided', () => {
    expect(renderComponent()).toMatchSnapshot();
});
