import merge from 'lodash/merge';
import get from 'lodash/get';

import { convertToTimestamp } from '../utils/isoTime';

import { notificationTypes } from './notificationTypes';

const defaultProps = {
    communityId: '',
    communityName: '',
    isUnread: false,
    latestActors: [],
    latestEventUri: '',
    snippet: '',
    timestamp: 0,
    title: '',
    type: '',
    totalUniqueActors: 0,
    uri: '',
};

function mapData(notificationData) {
    return {
        title: get(notificationData, 'refersTo.title'),
        snippet: get(notificationData, 'refersTo.snippet'),
        uri: get(notificationData, 'refersTo.uri'),
        refersToAuthorId: get(notificationData, 'refersTo.createdBy'),
        latestEventUri: get(notificationData, 'events.latestEvent.uri'),
        timestamp: convertToTimestamp(get(notificationData, 'events.latestEvent.when')),
        communityName: get(notificationData, 'community.name'),
        communityId: get(notificationData, 'community.id'),
        isUnread: notificationData.read === false,
        totalUniqueActors: get(notificationData, 'events.totalUniqueActors'),
        latestActors: createActors(get(notificationData, 'events.latestActors')),
        type: getNotificationType(notificationData),
        metadata: getMetadata(notificationData),
    };
}

function createActors(actors) {
    return actors.map(actor => merge({}, actor, { profileUrl: getProfileUrl(actor.name), src: actor.avatarUrl }));
}

function getProfileUrl(name) {
    return `${window.location.origin}/wiki/User:${name}`;
}

function getNotificationType(apiData) {
    switch (apiData.type) {
        case 'upvote-notification':
            return apiData.refersTo.type === 'discussion-post'
                ? notificationTypes.discussionUpvoteReply
                : notificationTypes.discussionUpvotePost;
        case 'replies-notification':
            return notificationTypes.discussionReply;
        case 'announcement-notification':
            return notificationTypes.announcement;
        case 'post-at-mention-notification':
            return notificationTypes.postAtMention;
        case 'thread-at-mention-notification':
            return notificationTypes.threadAtMention;
        case 'article-comment-reply-notification':
            return notificationTypes.articleCommentReply;
        case 'article-comment-at-mention-notification':
            return notificationTypes.articleCommentAtMention;
        case 'article-comment-reply-at-mention-notification':
            return notificationTypes.articleCommentReplyAtMention;
        case 'talk-page-notification':
            return notificationTypes.talkPageMessage;
        case 'message-wall-post-notification':
            return notificationTypes.messageWallThread;
        case 'message-wall-reply-notification':
            return notificationTypes.messageWallPost;
        default:
            return null;
    }
}

function getMetadata(notificationData) {
    const metadata = get(notificationData, 'metadata');
    return metadata ? JSON.parse(metadata) : null;
}

class Notification {
    constructor(data) {
        Object.keys(data).forEach((key) => {
            this[key] = data[key];
        });
    }

    static build(notificationData) {
        return new this(merge({}, defaultProps, notificationData));
    }

    static buildFromJson(notificationData) {
        return this.build(mapData(notificationData));
    }
}

export default Notification;
