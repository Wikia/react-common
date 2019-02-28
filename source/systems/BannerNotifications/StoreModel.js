import { List } from 'immutable';
import uniqueId from 'lodash/uniqueId';

import Model from '../../models/Model';

/**
 * Lowercase, to be compatible with `<BannerNotifications>` component.
 */
export const BANNER_NOTIFICATION_TYPES = {
    MESSAGE: 'message',
    ALERT: 'alert',
    SUCCESS: 'success',
    WARNING: 'warning',
};

export const BANNER_NOTIFICATIONS_MODEL_KEYS = Object.freeze({
    notifications: 'notifications',
});

const schema = {
    [BANNER_NOTIFICATIONS_MODEL_KEYS.notifications]: List(),
};

/**
 * @returns {string}
 */
function generateId() {
    return uniqueId('banner-notification-');
}

/**
 * @param {string} text
 * @param {string} type
 * @param {string} id
 */
function buildNotification(text, type, id) {
    return {
        text,
        type,
        id: id || generateId(),
    };
}

class BannerNotificationsStoreModel extends Model(schema, 'BannerNotificationsStoreModel') {
    _getNotificationsWithoutId(id) {
        return this
            .get(BANNER_NOTIFICATIONS_MODEL_KEYS.notifications)
            .filterNot(item => item.id === id);
    }

    getNotifications() {
        const notifications = this.get(BANNER_NOTIFICATIONS_MODEL_KEYS.notifications, List());

        // when it's empty, sometimes `toJS` returns Object instead of Array :(
        /* istanbul ignore next */
        return notifications.size ? notifications : List();
    }

    /**
     * Adds new notification OR updates existing one if there's id
     *
     * @param {string} text
     * @param {string} type (one of NOTIFICATION_TYPES)
     * @param {int} [id=undefined]
     */
    withNotification(text, type, id = undefined) {
        const notification = buildNotification(text, type, id);
        const notifications = this
            ._getNotificationsWithoutId(id)
            .push(notification);

        return this.set(BANNER_NOTIFICATIONS_MODEL_KEYS.notifications, notifications);
    }

    withNotificationRemoved(id) {
        const notifications = this._getNotificationsWithoutId(id);

        return this.set(BANNER_NOTIFICATIONS_MODEL_KEYS.notifications, notifications);
    }
}

export default BannerNotificationsStoreModel;
