import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import NotificationsContext from '../../utils/NotificationContext';

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
            <button onClick={onClick} className="wds-notifications__mark-all-as-read">
                Mark all as read
            </button>
        </div>
    );
};

MarkAllButton.propTypes = {
    header: PropTypes.string.isRequired,
    track: PropTypes.func.isRequired,
};

export default MarkAllButton;