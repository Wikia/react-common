import React, { useContext, useCallback } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import { notificationTypes } from '../../models/notificationTypes';

import CardLink from './CardLink';

const defaultProps = {
    track: () => null,
    model: {
        communityId: '1619010',
        communityName: 'Xkxd Wiki',
        isUnread: false,
        latestActors: [{}],
        latestEventUri: 'http://xkxd.wikia.com/d/p/3100000000000001096/r/3086787452863005635',
        snippet: 'snippet',
        timestamp: 1550663179,
        title: 'MOAR LIKES',
        type: notificationTypes.discussionReply,
        totalUniqueActors: 1,
        uri: 'http://xkxd.wikia.com/d/p/3100000000000001096',
    },
    children: <div>IMMA CHILD</div>,
};

const mockDefaultContext = { markAsRead: () => Promise.resolve(), goToDestination: () => null };

function renderComponent(props) {
    const renderer = new ShallowRenderer();
    const computedProps = merge({}, defaultProps, props);

    renderer.render(<CardLink {...computedProps} />);

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

test('CardLink renders correctly with default props', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('CardLink calls track and goToDestinationMock onClick when notification has inUnread set to false', () => {
    const markAsReadMock = jest.fn().mockResolvedValue();
    const preventDefaultMock = jest.fn();
    const trackMock = jest.fn();
    const goToDestinationMock = jest.fn();
    const latestEventUriMock = 'some-latest-mock';
    useContext.mockImplementation(
        () => ({ ...mockDefaultContext, markAsRead: markAsReadMock, goToDestination: goToDestinationMock }),
    );
    useCallback.mockImplementation(callback => event => callback(event));
    const output = renderComponent({ track: trackMock, model: { latestEventUri: latestEventUriMock } });
    const wrapper = shallow(<div>{output}</div>);

    wrapper.find('a').props().onClick({ preventDefault: preventDefaultMock });

    expect(preventDefaultMock).toBeCalledWith();
    expect(trackMock).toBeCalledWith(expect.any(Object));
    expect(goToDestinationMock).toBeCalledWith(latestEventUriMock);
    expect(markAsReadMock).not.toBeCalled();
});

test('CardLink calls track, markAsRead and goToDestinationMock onClick when notification has inUnread set to true', () => {
    const markAsReadMock = jest.fn().mockResolvedValue();
    const preventDefaultMock = jest.fn();
    const trackMock = jest.fn();
    const goToDestinationMock = jest.fn();
    const uriMock = 'some-mock';
    const latestEventUriMock = 'some-latest-mock';
    useContext.mockImplementation(
        () => ({ ...mockDefaultContext, markAsRead: markAsReadMock, goToDestination: goToDestinationMock }),
    );
    useCallback.mockImplementation(callback => event => callback(event));
    const output = renderComponent({
        track: trackMock,
        model: { isUnread: true, uri: uriMock, latestEventUri: latestEventUriMock },
    });
    const wrapper = shallow(<div>{output}</div>);

    wrapper.find('a').props().onClick({ preventDefault: preventDefaultMock });

    expect(preventDefaultMock).toBeCalledWith();
    expect(trackMock).toBeCalledWith(expect.any(Object));
    expect(markAsReadMock).toBeCalledWith(uriMock, true);
});
