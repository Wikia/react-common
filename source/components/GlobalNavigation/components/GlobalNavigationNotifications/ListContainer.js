import React, { useContext }  from 'react';
import PropTypes from 'prop-types';

import NotificationsContext from '../../utils/NotificationContext';

import MarkAllButton from './MarkAllButton';
import List from './List';

const ListContainer = ({ track, header }) => {
    const { unreadCount, notifications, isLoading } = useContext(NotificationsContext);

    return (
        <React.Fragment>
            {
                unreadCount > 0 && (
                    <MarkAllButton
                        track={track}
                        header={header}
                    />
                )
            }
            {
                (notifications.length || isLoading)
                    ? (
                        <List track={track} />
                    )
                    : (
                        <p className="wds-notifications__zero-state">
                            No notifications yet.
                        </p>
                    )
            }
        </React.Fragment>
    );
};

ListContainer.propTypes = {
    header: PropTypes.string,
    track: PropTypes.func.isRequired,
};

ListContainer.defaultProps = {
    header: '',
};

export default ListContainer;
