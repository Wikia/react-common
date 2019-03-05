import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useLazyLoad from '../../../../hooks/useLazyLoad';

import Spinner from '../../../Spinner';

import NotificationsContext from '../../models/NotificationContext';

import Card from './Card';

/* eslint-disable react/no-array-index-key */
const List = ({ track }) => {
    const { loadNextPage, notifications, isLoading } = useContext(NotificationsContext);
    const computedClass = classNames(
        'wds-has-lines-between',
        'wds-notifications__notification-list',
        'wds-list',
        { 'is-loading-new-results': isLoading },
    );
    const listEl = useLazyLoad(loadNextPage);

    return (
        <ul className={computedClass} ref={listEl}>
            {
                notifications.map((notification, index) => (
                    <Card
                        key={index}
                        model={notification}
                        track={track}
                    />
                ))
            }
            {
                isLoading && (
                    <li>
                        <Spinner block size="28" stroke="2" />
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
