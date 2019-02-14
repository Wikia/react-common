import React from 'react';
import Button from "../../../Button";
import Avatar from "../../../Avatar";
import GlobalNavigationUserModal from "./GlobalNavigationUserModal";

const GlobalNavigationMobileLoggedIn = ({ user, openModal, modalOpen }) => {
    return (
        <React.Fragment>
            <Button onClick={() => openModal('user')} text className="wds-global-navigation__modal-control wds-global-navigation__modal-control-user">
                <Avatar src={user.avatar_url} alt={user.username} />
                    {/* TODO: notification counter only if there are notifications */}
                <span className="wds-global-navigation__avatar-notifications-counter">
                    {/*{{wdsOnSiteNotifications.unreadCountWithLimit}}*/}
                    3
                </span>
            </Button>
            <GlobalNavigationUserModal user={user} isOpen={modalOpen}/>
        </React.Fragment>
    )
};

export default GlobalNavigationMobileLoggedIn;
