import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import get from 'lodash/get';

import {
    isAnnouncement, isArticleCommentReply,
    isDiscussionPostUpvote,
    isDiscussionReply,
    isDiscussionReplyUpvote,
    isPostAtMention,
    isThreadAtMention,
} from '../../models/notificationTypes';
import I18nNamespaceContext from '../../context/I18nNamespaceContext';
import { useUserData } from '../../context/UserContext';

const getReplyMessageBody = (translateFunc, { title, totalUniqueActors, latestActors, postTitleMarkup }) => {
    const hasTwoUsers = totalUniqueActors === 2;
    const hasThreeOrMoreUsers = totalUniqueActors > 2;
    const firstReplierName = get(latestActors, '[0].name');

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
                secondUser: get(latestActors, '[1].name'),
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
            secondUser: get(latestActors, '[1].name'),
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
    mentioner: get(latestActors, '[0].name'),
});

const getThreadAtMentionMessageBody = (translateFunc, { postTitleMarkup, latestActors }) => translateFunc('notifications-post-at-mention', {
    postTitle: postTitleMarkup,
    mentioner: get(latestActors, '[0].name'),
});

const getArticleCommentReplyMessageBody = (translateFunc, { userData, refersToAuthorId, latestActors, title }) => {
    const currentUserId = userData?.id;
    const user = get(latestActors, '[0].name');

    const messageKey = refersToAuthorId === currentUserId
        ? 'notifications-article-comment-reply-own-comment'
        : 'notifications-article-comment-reply-followed-comment';

    return translateFunc(messageKey, { user, articleTitle: title });
};

const getText = (translateFunc, model, userData) => {
    const { type, snippet, title, totalUniqueActors, latestActors, refersToAuthorId } = model;
    const postTitleMarkup = `<b>${title}</b>`;

    if (isAnnouncement(type)) {
        return snippet;
    }

    if (isDiscussionReply(type)) {
        return getReplyMessageBody(translateFunc, { title, latestActors, postTitleMarkup, totalUniqueActors });
    }

    if (isDiscussionPostUpvote(type)) {
        return getPostUpvoteMessageBody(translateFunc, { title, postTitleMarkup, totalUniqueActors });
    }

    if (isDiscussionReplyUpvote(type)) {
        return getReplyUpvoteMessageBody(translateFunc, { title, postTitleMarkup, totalUniqueActors });
    }

    if (isPostAtMention(type)) {
        return getPostAtMentionMessageBody(translateFunc, { postTitleMarkup, latestActors });
    }

    if (isThreadAtMention(type)) {
        return getThreadAtMentionMessageBody(translateFunc, { postTitleMarkup, latestActors });
    }

    if (isArticleCommentReply(type)) {
        return getArticleCommentReplyMessageBody(translateFunc, { userData, latestActors, title, refersToAuthorId });
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
