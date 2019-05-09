import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import NotificationsContext from '../../context/NotificationContext';
import I18nNamespaceContext from '../../context/I18nNamespaceContext';

import MarkAllButton from './MarkAllButton';
import List from './List';

const ListContainer = ({ track, header }) => {
    const { unreadCount, notifications, isLoading } = useContext(NotificationsContext);
    const [t] = useTranslation(useContext(I18nNamespaceContext));

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
                            {t('notifications-no-notifications-message')}
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
