import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import get from 'lodash/get';

import {
    isAnnouncement, isArticleCommentAtMention, isArticleCommentReply, isArticleCommentReplyAtMention,
    isDiscussionPostUpvote,
    isDiscussionReply,
    isDiscussionReplyUpvote,
    isPostAtMention,
    isThreadAtMention,
    isMessageWallPost,
    isMessageWallThread,
    isTalkPageMessage,
} from '../../models/notificationTypes';
import I18nNamespaceContext from '../../context/I18nNamespaceContext';
import { useUserData } from '../../context/UserContext';

function bold(text) {
    return `<b>${text}</b>`;
}

function escapeHtml(unsafe) {
    if (!unsafe) {
        return unsafe;
    }

    return unsafe
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function getMessageWallUser(url) {
    const regex = /\/Message_Wall:(.+?)([?#/].*)?$/i;
    const result = regex.exec(url);
    if (!result || !result[1]) {
        return null;
    }
    return result[1];
}

const getReplyMessageBody = (translateFunc, { title, totalUniqueActors, latestActors, postTitleMarkup }) => {
    const hasTwoUsers = totalUniqueActors === 2;
    const hasThreeOrMoreUsers = totalUniqueActors > 2;
    const firstReplierName = escapeHtml(get(latestActors, '[0].name'));

    if (title) {
        if (hasThreeOrMoreUsers) {
            return translateFunc('notifications-replied-by-multiple-users-with-title', {
                postTitle: postTitleMarkup,
                mostRecentUser: firstReplierName,
                number: totalUniqueActors - 1,
            });
        }

        if (hasTwoUsers) {
            return translateFunc('notifications-replied-by-two-users-with-title', {
                firstUser: firstReplierName,
                secondUser: escapeHtml(get(latestActors, '[1].name')),
                postTitle: postTitleMarkup,
            });
        }

        return translateFunc('notifications-replied-by-with-title', {
            user: firstReplierName,
            postTitle: postTitleMarkup,
        });
    }

    if (hasThreeOrMoreUsers) {
        return translateFunc('notifications-replied-by-multiple-users-no-title', {
            mostRecentUser: firstReplierName,
            number: totalUniqueActors - 1,
        });
    }
    if (hasTwoUsers) {
        return translateFunc('notifications-replied-by-two-users-no-title', {
            firstUser: firstReplierName,
            secondUser: escapeHtml(get(latestActors, '[1].name')),
        });
    }

    return translateFunc('notifications-replied-by-no-title', {
        user: firstReplierName,
    });
};

const getPostUpvoteMessageBody = (translateFunc, { title, totalUniqueActors, postTitleMarkup }) => {
    const hasMultipleUsers = totalUniqueActors > 1;

    if (title) {
        if (hasMultipleUsers) {
            return translateFunc('notifications-post-upvote-multiple-users-with-title', {
                postTitle: postTitleMarkup,
                number: totalUniqueActors,
            });
        }

        return translateFunc('notifications-post-upvote-single-user-with-title', {
            postTitle: postTitleMarkup,
        });
    }

    if (hasMultipleUsers) {
        return translateFunc('notifications-post-upvote-multiple-users-no-title', {
            number: totalUniqueActors,
        });
    }

    return translateFunc('notifications-post-upvote-single-user-no-title');
};

const getReplyUpvoteMessageBody = (translateFunc, { title, totalUniqueActors, postTitleMarkup }) => {
    const hasMultipleUsers = totalUniqueActors > 1;

    if (title) {
        if (hasMultipleUsers) {
            return translateFunc('notifications-reply-upvote-multiple-users-with-title', {
                postTitle: postTitleMarkup,
                number: totalUniqueActors - 1,
            });
        }

        return translateFunc('notifications-reply-upvote-single-user-with-title', {
            postTitle: postTitleMarkup,
        });
    }

    if (hasMultipleUsers) {
        return translateFunc('notifications-reply-upvote-multiple-users-no-title', {
            number: totalUniqueActors,
        });
    }

    return translateFunc('notifications-reply-upvote-single-user-no-title');
};

const getPostAtMentionMessageBody = (translateFunc, { postTitleMarkup, latestActors }) => translateFunc('notifications-reply-at-mention', {
    postTitle: postTitleMarkup,
    mentioner: escapeHtml(get(latestActors, '[0].name')),
});

const getThreadAtMentionMessageBody = (translateFunc, { postTitleMarkup, latestActors }) => translateFunc('notifications-post-at-mention', {
    postTitle: postTitleMarkup,
    mentioner: escapeHtml(get(latestActors, '[0].name')),
});

function getArticleCommentNotificationUsername(t, latestActors) {
    return escapeHtml(get(latestActors, '[0].name')) ?? t('notifications-anon-user');
}

function getArticleCommentReplyMessageBody(t, { userData, refersToAuthorId, latestActors, title }) {
    const currentUserId = userData?.id;
    const user = getArticleCommentNotificationUsername(t, latestActors);

    const messageKey = refersToAuthorId === currentUserId
        ? 'notifications-article-comment-reply-own-comment'
        : 'notifications-article-comment-reply-followed-comment';

    return t(messageKey, { user, articleTitle: bold(title) });
}

function getArticleCommentAtMentionMessageBody(t, { latestActors, title }) {
    const user = getArticleCommentNotificationUsername(t, latestActors);
    return t('notifications-article-comment-comment-mention', { user, articleTitle: bold(title) });
}

function getArticleCommentReplyAtMentionMessageBody(t, { latestActors, title }) {
    const user = getArticleCommentNotificationUsername(t, latestActors);
    return t('notifications-article-comment-reply-mention', { user, articleTitle: bold(title) });
}

function getMessageWallThreadMessageBody(t, { latestActors, title, metadata, uri }) {
    const user = getArticleCommentNotificationUsername(t, latestActors);
    console.log('wallOwnerName', typeof metadata);
    let wallOwner = metadata && metadata.wallOwnerName;

    if (!wallOwner) {
        wallOwner = getMessageWallUser(uri);
    }

    const isOwnWall = wallOwner === user;
    const args = {
        postTitle: bold(escapeHtml(title)),
        wallOwner: escapeHtml(wallOwner),
    };
    if (isOwnWall) {
        return t('notifications-own-wall-post', {
            user,
            ...args,
        });
    }

    return t('notifications-wall-post', { firstUser: user, ...args });
}

function getMessageWallPostMessageBody(t, { latestActors, title, metadata, uri, totalUniqueActors, refersToAuthorName }) {
    const user = getArticleCommentNotificationUsername(t, latestActors);
    let wallOwner = metadata && metadata.wallOwnerName;

    if (!wallOwner) {
        wallOwner = this.getMessageWallUser(uri);
    }

    const isOwnWall = wallOwner === user;
    const args = {
        postTitle: bold(escapeHtml(title)),
        wallOwner: escapeHtml(wallOwner),
    };

    if (totalUniqueActors > 1) {
        args.number = escape(totalUniqueActors - 1);

        if (isOwnWall) {
            args.user = user;
            return t('notifications-own-wall-reply-multiple-users', args);
        }
        args.firstUser = user;

        if (refersToAuthorName === user) {
            return t('notifications-wall-reply-multiple-users-own-message', args);
        }

        args.secondUser = escape(refersToAuthorName);
        return t('notifications-wall-reply-multiple-users', args);
    }

    if (isOwnWall) {
        args.user = user;
        return t('notifications-own-wall-reply', args);
    }

    if (refersToAuthorName === user) {
        args.user = user;
        return t('notifications-wall-reply-own-message', args);
    }

    args.firstUser = user;
    args.secondUser = escape(refersToAuthorName);
    return t('notifications-wall-reply', args);
}

function getTalkPageMessageBody(t, { latestActors }) {
    const user = getArticleCommentNotificationUsername(t, latestActors);
    return t('notifications-talk-page-message', { user });
}

const getText = (translateFunc, model, userData) => {
    const {
        type,
        snippet,
        title: dangerousTitle,
        totalUniqueActors,
        latestActors,
        refersToAuthorId,
        metadata,
        uri,
        refersToAuthorName,
    } = model;
    const title = escapeHtml(dangerousTitle);
    const postTitleMarkup = `<b>${title}</b>`;

    if (isAnnouncement(type)) {
        return snippet;
    }

    if (isDiscussionReply(type)) {
        return getReplyMessageBody(translateFunc, {
            title,
            latestActors,
            postTitleMarkup,
            totalUniqueActors,
        });
    }

    if (isDiscussionPostUpvote(type)) {
        return getPostUpvoteMessageBody(translateFunc, {
            title,
            postTitleMarkup,
            totalUniqueActors,
        });
    }

    if (isDiscussionReplyUpvote(type)) {
        return getReplyUpvoteMessageBody(translateFunc, {
            title,
            postTitleMarkup,
            totalUniqueActors,
        });
    }

    if (isPostAtMention(type)) {
        return getPostAtMentionMessageBody(translateFunc, {
            postTitleMarkup,
            latestActors,
        });
    }

    if (isThreadAtMention(type)) {
        return getThreadAtMentionMessageBody(translateFunc, {
            postTitleMarkup,
            latestActors,
        });
    }

    if (isArticleCommentReply(type)) {
        return getArticleCommentReplyMessageBody(translateFunc, {
            userData,
            latestActors,
            title,
            refersToAuthorId,
        });
    }

    if (isArticleCommentAtMention(type)) {
        return getArticleCommentAtMentionMessageBody(translateFunc, {
            latestActors,
            title,
        });
    }

    if (isArticleCommentReplyAtMention(type)) {
        return getArticleCommentReplyAtMentionMessageBody(translateFunc, {
            latestActors,
            title,
        });
    }

    if (isMessageWallThread(type)) {
        return getMessageWallThreadMessageBody(translateFunc, {
            latestActors,
            title,
            metadata,
            uri,
        });
    }

    if (isMessageWallPost(type)) {
        return getMessageWallPostMessageBody(translateFunc, {
            latestActors,
            title,
            metadata,
            uri,
            totalUniqueActors,
            refersToAuthorName,
        });
    }

    if (isTalkPageMessage(type)) {
        return getTalkPageMessageBody(translateFunc, { latestActors });
    }

    return null;
};

const CardText = ({ model }) => {
    const [t] = useTranslation(useContext(I18nNamespaceContext));
    const userData = useUserData();
    const text = getText(t, model, userData);

    // eslint-disable-next-line react/no-danger
    return <p className="wds-notification-card__text" dangerouslySetInnerHTML={{ __html: text }} />;
};

CardText.propTypes = {
    model: PropTypes.shape().isRequired,
};

export default CardText;
