import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import Api from '../../utils/api';
import { NotificationsProvider } from '../../utils/NotificationContext';
import Notification from '../../models/Notification';

/* eslint-disable react/no-unused-state */
class NotificationsDataProvider extends React.Component {
    constructor(props) {
        super(props);

        this.api = Api.build(props.serviceUrl);

        this.state = {
            unreadCount: 0,
            notifications: [],
            isLoading: false,
            firstPageLoaded: false,
            nextPage: null,
            loadFirstPage: this.loadFirstPage.bind(this),
            loadNextPage: this.loadNextPage.bind(this),
            markAsRead: this.markAsRead.bind(this),
            markAllAsRead: this.markAllAsRead.bind(this),
            goToDestination: this.goToDestination.bind(this),
        };
    }

    componentDidMount() {
        this.loadUnreadNotificationCount();
    }

    getNextPageLink(data) {
        return get(data, '_links.next') || null;
    }

    getUnreadCount(notifications) {
        return notifications.filter(notification => notification.isUnread).length;
    }

    goToDestination(latestEventUri) {
        // TODO check if it's a local url and use transitionTo or delegate to app
        window.location.href = latestEventUri;
    }

    loadFirstPage() {
        const { nextPage, firstPageLoaded } = this.state;


        if (nextPage !== null || firstPageLoaded) {
            return;
        }

        this.loadPage('/notifications?contentType=discussion-upvote&contentType=discussion-post&contentType=announcement-target');
    }

    loadNextPage() {
        const { nextPage } = this.state;

        if (nextPage === null) {
            return;
        }

        this.loadPage(nextPage);
    }

    loadPage(pageLink) {
        const { isLoading, notifications } = this.state;

        if (isLoading) {
            return;
        }

        this.setState({ isLoading: true, firstPageLoaded: true });

        this.api
            .loadPage(pageLink)
            .then((response) => {
                const mappedNotifications = notifications.concat(this.mapNotifications(response.notifications));

                this.setState({
                    notifications: mappedNotifications,
                    nextPage: this.getNextPageLink(response),
                    isLoading: false,
                });
            })
            .catch((error) => {
                this.setState({ isLoading: false });

                console.error('Couldn\'t load notifications', error);
            });
    }

    loadUnreadNotificationCount() {
        this.api
            .loadUnreadNotificationCount()
            .then((result) => {
                this.setState({ unreadCount: result.unreadCount });
            })
            .catch((error) => {
                this.setState({ unreadCount: 0 });

                console.error('Setting notifications unread count to 0 because of the API fetch error', error);
            });
    }

    markAsRead(uri, willUnloadPage) {
        return this.api
            .markAsRead(uri, willUnloadPage)
            .then(() => {
                const updatedNotifications = this.updateUnreadStatus(uri);

                this.setState({
                    notifications: updatedNotifications,
                    unreadCount: this.getUnreadCount(updatedNotifications),
                });
            });
    }

    markAllAsRead() {
        const { notifications } = this.state;

        return this.api
            .markAllAsRead(notifications)
            .then(() => {
                this.setState({
                    notifications: this.updateUnreadStatus(),
                    unreadCount: 0,
                });
            });
    }

    mapNotifications(notifications) {
        return (notifications || []).map(notification => Notification.buildFromJson(notification));
    }

    updateUnreadStatus(uri) {
        const { notifications } = this.state;

        return notifications
            .map(notification => {
                if (!uri || notification.uri === uri) {
                    return Notification.build({ ...notification, isUnread: false });
                }

                return notification;
            });
    }

    render() {
        const { children } = this.props;

        return (
            <NotificationsProvider value={this.state}>
                {children}
            </NotificationsProvider>
        );
    }
}

NotificationsDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
    serviceUrl: PropTypes.string.isRequired,
};

export default NotificationsDataProvider;