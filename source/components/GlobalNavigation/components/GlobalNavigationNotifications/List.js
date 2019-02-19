import React, { useContext, useRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from '../../../Spinner';

import NotificationsContext from '../../utils/NotificationContext';
import useLazyLoad from '../../hooks/useLazyLoad';

import Card from './Card';

const List = ({ track }) => {
    const { loadNextPage, notifications, isLoading, markAsRead, goToDestination } = useContext(NotificationsContext);
    const listEl = useRef(null);
    const computedClass = classNames(
        'wds-has-lines-between',
        'wds-notifications__notification-list',
        'wds-list',
        { 'is-loading-new-results': isLoading },
    );

    useLazyLoad(loadNextPage, listEl);

    return (
        <ul className={computedClass} ref={listEl}>
            {
                notifications.map((notification, index) => (
                    <Card
                        key={index}
                        model={notification}
                        track={track}
                        goToDestination={goToDestination}
                        markAsRead={markAsRead}
                    />
                ))
            }
            {
                isLoading && (
                    <li>
                        <Spinner block size="13" stroke="2" />
                    </li>
                )
            }
        </ul>
    );
};

List.propTypes = {
    track: PropTypes.func.isRequired,
};

export default List;
