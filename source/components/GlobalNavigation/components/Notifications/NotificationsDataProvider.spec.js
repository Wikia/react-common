import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import NotificationsDataProvider from './NotificationsDataProvider';

const defaultProps = {
    children: <div>HAI SANTA!</div>,
    serviceUrl: 'some://valid.url',
};

function renderComponent(props, options = {}) {
    const computedProps = merge({}, defaultProps, props);

    // disableLifecycleMethods => we don't want to call loadUnreadNotificationCount on each test
    return shallow(<NotificationsDataProvider {...computedProps} />, { disableLifecycleMethods: true, ...options });
}

global.console.error = () => null;

jest.mock('../../models/Notification', () => ({
    buildFromJson: value => value,
    build: value => value,
}));

describe('render', () => {
    test('NotificationsDataProvider renders correctly with default props', () => {
        expect(renderComponent()).toMatchSnapshot();
    });
});

describe('componentDidMount', () => {
    test('sets isMounted flag properly and calls loadUnreadNotificationCount', () => {
        const loadUnreadMock = jest.fn();
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.loadUnreadNotificationCount = loadUnreadMock;

        instance.componentDidMount();

        expect(instance.isMounted).toBe(true);
        expect(loadUnreadMock).toBeCalledWith();
    });
});

describe('componentWillUnmount', () => {
    test('sets isMounted flag properly', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        wrapper.unmount();

        expect(instance.isMounted).toBe(false);
    });
});

describe('getNextPageLink', () => {
    test('returns value if it exists', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();
        const mockValue = 'mockValue';

        expect(instance.getNextPageLink({ _links: { next: mockValue } })).toBe(mockValue);
    });

    test('returns null if value does not exist', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        expect(instance.getNextPageLink({})).toBe(null);
    });
});

describe('getUnreadCount', () => {
    test('returns proper number', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();
        const notificationsMock = [{ isUnread: false, uri: 'blah' }, { isUnread: true, uri: 'uhuhu' }];

        expect(instance.getUnreadCount(notificationsMock)).toBe(1);
    });
});

describe('goToDestination', () => {
    test('sets href on window.location', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();
        const urlMock = 'some://valid.url';

        // @see https://github.com/facebook/jest/issues/890
        delete global.window.location;
        global.window.location = { href: 'test.value' };

        instance.goToDestination(urlMock);

        expect(global.location.href).toBe(urlMock);
    });
});

describe('loadFirstPage', () => {
    test('calls loadPage', () => {
        const loadPageMock = jest.fn();
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.loadPage = loadPageMock;

        instance.loadFirstPage();

        expect(loadPageMock).toBeCalledWith(expect.any(String));
    });

    test('does not call loadPage when nextPage in state is not null', () => {
        const loadPageMock = jest.fn();
        const wrapper = renderComponent().setState({ nextPage: 'valid.url' });
        const instance = wrapper.instance();

        instance.loadPage = loadPageMock;

        instance.loadFirstPage();

        expect(loadPageMock).not.toBeCalled();
    });

    test('does not call loadPage when firstPageLoaded in state is true', () => {
        const loadPageMock = jest.fn();
        const wrapper = renderComponent().setState({ firstPageLoaded: true });
        const instance = wrapper.instance();

        instance.loadPage = loadPageMock;

        instance.loadFirstPage();

        expect(loadPageMock).not.toBeCalled();
    });
});

describe('loadNextPage', () => {
    test('calls loadPage when nextPage in state is not null', () => {
        const loadPageMock = jest.fn();
        const nextPageMock = 'valid.url.bro';
        const wrapper = renderComponent().setState({ nextPage: nextPageMock });
        const instance = wrapper.instance();

        instance.loadPage = loadPageMock;

        instance.loadNextPage();

        expect(loadPageMock).toBeCalledWith(nextPageMock);
    });

    test('does not call loadPage when nextPage in state is null', () => {
        const loadPageMock = jest.fn();
        const wrapper = renderComponent().setState();
        const instance = wrapper.instance();

        instance.loadPage = loadPageMock;

        instance.loadNextPage();

        expect(loadPageMock).not.toBeCalled();
    });
});

