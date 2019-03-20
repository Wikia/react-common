import NotificationsApi from './NotificationsApi';

const serviceBaseUrlMock = 'some://valid.url/';

function build() {
    return NotificationsApi.build(serviceBaseUrlMock);
}

global.console.error = () => null;
global.console.warn = () => null;

test('NotificationsApi sets serviceBaseUrl on creation', () => {
    const api = build();

    expect(api.serviceBaseUrl).toBe(serviceBaseUrlMock);
});

test('NotificationsApi returns url for given service via getServiceUrl', () => {
    const api = build();
    const serviceNameMock = 'discussions';
    const urlMock = '/threads';

    expect(api.getServiceUrl(serviceNameMock, urlMock)).toBe(`${serviceBaseUrlMock}${serviceNameMock}${urlMock}`);
});

describe('getNotificationServiceUrl', () => {
    test('calls getServiceUrl', () => {
        const api = build();
        const urlMock = '/get';
        const getServiceUrlMock = jest.fn();

        api.getServiceUrl = getServiceUrlMock;

        api.getNotificationServiceUrl(urlMock);

        expect(getServiceUrlMock).toBeCalledWith('on-site-notifications', urlMock);
    });
});

describe('fetchFromOnSiteNotifications', () => {
    test('calls window.fetch with proper params', async () => {
        const urlMock = 'some://valid.url';
        const fetchMock = jest.fn().mockRejectedValue('blah');
        const getNotificationServiceUrl = jest.fn(url => url);
        const api = build();

        global.window.fetch = fetchMock;
        api.getNotificationServiceUrl = getNotificationServiceUrl;

        await api.fetchFromOnSiteNotifications(urlMock, { key: 'value' });

        expect(getNotificationServiceUrl).toBeCalledWith(urlMock);
        expect(fetchMock).toBeCalledWith(urlMock, { credentials: 'include', key: 'value' });
    });

    test('returns null when response has 204 status', async () => {
        const urlMock = 'some://valid.url';
        const responseMock = { headers: { get: () => 'json' }, status: 204, ok: true };
        const fetchMock = jest.fn().mockResolvedValue(responseMock);
        const api = build();

        global.window.fetch = fetchMock;
        api.getNotificationServiceUrl = value => value;

        const response = await api.fetchFromOnSiteNotifications(urlMock);

        expect(response).toBe(null);
    });

    test('returns null when response does not have json in it\'s content-type header', async () => {
        const urlMock = 'some://valid.url';
        const responseMock = { headers: { get: () => 'png' }, status: 200, ok: true };
        const fetchMock = jest.fn().mockResolvedValue(responseMock);
        const api = build();

        global.window.fetch = fetchMock;
        api.getNotificationServiceUrl = value => value;

        const response = await api.fetchFromOnSiteNotifications(urlMock);

        expect(response).toBe(null);
    });

    test('returns json body when response has proper content-type and ok status is true', async () => {
        const urlMock = 'some://valid.url';
        const bodyMock = [{ a: 1 }];
        const jsonMock = jest.fn(() => bodyMock);
        const responseMock = { headers: { get: () => 'json' }, status: 200, ok: true, json: jsonMock };
        const fetchMock = jest.fn().mockResolvedValue(responseMock);
        const api = build();

        global.window.fetch = fetchMock;
        api.getNotificationServiceUrl = value => value;

        const response = await api.fetchFromOnSiteNotifications(urlMock);

        expect(jsonMock).toBeCalledWith();
        expect(response).toBe(bodyMock);
    });

    test('returns null when response ok status is false', async () => {
        const urlMock = 'some://valid.url';
        const responseMock = { headers: { get: () => 'JSON' }, status: 404, ok: false };
        const fetchMock = jest.fn().mockResolvedValue(responseMock);
        const api = build();

        global.window.fetch = fetchMock;
        api.getNotificationServiceUrl = value => value;

        const response = await api.fetchFromOnSiteNotifications(urlMock);

        expect(response).toBe(null);
    });
});

describe('loadPage', () => {
    test('calls fetchFromOnSiteNotifications with given argument', () => {
        const urlMock = 'some://valid.url';
        const fetchFromOnSiteNotificationsMock = jest.fn();
        const api = build();

        api.fetchFromOnSiteNotifications = fetchFromOnSiteNotificationsMock;

        api.loadPage(urlMock);

        expect(fetchFromOnSiteNotificationsMock).toBeCalledWith(urlMock);
    });
});

describe('loadUnreadNotificationCount', () => {
    test('calls fetchFromOnSiteNotifications with predefined argument', () => {
        const fetchFromOnSiteNotificationsMock = jest.fn();
        const api = build();

        api.fetchFromOnSiteNotifications = fetchFromOnSiteNotificationsMock;

        api.loadUnreadNotificationCount();

        expect(fetchFromOnSiteNotificationsMock).toBeCalledWith(expect.any(String));
    });
});

