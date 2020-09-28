'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var LogoFandomWhite = _interopDefault(require('@wikia/react-common/assets/LogoFandomWhite'));
var reactI18next = require('react-i18next');
var AvatarBadgeAdmin = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeAdmin'));
var AvatarBadgeContentModerator = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeContentModerator'));
var AvatarBadgeDiscussionModerator = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeDiscussionModerator'));
var AvatarBadgeGlobalDiscussionsModerator = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeGlobalDiscussionsModerator'));
var AvatarBadgeHelper = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeHelper'));
var AvatarBadgeStaff = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeStaff'));
var AvatarBadgeVstf = _interopDefault(require('@wikia/react-common/assets/AvatarBadgeVstf'));
var IconAvatar = _interopDefault(require('@wikia/react-common/icons/IconAvatar'));

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

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
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
 * A single WDS icon.
 *
 * **NOTE**: This icon is using `IconSprite` component.
 */

var Icon = function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      small = _ref.small,
      tiny = _ref.tiny,
      rest = _objectWithoutProperties(_ref, ["name", "className", "small", "tiny"]);

  var isSmall = small || /-small$/.test(name);
  var isTiny = tiny || /-tiny$/.test(name);
  var classes = ['wds-icon', className, isSmall ? 'wds-icon-small' : '', isTiny ? 'wds-icon-tiny' : ''].filter(function (c) {
    return c;
  }).join(' ');
  return React__default.createElement("svg", _extends({
    className: classes
  }, rest), React__default.createElement("use", {
    xlinkHref: "#wds-icons-".concat(name)
  }));
};

Icon.propTypes = {
  /** Additional class name */
  className: PropTypes.string,

  /** name - both `-small` and `-tiny` prefix are also updating class name */
  name: PropTypes.string.isRequired,

  /** `wds-icon-small` flag for the class name (but not for the icon name) */
  small: PropTypes.bool,

  /** `wds-icon-tiny` flag for the class name (but not for the icon name) */
  tiny: PropTypes.bool
};
Icon.defaultProps = {
  className: '',
  small: false,
  tiny: false
};

/**
 * Basic button component
 */

var Button = function Button(_ref) {
  var className = _ref.className,
      href = _ref.href,
      text = _ref.text,
      secondary = _ref.secondary,
      square = _ref.square,
      light = _ref.light,
      fullwidth = _ref.fullwidth,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "href", "text", "secondary", "square", "light", "fullwidth", "children"]);

  var classes = ['wds-button', className, secondary ? 'wds-is-secondary' : '', square ? 'wds-is-square' : '', light ? 'wds-is-light' : '', text ? 'wds-is-text' : '', fullwidth ? 'wds-is-fullwidth' : ''].filter(function (c) {
    return c;
  }).join(' ');

  if (href) {
    return React__default.createElement("a", _extends({
      href: href,
      className: classes
    }, rest), children);
  }

  return React__default.createElement("button", _extends({
    className: classes
  }, rest), children);
};

Button.propTypes = {
  /** @ignore */
  children: PropTypes.node,

  /** Additional class name */
  className: PropTypes.string,

  /** Disabled attribute for the `<button>` */
  disabled: PropTypes.bool,

  /** Full width flag */
  fullwidth: PropTypes.bool,

  /** href attribute - `<Button/>` uses `<a>` tag if it's present */
  href: PropTypes.string,

  /** Light flag */
  light: PropTypes.bool,

  /** Callback for the `<button>` */
  onClick: PropTypes.func,

  /** Secondary flag */
  secondary: PropTypes.bool,

  /** Square flag */
  square: PropTypes.bool,

  /** Text flag */
  text: PropTypes.bool
};
Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  fullwidth: false,
  href: null,
  light: false,
  secondary: false,
  square: false,
  text: false,
  onClick: function onClick() {}
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var LogoFandomHeart = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$1({
  viewBox: "0 0 35 35",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React__default.createElement("path", {
  d: "M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 01-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 01-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 01.592 0l11.736 11.603a3.158 3.158 0 010 4.5l-3.503 3.462a.423.423 0 01-.59 0L5.732 11.89a3.132 3.132 0 01-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 012.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 010 .585l-5.64 5.576a.419.419 0 01-.59 0l-5.77-5.704a.411.411 0 010-.585zm14.56-.687L26.014.475a.869.869 0 00-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 008.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 001.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z",
  fill: "#00D6D6",
  fillRule: "evenodd"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var LogoFandomHeart$1 = (function (props) {
  return React__default.createElement(LogoFandomHeart, props);
});

var CommunityBar = function CommunityBar(_ref) {
  var model = _ref.model,
      siteName = _ref.siteName;
  var href = siteName.href,
      title = siteName.title,
      trackingLabel = siteName.tracking_label,
      mobileTitle = siteName.mobile_title;
  return React__default.createElement("div", {
    className: "wds-global-navigation__community-bar"
  }, React__default.createElement("a", {
    href: model.href,
    className: "wds-global-navigation__logo-heart-link",
    "data-tracking-label": model['tracking-label']
  }, React__default.createElement(LogoFandomHeart$1, {
    className: "wds-global-navigation__logo-heart"
  })), React__default.createElement("div", {
    className: "wds-global-navigation__community-bar-separator"
  }), React__default.createElement("div", {
    className: "wds-community-bar__sitename"
  }, React__default.createElement("a", {
    href: href,
    "data-tracking-label": trackingLabel
  }, mobileTitle ? mobileTitle.value : title.value)));
};

CommunityBar.propTypes = {
  model: PropTypes.shape().isRequired,
  siteName: PropTypes.shape().isRequired
};

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return _root.Date.now();
};

var now_1 = now;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

var _getRawTag = getRawTag;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$1.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag$1 = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag$1 && symToStringTag$1 in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

var _baseGetTag = baseGetTag;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike_1(value) && _baseGetTag(value) == symbolTag);
}

var isSymbol_1 = isSymbol;

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol_1(value)) {
    return NAN;
  }
  if (isObject_1(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject_1(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

var toNumber_1 = toNumber;

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber_1(wait) || 0;
  if (isObject_1(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber_1(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now_1();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now_1());
  }

  function debounced() {
    var time = now_1(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var debounce_1 = debounce;

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

var _ListCache = ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache;
  this.size = 0;
}

var _stackClear = stackClear;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject_1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = _baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction;

/** Used to detect overreaching core-js shims. */
var coreJsData = _root['__core-js_shared__'];

var _coreJsData = coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked;

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto$1 = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString$1.call(hasOwnProperty$1).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject_1(value) || _isMasked(value)) {
    return false;
  }
  var pattern = isFunction_1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(_toSource(value));
}

var _baseIsNative = baseIsNative;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

var _getNative = getNative;

/* Built-in method references that are verified to be native. */
var Map = _getNative(_root, 'Map');

var _Map = Map;

/* Built-in method references that are verified to be native. */
var nativeCreate = _getNative(Object, 'create');

var _nativeCreate = nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

var _hashClear = hashClear;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$3.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty$2.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : hasOwnProperty$3.call(data, key);
}

var _hashHas = hashHas;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

var _Hash = Hash;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map || _ListCache),
    'string': new _Hash
  };
}

var _mapCacheClear = mapCacheClear;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

var _mapCacheGet = mapCacheGet;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

var _mapCacheHas = mapCacheHas;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

var _MapCache = MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache) {
    var pairs = data.__data__;
    if (!_Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

var _Stack = Stack;

var defineProperty = (function() {
  try {
    var func = _getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

var _defineProperty$1 = defineProperty;

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty$1) {
    _defineProperty$1(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

var _baseAssignValue = baseAssignValue;

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq_1(object[key], value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignMergeValue = assignMergeValue;

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

var _baseFor = baseFor;

var _cloneBuffer = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
});

/** Built-in value references. */
var Uint8Array = _root.Uint8Array;

var _Uint8Array = Uint8Array;

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array(result).set(new _Uint8Array(arrayBuffer));
  return result;
}

var _cloneArrayBuffer = cloneArrayBuffer;

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? _cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

var _cloneTypedArray = cloneTypedArray;

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

var _copyArray = copyArray;

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject_1(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

var _baseCreate = baseCreate;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg;

/** Built-in value references. */
var getPrototype = _overArg(Object.getPrototypeOf, Object);

var _getPrototype = getPrototype;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

var _isPrototype = isPrototype;

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !_isPrototype(object))
    ? _baseCreate(_getPrototype(object))
    : {};
}

var _initCloneObject = initCloneObject;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike_1(value) && _baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$6.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$6.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return isObjectLike_1(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

var isArray_1 = isArray;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength_1(value.length) && !isFunction_1(value);
}

var isArrayLike_1 = isArrayLike;

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike_1(value) && isArrayLike_1(value);
}

var isArrayLikeObject_1 = isArrayLikeObject;

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse_1;

module.exports = isBuffer;
});

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto$2 = Function.prototype,
    objectProto$7 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$2 = funcProto$2.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString$2.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike_1(value) || _baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = _getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty$5.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString$2.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag$1 = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag$1 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag$1] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$1] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike_1(value) &&
    isLength_1(value.length) && !!typedArrayTags[_baseGetTag(value)];
}

var _baseIsTypedArray = baseIsTypedArray;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary;

var _nodeUtil = createCommonjsModule(function (module, exports) {
/** Detect free variable `exports`. */
var freeExports =  exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});

/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil && _nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? _baseUnary(nodeIsTypedArray) : _baseIsTypedArray;

var isTypedArray_1 = isTypedArray;

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

var _safeGet = safeGet;

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty$6.call(object, key) && eq_1(objValue, value)) ||
      (value === undefined && !(key in object))) {
    _baseAssignValue(object, key, value);
  }
}

var _assignValue = assignValue;

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      _baseAssignValue(object, key, newValue);
    } else {
      _assignValue(object, key, newValue);
    }
  }
  return object;
}

var _copyObject = copyObject;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex;

/** Used for built-in method references. */
var objectProto$9 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray_1(value),
      isArg = !isArr && isArguments_1(value),
      isBuff = !isArr && !isArg && isBuffer_1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray_1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$7.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           _isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys;

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

var _nativeKeysIn = nativeKeysIn;

/** Used for built-in method references. */
var objectProto$a = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$a.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject_1(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = _isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty$8.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

var _baseKeysIn = baseKeysIn;

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike_1(object) ? _arrayLikeKeys(object, true) : _baseKeysIn(object);
}

var keysIn_1 = keysIn;

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return _copyObject(value, keysIn_1(value));
}

var toPlainObject_1 = toPlainObject;

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray_1(srcValue),
        isBuff = !isArr && isBuffer_1(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray_1(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray_1(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject_1(objValue)) {
        newValue = _copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = _cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = _cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject_1(srcValue) || isArguments_1(srcValue)) {
      newValue = objValue;
      if (isArguments_1(objValue)) {
        newValue = toPlainObject_1(objValue);
      }
      else if (!isObject_1(objValue) || isFunction_1(objValue)) {
        newValue = _initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}

var _baseMergeDeep = baseMergeDeep;

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    stack || (stack = new _Stack);
    if (isObject_1(srcValue)) {
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, keysIn_1);
}

var _baseMerge = baseMerge;

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

var identity_1 = identity;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

var _apply = apply;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax$1 = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax$1(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax$1(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

var _overRest = overRest;

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

var constant_1 = constant;

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty$1 ? identity_1 : function(func, string) {
  return _defineProperty$1(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant_1(string),
    'writable': true
  });
};

var _baseSetToString = baseSetToString;

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

var _shortOut = shortOut;

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

var _setToString = setToString;

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, identity_1), func + '');
}

var _baseRest = baseRest;

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject_1(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike_1(object) && _isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq_1(object[index], value);
  }
  return false;
}

var _isIterateeCall = isIterateeCall;

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

var _createAssigner = createAssigner;

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = _createAssigner(function(object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});

var merge_1 = merge;

/**
 * Magic.
 *
 * @see https://stackoverflow.com/a/2117523
 */
function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    /* eslint-disable-next-line */
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : r & 0x3 | 0x8;
    return v.toString(16);
  });
}

function getViewportSize() {
  return {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  };
}

var Element = typeof global.Element === 'undefined' ? null : global.Element;
var refPropType = PropTypes.shape({
  current: PropTypes.instanceOf(Element)
});

/**
 * Basic DropdownContent component
 */

var DropdownContent = function DropdownContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      dropdownLeftAligned = _ref.dropdownLeftAligned,
      dropdownRightAligned = _ref.dropdownRightAligned,
      scrollable = _ref.scrollable,
      isLevel2 = _ref.isLevel2,
      elementRef = _ref.elementRef;
  var allClassNames = classNames({
    'wds-dropdown__content': true,
    'wds-is-left-aligned': dropdownLeftAligned,
    'wds-is-right-aligned': dropdownRightAligned,
    'wds-is-not-scrollable': !scrollable,
    'wds-dropdown-level-2__content': isLevel2
  }, className);
  return React__default.createElement("div", {
    className: allClassNames,
    ref: elementRef
  }, children);
};

