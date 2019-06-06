/**
 * A useEffect wrapper that will run a function once and only once, on the first component render
 */
import { useEffect } from 'react';

const registry = {};

const useOnlyOnce = (callback, name) => {
    if (!name) {
        throw new Error('useOnlyOnce requires a name for the callback');
    }

    if (!registry[name]) {
        useEffect(callback, []);
    }

    registry[name] = callback;
};

export default useOnlyOnce;
