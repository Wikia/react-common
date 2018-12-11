/**
 * BannerNotifications system api:
 * - reducer
 * - Component
 * - actions
 */
export { default as reducer } from './reducer';
export { default as Component } from './Component';
export {
    addAlert,
    addWarning,
    addSuccess,
    addMessage,
    removeNotfication,
} from './actions';