DropdownContent.propTypes = {
  /**
   * React Component to display as content
   */
  children: PropTypes.node,

  /**
   * Additional class name
   */
  className: PropTypes.string,

  /**
   * Should content be left-aligned with the dropdown toggle
   */
  dropdownLeftAligned: PropTypes.bool,

  /**
   * Should content be right-aligned with the dropdown toggle
   */
  dropdownRightAligned: PropTypes.bool,

  /**
   * React ref to the content DOM element
   */
  elementRef: refPropType.isRequired,

  /**
   * Should content be scrollable
   */
  isLevel2: PropTypes.bool,

  /**
   * Is it a nested dropdown
   */
  scrollable: PropTypes.bool
};
DropdownContent.defaultProps = {
  children: null,
  className: '',
  dropdownLeftAligned: false,
  dropdownRightAligned: false,
  scrollable: true,
  isLevel2: false
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var IconDropdownTiny = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$2({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 12 12"
}, props), React__default.createElement("defs", null, React__default.createElement("path", {
  id: "dropdown-tiny-a",
  d: "M6 8.8a.798.798 0 01-.565-.234l-3.2-3.2A.8.8 0 012.8 4h6.4a.8.8 0 01.566 1.366l-3.2 3.2A.798.798 0 016 8.8z"
})), React__default.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#dropdown-tiny-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconDropdownTiny$1 = (function (props) {
  return React__default.createElement(IconDropdownTiny, props);
});

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var IconMenuControlTiny = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$3({
  viewBox: "0 0 12 12",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React__default.createElement("path", {
  d: "M11.707 3.293a.999.999 0 00-1.414 0L6 7.586 1.707 3.293A.999.999 0 10.293 4.707l5 5a.997.997 0 001.414 0l5-5a.999.999 0 000-1.414",
  fillRule: "evenodd"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconMenuControlTiny$1 = (function (props) {
  return React__default.createElement(IconMenuControlTiny, props);
});

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var IconMoreSmall = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$4({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 18 18"
}, props), React__default.createElement("defs", null, React__default.createElement("path", {
  id: "more-small",
  d: "M9 5c1.103 0 2-.896 2-2s-.897-2-2-2-2 .896-2 2 .897 2 2 2m0 8c-1.103 0-2 .896-2 2s.897 2 2 2 2-.896 2-2-.897-2-2-2m0-6c-1.103 0-2 .896-2 2s.897 2 2 2 2-.896 2-2-.897-2-2-2"
})), React__default.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#more-small"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconMoreSmall$1 = (function (props) {
  return React__default.createElement(IconMoreSmall, props);
});

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var getToggleIcon = function getToggleIcon(iconName, isLevel2) {
  var iconClassName = isLevel2 ? 'wds-dropdown-chevron' : 'wds-dropdown__toggle-chevron';

  switch (iconName) {
    case 'more':
      return React__default.createElement(IconMoreSmall$1, {
        className: "wds-icon wds-icon-small ".concat(iconClassName)
      });

    case 'dropdown-tiny':
      return React__default.createElement(IconDropdownTiny$1, {
        className: "wds-icon wds-icon-tiny ".concat(iconClassName)
      });

    default:
      return React__default.createElement(IconMenuControlTiny$1, {
        className: "wds-icon wds-icon-tiny ".concat(iconClassName)
      });
  }
};
/**
 * Basic DropdownToggle component
 */


var DropdownToggle = /*#__PURE__*/function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  var _super = _createSuper(DropdownToggle);

  function DropdownToggle() {
    _classCallCheck(this, DropdownToggle);

    return _super.apply(this, arguments);
  }

  _createClass(DropdownToggle, [{
    key: "getToggleContentComponent",
    value: function getToggleContentComponent() {
      var _this$props = this.props,
          toggleContent = _this$props.toggleContent,
          iconName = _this$props.iconName,
          isLevel2 = _this$props.isLevel2;
      var icon = getToggleIcon(iconName, isLevel2);
      var toggleContentComponent;

      if (typeof toggleContent === 'function') {
        toggleContentComponent = toggleContent(icon);
      } else if (typeof toggleContent === 'string') {
        toggleContentComponent = React__default.createElement(React__default.Fragment, null, React__default.createElement("span", null, toggleContent), icon);
      } else {
        toggleContentComponent = toggleContent;
      }

      return toggleContentComponent;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          isLevel2 = _this$props2.isLevel2,
          className = _this$props2.className,
          attrs = _this$props2.attrs,
          onClick = _this$props2.onClick;
      var fullClassName = classNames([{
        'wds-dropdown__toggle': !isLevel2,
        'wds-dropdown-level-2__toggle': isLevel2
      }, className]);
      var toggleContentComponent = this.getToggleContentComponent();
      var Component = attrs.href ? 'a' : 'div';
      return React__default.createElement(Component, _extends({
        onClick: onClick,
        className: fullClassName
      }, attrs, {
        role: "button"
      }), toggleContentComponent);
    }
  }]);

  return DropdownToggle;
}(React__default.Component);

DropdownToggle.propTypes = {
  /**
   * HTML attributes
   */
  attrs: PropTypes.shape({
    href: PropTypes.string
  }),

  /**
   * Dropdown toggle content
   */
  children: PropTypes.node,

  /**
   * HTML classes
   */
  className: PropTypes.string,

  /**
   *  The icon to use for the dropdown chevron
   */
  iconName: PropTypes.oneOf(['more', 'dropdown-tiny', 'menu-control-tiny']).isRequired,

  /**
   * Is it a nested dropdown
   */
  isLevel2: PropTypes.bool,

  /**
   * Whether or not the dropdown is displayed on touch device
   */
  isTouchDevice: PropTypes.bool,

  /**
   * Callback when toggle is clicked
   */
  onClick: PropTypes.func.isRequired,

  /**
   * Content of the toggle
   */
  toggleContent: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]).isRequired
};
DropdownToggle.defaultProps = {
  children: null,
  isLevel2: false,
  className: '',
  attrs: {},
  isTouchDevice: false
};

function _createSuper$1(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
/**
 * Basic Dropdown component
 */

var Dropdown = /*#__PURE__*/function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  var _super = _createSuper$1(Dropdown);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _super.call(this, props);
    _this.state = {
      isClicked: false,
      isFlipped: false,
      isTouchDevice: false
    };
    _this.contentElementRef = React__default.createRef();
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    _this.onToggleClicked = _this.onToggleClicked.bind(_assertThisInitialized(_this));
    _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_this));
    _this.onMouseEnter = _this.onMouseEnter.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        isTouchDevice: typeof window !== 'undefined' && 'ontouchstart' in window
      });
    }
  }, {
    key: "onClick",
    value: function onClick() {
      this.handleClick(false);
    }
  }, {
    key: "onToggleClicked",
    value: function onToggleClicked(event) {
      this.handleClick(true, event);
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      var canFlip = this.props.canFlip;
      var isTouchDevice = this.state.isTouchDevice;

      if (isTouchDevice) {
        this.setState({
          isClicked: false
        });
      }

      if (canFlip && !this.isLevel2) {
        this.setState({
          isFlipped: false
        });
      }
    }
  }, {
    key: "onMouseEnter",
    value: function onMouseEnter(event) {
      var _this$props = this.props,
          canFlip = _this$props.canFlip,
          isLevel2 = _this$props.isLevel2,
          onMouseEnter = _this$props.onMouseEnter;
      var contentElement = this.contentElementRef.current;

      if (canFlip && !isLevel2 && contentElement) {
        var contentElementBoundingRect = contentElement.getBoundingClientRect();
        var isFlipped = contentElementBoundingRect.bottom > getViewportSize().height;
        this.setState({
          isFlipped: isFlipped
        });
      }

      if (onMouseEnter) {
        onMouseEnter(event);
      }
    }
  }, {
    key: "handleClick",
    value: function handleClick(shouldPreventDefault, event) {
      var _this$state = this.state,
          isTouchDevice = _this$state.isTouchDevice,
          isClicked = _this$state.isClicked;
      var onClose = this.props.onClose;

      if (isTouchDevice) {
        this.setState({
          isClicked: !isClicked
        });

        if (shouldPreventDefault) {
          event.preventDefault();
          event.stopPropagation();
        }

        if (isClicked === true && typeof onClose === 'function') {
          onClose();
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          toggle = _this$props2.toggle,
          contentClassName = _this$props2.contentClassName,
          dropdownLeftAligned = _this$props2.dropdownLeftAligned,
          dropdownRightAligned = _this$props2.dropdownRightAligned,
          isLevel2 = _this$props2.isLevel2,
          hasShadow = _this$props2.hasShadow,
          noChevron = _this$props2.noChevron,
          hasDarkShadow = _this$props2.hasDarkShadow,
          isActive = _this$props2.isActive,
          contentScrollable = _this$props2.contentScrollable,
          toggleAttrs = _this$props2.toggleAttrs,
          isStickedToParent = _this$props2.isStickedToParent,
          isNotHoverable = _this$props2.isNotHoverable,
          toggleClassName = _this$props2.toggleClassName,
          iconName = _this$props2.iconName,
          className = _this$props2.className;
      var _this$state2 = this.state,
          isClicked = _this$state2.isClicked,
          isFlipped = _this$state2.isFlipped,
          isTouchDevice = _this$state2.isTouchDevice;
      var allClassNames = classNames({
        'wds-dropdown': !isLevel2,
        'wds-is-active': isClicked || isActive,
        'wds-has-shadow': hasShadow,
        'wds-no-chevron': noChevron,
        'wds-has-dark-shadow': hasDarkShadow,
        'wds-dropdown-level-2': isLevel2,
        'wds-is-touch-device': isTouchDevice,
        'wds-is-sticked-to-parent': isStickedToParent,
        'wds-is-not-hoverable': isNotHoverable,
        'wds-is-flipped': isFlipped
      }, className);
      var dropdownBody = React__default.createElement(React__default.Fragment, null, React__default.createElement(DropdownToggle, {
        isLevel2: isLevel2,
        attrs: toggleAttrs,
        className: toggleClassName,
        isTouchDevice: isTouchDevice,
        toggleContent: toggle,
        onClick: this.onToggleClicked,
        iconName: iconName
      }), React__default.createElement(DropdownContent, {
        className: contentClassName,
        dropdownLeftAligned: dropdownLeftAligned,
        dropdownRightAligned: dropdownRightAligned,
        elementRef: this.contentElementRef,
        isLevel2: isLevel2,
        scrollable: contentScrollable
      }, children));
      var Component = isLevel2 ? 'li' : 'div';
      return React__default.createElement(Component, {
        className: allClassNames,
        onClick: this.onClick,
        onMouseLeave: this.onMouseLeave,
        onMouseEnter: this.onMouseEnter
      }, dropdownBody);
    }
  }]);

  return Dropdown;
}(React__default.Component);

Dropdown.propTypes = {
  /**
   * Whether or nor not dropdown should automatically flip when it's near the bottom of the viewport
   */
  canFlip: PropTypes.bool,

  /**
   * React Component to display as the Dropdown Content
   */
  children: PropTypes.node,

  /**
   * Additional class name
   */
  className: PropTypes.string,

  /**
   * HTML classes to add to content element
   */
  contentClassName: PropTypes.string,

  /**
   * Should dropdown content be scrollable
   */
  contentScrollable: PropTypes.bool,

  /**
   * Should dropdown content be left-aligned with the dropdown toggle
   */
  dropdownLeftAligned: PropTypes.bool,

  /**
   * Should dropdown content be right-aligned with the dropdown toggle
   */
  dropdownRightAligned: PropTypes.bool,

  /**
   * Whether or not dropdown should have a drop shadow (darker than the one produced by hasShadow)
   */
  hasDarkShadow: PropTypes.bool,

  /**
   * Whether or not dropdown should have a slight drop shadow
   */
  hasShadow: PropTypes.bool,

  /**
   *  The icon to use for the dropdown chevron
   */
  iconName: PropTypes.oneOf(['more', 'dropdown-tiny', 'menu-control-tiny']),

  /**
   * is active
   */
  isActive: PropTypes.bool,

  /**
   * Is it a nested dropdown
   */
  isLevel2: PropTypes.bool,

  /**
   * If dropdown should not be hoverable
   */
  isNotHoverable: PropTypes.bool,

  /**
   * if the top of nested dropdown content should be positioned at the same height as toggle
   */
  isStickedToParent: PropTypes.bool,

  /**
   * Should chevron on the top of dropdown content be hidden
   */
  noChevron: PropTypes.bool,

  /**
   * Function to call when dropdown will be closed
   */
  onClose: PropTypes.func,

  /**
   * Function to call when dropdown will be hovered
   */
  onMouseEnter: PropTypes.func,

  /**
   * React Component to display as a dropdown toggle
   */
  toggle: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]).isRequired,

  /**
   * HTML attributes to add to toggle
   */
  toggleAttrs: PropTypes.shape({
    href: PropTypes.string
  }),

  /**
   * HTML classes to add to toggle
   */
  toggleClassName: PropTypes.string
};
Dropdown.defaultProps = {
  canFlip: false,
  children: null,
  className: '',
  contentClassName: '',
  contentScrollable: false,
  dropdownLeftAligned: false,
  dropdownRightAligned: false,
  hasDarkShadow: false,
  hasShadow: false,
  iconName: 'menu-control-tiny',
  isLevel2: false,
  isActive: false,
  isNotHoverable: false,
  isStickedToParent: false,
  noChevron: false,
  onClose: null,
  onMouseEnter: null,
  toggleClassName: '',
  toggleAttrs: {}
};

var List = function List(_ref) {
  var children = _ref.children,
      isLinked = _ref.isLinked,
      bigItems = _ref.bigItems,
      boldItems = _ref.boldItems,
      linesBetween = _ref.linesBetween,
      hasEllipsis = _ref.hasEllipsis,
      className = _ref.className;
  return React__default.createElement("ul", {
    className: classNames('wds-list', className, {
      'wds-has-big-items': bigItems,
      'wds-has-bolded-items': boldItems,
      'wds-has-lines-between': linesBetween,
      'wds-is-linked': isLinked,
      'wds-has-ellipsis': hasEllipsis
    })
  }, children);
};

List.propTypes = {
  /** Whether or not the list contains big items */
  bigItems: PropTypes.bool,

  /** Whether or not list items should be bold */
  boldItems: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hasEllipsis: PropTypes.bool,

  /** Whether or not items are links */
  isLinked: PropTypes.bool,

  /** Whether or not show line separator between items */
  linesBetween: PropTypes.bool
};
List.defaultProps = {
  bigItems: false,
  boldItems: false,
  children: null,
  className: '',
  hasEllipsis: false,
  isLinked: false,
  linesBetween: false
};

