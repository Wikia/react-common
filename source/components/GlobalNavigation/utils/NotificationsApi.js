import merge from 'lodash/merge';

import { convertToIsoString } from './isoTime';

const supportedContentTypes = [
    'discussion-upvote',
    'discussion-post',
    'announcement-target',
    'post-at-mention',
    'thread-at-mention',
    'article-comment-reply',
    'article-comment-at-mention',
    'article-comment-reply-at-mention',
];

const defaultOptions = {
    credentials: 'include',
};

class NotificationsApi {
    constructor(serviceBaseUrl) {
        this.serviceBaseUrl = serviceBaseUrl;
    }

    static build(serviceBaseUrl) {
        return new this(serviceBaseUrl);
    }

    getServiceUrl(serviceName, url) {
        return `${this.serviceBaseUrl}${serviceName}${url}`;
    }

    getNotificationServiceUrl(path) {
        return this.getServiceUrl('on-site-notifications', path);
    }

    static getContentTypesQueryParams() {
        return `contentType=${supportedContentTypes.join('&contentType=')}`;
    }

    fetchFromOnSiteNotifications(path, options) {
        return fetch(this.getNotificationServiceUrl(path), merge({}, options, defaultOptions))
            .catch((error) => {
                console.error('Something went wrong while calling a OSN service', error);
            })
            .then((response) => {
                if (!response) {
                    return null;
                }

                const contentType = response.headers.get('content-type');
                const hasNoContent = response.status === 204 || (contentType && contentType.indexOf('json') === -1);

                if (response.ok && hasNoContent) {
                    return null;
                }

                if (response.ok) {
                    return response.json();
                }

                return null;
            });
    }

    loadPage(pageLink) {
        return this.fetchFromOnSiteNotifications(pageLink);
    }

    loadUnreadNotificationCount() {
        return this.fetchFromOnSiteNotifications(`/notifications/unread-count?${NotificationsApi.getContentTypesQueryParams()}`);
    }

    markAsRead(uri, willUnloadPage) {
        if (willUnloadPage && window.navigator.sendBeacon) {
            return this.markAsReadUsingSendBeacon(uri);
        }

        return this.markAsReadUsingFetch(uri, willUnloadPage);
    }

    markAsReadUsingSendBeacon(uri) {
        const markAsReadUrl = this.getNotificationServiceUrl('/notifications/mark-as-read/by-uri');

        try {
            const blob = new Blob([JSON.stringify([uri])], {
                type: 'application/json',
            });

            if (window.navigator.sendBeacon(markAsReadUrl, blob) === true) {
                return Promise.resolve();
            }

            return this.markAsReadUsingFetch(uri, true);
        } catch (exception) {
            // See http://crbug.com/490015#c99
            console.warn('Error when sending beacon', exception);
            return this.markAsReadUsingFetch(uri, true);
        }
    }

    markAsReadUsingFetch(uri, willUnloadPage) {
        const options = {
            body: JSON.stringify([uri]),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        };

        if (willUnloadPage) {
            // Keep it low as it's blocking user from navigating to the notification target
            options.timeout = 500;
        }

        return this.fetchFromOnSiteNotifications('/notifications/mark-as-read/by-uri', options);
    }

    markAllAsRead(notifications) {
        const since = convertToIsoString(notifications[0].timestamp);

        return this.fetchFromOnSiteNotifications('/notifications/mark-all-as-read', {
            body: JSON.stringify({ since }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        });
    }
}

export default NotificationsApi;
