'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var PropTypes = _interopDefault(require('prop-types'));
var IconClose$1 = _interopDefault(require('@wikia/react-common/icons/IconCloseSmall'));
var IconTagSmall = _interopDefault(require('@wikia/react-common/icons/IconTagSmall'));
var IconAddSmall = _interopDefault(require('@wikia/react-common/icons/IconAddSmall'));
var IconAlertSmall = _interopDefault(require('@wikia/react-common/icons/IconAlertSmall'));
var IconMagnifyingGlassSmall = _interopDefault(require('@wikia/react-common/icons/IconMagnifyingGlassSmall'));
var Color = _interopDefault(require('color'));

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
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

var noop_1 = noop;

/**
 * COLORS
 * @see https://github.com/Wikia/design-system/blob/master/style-guide/styles/wds-variables/_colors.scss
 */
var COLORS = Object.freeze({
  // ## Corporate Colors
  blue_gray: '#c5ced9',
  dark_blue_gray: '#39424d',
  dark_blue: '#092344',
  faint_blue_gray: '#f2f6fa',
  light_blue_gray: '#e6ebf2',
  light_blue: '#1a5eb8',
  slate_gray: '#656e78',
  // ## Fandom Corporate Colors
  link: '#00b7e0',
  // ## Vertical Colors
  books: '#ff7f26',
  comics: '#ff5400',
  games: '#94d11f',
  lifestyle: '#ffd000',
  movies: '#09d3bf',
  music: '#c819ad',
  tv: '#00b7e0',
  // ## Alerts
  alert: '#e81a3f',
  message: '#008c8f',
  success: '#018c30',
  warning: '#de5e33',
  // ## Social network colors
  social_facebook: '#3b5998',
  social_googleplus: '#dd4b39',
  social_instagram: '#e02d69',
  social_line: '#00c300',
  social_linkedin: '#0077b5',
  social_meneame: '#ff6400',
  social_nk: '#4077a7',
  social_odnoklassniki: '#f96900',
  social_reddit: '#ff4500',
  social_tumblr: '#34465d',
  social_twitter: '#1da1f2',
  social_vkontakte: '#587ca3',
  social_wykop: '#fb803f',
  social_weibo: '#ff8140',
  social_youtube: '#cd201f',
  // # Theming Colors
  // ## Color Names
  black: '#1a1a1a',
  dark_gray: '#333',
  faint_gray: '#ccc',
  gold: '#e3bd00',
  light_gray: '#999',
  medium_gray: '#666',
  mist_gray: '#e6e6e6',
  night_sky: '#262626',
  off_white: '#f6f6f6',
  white: '#fff',
  // # Fandom 2.0 Colors
  // ## Color Names
  fandom_aqua: '#00d6d6',
  fandom_black: '#0e191a',
  fandom_button_background: '#00cdd0',
  fandom_coral: '#ff776d',
  fandom_dark_gray: '#5f7a7b',
  fandom_light_gray: '#f2f5f5',
  fandom_link: '#088488',
  fandom_link_hover: '#005252',
  fandom_mid_light_gray: '#bed1cf',
  fandom_middle_gray: '#7f9998',
  fandom_navy: '#002a32',
  fandom_purple: '#460084',
  fandom_red: '#ee1a41',
  fandom_warm_gray: '#eeecdc',
  fandom_yellow: '#dfec24'
});
var COLORS_LIGHT_THEME = Object.freeze({
  // ## Light Theme
  c1: COLORS.white,
  c2: COLORS.off_white,
  c3: COLORS.mist_gray,
  c4: COLORS.faint_gray,
  c5: COLORS.gray,
  c6: COLORS.dark_gray,
  c7: COLORS.medium_gray,
  c8: COLORS.gold
});
var COLORS_DARK_THEME = Object.freeze({
  // ## Dark Theme
  c1: COLORS.night_sky,
  c2: COLORS.black,
  c3: COLORS.gray,
  c4: COLORS.medium_gray,
  c5: COLORS.light_gray,
  c6: COLORS.faint_gray,
  c7: COLORS.white,
  c8: COLORS.gold
});

