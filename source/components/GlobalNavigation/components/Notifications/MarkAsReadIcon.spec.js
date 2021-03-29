import React, { useContext, useCallback } from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme/build';
import merge from 'lodash/merge';

import { notificationTypes } from '../../models/notificationTypes';

import MarkAsReadIcon from './MarkAsReadIcon';

const defaultProps = {
    model: {
        type: notificationTypes.discussionReply,
        isUnread: true,
        uri: 'some://valid.url',
    },
    track: () => null,
};

const mockDefaultContext = { markAsRead: () => null };

function renderComponent(props) {
    const renderer = new ShallowRenderer();
    const computedProps = merge({}, defaultProps, props);

    renderer.render(<MarkAsReadIcon {...computedProps} />);

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

test('MarkAsReadIcon renders correctly for discussion-reply', () => {
    expect(renderComponent()).toMatchSnapshot();
});

test('MarkAsReadIcon renders correctly for announcement', () => {
    expect(renderComponent({ model: { type: notificationTypes.announcement } })).toMatchSnapshot();
});

test('MarkAsReadIcon renders correctly for other types', () => {
    expect(renderComponent({ model: { type: notificationTypes.discussionUpvoteReply } })).toMatchSnapshot();
});

test('MarkAsReadIcon renders correctly for article-comment-reply', () => {
    expect(renderComponent({ model: { type: notificationTypes.articleCommentReply } })).toMatchSnapshot();
});

test('MarkAsReadIcon renders correctly for article-comment-at-mention', () => {
    expect(renderComponent({ model: { type: notificationTypes.articleCommentAtMention } })).toMatchSnapshot();
});

test('MarkAsReadIcon renders correctly for article-comment-reply-at-mention', () => {
    expect(renderComponent({ model: { type: notificationTypes.articleCommentReplyAtMention } })).toMatchSnapshot();
});

test('MarkAsReadIcon renders correctly for talk-page-message', () => {
    expect(renderComponent({ model: { type: notificationTypes.talkPageMessage } })).toMatchSnapshot();
});

test('MarkAsReadIcon renders correctly for message-wall-thread', () => {
    expect(renderComponent({ model: { type: notificationTypes.messageWallThread } })).toMatchSnapshot();
});

test('MarkAsReadIcon renders correctly for message-wall-post', () => {
    expect(renderComponent({ model: { type: notificationTypes.messageWallPost } })).toMatchSnapshot();
});

test('MarkAsReadIcon calls track and markAsRead on click when isUnread is true', () => {
    const markAsReadMock = jest.fn();
    const trackMock = jest.fn();
    const uriMock = 'some.url';
    const eventMock = { preventDefault: jest.fn(), stopPropagation: jest.fn() };
    useContext.mockImplementation(() => ({ ...mockDefaultContext, markAsRead: markAsReadMock }));
    useCallback.mockImplementation(callback => event => callback(event));
    const output = renderComponent({ model: { uri: uriMock }, track: trackMock });
    const wrapper = shallow(<div>{output}</div>);

    wrapper.find('.wds-notification-card__icon-wrapper').props().onClick(eventMock);

    expect(eventMock.preventDefault).toBeCalledWith();
    expect(eventMock.stopPropagation).toBeCalledWith();
    expect(markAsReadMock).toBeCalledWith(uriMock);
    expect(trackMock).toBeCalledWith(expect.any(Object));
});

test('MarkAsReadIcon does not call track and markAsRead on click when isUnread is false', () => {
    const markAsReadMock = jest.fn();
    const trackMock = jest.fn();
    const uriMock = 'some.url';
    const eventMock = { preventDefault: jest.fn(), stopPropagation: jest.fn() };
    useContext.mockImplementation(() => ({ ...mockDefaultContext, markAsRead: markAsReadMock }));
    useCallback.mockImplementation(callback => event => callback(event));
    const output = renderComponent({ model: { uri: uriMock, isUnread: false }, track: trackMock });
    const wrapper = shallow(<div>{output}</div>);

    wrapper.find('.wds-notification-card__icon-wrapper').props().onClick(eventMock);

    expect(eventMock.preventDefault).toBeCalledWith();
    expect(eventMock.stopPropagation).toBeCalledWith();
    expect(markAsReadMock).not.toBeCalled();
    expect(trackMock).not.toBeCalled();
});