var I18nNamespaceContext = React__default.createContext(null);
var I18nNamespaceProvider = I18nNamespaceContext.Provider;
var I18nNamespaceConsumer = I18nNamespaceContext.Consumer;

var SearchInput = React__default.forwardRef(function (props, ref) {
  var model = props.model,
      query = props.query,
      onSearchActivation = props.onSearchActivation,
      onQueryChanged = props.onQueryChanged,
      onFocus = props.onFocus,
      onBlur = props.onBlur,
      onSearchClear = props.onSearchClear,
      onSearchClose = props.onSearchClose,
      onSearchSubmit = props.onSearchSubmit;
  var placeholderConfig = model['placeholder-active'];

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement(React__default.Fragment, null, React__default.createElement("input", {
    className: "wds-global-navigation__search-input",
    placeholder: t(placeholderConfig.key, {
      sitename: placeholderConfig.params.sitename.value
    }),
    value: query,
    onClick: onSearchActivation,
    ref: ref,
    onChange: onQueryChanged,
    onFocus: onFocus,
    onBlur: onBlur,
    type: "search"
  }), React__default.createElement(Button, {
    className: "wds-global-navigation__search-clear",
    type: "button",
    onClick: onSearchClear,
    text: true
  }, React__default.createElement(Icon, {
    name: "add",
    small: true,
    className: "wds-global-navigation__search-clear-icon"
  })), React__default.createElement(Button, {
    className: "wds-global-navigation__search-close",
    type: "button",
    onClick: onSearchClose,
    text: true
  }, React__default.createElement(Icon, {
    name: "close-tiny",
    className: "wds-global-navigation__search-close-icon",
    tiny: true
  })), React__default.createElement(Button, {
    className: "wds-global-navigation__search-submit",
    type: "submit",
    disabled: !query,
    onClick: onSearchSubmit,
    "data-tracking-label": model.results['tracking-label']
  }, React__default.createElement(Icon, {
    name: "arrow-small",
    className: "wds-global-navigation__search-submit-icon",
    small: true
  })));
});
SearchInput.propTypes = {
  model: PropTypes.shape().isRequired,
  onBlur: PropTypes.func.isRequired,
  onFocus: PropTypes.func.isRequired,
  onQueryChanged: PropTypes.func.isRequired,
  onSearchActivation: PropTypes.func.isRequired,
  onSearchClear: PropTypes.func.isRequired,
  onSearchClose: PropTypes.func.isRequired,
  onSearchSubmit: PropTypes.func.isRequired,
  query: PropTypes.string.isRequired
};

var SearchToggle = function SearchToggle(_ref) {
  var onClick = _ref.onClick;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement("div", {
    className: "wds-global-navigation__search-toggle",
    role: "searchbox",
    tabIndex: "0",
    onClick: onClick
  }, React__default.createElement(Icon, {
    name: "magnifying-glass-small",
    className: "wds-global-navigation__search-toggle-icon",
    small: true
  }), React__default.createElement(Icon, {
    name: "magnifying-glass",
    className: "wds-global-navigation__search-toggle-icon"
  }), React__default.createElement("span", {
    className: "wds-global-navigation__search-toggle-text"
  }, t('global-navigation-search-placeholder-inactive')));
};

SearchToggle.propTypes = {
  onClick: PropTypes.func.isRequired
};

function _createSuper$2(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
var MINIMAL_QUERY_LENGTH = 3;
var DEBOUNCE_DURATION = 250;

var Search = /*#__PURE__*/function (_React$Component) {
  _inherits(Search, _React$Component);

  var _super = _createSuper$2(Search);

  function Search(props) {
    var _this;

    _classCallCheck(this, Search);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isMounted", false);

    _defineProperty(_assertThisInitialized(_this), "state", {
      suggestions: [],
      suggestionId: 0,
      requestsInProgress: {},
      cachedResults: {},
      searchRequestInProgress: false,
      inputFocused: false,
      selectedSuggestionIndex: -1,
      query: ''
    });

    _this.input = React__default.createRef();
    _this.onSearchActivation = _this.onSearchActivation.bind(_assertThisInitialized(_this));
    _this.onSearchClear = _this.onSearchClear.bind(_assertThisInitialized(_this));
    _this.onSearchClose = _this.onSearchClose.bind(_assertThisInitialized(_this));
    _this.onSearchSubmit = _this.onSearchSubmit.bind(_assertThisInitialized(_this));
    _this.onQueryChanged = _this.onQueryChanged.bind(_assertThisInitialized(_this));
    _this.onBlur = _this.onBlur.bind(_assertThisInitialized(_this));
    _this.onFocus = _this.onFocus.bind(_assertThisInitialized(_this));
    _this.onKeyDown = _this.onKeyDown.bind(_assertThisInitialized(_this));
    _this.requestSuggestionsFromAPI = debounce_1(_this.requestSuggestionsFromAPI.bind(_assertThisInitialized(_this)), DEBOUNCE_DURATION);
    return _this;
  }

  _createClass(Search, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var inSearchModal = this.props.inSearchModal;
      this.isMounted = true;

      if (inSearchModal) {
        this.input.current.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMounted = false;
    }
  }, {
    key: "onBlur",
    value: function onBlur() {
      var inSearchModal = this.props.inSearchModal;
      var query = this.state.query;

      if (!query && !inSearchModal) {
        this.onSearchClose();
      }
    }
  }, {
    key: "onFocus",
    value: function onFocus() {
      this.setState({
        inputFocused: true
      });
    }
  }, {
    key: "onKeyDown",
    value: function onKeyDown(event) {
      var _this$state = this.state,
          selectedSuggestionIndex = _this$state.selectedSuggestionIndex,
          suggestions = _this$state.suggestions,
          suggestionId = _this$state.suggestionId,
          query = _this$state.query;
      var _this$props = this.props,
          onSearchSuggestionChosen = _this$props.onSearchSuggestionChosen,
          onRedirectToSearchResults = _this$props.onRedirectToSearchResults;
      event.stopPropagation();

      switch (event.keyCode) {
        // down arrow
        case 40:
          if (selectedSuggestionIndex < suggestions.length - 1) {
            this.setState({
              selectedSuggestionIndex: selectedSuggestionIndex + 1
            });
          }

          break;
        // up arrow

        case 30:
          if (suggestions.length && selectedSuggestionIndex > -1) {
            this.setState({
              selectedSuggestionIndex: selectedSuggestionIndex - 1
            });
          }

          break;
        // ESC key

        case 27:
          this.onSearchClose();
          break;
        // ENTER key

        case 13:
          if (selectedSuggestionIndex !== -1) {
            onSearchSuggestionChosen(suggestions[selectedSuggestionIndex], suggestions, suggestionId);
            this.input.current.blur();
            this.onSearchClose();
          } else {
            onRedirectToSearchResults(query);
          }

          break;

      }
    }
  }, {
    key: "onSearchSuggestionClick",
    value: function onSearchSuggestionClick(index, event) {
      var _this$props2 = this.props,
          track = _this$props2.track,
          onSearchSuggestionChosen = _this$props2.onSearchSuggestionChosen;
      var _this$state2 = this.state,
          suggestions = _this$state2.suggestions,
          suggestionId = _this$state2.suggestionId;
      onSearchSuggestionChosen(suggestions[index], suggestions, suggestionId);
      this.onSearchClose();
      track({
        action: 'click',
        category: 'navigation',
        label: 'search-open-suggestion-link'
      });

      if (event) {
        event.preventDefault();
      }
    }
  }, {
    key: "onSearchActivation",
    value: function onSearchActivation() {
      var _this2 = this;

      var _this$props3 = this.props,
          onSearchActivation = _this$props3.onSearchActivation,
          isSearchExpanded = _this$props3.isSearchExpanded;

      if (isSearchExpanded) {
        return;
      }

      this.setState({
        inputFocused: true,
        suggestions: []
      }, function () {
        onSearchActivation();

        _this2.input.current.focus();
      });
    }
  }, {
    key: "onSearchClear",
    value: function onSearchClear() {
      var _this3 = this;

      this.setState({
        suggestions: [],
        searchRequestInProgress: false,
        inputFocused: true,
        selectedSuggestionIndex: -1,
        query: ''
      }, function () {
        _this3.input.current.focus();
      });
    }
  }, {
    key: "onSearchClose",
    value: function onSearchClose() {
      var onSearchClose = this.props.onSearchClose;
      this.setState({
        suggestions: [],
        searchRequestInProgress: false,
        inputFocused: false,
        selectedSuggestionIndex: -1,
        query: ''
      });
      onSearchClose();
    }
  }, {
    key: "onSearchSubmit",
    value: function onSearchSubmit() {
      var _this4 = this;

      var _this$props4 = this.props,
          track = _this$props4.track,
          onRedirectToSearchResults = _this$props4.onRedirectToSearchResults;
      var query = this.state.query;
      track({
        action: 'open',
        category: 'navigation',
        label: 'search-open-special-search'
      });
      this.setState({
        searchRequestInProgress: true
      }, function () {
        onRedirectToSearchResults(query);

        _this4.onSearchClose();
      });
    }
  }, {
    key: "onSuggestionHover",
    value: function onSuggestionHover(index) {
      this.setState({
        selectedSuggestionIndex: index
      });
    }
  }, {
    key: "onQueryChanged",
    value: function onQueryChanged(event) {
      this.getSuggestions(event.target.value);
    }
  }, {
    key: "onRequestEnd",
    value: function onRequestEnd() {
      if (!this.isMounted) {
        return;
      }

      var _this$state3 = this.state,
          query = _this$state3.query,
          requestsInProgress = _this$state3.requestsInProgress;
      this.setState({
        requestsInProgress: _objectSpread2({}, requestsInProgress, _defineProperty({}, query, false))
      });
    }
  }, {
    key: "getSuggestions",
    value: function getSuggestions(query) {
      if (!this.isMounted) {
        return;
      }

      var cachedResults = this.state.cachedResults;
      var isQueryTooShort = !query || query.length < MINIMAL_QUERY_LENGTH;
      this.setState({
        suggestions: [],
        selectedSuggestionIndex: -1,
        searchRequestInProgress: false,
        query: query
      });

      if (isQueryTooShort) {
        return;
      }

      if (this.hasCachedResult(query)) {
        this.setSuggestions(cachedResults[query]);
      } else {
        this.requestSuggestionsFromAPI();
      }
    }
  }, {
    key: "setSuggestions",
    value: function setSuggestions(suggestions) {
      if (!this.isMounted) {
        return;
      }

      var onSearchSuggestionsImpression = this.props.onSearchSuggestionsImpression;
      var suggestionId = uuidv4();
      this.setState({
        suggestions: suggestions,
        suggestionId: suggestionId
      }, function () {
        onSearchSuggestionsImpression(suggestions, suggestionId);
      });
    }
  }, {
    key: "requestSuggestionsFromAPI",
    value: function requestSuggestionsFromAPI() {
      var _this5 = this;

      var _this$state4 = this.state,
          query = _this$state4.query,
          searchRequestInProgress = _this$state4.searchRequestInProgress,
          requestsInProgress = _this$state4.requestsInProgress;
      var model = this.props.model;
      /**
       * This was queued to run before the user has finished typing, and when they
       * finished typing it may have turned out that they were just backspacing OR
       * they finished typing something that was already in the cache, in which case
       * we just ignore this request because the search fn already put the cached
       * value into the window.
       */

      if (requestsInProgress[query] || !this.isMounted) {
        return Promise.reject();
      }

      this.setState({
        requestsInProgress: _objectSpread2({}, requestsInProgress, _defineProperty({}, query, true))
      });
      return fetch("".concat(model.suggestions.url, "&query=").concat(query)).then(function (response) {
        if (response.ok) {
          /* istanbul ignore next */
          if (!_this5.isMounted) {
            return null;
          }

          return response.json();
        }

        if (response.status === 404) {
          // When we get a 404, it means there were no results
          return {
            suggestions: []
          };
        }

        console.error('Search suggestions error', response);
        return null;
      }).then(function (response) {
        if (!response || searchRequestInProgress) {
          return;
        }

        _this5.setSuggestions(response.suggestions);

        _this5.cacheResult(query, response.suggestions);
      }).catch(function (reason) {
        console.error('Search suggestions error', reason);

        _this5.onRequestEnd();
      }).then(function () {
        return _this5.onRequestEnd();
      });
    }
  }, {
    key: "escapeRegex",
    value: function escapeRegex(text) {
      return text.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    }
  }, {
    key: "normalizeToUnderscore",
    value: function normalizeToUnderscore(title) {
      return title.replace(/\s/g, '_').replace(/_+/g, '_');
    }
  }, {
    key: "cacheResult",
    value: function cacheResult(query, suggestions) {
      var cachedResults = this.state.cachedResults;
      this.setState({
        cachedResults: merge_1({}, cachedResults, _defineProperty({}, query, suggestions || []))
      });
    }
  }, {
    key: "hasCachedResult",
    value: function hasCachedResult(query) {
      var cachedResults = this.state.cachedResults;
      return Object.prototype.hasOwnProperty.call(cachedResults, query);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var model = this.props.model;
      var query = this.state.query;
      return React__default.createElement(SearchInput, {
        ref: this.input,
        model: model,
        query: query,
        onSearchClear: this.onSearchClear,
        onSearchActivation: this.onSearchActivation,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onQueryChanged: this.onQueryChanged,
        onSearchClose: this.onSearchClose,
        onSearchSubmit: this.onSearchSubmit
      });
    }
  }, {
    key: "renderSuggestions",
    value: function renderSuggestions() {
      var _this6 = this;

      var _this$state5 = this.state,
          suggestions = _this$state5.suggestions,
          query = _this$state5.query,
          selectedSuggestionIndex = _this$state5.selectedSuggestionIndex;
      var model = this.props.model;
      var highlightRegex = new RegExp("(".concat(this.escapeRegex(query), ")"), 'ig');
      return suggestions.map(function (suggestion, index) {
        var match = suggestion.match(highlightRegex);
        var highlightedPart = match ? match[0] : match;
        var regularPart = suggestion.replace(highlightRegex, '');
        var wrapperClassName = classNames('wds-global-navigation__search__suggestion', {
          'wds-is-selected': selectedSuggestionIndex === index
        });
        return React__default.createElement("li", {
          key: suggestion,
          className: wrapperClassName,
          onClick: _this6.onSearchSuggestionClick.bind(_this6, index),
          onMouseEnter: _this6.onSuggestionHover.bind(_this6, index)
        }, React__default.createElement("a", {
          href: _this6.normalizeToUnderscore(suggestion),
          className: "wds-global-navigation__dropdown-link",
          "data-tracking-label": model.suggestions['tracking-label']
        }, highlightedPart && React__default.createElement("span", {
          className: "wds-global-navigation__search-suggestion-highlight"
        }, highlightedPart), regularPart));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state6 = this.state,
          inputFocused = _this$state6.inputFocused,
          suggestions = _this$state6.suggestions;
      var hasSuggestions = Boolean(suggestions.length);
      var computedClass = classNames('wds-global-navigation__search-container', {
        'wds-search-is-focused': inputFocused
      });
      return React__default.createElement("form", {
        className: computedClass,
        onKeyDown: this.onKeyDown
      }, React__default.createElement("div", {
        className: "wds-global-navigation__search"
      }, React__default.createElement(SearchToggle, {
        onClick: this.onSearchActivation
      }), React__default.createElement(Dropdown, {
        className: "wds-global-navigation__search-dropdown",
        toggle: this.renderInput(),
        toggleClassName: "wds-global-navigation__search-input-wrapper",
        contentClassName: "wds-global-navigation__search-suggestions",
        isActive: hasSuggestions,
        isNotHoverable: !hasSuggestions,
        iconName: "dropdown-tiny",
        noChevron: true
      }, hasSuggestions && React__default.createElement(List, {
        className: "wds-global-navigation__search-suggestions-list",
        isLinked: true,
        hasEllipsis: true
      }, this.renderSuggestions()))));
    }
  }]);

  return Search;
}(React__default.Component);

Search.propTypes = {
  inSearchModal: PropTypes.bool,
  isSearchExpanded: PropTypes.bool.isRequired,
  model: PropTypes.shape().isRequired,
  onRedirectToSearchResults: PropTypes.func.isRequired,
  onSearchActivation: PropTypes.func.isRequired,
  onSearchClose: PropTypes.func.isRequired,
  onSearchSuggestionChosen: PropTypes.func.isRequired,
  onSearchSuggestionsImpression: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired
};
Search.defaultProps = {
  inSearchModal: false
};

var LinkText = function LinkText(_ref) {
  var link = _ref.link,
      isStandaloneLink = _ref.isStandaloneLink;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement("a", {
    href: link.href,
    "data-tracking-label": link['tracking-label'],
    className: classNames({
      'wds-global-navigation__link': isStandaloneLink
    })
  }, t(link.title.key));
};

LinkText.propTypes = {
  isStandaloneLink: PropTypes.bool,
  link: PropTypes.shape().isRequired
};
LinkText.defaultProps = {
  isStandaloneLink: false
};

var LinkButton = function LinkButton(_ref) {
  var link = _ref.link;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement(Button, {
    className: "wds-global-navigation__link-button",
    secondary: true,
    "data-tracking-label": link['tracking-label'],
    href: link.href
  }, t(link.title.key));
};

LinkButton.propTypes = {
  link: PropTypes.shape().isRequired
};

/* eslint-disable react/no-array-index-key */

var LinkGroup = function LinkGroup(_ref) {
  var link = _ref.link;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement(Dropdown, {
    toggle: t(link.title.key),
    className: "wds-global-navigation__link-group",
    toggleClassName: "wds-global-navigation__link",
    contentClassName: "wds-global-navigation__dropdown-content",
    iconName: "dropdown-tiny",
    hasShadow: true
  }, React__default.createElement(List, {
    isLinked: true
  }, link.items.map(function (item, index) {
    var linkEl;

    if (item.type === 'link-text') {
      linkEl = React__default.createElement(LinkText, {
        link: item
      });
    } else {
      linkEl = React__default.createElement(LinkButton, {
        link: item
      });
    }

    return React__default.createElement("li", {
      key: index
    }, linkEl);
  })));
};

LinkGroup.propTypes = {
  link: PropTypes.shape().isRequired
};

var Badge = function Badge(_ref) {
  var badge = _ref.badge,
      className = _ref.className;
  var badgeIcons = {
    sysop: {
      icon: React__default.createElement(AvatarBadgeAdmin, null),
      title: 'Community Admin'
    },
    'content-moderator': {
      icon: React__default.createElement(AvatarBadgeContentModerator, null),
      title: 'Content Moderator'
    },
    threadmoderator: {
      icon: React__default.createElement(AvatarBadgeDiscussionModerator, null),
      title: 'Discussions Moderator'
    },
    'global-discussions-moderator': {
      icon: React__default.createElement(AvatarBadgeGlobalDiscussionsModerator, null),
      title: 'Global Discussions Moderator'
    },
    helper: {
      icon: React__default.createElement(AvatarBadgeHelper, null),
      title: 'FANDOM Helper'
    },
    staff: {
      icon: React__default.createElement(AvatarBadgeStaff, null),
      title: 'FANDOM Staff'
    },
    vstf: {
      icon: React__default.createElement(AvatarBadgeVstf, null),
      title: 'VSTF'
    }
  };
  var badgeIcon = badgeIcons[badge];
  return badgeIcon ? React__default.createElement("span", {
    title: badgeIcon.title,
    className: "wds-avatar__badge ".concat(className)
  }, badgeIcon.icon) : null;
};

Badge.propTypes = {
  badge: PropTypes.string,
  className: PropTypes.string
};
Badge.defaultProps = {
  badge: undefined,
  className: ''
};

var AvatarImage = function AvatarImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  var className = 'wds-avatar__image';
  return src ? React__default.createElement("img", {
    src: src,
    alt: alt,
    title: alt,
    className: className
  }) : React__default.createElement(IconAvatar, {
    className: "wds-avatar__image",
    title: className
  });
};

AvatarImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
};
AvatarImage.defaultProps = {
  alt: undefined,
  src: undefined
};

function getAvatarImage(href, alt, src, linkBuilder) {
  var avatarImage = React__default.createElement(AvatarImage, {
    alt: alt,
    src: src
  });

  if (linkBuilder) {
    return linkBuilder(avatarImage);
  }

  return href ? React__default.createElement("a", {
    href: href
  }, avatarImage) : avatarImage;
}

function _createSuper$3(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var Avatar = /*#__PURE__*/function (_React$Component) {
  _inherits(Avatar, _React$Component);

  var _super = _createSuper$3(Avatar);

  function Avatar() {
    var _this;

    _classCallCheck(this, Avatar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      imageSrc: _this.props.src
    });

    return _this;
  }

  _createClass(Avatar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.state.imageSrc && this.props.userId) {
        // eslint-disable-next-line
        fetch("https://services.wikia.com/user-attribute/user/".concat(this.props.userId, "/attr/avatar")).then(function (response) {
          return response.json();
        }).then(function (data) {
          return _this2.setState({
            imageSrc: data.value
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          alt = _this$props.alt,
          badge = _this$props.badge,
          className = _this$props.className,
          href = _this$props.href,
          title = _this$props.title,
          linkBuilder = _this$props.linkBuilder;
      return React__default.createElement("div", {
        className: classNames('wds-avatar', className),
        title: title
      }, getAvatarImage(href, alt, this.state.imageSrc, linkBuilder), badge && React__default.createElement(Badge, {
        badge: badge
      }));
    }
  }]);

  return Avatar;
}(React__default.Component);

Avatar.propTypes = {
  /** Alt text for avatar */
  alt: PropTypes.string,

  /** Badge to display for avatar. */
  badge: PropTypes.oneOf(['content-moderator', 'discussion-moderator', 'sysop', 'global-discussions-moderator', 'helper', 'staff', 'vstf', '']),

  /** Additional class name */
  className: PropTypes.string,

  /** Link to user's profile */
  href: PropTypes.string,

  /** Function which returns wrapped AvatarImage, accepts one argument avatarImage which provides the actual avatar image */
  linkBuilder: PropTypes.func,

  /** Image src for avatar */
  src: PropTypes.string,

  /** Title attribute for avatar */
  title: PropTypes.string,

  /** Optional user ID to fetch avatar for, if `src` prop is not provided */
  userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Avatar.defaultProps = {
  alt: 'User avatar',
  badge: undefined,
  className: undefined,
  href: undefined,
  linkBuilder: undefined,
  src: undefined,
  title: undefined,
  userId: undefined
};

function _createSuper$4(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

var withRedirectUrl = function withRedirectUrl(Component) {
  var ComponentWrapper = /*#__PURE__*/function (_React$Component) {
    _inherits(ComponentWrapper, _React$Component);

    var _super = _createSuper$4(ComponentWrapper);

    function ComponentWrapper(props) {
      var _this;

      _classCallCheck(this, ComponentWrapper);

      _this = _super.call(this, props);
      _this.state = {
        redirectUrl: 'https://fandom.com'
      };
      _this.getUrlWithRedirect = _this.getUrlWithRedirect.bind(_assertThisInitialized(_this));
      return _this;
    }

    _createClass(ComponentWrapper, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setState({
          redirectUrl: window.location.href
        });
      }
    }, {
      key: "getUrlWithRedirect",
      value: function getUrlWithRedirect(href, paramName) {
        var redirectUrl = this.state.redirectUrl;
        var url = new URL(href);
        url.searchParams.set(paramName, redirectUrl);
        return url.href;
      }
    }, {
      key: "render",
      value: function render() {
        var redirectUrl = this.state.redirectUrl;
        return React__default.createElement(Component, _extends({}, this.props, {
          redirectUrl: redirectUrl,
          getUrlWithRedirect: this.getUrlWithRedirect
        }));
      }
    }]);

    return ComponentWrapper;
  }(React__default.Component);

  return ComponentWrapper;
};

var LinkLogOut = function LinkLogOut(_ref) {
  var link = _ref.link,
      redirectUrl = _ref.redirectUrl,
      className = _ref.className;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement("div", {
    id: link.title.key,
    className: className
  }, React__default.createElement("form", {
    method: "POST",
    action: link.href
  }, React__default.createElement("input", {
    type: "hidden",
    name: link['param-name'],
    value: redirectUrl
  }), React__default.createElement("button", {
    type: "submit",
    className: "wds-sign-out__button",
    "data-tracking-label": link['tracking-label']
  }, t(link.title.key))));
};

LinkLogOut.propTypes = {
  className: PropTypes.string,
  link: PropTypes.shape().isRequired,
  redirectUrl: PropTypes.string.isRequired
};
LinkLogOut.defaultProps = {
  className: ''
};
var LinkLogOut$1 = withRedirectUrl(LinkLogOut);

var UserToggle = function UserToggle(_ref) {
  var chevron = _ref.chevron,
      data = _ref.data;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Avatar, {
    alt: data.username,
    src: data.avatar_url
  }), chevron);
};

UserToggle.propTypes = {
  chevron: PropTypes.node.isRequired,
  data: PropTypes.shape().isRequired
};
/* eslint-disable react/no-array-index-key */

var UserLoggedIn = function UserLoggedIn(_ref2) {
  var data = _ref2.data;
  return React__default.createElement(Dropdown, {
    toggle: function toggle(chevron) {
      return React__default.createElement(UserToggle, {
        chevron: chevron,
        data: data
      });
    },
    className: "wds-global-navigation__user-menu wds-global-navigation__user-logged-in",
    contentScrollable: false,
    contentClassName: "wds-global-navigation__dropdown-content",
    iconName: "dropdown-tiny",
    hasShadow: true,
    dropdownRightAligned: true
  }, React__default.createElement(List, {
    isLinked: true
  }, data.items.map(function (item, index) {
    if (item.type === 'link-text') {
      return React__default.createElement("li", {
        key: index
      }, React__default.createElement(LinkText, {
        link: item
      }));
    }

    if (item.type === 'link-logout') {
      return React__default.createElement("li", {
        key: index
      }, React__default.createElement(LinkLogOut$1, {
        link: item
      }));
    }

    return null;
  })));
};

UserLoggedIn.propTypes = {
  data: PropTypes.shape().isRequired
};

var UserToggle$1 = function UserToggle(_ref) {
  var chevron = _ref.chevron;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Avatar, null), chevron);
};

UserToggle$1.propTypes = {
  chevron: PropTypes.node.isRequired
};

var UserAnon = function UserAnon(_ref2) {
  var data = _ref2.data,
      getUrlWithRedirect = _ref2.getUrlWithRedirect;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement(Dropdown, {
    toggle: function toggle(chevron) {
      return React__default.createElement(UserToggle$1, {
        chevron: chevron
      });
    },
    className: "wds-global-navigation__user-menu wds-global-navigation__user-anon",
    contentScrollable: false,
    contentClassName: "wds-global-navigation__dropdown-content",
    iconName: "dropdown-tiny",
    hasShadow: true,
    dropdownRightAligned: true
  }, React__default.createElement(List, {
    linesBetween: true
  }, React__default.createElement("li", null, React__default.createElement(Button, {
    fullwidth: true,
    href: getUrlWithRedirect(data.signin.href, data.signin['param-name']),
    rel: "nofollow",
    "data-tracking-label": data.signin['tracking-label']
  }, t(data.signin.title.key))), React__default.createElement("li", null, React__default.createElement("div", {
    className: "wds-global-navigation__user-menu-dropdown-caption"
  }, t('global-navigation-anon-register-description')), React__default.createElement(Button, {
    href: getUrlWithRedirect(data.register.href, data.register['param-name']),
    rel: "nofollow",
    "data-tracking-label": data.register['tracking-label'],
    fullwidth: true,
    secondary: true
  }, t(data.register.title.key)))));
};

