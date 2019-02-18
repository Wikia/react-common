import React from 'react';
import get from 'lodash/get';

export const getReplyMessageBody = (t, { title, totalUniqueActors, latestActors, postTitleMarkup }) => {
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

export const getPostUpvoteMessageBody = (t, { title, totalUniqueActors, postTitleMarkup }) => {
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

export const getReplyUpvoteMessageBody = (t, { title, totalUniqueActors, postTitleMarkup }) => {
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
