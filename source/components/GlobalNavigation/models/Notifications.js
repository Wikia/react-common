import get from 'lodash/get';

import { convertToIsoString } from '../utils/isoTime';
import Notification from './Notification';

function getNextPageLink(data) {
    return get(data, '_links.next') || null;
}

class Notifications {
    unreadCount = 0;
    nextPage = 0;
    notifications = [];

    constructor(apiInstance) {
        this.api = apiInstance;
    }

    static build(apiInstance) {
        return new this(apiInstance);
    }

    loadFirstPage() {
        return this.loadPage('/notifications?contentType=discussion-upvote&contentType=discussion-post&contentType=announcement-target');
    }

    loadPage(pageLink) {
        return this.api
            .fetchFromOnSiteNotifications(pageLink)
            .then(response => {
                this.notifications = this.mapNotifications(response.notifications);
                this.unreadCount = this.getUpdatedUnreadCount();

                return getNextPageLink(response);
            });
    }

    markAsRead(notification, willUnloadPage) {
        if (!notification.isUnread) {
            return Promise.resolve();
        }

        return notification.markAsRead(willUnloadPage)
            .then(() => {
                this.unreadCount = this.getUpdatedUnreadCount();
            });
    }

    markAllAsRead() {
        const since = convertToIsoString(this.notifications[0].timestamp);

        return this.api.fetchFromOnSiteNotifications(`/notifications/mark-all-as-read`, {
                body: JSON.stringify({ since }),
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
            }).then(() => {
                this.notifications = () => {}; // todo
                this.unreadCount = 0;
            });
    },

    mapNotifications(notifications) {
        return (notifications || []).map(notification => Notification.build(notification, this.api));
    }

    getUpdatedUnreadCount() {
        return this.notifications.filter(notification => notification.isUnread).length;
    }
}

