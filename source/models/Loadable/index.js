// eslint-disable-next-line no-restricted-imports
import Model from '../Model';

export const LOADABLE_STATES = Object.freeze({
    UNINITIALIZED: 'UNINITIALIZED',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED',
    ERROR: 'ERROR',
});
const LOADABLE_STATES_VALUES = Object.values(LOADABLE_STATES);

const LOADABLE_MODEL_KEYS = Object.freeze({
    state: '_loadable_state',
});

const loadableSchema = {
    [LOADABLE_MODEL_KEYS.state]: LOADABLE_STATES.UNINITIALIZED,
};

const LoadableModel = (defaultValues, name) => class extends Model({
    ...defaultValues,
    ...loadableSchema,
}, name) {
    _getLoadingState() {
        return this.get(LOADABLE_MODEL_KEYS.state);
    }

    _withLoadingState(state) {
        if (LOADABLE_STATES_VALUES.includes(state)) {
            return this.set(LOADABLE_MODEL_KEYS.state, state);
        }

        console.error(`LoadableModel._withLoadingState called with incorrect param: "${state}". Allowed states: ${LOADABLE_STATES_VALUES.join(', ')}.`);

        return this;
    }

    isLoadingUninitialized() {
        return this._getLoadingState() === LOADABLE_STATES.UNINITIALIZED;
    }

    isLoadingInProgress() {
        return this._getLoadingState() === LOADABLE_STATES.IN_PROGRESS;
    }

    isLoadingCompleted() {
        return this._getLoadingState() === LOADABLE_STATES.COMPLETED;
    }

    isLoadingError() {
        return this._getLoadingState() === LOADABLE_STATES.ERROR;
    }

    /**
     * is loading completed or error?
     */
    isLoadingFinished() {
        return this.isLoadingCompleted() || this.isLoadingError();
    }

    withLoadingInProgress() {
        return this._withLoadingState(LOADABLE_STATES.IN_PROGRESS);
    }

    withLoadingCompleted() {
        return this._withLoadingState(LOADABLE_STATES.COMPLETED);
    }

    withLoadingError() {
        return this._withLoadingState(LOADABLE_STATES.ERROR);
    }
};

export default LoadableModel;
