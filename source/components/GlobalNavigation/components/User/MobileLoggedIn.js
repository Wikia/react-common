import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../Button';
import Avatar from '../../../Avatar';

import NotificationsContext from '../../context/NotificationContext';

import UserModal from './UserModal';

const MobileLoggedIn = ({ user, openModal, isOpen, track, header }) => {
    const { unreadCount } = useContext(NotificationsContext);

    return (
        <React.Fragment>
            <Button
                className="wds-global-navigation__modal-control wds-global-navigation__modal-control-user"
                onClick={() => openModal('user')}
                text
            >
                <Avatar src={user.avatar_url} alt={user.username} />
                {
                    Boolean(unreadCount) && (
                        <span className="wds-global-navigation__avatar-notifications-counter">
                            {unreadCount > 99 ? '99+' : unreadCount}
                        </span>
                    )
                }
            </Button>
            <UserModal user={user} isOpen={isOpen} track={track} header={header} />
        </React.Fragment>
    );
};

MobileLoggedIn.propTypes = {
    header: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
    track: PropTypes.func.isRequired,
    user: PropTypes.shape().isRequired,
};

export default MobileLoggedIn;