describe('markAsRead', () => {
    test('calls markAsReadUsingSendBeacon when flag is passed as true and sendBeacon exists', () => {
        const urlMock = 'some://valid.url';
        const markAsReadUsingSendBeaconMock = jest.fn();
        const api = build();

        api.markAsReadUsingSendBeacon = markAsReadUsingSendBeaconMock;
        global.window.navigator.sendBeacon = () => null;

        api.markAsRead(urlMock, true);

        expect(markAsReadUsingSendBeaconMock).toBeCalledWith(urlMock);
    });

    test('calls markAsReadUsingFetch when flag is passed as false passed', () => {
        const urlMock = 'some://valid.url';
        const markAsReadUsingFetchMock = jest.fn();
        const api = build();

        api.markAsReadUsingFetch = markAsReadUsingFetchMock;
        global.window.navigator.sendBeacon = () => null;

        api.markAsRead(urlMock, false);

        expect(markAsReadUsingFetchMock).toBeCalledWith(urlMock, false);
    });
});

describe('markAsReadUsingSendBeacon', () => {
    test('does not call markAsReadUsingFetch when sendBeacon returns true', async () => {
        const urlMock = 'some://valid.url';
        const uriMock = 'uri-mock';
        const markAsReadUsingFetchMock = jest.fn();
        const getNotificationServiceUrlMock = jest.fn(() => urlMock);
        const sendBeaconMock = jest.fn(() => true);
        const api = build();

        api.markAsReadUsingFetch = markAsReadUsingFetchMock;
        api.getNotificationServiceUrl = getNotificationServiceUrlMock;
        global.window.navigator.sendBeacon = sendBeaconMock;

        await api.markAsReadUsingSendBeacon(uriMock);

        expect(markAsReadUsingFetchMock).not.toBeCalled();
        expect(sendBeaconMock).toBeCalledWith(urlMock, expect.any(Blob));
    });

    test('calls markAsReadUsingFetch when sendBeacon returns false', async () => {
        const urlMock = 'some://valid.url';
        const uriMock = 'uri-mock';
        const markAsReadUsingFetchMock = jest.fn();
        const getNotificationServiceUrlMock = jest.fn(() => urlMock);
        const sendBeaconMock = jest.fn(() => false);
        const api = build();

        api.markAsReadUsingFetch = markAsReadUsingFetchMock;
        api.getNotificationServiceUrl = getNotificationServiceUrlMock;
        global.window.navigator.sendBeacon = sendBeaconMock;

        await api.markAsReadUsingSendBeacon(uriMock);

        expect(markAsReadUsingFetchMock).toBeCalledWith(uriMock, true);
        expect(sendBeaconMock).toBeCalledWith(urlMock, expect.any(Blob));
    });

    test('calls markAsReadUsingFetch when sendBeacon throws', async () => {
        const urlMock = 'some://valid.url';
        const uriMock = 'uri-mock';
        const markAsReadUsingFetchMock = jest.fn();
        const getNotificationServiceUrlMock = jest.fn(() => urlMock);
        const sendBeaconMock = jest.fn(() => {
            throw new Error('hai');
        });
        const api = build();

        api.markAsReadUsingFetch = markAsReadUsingFetchMock;
        api.getNotificationServiceUrl = getNotificationServiceUrlMock;
        global.window.navigator.sendBeacon = sendBeaconMock;

        await api.markAsReadUsingSendBeacon(uriMock);

        expect(markAsReadUsingFetchMock).toBeCalledWith(uriMock, true);
        expect(sendBeaconMock).toBeCalledWith(urlMock, expect.any(Blob));
    });
});

describe('markAsReadUsingFetch', () => {
    test('calls fetchFromOnSiteNotifications with proper options when flag is passed as false', () => {
        const uriMock = 'uri-mock';
        const fetchFromOnSiteNotificationsMock = jest.fn();
        const api = build();

        api.fetchFromOnSiteNotifications = fetchFromOnSiteNotificationsMock;

        api.markAsReadUsingFetch(uriMock, false);

        expect(fetchFromOnSiteNotificationsMock).toBeCalledWith(
            expect.any(String),
            {
                body: expect.any(String),
                method: expect.any(String),
                headers: expect.any(Object),
            },
        );
    });

    test('calls fetchFromOnSiteNotifications with proper options when flag is passed as true', () => {
        const uriMock = 'uri-mock';
        const fetchFromOnSiteNotificationsMock = jest.fn();
        const api = build();

        api.fetchFromOnSiteNotifications = fetchFromOnSiteNotificationsMock;

        api.markAsReadUsingFetch(uriMock, true);

        expect(fetchFromOnSiteNotificationsMock).toBeCalledWith(
            expect.any(String),
            {
                body: expect.any(String),
                method: expect.any(String),
                headers: expect.any(Object),
                timeout: expect.any(Number),
            },
        );
    });
});

describe('markAllAsRead', () => {
    test('calls fetchFromOnSiteNotifications with proper options', () => {
        const notificationsMock = [{ timestamp: 1551451606 }];
        const fetchFromOnSiteNotificationsMock = jest.fn();
        const api = build();

        api.fetchFromOnSiteNotifications = fetchFromOnSiteNotificationsMock;

        api.markAllAsRead(notificationsMock);

        expect(fetchFromOnSiteNotificationsMock).toBeCalledWith(
            expect.any(String),
            {
                body: expect.any(String),
                method: expect.any(String),
                headers: expect.any(Object),
            },
        );
    });
});
