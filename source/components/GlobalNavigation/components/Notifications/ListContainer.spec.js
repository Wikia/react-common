import React, { useContext } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import merge from 'lodash/merge';

import ListContainer from './ListContainer';

const defaultProps = {
    track: () => null,
};

const mockDefaultContext = { unreadCount: 0, notifications: [], isLoading: false };

function renderComponent(props) {
    const renderer = new ShallowRenderer();
    const computedProps = merge({}, defaultProps, props);

    renderer.render(<ListContainer {...computedProps} />);

    return renderer.getRenderOutput();
}

// TODO: remove mocks when enzyme/react-test-renderer will fully support hooks
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(() => mockDefaultContext),
}));

/* eslint-disable-next-line jest/no-hooks */
beforeEach(() => {
    jest.resetModules();
});

test('ListContainer renders correctly with default props', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('ListContainer renders correctly with unread counter and custom header', () => {
    useContext.mockImplementation(() => ({ ...mockDefaultContext, unreadCount: 10 }));

    expect(renderComponent({ header: 'blah' })).toMatchSnapshot();
});

test('ListContainer renders correctly with notifications', () => {
    useContext.mockImplementation(() => ({ ...mockDefaultContext, notifications: ['a', 'b'] }));

    expect(renderComponent()).toMatchSnapshot();
});

test('ListContainer renders correctly when isLoading is true', () => {
    useContext.mockImplementation(() => ({ ...mockDefaultContext, isLoading: true }));

    expect(renderComponent()).toMatchSnapshot();
});