UserAnon.propTypes = {
  data: PropTypes.shape().isRequired,
  getUrlWithRedirect: PropTypes.func.isRequired
};
var UserAnon$1 = withRedirectUrl(UserAnon);

var User = function User(_ref) {
  var data = _ref.data;

  if (data.user) {
    return React__default.createElement(UserLoggedIn, {
      data: data.user
    });
  }

  if (data.anon) {
    return React__default.createElement(UserAnon$1, {
      data: data.anon
    });
  }

  return null;
};

User.propTypes = {
  data: PropTypes.shape().isRequired
};

var SearchModal = function SearchModal(_ref) {
  var openModal = _ref.openModal,
      children = _ref.children,
      isOpen = _ref.isOpen;
  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Button, {
    className: "wds-global-navigation__modal-control wds-global-navigation__modal-control-search",
    onClick: function onClick() {
      return openModal('search');
    },
    text: true
  }, React__default.createElement(Icon, {
    name: "magnifying-glass"
  })), isOpen && React__default.createElement("div", {
    className: "wds-global-navigation__modal wds-search-modal"
  }, React__default.createElement("div", {
    className: "wds-search-modal__form-and-links-wrapper"
  }, children)));
};

SearchModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired
};

var MobileAnon = function MobileAnon(_ref) {
  var model = _ref.model,
      getUrlWithRedirect = _ref.getUrlWithRedirect;
  return React__default.createElement(Button, {
    className: "wds-global-navigation__modal-control wds-global-navigation__modal-control-anon",
    href: getUrlWithRedirect(model.signin.href, model.signin['param-name']),
    text: true
  }, React__default.createElement(Avatar, null));
};

MobileAnon.propTypes = {
  getUrlWithRedirect: PropTypes.func.isRequired,
  model: PropTypes.shape().isRequired
};
var MobileAnon$1 = withRedirectUrl(MobileAnon);

var NotificationsContext = React__default.createContext({});
var NotificationsProvider = NotificationsContext.Provider;
var NotificationsConsumer = NotificationsContext.Consumer;

var MarkAllButton = function MarkAllButton(_ref) {
  var track = _ref.track,
      header = _ref.header;

  var _useContext = React.useContext(NotificationsContext),
      markAllAsRead = _useContext.markAllAsRead;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  var onClick = React.useCallback(function () {
    track({
      action: 'click',
      category: 'on-site-notifications',
      label: 'mark-all-as-read'
    });
    markAllAsRead();
  }, [markAllAsRead, track]);
  return React__default.createElement("div", {
    className: "wds-notifications__mark-all-as-read-button"
  }, header && React__default.createElement("p", {
    className: "wds-notifications__header"
  }, header), React__default.createElement("a", {
    onClick: onClick,
    className: "wds-notifications__mark-all-as-read"
  }, t('notifications-mark-all-as-read')));
};

MarkAllButton.propTypes = {
  header: PropTypes.string.isRequired,
  track: PropTypes.func.isRequired
};

var BOTTOM_COMPENSATION = 100;

var hasAlmostScrolledToTheBottom = function hasAlmostScrolledToTheBottom(element) {
  return element.scrollHeight - BOTTOM_COMPENSATION <= element.scrollTop + element.offsetHeight;
};

var getOnScrollListener = function getOnScrollListener(handler) {
  return function (event) {
    /* istanbul ignore else */
    if (hasAlmostScrolledToTheBottom(event.target)) {
      handler();
    }
  };
};

var useLazyLoad = function useLazyLoad(lazyLoadHandler) {
  var element = React.useRef(null);
  React.useEffect(function () {
    var onScroll = getOnScrollListener(lazyLoadHandler);
    element.current.addEventListener('scroll', onScroll);
    return function () {
      element.current.removeEventListener('scroll', onScroll);
    };
  });
  return element;
};

/**
 * Loader block component used to indicate loading state.
 *
 * Based on http://fandomdesignsystem.com/#/components/progress-indicators
 */

var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      size = _ref.size,
      stroke = _ref.stroke,
      block = _ref.block,
      inline = _ref.inline;
  var style = {
    width: size,
    height: size
  };
  var r = (size - stroke) / 2;
  var translate = r + stroke / 2;
  var dash = 2 * Math.PI * r;
  var classes = ['fandom-spinner'];

  if (block) {
    classes.push('is-block');
  }

  if (inline) {
    classes.push('is-inline');
  }

  if (className) {
    classes.push(className);
  }

  return React__default.createElement("div", {
    className: classes.join(' '),
    style: style
  }, React__default.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size),
    xmlns: "http://www.w3.org/2000/svg"
  }, React__default.createElement("g", {
    transform: "translate(".concat(translate, ", ").concat(translate, ")")
  }, React__default.createElement("circle", {
    fill: "none",
    strokeWidth: stroke,
    strokeDasharray: dash,
    strokeDashoffset: dash,
    strokeLinecap: "round",
    r: r
  }))));
};

