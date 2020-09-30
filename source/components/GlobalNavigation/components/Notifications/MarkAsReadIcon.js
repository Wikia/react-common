import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../Icon';

import NotificationsContext from '../../context/NotificationContext';
import {
    isAnnouncement,
    isArticleCommentAtMention,
    isArticleCommentReply,
    isArticleCommentReplyAtMention,
    isDiscussionReply,
    isPostAtMention,
    isThreadAtMention,
} from '../../models/notificationTypes';

function isCommentNotifictionType(type) {
    return isDiscussionReply(type) || isPostAtMention(type) || isThreadAtMention(type);
}

function getIconName(type) {
    if (isCommentNotifictionType(type)) {
        return 'comment-small';
    }

    if (isAnnouncement(type)) {
        return 'flag-small';
    }

    if (isArticleCommentReply(type)) {
        return 'reply-small';
    }

    if (isArticleCommentAtMention(type) || isArticleCommentReplyAtMention(type)) {
        return 'mention-small';
    }

    return 'heart-small';
}

const MarkAsReadIcon = ({ track, model }) => {
    const { type, isUnread, uri } = model;
    const { markAsRead } = useContext(NotificationsContext);
    const onClick = useCallback((event) => {
        event.stopPropagation();
        event.preventDefault();

        if (!isUnread) {
            return;
        }

        track({
            action: 'click',
            category: 'on-site-notifications',
            label: `mark-as-read-${type}`,
        });

        markAsRead(uri);
    }, [markAsRead, track, model]);

    return (
        <div className="wds-notification-card__icon-wrapper" onClick={onClick} role="presentation">
            <Icon name={getIconName(type)} />
        </div>
    );
};

MarkAsReadIcon.propTypes = {
    model: PropTypes.shape().isRequired,
    track: PropTypes.func.isRequired,
};

export default MarkAsReadIcon;
