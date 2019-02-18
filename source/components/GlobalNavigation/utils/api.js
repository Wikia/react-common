import { convertToIsoString } from '../utils/isoTime';
import merge from "lodash/merge";

const defaultOptions = {
    credentials: 'include',
};

class Api {
    constructor(serviceUrl) {
        this.serviceUrl = serviceUrl;
    }

    static build(serviceUrl) {
        return new this(serviceUrl);
    }

    getServiceUrl(serviceName, url) {
        return `${this.serviceUrl}${serviceName}${url}`;
    }

    getNotificationServiceUrl(path) {
        return this.getServiceUrl('on-site-notifications', path);
    }

    fetchFromOnSiteNotifications(path, options) {
        return fetch(this.getNotificationServiceUrl(path), merge({}, options, defaultOptions))
            .catch((error) => {
                // do error handling
            })
            .then((response) => {
                const contentType = response.headers.get('content-type');

                if (
                    response.ok &&
                    (
                        response.status === 204 ||
                        contentType && contentType.indexOf('json') === -1
                    )
                ) {
                    return null;
                } else if (response.ok) {
                    return response.json();
                } else {
                    // do error handling
                }
            });
    }

    loadPage(pageLink) {
        return this.fetchFromOnSiteNotifications(pageLink);
    }

    loadUnreadNotificationCount() {
        return this.fetchFromOnSiteNotifications('/notifications/unread-count?contentType=discussion-upvote&contentType=discussion-post&contentType=announcement-target');
    }

    markAsRead(uri, willUnloadPage) {
        if (willUnloadPage && window.navigator.sendBeacon) {
            return this.markAsReadUsingSendBeacon(uri);
        }

        return this.markAsReadUsingFetch(uri, willUnloadPage);
    }

    markAsReadUsingSendBeacon(uri) {
        const body = JSON.stringify([uri]);
        const markAsReadUrl = this.getNotificationServiceUrl('/notifications/mark-as-read/by-uri');

        try {
            const blob = new Blob([body], {
                type: 'application/json'
            });

            if (window.navigator.sendBeacon(markAsReadUrl, blob) === true) {
                return Promise.resolve();
            } else {
                return this.markAsReadUsingFetch(true);
            }
        } catch (exception) {
            // See http://crbug.com/490015#c99
            console.warn('Error when sending beacon', exception);
            return this.markAsReadUsingFetch(true);
        }
    }

    markAsReadUsingFetch(uri, willUnloadPage) {
        const body = JSON.stringify([uri]);
        const options = {
            body,
            headers: {
                'Content-Type': 'application/json'
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

        return this.fetchFromOnSiteNotifications(`/notifications/mark-all-as-read`, {
            body: JSON.stringify({ since }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
        });
    }
}

export default Api;
