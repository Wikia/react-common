import React, { useContext, useCallback } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme/build';
import merge from 'lodash/merge';

import NotificationsDropdown from './NotificationsDropdown';

const defaultProps = {
    track: () => null,
};

const mockDefaultContext = { loadFirstPage: () => null, unreadCount: 0 };

function renderComponent(props) {
    const renderer = new ShallowRenderer();
    const computedProps = merge({}, defaultProps, props);

    renderer.render(<NotificationsDropdown {...computedProps} />);

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

test('NotificationsDropdown renders correctly with default props', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('NotificationsDropdown calls track and loadFirstPage onMouseEnter', () => {
    const loadFirstPageMock = jest.fn();
    const trackMock = jest.fn();
    useContext.mockImplementation(() => ({ ...mockDefaultContext, loadFirstPage: loadFirstPageMock }));
    useCallback.mockImplementation(callback => event => callback(event));
    const output = renderComponent({ track: trackMock });
    const wrapper = shallow(<div>{output}</div>);

    wrapper.find('Dropdown').props().onMouseEnter();

    expect(loadFirstPageMock).toBeCalledWith();
    expect(trackMock).toBeCalledWith(expect.any(Object));
});

test('NotificationsDropdown renders toggle correctly for unread counter greater than 0', () => {
    useContext.mockImplementation(() => ({ ...mockDefaultContext, unreadCount: 10 }));

    const output = renderComponent();
    const wrapper = shallow(<div>{output}</div>);
    const Toggle = wrapper.find('Dropdown').props().toggle(<div />);

    expect(shallow(Toggle)).toMatchSnapshot();
});

test('NotificationsDropdown renders toggle correctly for unread counter greater than 99', () => {
    useContext.mockImplementation(() => ({ ...mockDefaultContext, unreadCount: 120 }));

    const output = renderComponent();
    const wrapper = shallow(<div>{output}</div>);
    const Toggle = wrapper.find('Dropdown').props().toggle(<div />);

    expect(shallow(Toggle)).toMatchSnapshot();
});