describe('loadPage', () => {
    test('updates state and calls api when isLoading is false, updates state on resolve', async () => {
        expect.assertions(5);

        const pageLinkMock = 'valid.url.bro';
        const notificationsMock = [{ isUnread: false, uri: 'blah' }, { isUnread: true, uri: 'uhuhu' }];
        const responseMock = { notifications: notificationsMock };
        const updateStateMock = jest.fn();
        const mapNotificationsMock = jest.fn(value => value);
        const getNextPageLinkMock = jest.fn(value => value);
        const loadPageMock = jest.fn().mockResolvedValue(responseMock);
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.mapNotifications = mapNotificationsMock;
        instance.updateState = updateStateMock;
        instance.getNextPageLink = getNextPageLinkMock;
        instance.api = { loadPage: loadPageMock };

        await instance.loadPage(pageLinkMock);

        expect(updateStateMock.mock.calls[0]).toEqual([{
            isLoading: true,
            firstPageLoaded: true,
        }]);
        expect(updateStateMock.mock.calls[1]).toEqual([{
            notifications: expect.any(Array),
            nextPage: responseMock,
            isLoading: false,
        }]);
        expect(loadPageMock).toBeCalledWith(pageLinkMock);
        expect(getNextPageLinkMock).toBeCalledWith(responseMock);
        expect(mapNotificationsMock).toBeCalledWith(notificationsMock);
    });

    test('updates state and calls api when isLoading is false, updates state on reject', async () => {
        expect.assertions(3);

        const updateStateMock = jest.fn();
        const loadPageMock = jest.fn().mockRejectedValue("blah");
        const pageLinkMock = 'valid.url.bro';
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.updateState = updateStateMock;
        instance.api = { loadPage: loadPageMock };

        await instance.loadPage(pageLinkMock);

        expect(updateStateMock.mock.calls[0]).toEqual([{
            isLoading: true,
            firstPageLoaded: true,
        }]);
        expect(updateStateMock.mock.calls[1]).toEqual([{
            isLoading: false,
        }]);
        expect(loadPageMock).toBeCalledWith(pageLinkMock);
    });

    test('does not update state and call api when isLoading is true', () => {
        const updateStateMock = jest.fn();
        const pageLinkMock = 'valid.url.bro';
        const wrapper = renderComponent().setState({ isLoading: true });
        const instance = wrapper.instance();

        instance.updateState = updateStateMock;

        instance.loadPage(pageLinkMock);

        expect(updateStateMock).not.toBeCalled();
    });
});

describe('loadUnreadNotificationCount', () => {
    test('updates state on resolve', async () => {
        expect.assertions(2);

        const responseMock = { unreadCount: 10 };
        const updateStateMock = jest.fn();
        const loadUnreadNotificationCountMock = jest.fn().mockResolvedValue(responseMock);
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.updateState = updateStateMock;
        instance.api = { loadUnreadNotificationCount: loadUnreadNotificationCountMock };

        await instance.loadUnreadNotificationCount();

        expect(loadUnreadNotificationCountMock).toBeCalledWith();
        expect(updateStateMock.mock.calls[0]).toEqual([{ unreadCount: 10 }]);
    });

    test('updates state on reject', async () => {
        expect.assertions(2);

        const updateStateMock = jest.fn();
        const loadUnreadNotificationCountMock = jest.fn().mockRejectedValue("blah");
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.updateState = updateStateMock;
        instance.api = { loadUnreadNotificationCount: loadUnreadNotificationCountMock };

        await instance.loadUnreadNotificationCount();

        expect(loadUnreadNotificationCountMock).toBeCalledWith();
        expect(updateStateMock.mock.calls[0]).toEqual([{ unreadCount: 0 }]);
    });
});

