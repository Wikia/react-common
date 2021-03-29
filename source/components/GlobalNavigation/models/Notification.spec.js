import merge from 'lodash/merge';

import Notification from './Notification';
import { notificationTypes } from './notificationTypes';

const getNotification = config => merge({}, {
    type: 'upvote-notification',
    community: {
        id: '1619010',
        name: 'Xkxd Wiki',
    },
    refersTo: {
        uri: 'http://xkxd.fandom.com/d/p/3100000000000001095/r/3086787452863005630',
        createdBy: '33027931',
        createdByName: 'Test',
        type: 'discussion-post',
        snippet: 'gimme',
    },
    events: {
        total: 1,
        totalUniqueActors: 1,
        latestActors: [
            {
                id: '12315543',
                name: 'QATestsStaff2',
                avatarUrl: 'https://vignette.wikia.nocookie.net/9295f231-64e7-4af0-8852-95655906a58e',
            },
        ],
        latestEvent: {
            when: '2019-03-01T06:48:48.000Z',
            causedBy: {
                id: '12315543',
                name: 'QATestsStaff2',
                avatarUrl: 'https://vignette.wikia.nocookie.net/9295f231-64e7-4af0-8852-95655906a58e',
            },
            uri: 'http://xkxd.fandom.com/d/p/3100000000000001095/r/3086787452863005630#12315543',
            type: 'discussion-upvote',
        },
    },
    read: false,
}, config);

const getExpected = config => merge({}, {
    title: '',
    snippet: 'gimme',
    uri: 'http://xkxd.fandom.com/d/p/3100000000000001095/r/3086787452863005630',
    latestEventUri: 'http://xkxd.fandom.com/d/p/3100000000000001095/r/3086787452863005630#12315543',
    metadata: null,
    timestamp: 1551422928,
    communityName: 'Xkxd Wiki',
    communityId: '1619010',
    isUnread: true,
    totalUniqueActors: 1,
    refersToAuthorId: '33027931',
    refersToAuthorName: 'Test',
    latestActors: [{
        id: '12315543',
        name: 'QATestsStaff2',
        avatarUrl: 'https://vignette.wikia.nocookie.net/9295f231-64e7-4af0-8852-95655906a58e',
        profileUrl: 'http://localhost/wiki/User:QATestsStaff2',
        src: 'https://vignette.wikia.nocookie.net/9295f231-64e7-4af0-8852-95655906a58e',
    }],
    type: 'discussion-upvote-reply',
}, config);

const testCases = [
    {
        name: 'upvote post notification',
        given: getNotification({ type: 'upvote-notification', refersTo: { type: 'discussion-post' } }),
        expected: getExpected({ type: notificationTypes.discussionUpvoteReply }),
    },
    {
        name: 'upvote reply notification',
        given: getNotification({ type: 'upvote-notification', refersTo: { type: 'discussion-reply' } }),
        expected: getExpected({ type: notificationTypes.discussionUpvotePost }),
    },
    {
        name: 'replies notification',
        given: getNotification({ type: 'replies-notification' }),
        expected: getExpected({ type: notificationTypes.discussionReply }),
    },
    {
        name: 'announcement notification',
        given: getNotification({ type: 'announcement-notification' }),
        expected: getExpected({ type: notificationTypes.announcement }),
    },
    {
        name: 'post-at-mention notification',
        given: getNotification({ type: 'post-at-mention-notification' }),
        expected: getExpected({ type: notificationTypes.postAtMention }),
    },
    {
        name: 'thread-at-mention notification',
        given: getNotification({ type: 'thread-at-mention-notification' }),
        expected: getExpected({ type: notificationTypes.threadAtMention }),
    },
    {
        name: 'other notification',
        given: getNotification({ type: 'other-notification' }),
        expected: getExpected({ type: null }),
    },
    {
        name: 'article-comment-reply notification',
        given: getNotification({ type: 'article-comment-reply-notification' }),
        expected: getExpected({ type: notificationTypes.articleCommentReply }),
    },
    {
        name: 'article-comment-at-mention notification',
        given: getNotification({ type: 'article-comment-at-mention-notification' }),
        expected: getExpected({ type: notificationTypes.articleCommentAtMention }),
    },
    {
        name: 'article-comment-reply-at-mention notification',
        given: getNotification({ type: 'article-comment-reply-at-mention-notification' }),
        expected: getExpected({ type: notificationTypes.articleCommentReplyAtMention }),
    },
];

testCases.forEach(({ name, given, expected }) => {
    test(`maps data for ${name}`, () => {
        expect(Notification.buildFromJson(given)).toEqual(expected);
    });
});
