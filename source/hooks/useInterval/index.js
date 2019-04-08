import { useEffect, useRef } from 'react';

/**
 * Why useInterval hook?
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */
const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        if (delay !== null) {
            const id = setInterval(() => savedCallback.current(), delay);
            return () => clearInterval(id);
        }

        return undefined;
    }, [delay]);
};

export default useInterval;
