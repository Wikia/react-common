import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    isAnnouncement,
    isDiscussionPostUpvote,
    isDiscussionReply,
    isDiscussionReplyUpvote,
} from '../../models/notificationTypes';

import get from 'lodash/get';

const getReplyMessageBody = (t, { title, totalUniqueActors, latestActors, postTitleMarkup }) => {
    const hasTwoUsers = totalUniqueActors === 2;
    const hasThreeOrMoreUsers = totalUniqueActors > 2;
    const firstReplierName = get(latestActors, '[0].name');

    if (title) {
        if (hasThreeOrMoreUsers) {
            return t('notifications-replied-by-multiple-users-with-title', {
                postTitle: postTitleMarkup,
                mostRecentUser: firstReplierName,
                number: totalUniqueActors - 1,
            });
        } else if (hasTwoUsers) {
            return t('notifications-replied-by-two-users-with-title', {
                firstUser: firstReplierName,
                secondUser: model.get('latestActors.1.name'),
                postTitle: postTitleMarkup,
            });
        } else {
            return t('notifications-replied-by-with-title', {
                user: firstReplierName,
                postTitle: postTitleMarkup,
            });
        }
    } else if (hasThreeOrMoreUsers) {
        return t('notifications-replied-by-multiple-users-no-title', {
            mostRecentUser: firstReplierName,
            number: totalUniqueActors - 1,
        });
    } else if (hasTwoUsers) {
        return t('notifications-replied-by-two-users-no-title', {
            firstUser: firstReplierName,
            secondUser: model.get('latestActors.1.name'),
        });
    } else {
        return t('notifications-replied-by-no-title', {
            user: firstReplierName,
        });
    }
};

const getPostUpvoteMessageBody = (t, { title, totalUniqueActors, postTitleMarkup }) => {
    const hasMultipleUsers = totalUniqueActors > 1;

    if (title) {
        if (hasMultipleUsers) {
            return t('notifications-post-upvote-multiple-users-with-title', {
                postTitle: postTitleMarkup,
                number: totalUniqueActors,
            });
        } else {
            return t('notifications-post-upvote-single-user-with-title', {
                postTitle: postTitleMarkup,
            });
        }
    } else if (hasMultipleUsers) {
        return t('notifications-post-upvote-multiple-users-no-title', {
            number: totalUniqueActors,
        });
    } else {
        return t('notifications-post-upvote-single-user-no-title');
    }
};

const getReplyUpvoteMessageBody = (t, { title, totalUniqueActors, postTitleMarkup }) => {
    const hasMultipleUsers = totalUniqueActors > 1;

    if (title) {
        if (hasMultipleUsers) {
            return t('notifications-reply-upvote-multiple-users-with-title', {
                postTitle: postTitleMarkup,
                number: totalUniqueActors - 1,
            });
        } else {
            return t('notifications-reply-upvote-single-user-with-title', {
                postTitle: postTitleMarkup,
            });
        }
    } else if (hasMultipleUsers) {
        return t('notifications-reply-upvote-multiple-users-no-title', {
            number: totalUniqueActors,
        });
    } else {
        return t('notifications-reply-upvote-single-user-no-title');
    }
};

const getText = (t, model) => {
    const { type, snippet, title, totalUniqueActors, latestActors } = model;
    const postTitleMarkup = `<b>${title}</b>`;

    if (isAnnouncement(type)) {
        return snippet;
    }

    if (isDiscussionReply(type)) {
        return getReplyMessageBody(t, { title, latestActors, postTitleMarkup, totalUniqueActors });
    }

    if (isDiscussionPostUpvote(type)) {
        return getPostUpvoteMessageBody(t, { title, postTitleMarkup, totalUniqueActors });
    }

    if (isDiscussionReplyUpvote(type)) {
        return getReplyUpvoteMessageBody(t, { title, postTitleMarkup, totalUniqueActors });
    }

    return null;
};

const CardText = ({ model }) => {
    const [t] = useTranslation();
    const text = getText(t, model);

    return <p className="wds-notification-card__text" dangerouslySetInnerHTML={{ __html: text }} />
};

export default CardText;
