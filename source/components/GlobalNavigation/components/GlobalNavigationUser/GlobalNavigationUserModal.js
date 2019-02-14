import React from 'react';
import { withTranslation } from 'react-i18next';
import classNames from 'classnames';
import Avatar from "../../../Avatar";
import GlobalNavigationLinkLogOut from "../GlobalNavigationLink/GlobalNavigationLinkLogOut";

class GlobalNavigationUserModal extends React.Component {
    constructor(props) {
        super(props);
        const { user } = props;

        this.state = {
            viewProfileLink: user.items.filter( (item) => item['tracking-label'] === 'account.profile')[0]['href'],
            signOutModel: user.items.filter( (item) => item.type === 'link-logout')[0],
        }
    }

    render() {
        const { isOpen, user } = this.props;
        const { viewProfileLink, signOutModel } = this.state;
        const classes = classNames('wds-global-navigation__modal', 'wds-user-modal', {'wds-is-hidden': !isOpen});

        return (
            <div className={classes}>
                <div className="wds-user-modal__info">
                    <Avatar src={user.avatar_url} href={viewProfileLink} data-tracking-label="open-user-profile" />
                <p className="wds-user-modal__username">
                    {user.username}
                </p>
            </div>
            <div className="wds-user-modal__notifications-wrapper">
                {/* TODO: notifications goes here */}
            </div>
                <GlobalNavigationLinkLogOut link={signOutModel} className={'wds-user-modal__sign-out-container'} />
            </div>
        );
    }
}

export default withTranslation()(GlobalNavigationUserModal);
