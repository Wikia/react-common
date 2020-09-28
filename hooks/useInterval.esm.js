import { useRef, useEffect } from 'react';

/**
 * Why useInterval hook?
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */

var useInterval = function useInterval(callback, delay) {
  var savedCallback = useRef(); // Remember the latest callback.

  useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  useEffect(function () {
    if (delay !== null) {
      var id = setInterval(function () {
        return savedCallback.current();
      }, delay);
      return function () {
        return clearInterval(id);
      };
    }

    return undefined;
  }, [delay]);
};

export default useInterval;
