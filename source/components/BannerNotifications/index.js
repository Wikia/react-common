import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line no-restricted-imports
import BannerNotification from '../BannerNotification';

import messageType from './bannerNotificationsMessageType';

/**
 * Component used to create notifications. For full functionality it needs some
 * app logic to handle the array of messages - adding/removing.
 *
 * See the following:
 * - https://github.com/Wikia/f2/blob/master/frontend/react-app/curationTools/containers/Notifications.jsx
 * - https://github.com/Wikia/f2/tree/master/frontend/react-app/curationTools/reducers/notifications
 *
 * The `messages` prop is an array of `bannerNotificationsMessageType` objects with the following props:
 * - `id`: unique string that's send as the param of the `onClose` function
 * - `type`: one of: `'alert'`, `'warning'`, `'success'` or `'message'`.
 * - `text`: text that is going to be displayed on the notification
 * - `permanent`: a boolean flag - if present the close button won't be displayed on the notification
 *
 * `bannerNotificationsMessageType` is exported along with `BannerNotification`
 */
export default class BannerNotifications extends React.Component {
    static propTypes = {
        /** An additional class name */
        className: PropTypes.string,
        /** An array of `bannerNotificationsMessageType` objects */
        messages: PropTypes.arrayOf(messageType).isRequired,
        /** Action invoked when close button is clicked */
        onClose: PropTypes.func.isRequired,
    };

    static defaultProps = {
        className: '',
    };

    onClose = (id) => {
        const { onClose } = this.props;

        onClose(id);
    }

    renderNotification({
        text, type, id, permanent, markup, children
    }) {
        const props = {
            key: id,
            type,
            text,
            markup,
            children
        };

        if (permanent) {
            return <BannerNotification {...props} />;
        }
        return <BannerNotification {...props} onClose={() => this.onClose(id)} />;
    }

    render() {
        const { className, messages } = this.props;

        if (messages.length === 0) {
            return null;
        }

        return (
            <div className={`wds-banner-notification__container ${className}`}>
                {messages.map(message => this.renderNotification(message))}
            </div>
        );
    }
}