Spinner.propTypes = {
  /** Display block and center */
  block: PropTypes.bool,

  /** Additional class name */
  className: PropTypes.string,

  /** Display content inline based on line height */
  inline: PropTypes.bool,

  /** Loader size */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Stroke width */
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Spinner.defaultProps = {
  className: '',
  size: 30,
  stroke: 2,
  block: false,
  inline: false
};

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray_1(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol_1(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

var _isKey = isKey;

/** Error message constants. */
var FUNC_ERROR_TEXT$1 = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT$1);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || _MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = _MapCache;

var memoize_1 = memoize;

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize_1(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

var _memoizeCapped = memoizeCapped;

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = _memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

var _stringToPath = stringToPath;

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

var _arrayMap = arrayMap;

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray_1(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return _arrayMap(value, baseToString) + '';
  }
  if (isSymbol_1(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

var _baseToString = baseToString;

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : _baseToString(value);
}

var toString_1 = toString;

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray_1(value)) {
    return value;
  }
  return _isKey(value, object) ? [value] : _stringToPath(toString_1(value));
}

var _castPath = castPath;

/** Used as references for various `Number` constants. */
var INFINITY$1 = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol_1(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY$1) ? '-0' : result;
}

var _toKey = toKey;

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = _castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[_toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

var _baseGet = baseGet;

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : _baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

var get_1 = get;

var SECOND_MILLISECONDS = 1000;
var MINUTE_SECONDS = 60;
var HOUR_SECONDS = 60 * MINUTE_SECONDS;
var DAY_SECONDS = 24 * HOUR_SECONDS;
var FIVE_DAYS_SECONDS = 5 * DAY_SECONDS;
var TIMEAGO_SHOW_DATE_THRESHOLD = FIVE_DAYS_SECONDS;
var TIMEAGO_NOW_THRESHOLD = MINUTE_SECONDS;
/**
 * The Timeago component is a small component that
 * shows the number of seconds/minutes/days from given datetime.
 */

function Timeago(_ref) {
  var datetime = _ref.datetime,
      renderNow = _ref.renderNow,
      renderDate = _ref.renderDate,
      renderDays = _ref.renderDays,
      renderHours = _ref.renderHours,
      renderMinutes = _ref.renderMinutes;
  var date = new Date(datetime);

  var withCustomRender = function withCustomRender(renderFunction, value) {
    var defaultElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : value;
    return typeof renderFunction === 'function' ? renderFunction(value) : defaultElement;
  };

  var renderTime = function renderTime() {
    var now = Date.now();
    var diffInSeconds = (now - date.getTime()) / SECOND_MILLISECONDS;

    if (diffInSeconds > TIMEAGO_SHOW_DATE_THRESHOLD) {
      var dateString = date.toLocaleDateString();
      return withCustomRender(renderDate, dateString);
    }

    if (diffInSeconds > DAY_SECONDS) {
      // more than a day ago
      var days = Math.round(diffInSeconds / DAY_SECONDS);
      return withCustomRender(renderDays, days, "".concat(days, "d"));
    }

    if (diffInSeconds > HOUR_SECONDS) {
      // more than an hour ago
      var hours = Math.round(diffInSeconds / HOUR_SECONDS);
      return withCustomRender(renderHours, hours, "".concat(hours, "h"));
    }

    if (diffInSeconds > TIMEAGO_NOW_THRESHOLD) {
      var minutes = Math.round(diffInSeconds / MINUTE_SECONDS);
      return withCustomRender(renderMinutes, minutes, "".concat(minutes, "m"));
    } // less than a minute ago


    return typeof renderNow === 'function' ? renderNow() : 'now';
  };

  return React__default.createElement("time", {
    dateTime: date.toLocaleString(),
    title: date.toLocaleString()
  }, renderTime());
}
Timeago.propTypes = {
  datetime: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
  renderDate: PropTypes.func,
  renderDays: PropTypes.func,
  renderHours: PropTypes.func,
  renderMinutes: PropTypes.func,
  renderNow: PropTypes.func
};
Timeago.defaultProps = {
  renderDays: null,
  renderHours: null,
  renderMinutes: null,
  renderDate: null,
  renderNow: null
};

/* eslint-disable react/no-array-index-key */

var AvatarStack = function AvatarStack(_ref) {
  var avatars = _ref.avatars,
      overrideCount = _ref.overrideCount,
      maxStackSize = _ref.maxStackSize,
      hideOverflow = _ref.hideOverflow,
      className = _ref.className;
  var count = overrideCount || avatars.length;
  var overflow = !hideOverflow && (count > maxStackSize ? count - maxStackSize : 0);
  return React__default.createElement("div", {
    className: classNames('wds-avatar-stack', className)
  }, avatars.slice(0, maxStackSize).map(function (avatarProps, index) {
    return React__default.createElement(Avatar, _extends({
      key: index
    }, avatarProps));
  }), overflow && React__default.createElement("div", {
    className: "wds-avatar-stack__overflow"
  }, "+".concat(overflow)));
};

AvatarStack.propTypes = {
  /* An array of `Avatar` props */
  avatars: PropTypes.arrayOf(PropTypes.shape()).isRequired,

  /* Additional class name */
  className: PropTypes.string,

  /* Flag to hide overflow */
  hideOverflow: PropTypes.bool,

  /* Max stack size */
  maxStackSize: PropTypes.number,

  /* If specified, it will be used instead of `avatars.length` */
  overrideCount: PropTypes.number
};
AvatarStack.defaultProps = {
  className: '',
  hideOverflow: false,
  maxStackSize: 5,
  overrideCount: 0
};

var notificationTypes = {
  discussionUpvotePost: 'discussion-upvote-post',
  discussionUpvoteReply: 'discussion-upvote-reply',
  discussionReply: 'discussion-reply',
  announcement: 'announcement',
  postAtMention: 'post-at-mention',
  threadAtMention: 'thread-at-mention',
  articleCommentReply: 'article-comment-reply',
  articleCommentAtMention: 'article-comment-at-mention',
  articleCommentReplyAtMention: 'article-comment-reply-at-mention'
};
var isDiscussionReply = function isDiscussionReply(type) {
  return type === notificationTypes.discussionReply;
};
var isDiscussionReplyUpvote = function isDiscussionReplyUpvote(type) {
  return type === notificationTypes.discussionUpvoteReply;
};
var isDiscussionPostUpvote = function isDiscussionPostUpvote(type) {
  return type === notificationTypes.discussionUpvotePost;
};
var isAnnouncement = function isAnnouncement(type) {
  return type === notificationTypes.announcement;
};
var isPostAtMention = function isPostAtMention(type) {
  return type === notificationTypes.postAtMention;
};
var isThreadAtMention = function isThreadAtMention(type) {
  return type === notificationTypes.threadAtMention;
};
var isArticleCommentReply = function isArticleCommentReply(type) {
  return type === notificationTypes.articleCommentReply;
};

function isCommentNotifictionType(type) {
  return isDiscussionReply(type) || isPostAtMention(type) || isThreadAtMention(type);
}

function getIconName(type) {
  if (isCommentNotifictionType(type)) {
    return 'comment-small';
  }

  if (isAnnouncement(type)) {
    return 'flag-small';
  }

  return 'heart-small';
}

var MarkAsReadIcon = function MarkAsReadIcon(_ref) {
  var track = _ref.track,
      model = _ref.model;
  var type = model.type,
      isUnread = model.isUnread,
      uri = model.uri;

  var _useContext = React.useContext(NotificationsContext),
      markAsRead = _useContext.markAsRead;

  var onClick = React.useCallback(function (event) {
    event.stopPropagation();
    event.preventDefault();

    if (!isUnread) {
      return;
    }

    track({
      action: 'click',
      category: 'on-site-notifications',
      label: "mark-as-read-".concat(type)
    });
    markAsRead(uri);
  }, [markAsRead, track, model]);
  return React__default.createElement("div", {
    className: "wds-notification-card__icon-wrapper",
    onClick: onClick,
    role: "presentation"
  }, React__default.createElement(Icon, {
    name: getIconName(type)
  }));
};

MarkAsReadIcon.propTypes = {
  model: PropTypes.shape().isRequired,
  track: PropTypes.func.isRequired
};

var UserContext = React__default.createContext({
  id: undefined,
  username: undefined
});
function useUserData() {
  return React.useContext(UserContext);
}

var getReplyMessageBody = function getReplyMessageBody(translateFunc, _ref) {
  var title = _ref.title,
      totalUniqueActors = _ref.totalUniqueActors,
      latestActors = _ref.latestActors,
      postTitleMarkup = _ref.postTitleMarkup;
  var hasTwoUsers = totalUniqueActors === 2;
  var hasThreeOrMoreUsers = totalUniqueActors > 2;
  var firstReplierName = get_1(latestActors, '[0].name');

  if (title) {
    if (hasThreeOrMoreUsers) {
      return translateFunc('notifications-replied-by-multiple-users-with-title', {
        postTitle: postTitleMarkup,
        mostRecentUser: firstReplierName,
        number: totalUniqueActors - 1
      });
    }

    if (hasTwoUsers) {
      return translateFunc('notifications-replied-by-two-users-with-title', {
        firstUser: firstReplierName,
        secondUser: get_1(latestActors, '[1].name'),
        postTitle: postTitleMarkup
      });
    }

    return translateFunc('notifications-replied-by-with-title', {
      user: firstReplierName,
      postTitle: postTitleMarkup
    });
  }

  if (hasThreeOrMoreUsers) {
    return translateFunc('notifications-replied-by-multiple-users-no-title', {
      mostRecentUser: firstReplierName,
      number: totalUniqueActors - 1
    });
  }

  if (hasTwoUsers) {
    return translateFunc('notifications-replied-by-two-users-no-title', {
      firstUser: firstReplierName,
      secondUser: get_1(latestActors, '[1].name')
    });
  }

  return translateFunc('notifications-replied-by-no-title', {
    user: firstReplierName
  });
};

var getPostUpvoteMessageBody = function getPostUpvoteMessageBody(translateFunc, _ref2) {
  var title = _ref2.title,
      totalUniqueActors = _ref2.totalUniqueActors,
      postTitleMarkup = _ref2.postTitleMarkup;
  var hasMultipleUsers = totalUniqueActors > 1;

  if (title) {
    if (hasMultipleUsers) {
      return translateFunc('notifications-post-upvote-multiple-users-with-title', {
        postTitle: postTitleMarkup,
        number: totalUniqueActors
      });
    }

    return translateFunc('notifications-post-upvote-single-user-with-title', {
      postTitle: postTitleMarkup
    });
  }

  if (hasMultipleUsers) {
    return translateFunc('notifications-post-upvote-multiple-users-no-title', {
      number: totalUniqueActors
    });
  }

  return translateFunc('notifications-post-upvote-single-user-no-title');
};

var getReplyUpvoteMessageBody = function getReplyUpvoteMessageBody(translateFunc, _ref3) {
  var title = _ref3.title,
      totalUniqueActors = _ref3.totalUniqueActors,
      postTitleMarkup = _ref3.postTitleMarkup;
  var hasMultipleUsers = totalUniqueActors > 1;

  if (title) {
    if (hasMultipleUsers) {
      return translateFunc('notifications-reply-upvote-multiple-users-with-title', {
        postTitle: postTitleMarkup,
        number: totalUniqueActors - 1
      });
    }

    return translateFunc('notifications-reply-upvote-single-user-with-title', {
      postTitle: postTitleMarkup
    });
  }

  if (hasMultipleUsers) {
    return translateFunc('notifications-reply-upvote-multiple-users-no-title', {
      number: totalUniqueActors
    });
  }

  return translateFunc('notifications-reply-upvote-single-user-no-title');
};

var getPostAtMentionMessageBody = function getPostAtMentionMessageBody(translateFunc, _ref4) {
  var postTitleMarkup = _ref4.postTitleMarkup,
      latestActors = _ref4.latestActors;
  return translateFunc('notifications-reply-at-mention', {
    postTitle: postTitleMarkup,
    mentioner: get_1(latestActors, '[0].name')
  });
};

var getThreadAtMentionMessageBody = function getThreadAtMentionMessageBody(translateFunc, _ref5) {
  var postTitleMarkup = _ref5.postTitleMarkup,
      latestActors = _ref5.latestActors;
  return translateFunc('notifications-post-at-mention', {
    postTitle: postTitleMarkup,
    mentioner: get_1(latestActors, '[0].name')
  });
};

var getArticleCommentReplyMessageBody = function getArticleCommentReplyMessageBody(translateFunc, _ref6) {
  var userData = _ref6.userData,
      refersToAuthorId = _ref6.refersToAuthorId,
      latestActors = _ref6.latestActors,
      title = _ref6.title;
  var currentUserId = userData === null || userData === void 0 ? void 0 : userData.id;
  var user = get_1(latestActors, '[0].name');
  var messageKey = refersToAuthorId === currentUserId ? 'notifications-article-comment-reply-own-comment' : 'notifications-article-comment-reply-followed-comment';
  return translateFunc(messageKey, {
    user: user,
    articleTitle: title
  });
};

var getText = function getText(translateFunc, model, userData) {
  var type = model.type,
      snippet = model.snippet,
      title = model.title,
      totalUniqueActors = model.totalUniqueActors,
      latestActors = model.latestActors,
      refersToAuthorId = model.refersToAuthorId;
  var postTitleMarkup = "<b>".concat(title, "</b>");

  if (isAnnouncement(type)) {
    return snippet;
  }

  if (isDiscussionReply(type)) {
    return getReplyMessageBody(translateFunc, {
      title: title,
      latestActors: latestActors,
      postTitleMarkup: postTitleMarkup,
      totalUniqueActors: totalUniqueActors
    });
  }

  if (isDiscussionPostUpvote(type)) {
    return getPostUpvoteMessageBody(translateFunc, {
      title: title,
      postTitleMarkup: postTitleMarkup,
      totalUniqueActors: totalUniqueActors
    });
  }

  if (isDiscussionReplyUpvote(type)) {
    return getReplyUpvoteMessageBody(translateFunc, {
      title: title,
      postTitleMarkup: postTitleMarkup,
      totalUniqueActors: totalUniqueActors
    });
  }

  if (isPostAtMention(type)) {
    return getPostAtMentionMessageBody(translateFunc, {
      postTitleMarkup: postTitleMarkup,
      latestActors: latestActors
    });
  }

  if (isThreadAtMention(type)) {
    return getThreadAtMentionMessageBody(translateFunc, {
      postTitleMarkup: postTitleMarkup,
      latestActors: latestActors
    });
  }

  if (isArticleCommentReply(type)) {
    return getArticleCommentReplyMessageBody(translateFunc, {
      userData: userData,
      latestActors: latestActors,
      title: title,
      refersToAuthorId: refersToAuthorId
    });
  }

  return null;
};

var CardText = function CardText(_ref7) {
  var model = _ref7.model;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  var userData = useUserData();
  var text = getText(t, model, userData); // eslint-disable-next-line react/no-danger

  return React__default.createElement("p", {
    className: "wds-notification-card__text",
    dangerouslySetInnerHTML: {
      __html: text
    }
  });
};

CardText.propTypes = {
  model: PropTypes.shape().isRequired
};

var CardLink = function CardLink(_ref) {
  var track = _ref.track,
      model = _ref.model,
      children = _ref.children;

  var _useContext = React.useContext(NotificationsContext),
      markAsRead = _useContext.markAsRead,
      goToDestination = _useContext.goToDestination;

  var type = model.type,
      isUnread = model.isUnread,
      uri = model.uri,
      latestEventUri = model.latestEventUri;
  var onClick = React.useCallback(function (event) {
    event.preventDefault();
    track({
      action: 'click',
      category: 'on-site-notifications',
      label: type,
      value: isUnread ? 1 : 0
    });

    if (isUnread) {
      markAsRead(uri, true).then(function () {
        goToDestination(latestEventUri);
      });
    } else {
      goToDestination(latestEventUri);
    }
  }, [markAsRead, track, model, goToDestination]);
  return React__default.createElement("a", {
    className: "wds-notification-card__outer-body",
    href: latestEventUri,
    onClick: onClick
  }, children);
};

CardLink.propTypes = {
  children: PropTypes.node.isRequired,
  model: PropTypes.shape().isRequired,
  track: PropTypes.func.isRequired
};

var Card = function Card(_ref) {
  var model = _ref.model,
      track = _ref.track;
  var totalUniqueActors = model.totalUniqueActors,
      isUnread = model.isUnread,
      type = model.type,
      title = model.title,
      latestActors = model.latestActors,
      timestamp = model.timestamp,
      communityName = model.communityName,
      snippet = model.snippet;
  var computedClass = classNames('wds-notification-card', {
    'wds-is-unread': isUnread
  });
  var showAvatars = totalUniqueActors > 2 && isDiscussionReply(type);
  var showSnippet = !title && !isAnnouncement(type);
  var showLastActor = isAnnouncement(type);
  var dateOfCreation = new Date(timestamp * 1000).toISOString();
  var avatars = latestActors.map(function (_ref2) {
    var profileUrl = _ref2.profileUrl,
        avatarUrl = _ref2.avatarUrl;
    return {
      link: profileUrl,
      src: avatarUrl
    };
  });
  return React__default.createElement("li", {
    className: computedClass
  }, showAvatars && React__default.createElement(AvatarStack, {
    overrideCount: totalUniqueActors,
    avatars: avatars
  }), React__default.createElement(CardLink, {
    model: model,
    track: track
  }, React__default.createElement(MarkAsReadIcon, {
    model: model,
    track: track
  }), React__default.createElement("div", {
    className: "wds-notification-card__body"
  }, React__default.createElement(CardText, {
    model: model
  }), showSnippet && React__default.createElement("p", {
    className: "wds-notification-card__snippet"
  }, snippet), showLastActor && React__default.createElement("p", {
    className: "wds-notification-card__last-actor"
  }, get_1(latestActors, '[0].name')), React__default.createElement("ul", {
    className: "wds-notification-card__context-list"
  }, React__default.createElement("li", {
    className: "wds-notification-card__context-item"
  }, React__default.createElement(Timeago, {
    datetime: dateOfCreation
  })), React__default.createElement("li", null, React__default.createElement("span", {
    className: "wds-notification-card__context-separator"
  }, "\xB7")), React__default.createElement("li", {
    className: "wds-notification-card__context-item wds-notification-card__community"
  }, communityName)))));
};

Card.propTypes = {
  model: PropTypes.shape().isRequired,
  track: PropTypes.func.isRequired
};

/* eslint-disable react/no-array-index-key */

var List$1 = function List(_ref) {
  var track = _ref.track;

  var _useContext = React.useContext(NotificationsContext),
      loadNextPage = _useContext.loadNextPage,
      notifications = _useContext.notifications,
      isLoading = _useContext.isLoading;

  var computedClass = classNames('wds-has-lines-between', 'wds-notifications__notification-list', 'wds-list', {
    'is-loading-new-results': isLoading
  });
  var listEl = useLazyLoad(loadNextPage);
  return React__default.createElement("ul", {
    className: computedClass,
    ref: listEl
  }, notifications.map(function (notification, index) {
    return React__default.createElement(Card, {
      key: index,
      model: notification,
      track: track
    });
  }), isLoading && React__default.createElement("li", null, React__default.createElement(Spinner, {
    block: true,
    size: "28",
    stroke: "2"
  })));
};

List$1.propTypes = {
  track: PropTypes.func.isRequired
};

var ListContainer = function ListContainer(_ref) {
  var track = _ref.track,
      header = _ref.header;

  var _useContext = React.useContext(NotificationsContext),
      unreadCount = _useContext.unreadCount,
      notifications = _useContext.notifications,
      isLoading = _useContext.isLoading;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement(React__default.Fragment, null, unreadCount > 0 && React__default.createElement(MarkAllButton, {
    track: track,
    header: header
  }), notifications.length || isLoading ? React__default.createElement(List$1, {
    track: track
  }) : React__default.createElement("p", {
    className: "wds-notifications__zero-state"
  }, t('notifications-no-notifications-message')));
};

ListContainer.propTypes = {
  header: PropTypes.string,
  track: PropTypes.func.isRequired
};
ListContainer.defaultProps = {
  header: ''
};

var UserModal = function UserModal(_ref) {
  var isOpen = _ref.isOpen,
      user = _ref.user,
      track = _ref.track,
      header = _ref.header;

  var _useContext = React.useContext(NotificationsContext),
      loadFirstPage = _useContext.loadFirstPage;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  var viewProfileLink = user.items.filter(function (item) {
    return item['tracking-label'] === 'account.profile';
  })[0].href;
  var signOutModel = user.items.filter(function (item) {
    return item.type === 'link-logout';
  })[0];
  var classes = classNames('wds-global-navigation__modal', 'wds-user-modal', {
    'wds-is-hidden': !isOpen
  });
  React.useEffect(function () {
    if (isOpen) {
      loadFirstPage();
    }
  }, [isOpen, loadFirstPage]);
  return React__default.createElement("div", {
    className: classes
  }, React__default.createElement("div", {
    className: "wds-user-modal__info"
  }, React__default.createElement(Avatar, {
    src: user.avatar_url,
    href: viewProfileLink,
    "data-tracking-label": "open-user-profile"
  }), React__default.createElement("p", {
    className: "wds-user-modal__username"
  }, user.username)), React__default.createElement("div", {
    className: "wds-user-modal__notifications-wrapper"
  }, React__default.createElement(ListContainer, {
    track: track,
    header: t(header)
  })), React__default.createElement(LinkLogOut$1, {
    link: signOutModel,
    className: "wds-user-modal__sign-out-container"
  }));
};

UserModal.propTypes = {
  header: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  track: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired
};

var MobileLoggedIn = function MobileLoggedIn(_ref) {
  var user = _ref.user,
      openModal = _ref.openModal,
      isOpen = _ref.isOpen,
      track = _ref.track,
      header = _ref.header;

  var _useContext = React.useContext(NotificationsContext),
      unreadCount = _useContext.unreadCount;

  return React__default.createElement(React__default.Fragment, null, React__default.createElement(Button, {
    className: "wds-global-navigation__modal-control wds-global-navigation__modal-control-user",
    onClick: function onClick() {
      return openModal('user');
    },
    text: true
  }, React__default.createElement(Avatar, {
    src: user.avatar_url,
    alt: user.username
  }), Boolean(unreadCount) && React__default.createElement("span", {
    className: "wds-global-navigation__avatar-notifications-counter"
  }, unreadCount > 99 ? '99+' : unreadCount)), React__default.createElement(UserModal, {
    user: user,
    isOpen: isOpen,
    track: track,
    header: header
  }));
};

MobileLoggedIn.propTypes = {
  header: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired,
  user: PropTypes.shape().isRequired
};

var MobileUser = function MobileUser(_ref) {
  var model = _ref.model,
      openModal = _ref.openModal,
      isOpen = _ref.isOpen,
      track = _ref.track;

  if (model.user) {
    return React__default.createElement(MobileLoggedIn, {
      user: model.user,
      header: model.notifications.header.title.key,
      openModal: openModal,
      isOpen: isOpen,
      track: track
    });
  }

  if (model.anon) {
    return React__default.createElement(MobileAnon$1, {
      model: model.anon
    });
  }

  return null;
};

MobileUser.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  model: PropTypes.shape().isRequired,
  openModal: PropTypes.func.isRequired,
  track: PropTypes.func.isRequired
};

function convertToIsoString(timestamp) {
  return new Date(timestamp * 1000).toISOString();
}
function convertToTimestamp(date) {
  return typeof date === 'string' ? new Date(date).getTime() / 1000 : date.epochSecond;
}

var supportedContentTypes = ['discussion-upvote', 'discussion-post', 'announcement-target', 'post-at-mention', 'thread-at-mention', 'article-comment-reply', 'article-comment-at-mention', 'article-comment-reply-at-mention'];
var defaultOptions = {
  credentials: 'include'
};

var NotificationsApi = /*#__PURE__*/function () {
  function NotificationsApi(serviceBaseUrl) {
    _classCallCheck(this, NotificationsApi);

    this.serviceBaseUrl = serviceBaseUrl;
  }

  _createClass(NotificationsApi, [{
    key: "getServiceUrl",
    value: function getServiceUrl(serviceName, url) {
      return "".concat(this.serviceBaseUrl).concat(serviceName).concat(url);
    }
  }, {
    key: "getNotificationServiceUrl",
    value: function getNotificationServiceUrl(path) {
      return this.getServiceUrl('on-site-notifications', path);
    }
  }, {
    key: "fetchFromOnSiteNotifications",
    value: function fetchFromOnSiteNotifications(path, options) {
      return fetch(this.getNotificationServiceUrl(path), merge_1({}, options, defaultOptions)).catch(function (error) {
        console.error('Something went wrong while calling a OSN service', error);
      }).then(function (response) {
        if (!response) {
          return null;
        }

        var contentType = response.headers.get('content-type');
        var hasNoContent = response.status === 204 || contentType && contentType.indexOf('json') === -1;

        if (response.ok && hasNoContent) {
          return null;
        }

        if (response.ok) {
          return response.json();
        }

        return null;
      });
    }
  }, {
    key: "loadPage",
    value: function loadPage(pageLink) {
      return this.fetchFromOnSiteNotifications(pageLink);
    }
  }, {
    key: "loadUnreadNotificationCount",
    value: function loadUnreadNotificationCount() {
      return this.fetchFromOnSiteNotifications("/notifications/unread-count?".concat(NotificationsApi.getContentTypesQueryParams()));
    }
  }, {
    key: "markAsRead",
    value: function markAsRead(uri, willUnloadPage) {
      if (willUnloadPage && window.navigator.sendBeacon) {
        return this.markAsReadUsingSendBeacon(uri);
      }

      return this.markAsReadUsingFetch(uri, willUnloadPage);
    }
  }, {
    key: "markAsReadUsingSendBeacon",
    value: function markAsReadUsingSendBeacon(uri) {
      var markAsReadUrl = this.getNotificationServiceUrl('/notifications/mark-as-read/by-uri');

      try {
        var blob = new Blob([JSON.stringify([uri])], {
          type: 'application/json'
        });

        if (window.navigator.sendBeacon(markAsReadUrl, blob) === true) {
          return Promise.resolve();
        }

        return this.markAsReadUsingFetch(uri, true);
      } catch (exception) {
        // See http://crbug.com/490015#c99
        console.warn('Error when sending beacon', exception);
        return this.markAsReadUsingFetch(uri, true);
      }
    }
  }, {
    key: "markAsReadUsingFetch",
    value: function markAsReadUsingFetch(uri, willUnloadPage) {
      var options = {
        body: JSON.stringify([uri]),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      };

      if (willUnloadPage) {
        // Keep it low as it's blocking user from navigating to the notification target
        options.timeout = 500;
      }

      return this.fetchFromOnSiteNotifications('/notifications/mark-as-read/by-uri', options);
    }
  }, {
    key: "markAllAsRead",
    value: function markAllAsRead(notifications) {
      var since = convertToIsoString(notifications[0].timestamp);
      return this.fetchFromOnSiteNotifications('/notifications/mark-all-as-read', {
        body: JSON.stringify({
          since: since
        }),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      });
    }
  }], [{
    key: "build",
    value: function build(serviceBaseUrl) {
      return new this(serviceBaseUrl);
    }
  }, {
    key: "getContentTypesQueryParams",
    value: function getContentTypesQueryParams() {
      return "contentType=".concat(supportedContentTypes.join('&contentType='));
    }
  }]);

  return NotificationsApi;
}();

var defaultProps = {
  communityId: '',
  communityName: '',
  isUnread: false,
  latestActors: [],
  latestEventUri: '',
  snippet: '',
  timestamp: 0,
  title: '',
  type: '',
  totalUniqueActors: 0,
  uri: ''
};

function mapData(notificationData) {
  return {
    title: get_1(notificationData, 'refersTo.title'),
    snippet: get_1(notificationData, 'refersTo.snippet'),
    uri: get_1(notificationData, 'refersTo.uri'),
    refersToAuthorId: get_1(notificationData, 'refersTo.createdBy'),
    latestEventUri: get_1(notificationData, 'events.latestEvent.uri'),
    timestamp: convertToTimestamp(get_1(notificationData, 'events.latestEvent.when')),
    communityName: get_1(notificationData, 'community.name'),
    communityId: get_1(notificationData, 'community.id'),
    isUnread: notificationData.read === false,
    totalUniqueActors: get_1(notificationData, 'events.totalUniqueActors'),
    latestActors: createActors(get_1(notificationData, 'events.latestActors')),
    type: getNotificationType(notificationData)
  };
}

function createActors(actors) {
  return actors.map(function (actor) {
    return merge_1({}, actor, {
      profileUrl: getProfileUrl(actor.name),
      src: actor.avatarUrl
    });
  });
}

function getProfileUrl(name) {
  return "".concat(window.location.origin, "/wiki/User:").concat(name);
}

function getNotificationType(apiData) {
  switch (apiData.type) {
    case 'upvote-notification':
      return apiData.refersTo.type === 'discussion-post' ? notificationTypes.discussionUpvoteReply : notificationTypes.discussionUpvotePost;

    case 'replies-notification':
      return notificationTypes.discussionReply;

    case 'announcement-notification':
      return notificationTypes.announcement;

    case 'post-at-mention-notification':
      return notificationTypes.postAtMention;

    case 'thread-at-mention-notification':
      return notificationTypes.threadAtMention;

    case 'article-comment-reply-notification':
      return notificationTypes.articleCommentReply;

    case 'article-comment-at-mention-notification':
      return notificationTypes.articleCommentAtMention;

    case 'article-comment-reply-at-mention-notification':
      return notificationTypes.articleCommentReplyAtMention;

    default:
      return null;
  }
}

var Notification = /*#__PURE__*/function () {
  function Notification(data) {
    var _this = this;

    _classCallCheck(this, Notification);

    Object.keys(data).forEach(function (key) {
      _this[key] = data[key];
    });
  }

  _createClass(Notification, null, [{
    key: "build",
    value: function build(notificationData) {
      return new this(merge_1({}, defaultProps, notificationData));
    }
  }, {
    key: "buildFromJson",
    value: function buildFromJson(notificationData) {
      return this.build(mapData(notificationData));
    }
  }]);

  return Notification;
}();

function _createSuper$5(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
/* eslint-disable react/no-unused-state */

var NotificationsDataProvider = /*#__PURE__*/function (_React$Component) {
  _inherits(NotificationsDataProvider, _React$Component);

  var _super = _createSuper$5(NotificationsDataProvider);

  function NotificationsDataProvider(props) {
    var _this;

    _classCallCheck(this, NotificationsDataProvider);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "isMounted", false);

    _this.api = NotificationsApi.build(props.serviceUrl);
    _this.state = {
      unreadCount: 0,
      notifications: [],
      isLoading: false,
      firstPageLoaded: false,
      nextPage: null,
      loadFirstPage: _this.loadFirstPage.bind(_assertThisInitialized(_this)),
      loadNextPage: _this.loadNextPage.bind(_assertThisInitialized(_this)),
      markAsRead: _this.markAsRead.bind(_assertThisInitialized(_this)),
      markAllAsRead: _this.markAllAsRead.bind(_assertThisInitialized(_this)),
      goToDestination: _this.goToDestination.bind(_assertThisInitialized(_this))
    };
    return _this;
  }

  _createClass(NotificationsDataProvider, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isAuthenticated = this.props.isAuthenticated;
      this.isMounted = true;

      if (isAuthenticated) {
        this.loadUnreadNotificationCount();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isMounted = false;
    }
  }, {
    key: "getNextPageLink",
    value: function getNextPageLink(data) {
      return get_1(data, '_links.next') || null;
    }
  }, {
    key: "getUnreadCount",
    value: function getUnreadCount(notifications) {
      return notifications.filter(function (notification) {
        return notification.isUnread;
      }).length;
    }
  }, {
    key: "goToDestination",
    value: function goToDestination(latestEventUri) {
      // TODO check if it's a local url and use transitionTo or delegate to app
      window.location.href = latestEventUri;
    }
  }, {
    key: "loadFirstPage",
    value: function loadFirstPage() {
      var _this$state = this.state,
          nextPage = _this$state.nextPage,
          firstPageLoaded = _this$state.firstPageLoaded;

      if (nextPage !== null || firstPageLoaded) {
        return;
      }

      this.loadPage("/notifications?".concat(NotificationsApi.getContentTypesQueryParams()));
    }
  }, {
    key: "loadNextPage",
    value: function loadNextPage() {
      var nextPage = this.state.nextPage;

      if (nextPage === null) {
        return;
      }

      this.loadPage(nextPage);
    }
  }, {
    key: "loadPage",
    value: function loadPage(pageLink) {
      var _this2 = this;

      var _this$state2 = this.state,
          isLoading = _this$state2.isLoading,
          notifications = _this$state2.notifications;

      if (isLoading) {
        return Promise.reject();
      }

      this.updateState({
        isLoading: true,
        firstPageLoaded: true
      });
      return this.api.loadPage(pageLink).then(function (response) {
        var mappedNotifications = notifications.concat(_this2.mapNotifications(response.notifications));

        _this2.updateState({
          notifications: mappedNotifications,
          nextPage: _this2.getNextPageLink(response),
          isLoading: false
        });
      }).catch(function (error) {
        _this2.updateState({
          isLoading: false
        });

        console.error('Couldn\'t load notifications', error);
      });
    }
  }, {
    key: "loadUnreadNotificationCount",
    value: function loadUnreadNotificationCount() {
      var _this3 = this;

      return this.api.loadUnreadNotificationCount().then(function (result) {
        _this3.updateState({
          unreadCount: result.unreadCount
        });
      }).catch(function (error) {
        _this3.updateState({
          unreadCount: 0
        });

        console.error('Setting notifications unread count to 0 because of the API fetch error', error);
      });
    }
  }, {
    key: "markAsRead",
    value: function markAsRead(uri, willUnloadPage) {
      var _this4 = this;

      return this.api.markAsRead(uri, willUnloadPage).then(function () {
        var updatedNotifications = _this4.updateUnreadStatus(uri);

        _this4.updateState({
          notifications: updatedNotifications,
          unreadCount: _this4.getUnreadCount(updatedNotifications)
        });
      });
    }
  }, {
    key: "markAllAsRead",
    value: function markAllAsRead() {
      var _this5 = this;

      var notifications = this.state.notifications;
      return this.api.markAllAsRead(notifications).then(function () {
        _this5.updateState({
          notifications: _this5.updateUnreadStatus(),
          unreadCount: 0
        });
      });
    }
  }, {
    key: "mapNotifications",
    value: function mapNotifications(notifications) {
      return (notifications || []).map(function (notification) {
        return Notification.buildFromJson(notification);
      });
    }
  }, {
    key: "updateUnreadStatus",
    value: function updateUnreadStatus(uri) {
      var notifications = this.state.notifications;
      return notifications.map(function (notification) {
        if (!uri || notification.uri === uri) {
          return Notification.build(_objectSpread2({}, notification, {
            isUnread: false
          }));
        }

        return notification;
      });
    }
  }, {
    key: "updateState",
    value: function updateState(newState) {
      if (!this.isMounted) {
        return;
      }

      this.setState(newState);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return React__default.createElement(NotificationsProvider, {
        value: this.state
      }, children);
    }
  }]);

  return NotificationsDataProvider;
}(React__default.Component);

NotificationsDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  serviceUrl: PropTypes.string.isRequired
};

var NotificationToggle = function NotificationToggle(_ref) {
  var chevron = _ref.chevron,
      unreadCount = _ref.unreadCount;
  return React__default.createElement(React__default.Fragment, null, Boolean(unreadCount) && React__default.createElement("span", {
    className: "wds-global-navigation__notifications-counter"
  }, unreadCount > 99 ? '99+' : unreadCount), React__default.createElement(Icon, {
    name: "bell",
    className: "icon-bell"
  }), chevron);
};

NotificationToggle.propTypes = {
  chevron: PropTypes.node.isRequired,
  unreadCount: PropTypes.number.isRequired
};

var NotificationsDropdown = function NotificationsDropdown(_ref2) {
  var track = _ref2.track;

  var _useContext = React.useContext(NotificationsContext),
      unreadCount = _useContext.unreadCount,
      loadFirstPage = _useContext.loadFirstPage;

  var onMouseEnter = React.useCallback(function () {
    track({
      label: 'open-menu',
      category: 'on-site-notifications',
      action: 'click',
      value: unreadCount
    });
    loadFirstPage();
  }, [unreadCount, track, loadFirstPage]);
  return React__default.createElement(Dropdown, {
    className: "wds-global-navigation__notifications-dropdown",
    toggleClassName: "wds-global-navigation__dropdown-toggle",
    contentClassName: "wds-notifications__dropdown-content",
    onMouseEnter: onMouseEnter,
    toggle: function toggle(chevron) {
      return React__default.createElement(NotificationToggle, {
        chevron: chevron,
        unreadCount: unreadCount
      });
    },
    iconName: "dropdown-tiny",
    hasShadow: true,
    dropdownRightAligned: true
  }, React__default.createElement(ListContainer, {
    track: track
  }));
};

