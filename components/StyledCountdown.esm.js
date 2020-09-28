import React, { useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

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

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    height: 34px;\n    position: absolute;\n    right: 3px;\n    stroke: ", ";\n    top: 3px;\n    transform: rotateY(-180deg) rotateZ(-90deg);\n    width: 34px;\n    z-index: 1;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    animation: ", " 10s linear forwards;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    fill: none;\n    stroke-dasharray: 95px;\n    stroke-dashoffset: 0;\n    stroke-width: 3px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: ", ";\n    font-weight: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n    background-color: ", ";\n    border-radius: 100%;\n    color: ", ";\n    display: inline-flex;\n    height: 40px;\n    justify-content: center;\n    position: relative;\n    width: 40px;\n\n    &::after {\n        border: 1px solid ", ";\n        border-radius: 100%;\n        content: ' ';\n        height: 30px;\n        left: 4px;\n        position: absolute;\n        top: 4px;\n        width: 30px;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled.div(_templateObject(), function (props) {
  return props.theme.color.white;
}, function (props) {
  return props.theme.color.black;
}, function (props) {
  return props.theme.color.fandom_middle_gray;
});
var Value = styled.span(_templateObject2(), function (props) {
  return props.theme.color.navy;
}, function (props) {
  return props.theme.font_size.l;
}, function (props) {
  return props.theme.font_weight.bold;
});
var circleAnimation = keyframes(["from{stroke-dashoffset:0;}to{stroke-dashoffset:95px;}"]);
var Circle = styled.circle(_templateObject3());
var CircleWithAnimation = styled(Circle)(_templateObject4(), circleAnimation);

function levelToStrokeColor(level, themeColors) {
  switch (level) {
    case 'low':
      return themeColors.alert;

    case 'medium':
      return themeColors.warning;

    default:
      return themeColors.success;
  }
}

var AnimatedProgress = styled.svg(_templateObject5(), function (props) {
  return levelToStrokeColor(props.level, props.theme.color);
});
var ONE_SECOND = 1000;
var START = 10;
var HIGH = 7;
var LOW = 3;
/**
 * Simple circular, countdown-from-10 component with callback.
 */

var StyledCountdown = function StyledCountdown(_ref) {
  var className = _ref.className,
      stop = _ref.stop,
      onTick = _ref.onTick;

  var _useState = useState(START),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var timerShouldPlay = !stop && value > 0;
  React.useEffect(function () {
    setValue(START);
  }, [onTick]);
  useInterval(function () {
    var newValue = value - 1;
    setValue(newValue);
    onTick(newValue);
  }, timerShouldPlay ? ONE_SECOND : null);
  var CircleComponent = timerShouldPlay ? CircleWithAnimation : Circle; // eslint-disable-next-line

  var level = value <= LOW ? 'low' : value <= HIGH ? 'medium' : 'high';
  return React.createElement(Wrapper, {
    className: className
  }, React.createElement(Value, null, value), value > 0 && React.createElement(AnimatedProgress, {
    level: level
  }, React.createElement(CircleComponent, {
    r: "15",
    cx: "17",
    cy: "17"
  })));
};

StyledCountdown.propTypes = {
  /** Additional class name */
  className: PropTypes.string,

  /** Callback function that will be called at every tick - 1st param is the value */
  onTick: PropTypes.func.isRequired,

  /** if `true` the countdown will be stopped */
  stop: PropTypes.bool
};
StyledCountdown.defaultProps = {
  className: null,
  stop: false
};

export default StyledCountdown;
