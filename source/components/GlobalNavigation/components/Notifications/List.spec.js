import React, { useContext } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import merge from 'lodash/merge';

import List from './List';

const defaultProps = {
    track: () => null,
};

const mockDefaultContext = { loadNextPage: () => null, notifications: [{ title: 'blah' }], isLoading: false };

function renderComponent(props) {
    const renderer = new ShallowRenderer();
    const computedProps = merge({}, defaultProps, props);

    renderer.render(<List {...computedProps} />);

    return renderer.getRenderOutput();
}

// TODO: remove mocks when enzyme/react-test-renderer will fully support hooks
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(() => mockDefaultContext),
}));

jest.mock('../../hooks/useLazyLoad', () => () => 'mock-ref');

/* eslint-disable-next-line jest/no-hooks */
beforeEach(() => {
    jest.resetModules();
});

test('List renders correctly with default props', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('List renders correctly with isLoading set to true', () => {
    useContext.mockImplementation(() => ({ ...mockDefaultContext, isLoading: true }));

    expect(renderComponent()).toMatchSnapshot();
});
