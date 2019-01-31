
import { BANNER_NOTIFICATION_TYPES } from './StoreModel';

export const NOTIFICATIONS_ADD = '@Wikia/BannerNotifications/add';
export const NOTIFICATIONS_REMOVE = '@Wikia/BannerNotifications/remove';

/**
 * Add notification, this function is not supposed to be called from outside of this file.
 * It's used only by `addAlert`, `addWarning`, `addSuccess` and `addMessage`.
 */
const addNotification = (text, type, id = undefined) => (
    {
        type: NOTIFICATIONS_ADD,
        payload: {
            text,
            type,
            id,
        },
    }
);

export const addAlert = (text, id) => addNotification(text, BANNER_NOTIFICATION_TYPES.ALERT, id);
export const addWarning = (text, id) => addNotification(text, BANNER_NOTIFICATION_TYPES.WARNING, id);
export const addSuccess = (text, id) => addNotification(text, BANNER_NOTIFICATION_TYPES.SUCCESS, id);
export const addMessage = (text, id) => addNotification(text, BANNER_NOTIFICATION_TYPES.MESSAGE, id);

export const removeNotfication = id => (
    {
        type: NOTIFICATIONS_REMOVE,
        payload: {
            id,
        },
    }
);
