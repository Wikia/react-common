'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var distanceInWordsStrict = _interopDefault(require('date-fns/distance_in_words_strict'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

/**
 * A modified version of the original 'en' translation
 * @see https://github.com/date-fns/date-fns/blob/v1.29.0/src/locale/en/build_distance_in_words_locale/index.js
 *
 * Replace:
 * - "X seconds" -> "Xs"
 * - "X minutes" -> "Xm"
 * - "X hours" -> "Xh"
 * and so on...
 *
 * Disable eslint and istanbul - keep original code formatting intact.
 */

/* eslint-disable */

/* istanbul ignore next */
function buildDistanceInWordsLocale() {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'now',
      other: 'now'
    },
    xSeconds: {
      one: '1s',
      other: '{{count}}s'
    },
    halfAMinute: '<1m',
    lessThanXMinutes: {
      one: '<1m',
      other: '<{{count}}m'
    },
    xMinutes: {
      one: '1m',
      other: '{{count}}m'
    },
    aboutXHours: {
      one: '~1h',
      other: '~{{count}}h'
    },
    xHours: {
      one: '1h',
      other: '{{count}}h'
    },
    xDays: {
      one: '1d',
      other: '{{count}}d'
    },
    aboutXMonths: {
      one: '~1mo',
      other: '~{{count}}mo'
    },
    xMonths: {
      one: '1mo',
      other: '{{count}}mo'
    },
    aboutXYears: {
      one: '~1y',
      other: '~{{count}}y'
    },
    xYears: {
      one: '1y',
      other: '{{count}}y'
    },
    overXYears: {
      one: '>1y',
      other: '>{{count}}y'
    },
    almostXYears: {
      one: '<1y',
      other: '<{{count}}y'
    }
  };

  function localize(token, count, options) {
    options = options || {};
    var result;

    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token];
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one;
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count);
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result;
      } else {
        return result + ' ago';
      }
    }

    return result;
  }

  return {
    localize: localize
  };
}

var buildDistanceInWordsLocale_1 = buildDistanceInWordsLocale;

/**
 * The Timeago component is a small component that
 * shows the number of seconds/minutes/days from given datetime.
 *
 * It all happens after the component is mounted so it's safe to use this
 * component on the Back-End without messing up the hydration.
 */

var Timeago =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Timeago, _React$Component);

  function Timeago() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Timeago);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Timeago)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      display: _this.props.datetime
    });

    return _this;
  }

  _createClass(Timeago, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var datetime = this.props.datetime;
      this.setState({
        display: distanceInWordsStrict(Date.now(), datetime, {
          locale: {
            distanceInWords: buildDistanceInWordsLocale_1()
          }
        })
      });
    }
  }, {
    key: "render",
    value: function render() {
      var datetime = this.props.datetime;
      var display = this.state.display;
      return React.createElement("time", {
        dateTime: datetime
      }, display);
    }
  }]);

  return Timeago;
}(React.Component);

_defineProperty(Timeago, "propTypes", {
  datetime: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired
});

module.exports = Timeago;
