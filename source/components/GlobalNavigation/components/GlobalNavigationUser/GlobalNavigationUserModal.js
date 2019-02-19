import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Avatar from '../../../Avatar';

import LinkLogOut from '../Link/LinkLogOut';
import NotificationsListContainer from '../Notifications/ListContainer';

const GlobalNavigationUserModal = ({ isOpen, user, track }) => {
    const viewProfileLink = user.items.filter(item => item['tracking-label'] === 'account.profile')[0].href;
    const signOutModel = user.items.filter(item => item.type === 'link-logout')[0];
    const classes = classNames('wds-global-navigation__modal', 'wds-user-modal', { 'wds-is-hidden': !isOpen });

    return (
        <div className={classes}>
            <div className="wds-user-modal__info">
                <Avatar src={user.avatar_url} href={viewProfileLink} data-tracking-label="open-user-profile" />
                <p className="wds-user-modal__username">
                    {user.username}
                </p>
            </div>
            <div className="wds-user-modal__notifications-wrapper">
                <NotificationsListContainer track={track} header="Notifications" />
            </div>
            <LinkLogOut link={signOutModel} className="wds-user-modal__sign-out-container" />
        </div>
    );
};

GlobalNavigationUserModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    track: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
};

export default GlobalNavigationUserModal;
