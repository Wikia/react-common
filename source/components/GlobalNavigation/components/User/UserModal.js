import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

import Avatar from '../../../Avatar';

import NotificationsContext from '../../context/NotificationContext';
import I18nNamespaceContext from '../../context/I18nNamespaceContext';

import LinkLogOut from '../Link/LinkLogOut';
import NotificationsListContainer from '../Notifications/ListContainer';

const UserModal = ({ isOpen, user, track, header }) => {
    const { loadFirstPage } = useContext(NotificationsContext);
    const [t] = useTranslation(useContext(I18nNamespaceContext));
    const viewProfileLink = user.items.filter(item => item['tracking-label'] === 'account.profile')[0].href;
    const signOutModel = user.items.filter(item => item.type === 'link-logout')[0];
    const classes = classNames('wds-global-navigation__modal', 'wds-user-modal', { 'wds-is-hidden': !isOpen });

    useEffect(() => {
        if (isOpen) {
            loadFirstPage();
        }
    }, [isOpen, loadFirstPage]);

    return (
        <div className={classes}>
            <div className="wds-user-modal__info">
                <Avatar src={user.avatar_url} href={viewProfileLink} data-tracking-label="open-user-profile" />
                <p className="wds-user-modal__username">
                    {user.username}
                </p>
            </div>
            <div className="wds-user-modal__notifications-wrapper">
                <NotificationsListContainer track={track} header={t(header)} />
            </div>
            <LinkLogOut link={signOutModel} className="wds-user-modal__sign-out-container" />
        </div>
    );
};

UserModal.propTypes = {
    header: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    track: PropTypes.func.isRequired,
    user: PropTypes.shape().isRequired,
};

export default UserModal;
