import merge from 'lodash/merge';
import get from 'lodash/get';

import { convertToTimestamp } from '../utils/isoTime';
import notificationTypes from './notificationTypes';

const defaultProps = {
    title: null,
    snippet: null,
    timestamp: null,
    communityName: null,
    type: null,
    isUnread: false,
    totalUniqueActors: 1,
    latestActors: null,
    uri: null,
};

function mapData(notificationData) {
    return {
        title: get(notificationData, 'refersTo.title'),
        snippet: get(notificationData, 'refersTo.snippet'),
        uri: get(notificationData, 'refersTo.uri'),
        latestEventUri: get(notificationData, 'events.latestEvent.uri'),
        timestamp: convertToTimestamp(get(notificationData, 'events.latestEvent.when')),
        communityName: get(notificationData, 'community.name'),
        communityId: get(notificationData, 'community.id'),
        isUnread: notificationData.read === false,
        totalUniqueActors: get(notificationData, 'events.totalUniqueActors'),
        latestActors: createActors(get(notificationData, 'events.latestActors')),
        type: getNotificationType(notificationData)
    }
}

function createActors(actors) {
    return actors.map((actor) => merge({}, actor, { profileUrl: getProfileUrl(name) }));
}

function getProfileUrl(name) {
    return `${window.location.origin}/wiki/User:${name}`;
}

function getNotificationType(apiData) {
    if (apiData.type === 'upvote-notification') {
        if (apiData.refersTo.type === 'discussion-post') {
            return notificationTypes.discussionUpvoteReply;
        } else {
            return notificationTypes.discussionUpvotePost;
        }
    } else if (apiData.type === 'replies-notification') {
        return notificationTypes.discussionReply;
    } else if (apiData.type === 'announcement-notification') {
        return notificationTypes.announcement;
    }
}

class Notification {
    constructor(data, apiInstance) {
        Object.keys(data).forEach(key => {
            this[key] = data[key];
        });

        this.api = apiInstance;
    }

    static build(notificationData, apiInstance) {
        const data = merge({}, defaultProps, mapData(notificationData));

        return new this(data, apiInstance);
    }

    markAsRead(willUnloadPage) {
        if (willUnloadPage && window.navigator.sendBeacon) {
            return this.markAsReadUsingSendBeacon();
        }

        return this.markAsReadUsingFetch(willUnloadPage);
    }

    markAsReadUsingSendBeacon() {
        const body = JSON.stringify([this.uri]);
        const markAsReadUrl = this.api.getNotificationServiceUrl('/notifications/mark-as-read/by-uri');

        try {
            const blob = new Blob([body], {
                type: 'application/json'
            });

            if (window.navigator.sendBeacon(markAsReadUrl, blob) === true) {
                return Promise.resolve()
                    .then(() => {
                        this.isUnread = false;
                    });
            } else {
                return this.markAsReadUsingFetch(true);
            }
        } catch (exception) {
            // See http://crbug.com/490015#c99
            console.warn('Error when sending beacon', exception);
            return this.markAsReadUsingFetch(true);
        }
    }

    markAsReadUsingFetch(willUnloadPage) {
        const body = JSON.stringify([this.uri]);
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

        return this.api
            .fetchFromNotificationService('/notifications/mark-as-read/by-uri', options)
            .then(() => {
                this.isUnread = false;
            });
    }
}

export default Notification;
