import { BANNER_NOTIFICATION_TYPES } from './StoreModel';
import * as actions from './actions';

test('actions.removeNotfication works', () => {
    const action = actions.removeNotfication(123);

    expect(action).toEqual({
        type: actions.NOTIFICATIONS_REMOVE,
        payload: {
            id: 123,
        },
    });
});

test('actions.addAlert works', () => {
    const action = actions.addAlert('alert', 1);

    expect(action).toEqual({
        type: actions.NOTIFICATIONS_ADD,
        payload: {
            text: 'alert',
            type: BANNER_NOTIFICATION_TYPES.ALERT,
            id: 1,
        },
    });
});

test('actions.addWarning works', () => {
    const action = actions.addWarning('warning', 2);

    expect(action).toEqual({
        type: actions.NOTIFICATIONS_ADD,
        payload: {
            text: 'warning',
            type: BANNER_NOTIFICATION_TYPES.WARNING,
            id: 2,
        },
    });
});

test('actions.addSuccess works', () => {
    const action = actions.addSuccess('OK', 0);

    expect(action).toEqual({
        type: actions.NOTIFICATIONS_ADD,
        payload: {
            text: 'OK',
            type: BANNER_NOTIFICATION_TYPES.SUCCESS,
            id: 0,
        },
    });
});

test('actions.addMessage works', () => {
    const action = actions.addMessage('message', 4);

    expect(action).toEqual({
        type: actions.NOTIFICATIONS_ADD,
        payload: {
            text: 'message',
            type: BANNER_NOTIFICATION_TYPES.MESSAGE,
            id: 4,
        },
    });
});