describe('markAsRead', () => {
    test('updates state on resolve', async () => {
        expect.assertions(4);

        const uriMock = 'some.valid.uri';
        const updateUnreadStatusValueMock = 'updateUnreadStatusValueMock';
        const getUnreadCountValueMock = 'getUnreadCountValueMock';
        const updateStateMock = jest.fn();
        const markAsReadMock = jest.fn().mockResolvedValue();
        const updateUnreadStatusMock = jest.fn().mockReturnValue(updateUnreadStatusValueMock);
        const getUnreadCountMock = jest.fn().mockReturnValue(getUnreadCountValueMock);
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.updateState = updateStateMock;
        instance.updateUnreadStatus = updateUnreadStatusMock;
        instance.getUnreadCount = getUnreadCountMock;
        instance.api = { markAsRead: markAsReadMock };

        await instance.markAsRead(uriMock, true);

        expect(markAsReadMock).toBeCalledWith(uriMock, true);
        expect(updateUnreadStatusMock).toBeCalledWith(uriMock);
        expect(getUnreadCountMock).toBeCalledWith(updateUnreadStatusValueMock);
        expect(updateStateMock.mock.calls[0]).toEqual([{
            notifications: updateUnreadStatusValueMock,
            unreadCount: getUnreadCountValueMock,
        }]);
    });
});

describe('markAllAsRead', () => {
    test('updates state on resolve', async () => {
        expect.assertions(3);

        const notificationsMock = [{ isUnread: false, uri: 'blah' }, { isUnread: true, uri: 'uhuhu' }];
        const updateUnreadStatusValueMock = 'updateUnreadStatusValueMock';
        const updateStateMock = jest.fn();
        const markAllAsReadMock = jest.fn().mockResolvedValue();
        const updateUnreadStatusMock = jest.fn().mockReturnValue(updateUnreadStatusValueMock);
        const wrapper = renderComponent().setState({ notifications: notificationsMock });
        const instance = wrapper.instance();

        instance.updateState = updateStateMock;
        instance.updateUnreadStatus = updateUnreadStatusMock;
        instance.api = { markAllAsRead: markAllAsReadMock };

        await instance.markAllAsRead();

        expect(markAllAsReadMock).toBeCalledWith(notificationsMock);
        expect(updateUnreadStatusMock).toBeCalledWith();
        expect(updateStateMock.mock.calls[0]).toEqual([{
            notifications: updateUnreadStatusValueMock,
            unreadCount: 0,
        }]);
    });
});

describe('mapNotifications', () => {
    test('maps given notifications', () => {
        const notificationsMock = [{ isUnread: false, uri: 'blah' }, { isUnread: true, uri: 'uhuhu' }];
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        expect(instance.mapNotifications(notificationsMock)).toEqual(notificationsMock);
    });

    test('returns empty array when no value is given', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        expect(instance.mapNotifications()).toEqual([]);
    });
});

describe('updateUnreadStatus', () => {
    test('updates given notification by url', () => {
        const notificationsMock = [{ isUnread: false, uri: 'blah' }, { isUnread: true, uri: 'uhuhu' }];
        const expected = [{ isUnread: false, uri: 'blah' }, { isUnread: false, uri: 'uhuhu' }];
        const wrapper = renderComponent().setState({ notifications: notificationsMock });
        const instance = wrapper.instance();

        expect(instance.updateUnreadStatus('uhuhu')).toEqual(expected);
    });
});

describe('updateState', () => {
    test('does not call set state when unmounted', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.isMounted = false;

        instance.updateState({ unreadCount: 10 });

        expect(wrapper.state('unreadCount')).toEqual(0);
    });

    test('calls set state when mounted', () => {
        const wrapper = renderComponent();
        const instance = wrapper.instance();

        instance.isMounted = true;

        instance.updateState({ unreadCount: 10 });

        expect(wrapper.state('unreadCount')).toEqual(10);
    });
});
