'use strict';

var react = require('react');

/**
 * Why useInterval hook?
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */

var useInterval = function useInterval(callback, delay) {
  var savedCallback = react.useRef(); // Remember the latest callback.

  react.useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  react.useEffect(function () {
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

module.exports = useInterval;