NotificationsDropdown.propTypes = {
  track: PropTypes.func.isRequired
};

var PartnerSlot = function PartnerSlot(_ref) {
  var model = _ref.model;
  var href = model.href,
      trackingLabel = model['tracking-label'],
      imageData = model['image-data'],
      title = model.title;
  return React__default.createElement("div", {
    className: "wds-global-navigation__partner-slot"
  }, React__default.createElement("div", {
    className: "wds-global-navigation__partner-slot-horizontal-bar"
  }), React__default.createElement("a", {
    href: href,
    className: "wds-global-navigation__partner-slot-link",
    "data-tracking-label": trackingLabel
  }, React__default.createElement("img", {
    className: "wds-global-navigation__partner-slot-image",
    width: "55",
    height: "20",
    src: imageData.url,
    alt: title.value
  })));
};

PartnerSlot.propTypes = {
  model: PropTypes.shape().isRequired
};

function _createSuper$6(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}
/* eslint-disable react/no-array-index-key */

var GlobalNavigation = /*#__PURE__*/function (_React$Component) {
  _inherits(GlobalNavigation, _React$Component);

  var _super = _createSuper$6(GlobalNavigation);

  function GlobalNavigation(props) {
    var _this;

    _classCallCheck(this, GlobalNavigation);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "communityBar", null);

    _defineProperty(_assertThisInitialized(_this), "state", {
      isSearchModalOpen: false,
      isUserModalOpen: false,
      isSearchExpanded: false,
      isCommunityBarActive: false
    });

    _this.nav = React__default.createRef();
    _this.openModal = _this.openModal.bind(_assertThisInitialized(_this));
    _this.closeAndDeactivate = _this.closeAndDeactivate.bind(_assertThisInitialized(_this));
    _this.onSearchActivation = _this.onSearchActivation.bind(_assertThisInitialized(_this));
    _this.onSearchClose = _this.onSearchClose.bind(_assertThisInitialized(_this));
    _this.onSearchSuggestionChosen = _this.onSearchSuggestionChosen.bind(_assertThisInitialized(_this));
    _this.onSearchSuggestionsImpression = _this.onSearchSuggestionsImpression.bind(_assertThisInitialized(_this));
    _this.onRedirectToSearchResults = _this.onRedirectToSearchResults.bind(_assertThisInitialized(_this));
    _this.onTrackingLabelClick = _this.onTrackingLabelClick.bind(_assertThisInitialized(_this));
    _this.onScroll = _this.onScroll.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GlobalNavigation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // todo consider changing it to ref when bar will be moved to RC
      this.communityBar = document.querySelector('.wds-community-bar');
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: "onRedirectToSearchResults",
    value: function onRedirectToSearchResults(query) {
      var goToSearchResults = this.props.goToSearchResults;
      this.closeAndDeactivate();
      goToSearchResults(query);
    }
  }, {
    key: "onSearchActivation",
    value: function onSearchActivation() {
      var onSearchToggleClicked = this.props.onSearchToggleClicked;
      this.setState({
        isSearchExpanded: true
      });
      onSearchToggleClicked();
    }
  }, {
    key: "onSearchClose",
    value: function onSearchClose() {
      var onSearchCloseClicked = this.props.onSearchCloseClicked;
      this.closeAndDeactivate();
      onSearchCloseClicked();
    }
  }, {
    key: "onSearchSuggestionChosen",
    value: function onSearchSuggestionChosen(clickedSuggestion, displayedSuggestions, suggestionId) {
      var onSearchSuggestionChosen = this.props.onSearchSuggestionChosen;
      this.closeAndDeactivate();
      onSearchSuggestionChosen(clickedSuggestion, displayedSuggestions, suggestionId);
    }
  }, {
    key: "onSearchSuggestionsImpression",
    value: function onSearchSuggestionsImpression(suggestions, suggestionId) {
      var onSearchSuggestionsImpression = this.props.onSearchSuggestionsImpression;
      onSearchSuggestionsImpression(suggestions, suggestionId);
    }
  }, {
    key: "onTrackingLabelClick",
    value: function onTrackingLabelClick(event) {
      var track = this.props.track;
      var elementToTrack = event.target.closest('[data-tracking-label]');

      if (elementToTrack) {
        track({
          action: 'click',
          category: 'navigation',
          label: elementToTrack.getAttribute('data-tracking-label')
        });
      }
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var isCommunityBarActive = this.state.isCommunityBarActive;

      if (!this.communityBar) {
        return;
      }

      var communityBarOffsetY = this.communityBar.getBoundingClientRect().top;
      var globalNavOffsetY = this.nav.current.getBoundingClientRect().top;

      if (communityBarOffsetY <= globalNavOffsetY && !isCommunityBarActive) {
        this.setState({
          isCommunityBarActive: true
        });
      } else if (communityBarOffsetY > globalNavOffsetY && isCommunityBarActive) {
        this.setState({
          isCommunityBarActive: false
        });
      }
    }
  }, {
    key: "closeAndDeactivate",
    value: function closeAndDeactivate() {
      this.setState({
        isSearchModalOpen: false,
        isUserModalOpen: false,
        isSearchExpanded: false
      });
    }
  }, {
    key: "openModal",
    value: function openModal(type) {
      var onModalOpen = this.props.onModalOpen;
      onModalOpen(type);

      if (type === 'search') {
        this.setState({
          isSearchModalOpen: true
        });
      }

      if (type === 'user') {
        this.setState({
          isUserModalOpen: true
        });
      }
    }
  }, {
    key: "renderMainNavigation",
    value: function renderMainNavigation(navigation) {
      return navigation.map(function (link, index) {
        if (link.type === 'link-text') {
          return React__default.createElement(LinkText, {
            key: index,
            link: link,
            isStandaloneLink: true
          });
        }

        if (link.type === 'link-group') {
          return React__default.createElement(LinkGroup, {
            key: index,
            link: link
          });
        }

        return null;
      });
    }
  }, {
    key: "renderLeftBar",
    value: function renderLeftBar() {
      var model = this.props.model;
      return React__default.createElement("div", {
        className: "wds-global-navigation__content-bar-left"
      }, React__default.createElement("a", {
        href: model.logo.href,
        className: "wds-global-navigation__logo",
        "data-tracking-label": model.logo['tracking-label']
      }, React__default.createElement(LogoFandomWhite, {
        className: "wds-global-navigation__logo-image"
      })), React__default.createElement("nav", {
        className: "wds-global-navigation__links"
      }, this.renderMainNavigation(model['main-navigation'])));
    }
  }, {
    key: "renderRightBar",
    value: function renderRightBar() {
      var _this$props = this.props,
          model = _this$props.model,
          track = _this$props.track,
          siteName = _this$props.siteName;
      var _this$state = this.state,
          isSearchModalOpen = _this$state.isSearchModalOpen,
          isUserModalOpen = _this$state.isUserModalOpen,
          isSearchExpanded = _this$state.isSearchExpanded;
      return React__default.createElement("div", {
        className: "wds-global-navigation__content-bar-right"
      }, React__default.createElement(CommunityBar, {
        model: model.logo,
        siteName: siteName
      }), React__default.createElement("div", {
        className: "wds-global-navigation__dropdown-controls"
      }, React__default.createElement(Search, {
        model: model.search,
        isSearchExpanded: isSearchExpanded,
        onSearchActivation: this.onSearchActivation,
        onSearchClose: this.onSearchClose,
        onSearchSuggestionChosen: this.onSearchSuggestionChosen,
        onSearchSuggestionsImpression: this.onSearchSuggestionsImpression,
        onRedirectToSearchResults: this.onRedirectToSearchResults,
        track: track
      }), React__default.createElement(User, {
        data: model
      }), model.user && React__default.createElement(NotificationsDropdown, {
        track: track
      }), React__default.createElement("div", {
        className: "wds-global-navigation__start-a-wiki"
      }, React__default.createElement(LinkButton, {
        link: model['create-wiki']
      }))), React__default.createElement("div", {
        className: "wds-global-navigation__modal-controls"
      }, React__default.createElement(SearchModal, {
        isOpen: isSearchModalOpen,
        openModal: this.openModal
      }, React__default.createElement(Search, {
        model: model.search,
        isSearchExpanded: isSearchExpanded,
        onSearchActivation: this.onSearchActivation,
        onSearchClose: this.onSearchClose,
        onSearchSuggestionChosen: this.onSearchSuggestionChosen,
        onSearchSuggestionsImpression: this.onSearchSuggestionsImpression,
        onRedirectToSearchResults: this.onRedirectToSearchResults,
        track: track,
        inSearchModal: true
      }), React__default.createElement("nav", {
        className: "wds-global-navigation__links"
      }, this.renderMainNavigation(model['main-navigation']))), React__default.createElement(MobileUser, {
        model: model,
        openModal: this.openModal,
        isOpen: isUserModalOpen,
        track: track
      }), React__default.createElement(Button, {
        onClick: this.closeAndDeactivate,
        className: "wds-global-navigation__modal-control wds-global-navigation__modal-control-close",
        text: true
      }, React__default.createElement(Icon, {
        name: "close"
      }))));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          model = _this$props2.model,
          i18nNamespace = _this$props2.i18nNamespace;
      var partnerSlotModel = model['partner-slot'];
      var _this$state2 = this.state,
          isSearchModalOpen = _this$state2.isSearchModalOpen,
          isUserModalOpen = _this$state2.isUserModalOpen,
          isSearchExpanded = _this$state2.isSearchExpanded,
          isCommunityBarActive = _this$state2.isCommunityBarActive;
      var containerClass = classNames('wds-global-navigation', {
        'wds-search-is-active': isSearchExpanded || isSearchModalOpen,
        'wds-is-modal-opened': isSearchModalOpen || isUserModalOpen,
        'wds-has-partner-slot': partnerSlotModel,
        'wds-is-community-bar-in': isCommunityBarActive
      });
      return React__default.createElement(I18nNamespaceProvider, {
        value: i18nNamespace
      }, React__default.createElement(NotificationsDataProvider, {
        isAuthenticated: Boolean(model.user),
        serviceUrl: model['services-domain']
      }, React__default.createElement("div", {
        className: containerClass,
        onClick: this.onTrackingLabelClick,
        ref: this.nav
      }, this.renderLeftBar(), this.renderRightBar(), partnerSlotModel && React__default.createElement(PartnerSlot, {
        model: partnerSlotModel
      }))));
    }
  }]);

  return GlobalNavigation;
}(React__default.Component);

GlobalNavigation.propTypes = {
  /**
   * Function called when "search" button is clicked
   *
   * accepts:
   * - [String] query - search query string
   * */
  goToSearchResults: PropTypes.func,

  /** i18next namespace for translated strings from Design System */
  i18nNamespace: PropTypes.string.isRequired,

  /** data model retrieved from DesignSystem API */
  model: PropTypes.shape().isRequired,

  /**
   * Function called when either "search" or "user" modal is opened on mobile
   *
   * arguments:
   * - [String] type - type of modal currently opened
   * */
  onModalOpen: PropTypes.func,

  /** Function called when "close" button in search is clicked */
  onSearchCloseClicked: PropTypes.func,

  /**
   * Function called when any of the search suggestions is clicked
   *
   * arguments:
   * - [String] clickedSuggestion
   * - [Array<String>] displayedSuggestions - list of all currently displayed suggestions
   * - [String] suggestionId - uuidv4 generated id, unique per every search attempt
   * */
  onSearchSuggestionChosen: PropTypes.func,

  /**
   * Function called when search suggestions are displayed
   *
   * arguments:
   * - [Array<String>] suggestions - list of all currently displayed suggestions
   * - [String] suggestionId - uuidv4 generated id, unique per every search attempt
   * */
  onSearchSuggestionsImpression: PropTypes.func,

  /** Function called when search is expanded */
  onSearchToggleClicked: PropTypes.func,

  /** data model retrieved from DesignSystem API */
  siteName: PropTypes.shape().isRequired,

  /**
   * Tracking function
   *
   * arguments:
   * - [Object] object with "action", "category" and "label" keys
   * */
  track: PropTypes.func
};
GlobalNavigation.defaultProps = {
  goToSearchResults: function goToSearchResults() {},
  onModalOpen: function onModalOpen() {},
  onSearchCloseClicked: function onSearchCloseClicked() {},
  onSearchSuggestionChosen: function onSearchSuggestionChosen() {},
  onSearchSuggestionsImpression: function onSearchSuggestionsImpression() {},
  onSearchToggleClicked: function onSearchToggleClicked() {},
  track: function track() {}
};

module.exports = GlobalNavigation;
