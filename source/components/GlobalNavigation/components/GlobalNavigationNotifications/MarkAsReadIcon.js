import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import Icon from '../../../Icon';

import NotificationsContext from '../../utils/NotificationContext';
import { isAnnouncement, isDiscussionReply } from '../../models/notificationTypes';

function getIconName(type) {
    if (isDiscussionReply(type)) {
        return 'comment-small';
    } else if (isAnnouncement(type)) {
        return 'flag';
    }

    return 'upvote-small';
}

const MarkAsReadIcon = ({ track, model }) => {
    const { markAsRead } = useContext(NotificationsContext);
    const { type, isUnread, uri } = model;
    const onClick = useCallback((event) => {

        event.stopPropagation();

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
        <div className="wds-notification-card__icon-wrapper" onClick={onClick}>
            <Icon name={getIconName(type)} />
        </div>
    )
};

MarkAsReadIcon.propTypes = {
    model: PropTypes.object.isRequired,
    track: PropTypes.func.isRequired,
};

export default MarkAsReadIcon;
