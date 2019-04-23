import React, { useCallback, useContext } from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../Dropdown';
import Icon from '../../../Icon';

import NotificationsContext from '../../context/NotificationContext';

import ListContainer from './ListContainer';

const NotificationToggle = ({ chevron, unreadCount }) => (
    <React.Fragment>
        {
            Boolean(unreadCount) && (
                <span className="wds-global-navigation__notifications-counter">
                    {unreadCount > 99 ? '99+' : unreadCount}
                </span>
            )
        }
        <Icon name="bell" className="icon-bell" />
        {chevron}
    </React.Fragment>
);

NotificationToggle.propTypes = {
    chevron: PropTypes.node.isRequired,
    unreadCount: PropTypes.number.isRequired,
};

const NotificationsDropdown = ({ track }) => {
    const { unreadCount, loadFirstPage } = useContext(NotificationsContext);
    const onMouseEnter = useCallback(() => {
        track({
            label: 'open-menu',
            category: 'on-site-notifications',
            action: 'click',
            value: unreadCount,
        });

        loadFirstPage();
    }, [unreadCount, track, loadFirstPage]);

    return (
        <Dropdown
            className="wds-global-navigation__notifications-dropdown"
            toggleClassName="wds-global-navigation__dropdown-toggle"
            contentClassName="wds-notifications__dropdown-content"
            onMouseEnter={onMouseEnter}
            toggle={chevron => <NotificationToggle chevron={chevron} unreadCount={unreadCount} />}
            iconName="dropdown-tiny"
            hasShadow
            dropdownRightAligned
        >
            <ListContainer track={track} />
        </Dropdown>
    );
};

NotificationsDropdown.propTypes = {
    track: PropTypes.func.isRequired,
};

export default NotificationsDropdown;
