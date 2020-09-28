'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/**
 * Why useInterval hook?
 * @see https://overreacted.io/making-setinterval-declarative-with-react-hooks/
 */

var useInterval = function useInterval(callback, delay) {
  var savedCallback = React.useRef(); // Remember the latest callback.

  React.useEffect(function () {
    savedCallback.current = callback;
  }, [callback]); // Set up the interval.

  React.useEffect(function () {
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

var ONE_SECOND = 1000;
var START = 10;
var HIGH = 7;
var LOW = 3;
/**
 * Simple circular, countdown-from-10 component with callback.
 */

var Countdown = function Countdown(_ref) {
  var className = _ref.className,
      stop = _ref.stop,
      onTick = _ref.onTick;

  var _useState = React.useState(START),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var timerShouldPlay = !stop && value > 0;
  useInterval(function () {
    var newValue = value - 1;
    setValue(newValue);
    onTick(newValue);
  }, timerShouldPlay ? ONE_SECOND : null); // eslint-disable-next-line

  var rangeClassName = value <= LOW ? 'is-low' : value <= HIGH ? 'is-medium' : 'is-high';
  return React__default.createElement("div", {
    className: "countdown__wrapper ".concat(className)
  }, React__default.createElement("span", {
    className: "countdown__value"
  }, value), value > 0 && React__default.createElement("svg", {
    className: "countdown__animation ".concat(rangeClassName)
  }, React__default.createElement("circle", {
    className: timerShouldPlay ? '' : 'is-stopped',
    r: "15",
    cx: "17",
    cy: "17"
  })));
};

Countdown.propTypes = {
  /** Additional class name */
  className: PropTypes.string,

  /** Callback function that will be called at every tick - 1st param is the value */
  onTick: PropTypes.func.isRequired,

  /** if `true` the countdown will be stopped */
  stop: PropTypes.bool
};
Countdown.defaultProps = {
  className: '',
  stop: false
};

module.exports = Countdown;
