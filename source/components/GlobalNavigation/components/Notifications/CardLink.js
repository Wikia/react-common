import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import NotificationsContext from '../../models/NotificationContext';

const CardLink = ({ track, model, children }) => {
    const { markAsRead, goToDestination } = useContext(NotificationsContext);
    const { type, isUnread, uri, latestEventUri } = model;
    const onClick = useCallback((event) => {
        event.preventDefault();

        track({
            action: 'click',
            category: 'on-site-notifications',
            label: type,
            value: isUnread ? 1 : 0,
        });

        if (isUnread) {
            markAsRead(uri, true)
                .then(() => {
                    goToDestination(latestEventUri);
                });
        } else {
            goToDestination(latestEventUri);
        }
    }, [markAsRead, track, model, goToDestination]);

    return (
        <a
            className="wds-notification-card__outer-body"
            href={latestEventUri}
            onClick={onClick}
        >
            {children}
        </a>
    );
};

CardLink.propTypes = {
    children: PropTypes.node.isRequired,
    model: PropTypes.shape().isRequired,
    track: PropTypes.func.isRequired,
};

export default CardLink;