var TagShape = PropTypes.shape({
  articleId: PropTypes.string.isRequired,
  articleTitle: PropTypes.string.isRequired,
  url: PropTypes.string
});

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    height: 11px;\n    margin-left: 5px;\n    width: 11px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n    border-radius: 25px;\n    border: 1px solid ", ";\n    cursor: pointer;\n    display: inline-flex;\n    font-size: ", ";\n    line-height:  ", ";\n    padding: 2px 12px;\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled__default.span(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.color.black;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.font_size.s;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.line_height.tight;
}, function (_ref4) {
  var secondary = _ref4.secondary;
  return secondary && styled.css(["background-color:", ";border:none;"], function (_ref5) {
    var theme = _ref5.theme;
    return theme.color.fandom_light_gray;
  });
});
var Icon = styled__default(IconClose$1)(_templateObject2());
/**
 * `StyledTag` component. Used mostly as an ArticleTag
 */

function StyledTag(_ref6) {
  var className = _ref6.className,
      onClick = _ref6.onClick,
      onRemove = _ref6.onRemove,
      removable = _ref6.removable,
      secondary = _ref6.secondary,
      tag = _ref6.tag;
  return React.createElement(Wrapper, {
    onClick: onClick,
    className: className,
    secondary: secondary
  }, tag, removable && React.createElement(Icon, {
    onClick: onRemove
  }));
}

StyledTag.propTypes = {
  /** Extra class name */
  className: PropTypes.string,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,

  /** Flag to mark tag as removable */
  removable: PropTypes.bool,

  /** Secondary flag */
  secondary: PropTypes.bool,

  /** Tag name */
  tag: PropTypes.string.isRequired
};
StyledTag.defaultProps = {
  className: '',
  onClick: null,
  onRemove: null,
  removable: false,
  secondary: false
};

