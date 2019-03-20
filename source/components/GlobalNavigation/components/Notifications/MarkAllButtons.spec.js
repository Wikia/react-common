import React, { useContext, useCallback } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme/build';
import merge from 'lodash/merge';

import MarkAllButton from './MarkAllButton';

const defaultProps = {
    header: '',
    track: () => null,
};

const mockDefaultContext = { markAllAsRead: () => null };

function renderComponent(props) {
    const renderer = new ShallowRenderer();
    const computedProps = merge({}, defaultProps, props);

    renderer.render(<MarkAllButton {...computedProps} />);

    return renderer.getRenderOutput();
}

// TODO: remove mocks when enzyme/react-test-renderer will fully support hooks
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useContext: jest.fn(() => mockDefaultContext),
    useCallback: jest.fn(),
}));

/* eslint-disable-next-line jest/no-hooks */
beforeEach(() => {
    jest.resetModules();
});

test('MarkAllButton renders correctly with default props', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('MarkAllButton renders correctly with non-empty header', () => {
    expect(renderComponent({ header: 'blah' })).toMatchSnapshot();
});

test('MarkAllButton calls track and markAllAsReadMock onClick', () => {
    const markAllAsReadMock = jest.fn();
    const trackMock = jest.fn();
    useContext.mockImplementation(() => ({ ...mockDefaultContext, markAllAsRead: markAllAsReadMock }));
    useCallback.mockImplementation(callback => event => callback(event));
    const output = renderComponent({ track: trackMock });
    const wrapper = shallow(<div>{output}</div>);

    wrapper.find('a').props().onClick();

    expect(markAllAsReadMock).toBeCalledWith();
    expect(trackMock).toBeCalledWith(expect.any(Object));
});
