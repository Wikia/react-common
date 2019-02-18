import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../Button';
import Avatar from '../../../Avatar';

import NotificationsContext from '../../utils/NotificationContext';

import GlobalNavigationUserModal from './GlobalNavigationUserModal';

const GlobalNavigationMobileLoggedIn = ({ user, openModal, isOpen, track }) => {
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
                    unreadCount && (
                        <span className="wds-global-navigation__avatar-notifications-counter">
                            {unreadCount > 99 ? '99+' : unreadCount}
                        </span>
                    )
                }
            </Button>
            <GlobalNavigationUserModal user={user} isOpen={isOpen} track={track} />
        </React.Fragment>
    );
};

GlobalNavigationMobileLoggedIn.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
    track: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

export default GlobalNavigationMobileLoggedIn;
