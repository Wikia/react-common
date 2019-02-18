import merge from 'lodash/merge';
import get from 'lodash/get';

import { convertToTimestamp } from '../utils/isoTime';

import { notificationTypes } from './notificationTypes';

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
        type: getNotificationType(notificationData),
    };
}

function createActors(actors) {
    return actors.map(actor => merge({}, actor, { profileUrl: getProfileUrl(actor.username) }));
}

function getProfileUrl(name) {
    return `${window.location.origin}/wiki/User:${name}`;
}

function getNotificationType(apiData) {
    if (apiData.type === 'upvote-notification') {
        if (apiData.refersTo.type === 'discussion-post') {
            return notificationTypes.discussionUpvoteReply;
        }

        return notificationTypes.discussionUpvotePost;
    }

    if (apiData.type === 'replies-notification') {
        return notificationTypes.discussionReply;
    }

    if (apiData.type === 'announcement-notification') {
        return notificationTypes.announcement;
    }

    return null;
}

class Notification {
    constructor(data) {
        Object.keys(data).forEach((key) => {
            this[key] = data[key];
        });
    }

    static build(notificationData) {
        return new this(merge({}, defaultProps, mapData(notificationData)));
    }
}

export default Notification;
