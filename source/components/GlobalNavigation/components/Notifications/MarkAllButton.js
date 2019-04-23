import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import NotificationsContext from '../../context/NotificationContext';

const MarkAllButton = ({ track, header }) => {
    const { markAllAsRead } = useContext(NotificationsContext);
    const onClick = useCallback(() => {
        track({
            action: 'click',
            category: 'on-site-notifications',
            label: 'mark-all-as-read',
        });

        markAllAsRead();
    }, [markAllAsRead, track]);

    return (
        <div className="wds-notifications__mark-all-as-read-button">
            {
                header && <p className="wds-notifications__header">{header}</p>
            }
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a onClick={onClick} className="wds-notifications__mark-all-as-read">
                Mark all as read
            </a>
        </div>
    );
};

MarkAllButton.propTypes = {
    header: PropTypes.string.isRequired,
    track: PropTypes.func.isRequired,
};

export default MarkAllButton;
