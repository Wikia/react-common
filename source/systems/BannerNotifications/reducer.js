import { NOTIFICATIONS_ADD, NOTIFICATIONS_REMOVE } from './actions';
import StoreModel from './StoreModel';

function handleAddNotification(state, action) {
    const { text, type, id } = action.payload;

    return state.withNotification(text, type, id);
}

function handleRemoveNotification(state, action) {
    const { id } = action.payload;

    return state.withNotificationRemoved(id);
}

export default function reducer(state = StoreModel.empty(), action = {}) {
    const { type } = action;

    switch (type) {
        case NOTIFICATIONS_ADD:
            return handleAddNotification(state, action);
        case NOTIFICATIONS_REMOVE:
            return handleRemoveNotification(state, action);
        default:
            return state;
    }
}
