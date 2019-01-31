import StoreModel from './StoreModel';

import * as actions from './actions';
import reducer from './reducer';

const emptyState = StoreModel.empty();

test('reducer can handle no params', () => {
    const state = reducer();

    expect(state).toEqual(emptyState);
});

test('reducer can handle UNKNOWN action', () => {
    const state = reducer(emptyState, { type: 'UNKNOWN' });

    expect(state).toEqual(emptyState);
});

test('reducer can handle notifications', () => {
    const addAction = actions.addWarning('this is a warning');
    const state = reducer(emptyState, addAction);

    expect(state.notifications.size).toEqual(1);

    const notification = state.notifications.get(0);
    expect(notification.text).toEqual('this is a warning');

    const removeAction = actions.removeNotfication(notification.id);
    const newState = reducer(state, removeAction);

    expect(newState.notifications.size).toEqual(0);
});
