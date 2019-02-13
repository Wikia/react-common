import React from 'react';
import Button from "../../../Button";
import Avatar from "../../../Avatar";

const GlobalNavigationMobileLoggedIn = ({ data }) => {
    return (
        <Button onClick={() => {}} text className="wds-global-navigation__modal-control wds-global-navigation__modal-control-user">
            <Avatar src={data.avatar_url} alt={data.username} />

                {/* TODO: notification counter only if there are notifications */}
            <span className="wds-global-navigation__avatar-notifications-counter">
                {/*{{wdsOnSiteNotifications.unreadCountWithLimit}}*/}
                3
            </span>
        </Button>
    // {{global-navigation/user-modal
    //     isOpen=isUserModalOpen
    //     user=model.user
    //     header=model.notifications.header.title.key
    //     track=track
    // }}
    )
};

export default GlobalNavigationMobileLoggedIn;