function _templateObject2$1() {
  var data = _taggedTemplateLiteral(["\n    overflow-x: auto;\n"]);

  _templateObject2$1 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-top: 10px;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var Tag = styled__default(StyledTag)(_templateObject$1());
var Wrapper$1 = styled__default.div(_templateObject2$1());

function AddedTags(_ref) {
  var className = _ref.className,
      tags = _ref.tags,
      _onRemove = _ref.onRemove;

  if (Array.isArray(tags) && tags.length > 0) {
    return React.createElement(Wrapper$1, {
      className: className
    }, tags.map(function (_ref2) {
      var articleId = _ref2.articleId,
          articleTitle = _ref2.articleTitle;
      return React.createElement(Tag, {
        key: articleId,
        onRemove:
        /* istanbul ignore next */
        function onRemove() {
          return _onRemove(articleId);
        },
        tag: articleTitle,
        removable: true
      });
    }));
  }

  return null;
}

AddedTags.propTypes = {
  /** Extra class name */
  className: PropTypes.string,
  onRemove: PropTypes.func,
  tags: PropTypes.arrayOf(TagShape)
};
AddedTags.defaultProps = {
  className: '',
  onRemove: noop_1,
  tags: null
};

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$2() {
  var data = _taggedTemplateLiteral(["\n    margin-top: 30px;\n    padding-top: 8px;\n"]);

  _templateObject2$2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    margin-right: 10px;\n    margin-top: 10px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var Tag$1 = styled__default(StyledTag)(_templateObject$2());
var Wrapper$2 = styled__default.div(_templateObject2$2());
var SuggestedLabel = styled__default.div(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme.color.fandom_dark_gray;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.font_size.xs;
});

function SuggestedTags(_ref3) {
  var className = _ref3.className,
      tags = _ref3.tags,
      _onClick = _ref3.onClick;

  if (Array.isArray(tags) && tags.length > 0) {
    return React.createElement(Wrapper$2, {
      className: className
    }, React.createElement(SuggestedLabel, null, "Suggested"), tags.map(function (_ref4) {
      var articleId = _ref4.articleId,
          articleTitle = _ref4.articleTitle;
      return React.createElement(Tag$1, {
        key: articleId,
        onClick:
        /* istanbul ignore next */
        function onClick() {
          return _onClick(articleId);
        },
        tag: articleTitle,
        secondary: true
      });
    }));
  }

  return null;
}

SuggestedTags.propTypes = {
  /** Extra class name */
  className: PropTypes.string,
  onClick: PropTypes.func,
  tags: PropTypes.arrayOf(TagShape)
};
SuggestedTags.defaultProps = {
  className: '',
  onClick: noop_1,
  tags: null
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

var ellipsis = function ellipsis() {
  return styled.css(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
};
var colorWithAlpha = function colorWithAlpha(color, alpha) {
  return Color(color).alpha(alpha).string();
};

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    list-style-type: none;\n    margin: 0;\n    padding: 7px 18px;\n\n    ", "\n\n    > li {\n        font-size: ", ";\n        font-weight: normal;\n        line-height: 1em;\n        padding: ", "px 0;\n\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n    }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var LIST_VERTICAL_PADDING = 11;
var StyledList = styled__default.ul(_templateObject$3(), function (_ref) {
  var bigItems = _ref.bigItems;
  return bigItems && styled.css(["padding-bottom:2px;padding-top:2px;"]);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.font_size.s;
}, LIST_VERTICAL_PADDING, function (_ref3) {
  var bigItems = _ref3.bigItems;
  return bigItems && styled.css(["font-size:", ";padding-bottom:16px;padding-top:16px;"], function (_ref4) {
    var theme = _ref4.theme;
    return theme.font_size.base;
  });
}, function (_ref5) {
  var boldItems = _ref5.boldItems;
  return boldItems && styled.css(["font-weight:bold;"]);
}, function (_ref6) {
  var linesBetween = _ref6.linesBetween,
      theme = _ref6.theme;
  return linesBetween && styled.css(["border-bottom:solid 1px ", ";&:last-child{border:0;}"], theme.color.fandom_light_gray);
}, function (_ref7) {
  var hasEllipsis = _ref7.hasEllipsis;
  return hasEllipsis && styled.css(["", " > a{", "}"], ellipsis(), ellipsis());
}, function (_ref8) {
  var isLinked = _ref8.isLinked;
  return isLinked && styled.css(["padding:0;> a{display:block;padding:", "px 0;}"], LIST_VERTICAL_PADDING);
});
StyledList.propTypes = {
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
StyledList.defaultProps = {
  bigItems: false,
  boldItems: false,
  children: null,
  className: '',
  hasEllipsis: false,
  isLinked: false,
  linesBetween: false
};

function escapeRegex(text) {
  return text.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
}
/**
 * `HighlightedText` is a text node with highlighted text.
 */


var HighlightedText = function HighlightedText(_ref) {
  var highlight = _ref.highlight,
      text = _ref.text;

  if (typeof highlight === 'string' && highlight.length) {
    var highlightRegex = new RegExp("(".concat(escapeRegex(highlight.trim()), ")"), 'ig');
    var newHtml = text.replace(highlightRegex, function (m) {
      return "<mark>".concat(m, "</mark>");
    });
    return (// eslint-disable-next-line react/no-danger
      React.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: newHtml
        }
      })
    );
  }

  return React.createElement("span", null, text);
};

HighlightedText.propTypes = {
  highlight: PropTypes.string,
  text: PropTypes.string.isRequired
};
HighlightedText.defaultProps = {
  highlight: undefined
};

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    ", "\n\n    cursor: pointer;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    margin-right: 6px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    background-color: transparent;\n    border: none;\n    flex-grow: 1;\n    font-size: ", ";\n    line-height: ", ";\n    width: 100%;\n\n    @media ", " {\n        font-size: ", ";\n    }\n\n    &:focus {\n        outline: none;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$1() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n    border-bottom: solid 1px ", ";\n    display: flex;\n    position: relative;\n\n    @media ", " {\n        margin: 13px;\n    }\n"]);

  _templateObject3$1 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$3() {
  var data = _taggedTemplateLiteral(["\n    @media ", " {\n        background-color: ", ";\n        height: 100vh;\n        left: 0;\n        position: fixed;\n        top: 0;\n        width: 100vw;\n        z-index: 1;\n    }\n\n    @media ", " {\n        flex: 1;\n    }\n"]);

  _templateObject2$3 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$4() {
  var data = _taggedTemplateLiteral(["\n    background-color: ", ";\n    border: 1px solid ", ";\n    overflow: hidden;\n    padding: 10px 0;\n    position: absolute;\n    width: 100%;\n    top: 32px;\n\n    @media ", " {\n        top: 24px;\n    }\n\n    > li {\n        cursor: pointer;\n        line-height: 36px;\n        margin: 0 10px;\n        padding: 0 10px;\n\n        &:hover {\n            background-color: ", ";\n        }\n    }\n\n    mark {\n        background-color: transparent;\n        font-weight: ", ";\n    }\n"]);

  _templateObject$4 = function _templateObject() {
    return data;
  };

  return data;
}
var ICON_STYLES = styled.css(["fill:currentColor;height:16px;width:16px;"]);
var List = styled__default(StyledList)(_templateObject$4(), function (_ref) {
  var theme = _ref.theme;
  return theme.color.white;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.fandom_middle_gray;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.media.medium_up;
}, function (_ref4) {
  var accentColor = _ref4.accentColor;
  return colorWithAlpha(accentColor, 0.1);
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.font_weight.bold;
});
var Slider = styled__default.div(_templateObject2$3(), function (_ref6) {
  var theme = _ref6.theme;
  return theme.media.small_down;
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.white;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.media.medium_up;
});
var Wrapper$3 = styled__default.div(_templateObject3$1(), function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.black;
}, function (_ref10) {
  var theme = _ref10.theme;
  return theme.media.small_only;
});
var Input = styled__default.input(_templateObject4(), function (_ref11) {
  var theme = _ref11.theme;
  return theme.font_size.base;
}, function (_ref12) {
  var theme = _ref12.theme;
  return theme.line_height.normal;
}, function (_ref13) {
  var theme = _ref13.theme;
  return theme.media.medium_up;
}, function (_ref14) {
  var theme = _ref14.theme;
  return theme.font_size.s;
});
var IconSearch = styled__default(IconMagnifyingGlassSmall)(_templateObject5(), ICON_STYLES);
var IconClose = styled__default(IconClose$1)(_templateObject6(), ICON_STYLES);

function SearchInput(_ref15) {
  var accentColor = _ref15.accentColor,
      className = _ref15.className,
      onChange = _ref15.onChange,
      onClose = _ref15.onClose,
      onAddTag = _ref15.onAddTag,
      communityName = _ref15.communityName,
      list = _ref15.list,
      query = _ref15.query;
  var ref = React.createRef();
  return React.createElement(Slider, {
    className: className
  }, React.createElement(Wrapper$3, null, React.createElement(IconSearch, null), React.createElement(Input, {
    placeholder: "Searching ".concat(communityName),
    ref: ref,
    onChange: onChange,
    autoFocus: true
  }), list && React.createElement(List, {
    accentColor: accentColor
  }, list.map(function (_ref16) {
    var articleId = _ref16.articleId,
        articleTitle = _ref16.articleTitle;
    return React.createElement("li", {
      key: articleId,
      onClick:
      /* istanbul ignore next */
      function onClick() {
        return onAddTag(articleId);
      }
    }, React.createElement(HighlightedText, {
      highlight: query,
      text: articleTitle
    }));
  })), React.createElement(IconClose, {
    onClick: onClose
  })));
}

SearchInput.propTypes = {
  accentColor: PropTypes.string.isRequired,

  /** Extra class name */
  className: PropTypes.string,
  communityName: PropTypes.string,
  list: PropTypes.arrayOf(TagShape),
  onAddTag: PropTypes.func,
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  query: PropTypes.string
};
SearchInput.defaultProps = {
  className: '',
  communityName: '',
  list: null,
  onAddTag: noop_1,
  onChange: noop_1,
  onClose: noop_1,
  query: ''
};

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n    margin-left: 6px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6$1() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n    background: transparent;\n    border: 0;\n    color: ", ";\n    cursor: pointer;\n    display: inline-flex;\n    font: inherit;\n    font-weight: ", ";\n    line-height: 1;\n    margin: 0;\n    padding: 0;\n\n    &:disabled {\n        opacity: .5;\n        pointer-events: none;\n    }\n"]);

  _templateObject6$1 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5$1() {
  var data = _taggedTemplateLiteral(["\n    display: inline-flex;\n    align-items: center;\n    margin-right: 12px;\n"]);

  _templateObject5$1 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4$1() {
  var data = _taggedTemplateLiteral(["\n    display: flex;\n    height: 24px;\n\n    @media ", " {\n        justify-content: space-between;\n    }\n"]);

  _templateObject4$1 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3$2() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: 12px;\n    width: 12px;\n    margin-left: 6px;\n"]);

  _templateObject3$2 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2$4() {
  var data = _taggedTemplateLiteral(["\n    ", "\n\n    fill: ", ";\n    margin-right: 6px;\n"]);

  _templateObject2$4 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$5() {
  var data = _taggedTemplateLiteral(["\n    ", "\n    margin-right: 6px;\n"]);

  _templateObject$5 = function _templateObject() {
    return data;
  };

  return data;
}
var ICON_STYLES$1 = styled.css(["fill:currentColor;height:18px;width:18px;"]);
var IconTag = styled__default(IconTagSmall)(_templateObject$5(), ICON_STYLES$1);
var IconAlert = styled__default(IconAlertSmall)(_templateObject2$4(), ICON_STYLES$1, function (_ref) {
  var theme = _ref.theme;
  return theme.color.fandom_red;
});
var IconAdd = styled__default(IconAddSmall)(_templateObject3$2());
var Wrapper$4 = styled__default.div(_templateObject4$1(), function (_ref2) {
  var theme = _ref2.theme;
  return theme.media.small_down;
});
var Header = styled__default.div(_templateObject5$1());
var AddTagButton = styled__default.button(_templateObject6$1(), function (_ref3) {
  var accentColor = _ref3.accentColor;
  return accentColor;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.font_weight.medium;
});
var MaxTagsAdded = styled__default.div(_templateObject7());

function SearchForm(_ref5) {
  var accentColor = _ref5.accentColor,
      className = _ref5.className,
      communityName = _ref5.communityName,
      maxAllowed = _ref5.maxAllowed,
      maxNumOfTagsAdded = _ref5.maxNumOfTagsAdded,
      _onAddTag = _ref5.onAddTag,
      onOpenSearch = _ref5.onOpenSearch,
      onSearch = _ref5.onSearch,
      query = _ref5.query,
      searchResults = _ref5.searchResults;

  /* istanbul ignore next  */
  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      showSearch = _React$useState2[0],
      setShowSearch = _React$useState2[1];
  /* istanbul ignore next  */


  var doSearch = debounce_1(onSearch, 300);
  /* istanbul ignore next  */

  var onChange = function onChange(event) {
    return doSearch(event.target.value.trim());
  };

  return React.createElement(Wrapper$4, {
    className: className
  }, React.createElement(Header, null, React.createElement(IconTag, null), "Tag Wiki Pages"),
  /* istanbul ignore next */
  showSearch ? React.createElement(SearchInput, {
    communityName: communityName,
    accentColor: accentColor,
    list: searchResults,
    onAddTag:
    /* istanbul ignore next */
    function onAddTag(id) {
      setShowSearch(false);

      _onAddTag(id);
    },
    onChange: onChange,
    onClose:
    /* istanbul ignore next */
    function onClose() {
      return setShowSearch(false);
    },
    query: query
  }) : React.createElement(React.Fragment, null, React.createElement(AddTagButton, {
    accentColor: accentColor,
    onClick:
    /* istanbul ignore next */
    function onClick() {
      onOpenSearch();
      setShowSearch(true);
    },
    disabled: maxNumOfTagsAdded
  }, "Add Tag", React.createElement(IconAdd, null)), maxNumOfTagsAdded && React.createElement(MaxTagsAdded, null, React.createElement(IconAlert, null), "Maximum ".concat(maxAllowed, " tag"))));
}

SearchForm.propTypes = {
  accentColor: PropTypes.string.isRequired,

  /** Extra class name */
  className: PropTypes.string,
  communityName: PropTypes.string,
  maxAllowed: PropTypes.number,
  maxNumOfTagsAdded: PropTypes.bool,
  onAddTag: PropTypes.func,
  onOpenSearch: PropTypes.func,
  onSearch: PropTypes.func,
  query: PropTypes.string,
  searchResults: PropTypes.arrayOf(TagShape)
};
SearchForm.defaultProps = {
  className: '',
  communityName: '',
  maxAllowed: 10,
  maxNumOfTagsAdded: false,
  onAddTag: noop_1,
  onOpenSearch: noop_1,
  onSearch: noop_1,
  query: '',
  searchResults: null
};

function _templateObject$6() {
  var data = _taggedTemplateLiteral(["\n    font-size: ", ";\n"]);

  _templateObject$6 = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper$5 = styled__default.div(_templateObject$6(), function (_ref) {
  var theme = _ref.theme;
  return theme.font_size.s;
});
/**
 * `StyledArticleTagsSelector` component.
 *
 * **NOTE**: Several props are arrays of `Tag`s - `Tag` is defined as follows:
 * ```typescript
 * interface Tag {
 *   articleId: string;
 *   articleTitle: string;
 *   url?: string;
 * }
 * ```
 */

function StyledArticleTagsSelector(_ref2) {
  var accentColor = _ref2.accentColor,
      className = _ref2.className,
      communityName = _ref2.communityName,
      maxAllowed = _ref2.maxAllowed,
      onAddTag = _ref2.onAddTag,
      onOpenSearch = _ref2.onOpenSearch,
      onRemoveTag = _ref2.onRemoveTag,
      onSearch = _ref2.onSearch,
      onSuggestedTag = _ref2.onSuggestedTag,
      searchResults = _ref2.searchResults,
      suggestedTags = _ref2.suggestedTags,
      tags = _ref2.tags;

  var _React$useState = React.useState(''),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      query = _React$useState2[0],
      setQuery = _React$useState2[1];

  var maxNumOfTagsAdded = tags && tags.length >= maxAllowed;

  var searchCallback =
  /* istanbul ignore next */
  function searchCallback(q) {
    setQuery(q);
    onSearch(q);
  };

  return React.createElement(Wrapper$5, {
    className: className
  }, React.createElement(SearchForm, {
    accentColor: accentColor,
    communityName: communityName,
    maxNumOfTagsAdded: maxNumOfTagsAdded,
    maxAllowed: maxAllowed,
    onAddTag: onAddTag,
    query: query,
    onOpenSearch: onOpenSearch,
    onSearch: searchCallback,
    searchResults: searchResults
  }), React.createElement(AddedTags, {
    tags: tags,
    onRemove: onRemoveTag
  }), !maxNumOfTagsAdded && React.createElement(SuggestedTags, {
    tags: suggestedTags,
    onClick: onSuggestedTag
  }));
}

StyledArticleTagsSelector.propTypes = {
  /** Accent color */
  accentColor: PropTypes.string,

  /** Extra class name */
  className: PropTypes.string,

  /** Name of the current community */
  communityName: PropTypes.string,

  /** How many tags are allowed */
  maxAllowed: PropTypes.number,

  /** Callback called when clicking on tags in the "Add Tag" dropdown; `(id: string) => void` */
  onAddTag: PropTypes.func,

  /** Callback called when search is opened/shown */
  onOpenSearch: PropTypes.func,

  /** Callback called when clicking on X in the current tags list; `(id: string) => void` */
  onRemoveTag: PropTypes.func,

  /** Callback called when search should be called; `(query: string) => void` */
  onSearch: PropTypes.func,

  /** Callback called when clicking on one of the suggested tags; `(id: string) => void` */
  onSuggestedTag: PropTypes.func,

  /** Search result tags; `Tag[]` (see above); current query will automatically be highlighted */
  searchResults: PropTypes.arrayOf(TagShape),

  /** Suggested tags; `Tag[]` (see above) */
  suggestedTags: PropTypes.arrayOf(TagShape),

  /** Current tags; `Tag[]` (see above) */
  tags: PropTypes.arrayOf(TagShape)
};
StyledArticleTagsSelector.defaultProps = {
  // TODO: remove once theming is refactored
  accentColor: COLORS.fandom_aqua,
  className: '',
  communityName: '',
  maxAllowed: 10,
  onOpenSearch: noop_1,
  onAddTag: noop_1,
  onRemoveTag: noop_1,
  onSearch: noop_1,
  onSuggestedTag: noop_1,
  searchResults: null,
  suggestedTags: null,
  tags: null
};

module.exports = StyledArticleTagsSelector;
