'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var immutable = require('immutable');
var reactRedux = require('react-redux');
var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

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

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol$1 = _root.Symbol;

var _Symbol = Symbol$1;

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

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Generates a unique ID. If `prefix` is given, the ID is appended to it.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {string} [prefix=''] The value to prefix the ID with.
 * @returns {string} Returns the unique ID.
 * @example
 *
 * _.uniqueId('contact_');
 * // => 'contact_104'
 *
 * _.uniqueId();
 * // => '105'
 */
function uniqueId(prefix) {
  var id = ++idCounter;
  return toString_1(prefix) + id;
}

var uniqueId_1 = uniqueId;

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

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$2 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$2.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

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
  var Ctor = hasOwnProperty$1.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

var isPlainObject_1 = isPlainObject;

var BaseModel = function BaseModel(defaultValues, name) {
  return (
    /*#__PURE__*/
    function (_Record) {
      _inherits(_class, _Record);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, null, [{
        key: "build",

        /**
         * Build  from data, returns undefined if data is not an object
         *
         * @param   {Object|Model} data
         * @returns {Model}
         */
        value: function build(data) {
          if (!(isPlainObject_1(data) || data instanceof this)) {
            return undefined;
          }

          var recordInstance = new this();
          return recordInstance.merge(data);
        }
        /**
         * Always returns default (empty)
         *
         * @returns {Model}
         */

      }, {
        key: "empty",
        value: function empty() {
          return this.build({});
        }
        /**
         * Build a List<> collection
         *
         * @param   {Object|Object[]} data
         * @returns {List<Model>|undefined}
         */

      }, {
        key: "buildList",
        value: function buildList(data) {
          var _this = this;

          if (!data) {
            return undefined;
          }

          return immutable.List(data.map(function (item) {
            return _this.build(item);
          }));
        }
      }]);

      return _class;
    }(immutable.Record(defaultValues, name))
  );
};

/**
 * Lowercase, to be compatible with `<BannerNotifications>` component.
 */

var BANNER_NOTIFICATION_TYPES = {
  MESSAGE: 'message',
  ALERT: 'alert',
  SUCCESS: 'success',
  WARNING: 'warning'
};
var BANNER_NOTIFICATIONS_MODEL_KEYS = Object.freeze({
  notifications: 'notifications'
});

var schema = _defineProperty({}, BANNER_NOTIFICATIONS_MODEL_KEYS.notifications, immutable.List());
/**
 * @returns {string}
 */


function generateId() {
  return uniqueId_1('banner-notification-');
}
/**
 * @param {string} text
 * @param {string} type
 * @param {string} id
 */


function buildNotification(text, type, id) {
  return {
    text: text,
    type: type,
    id: id || generateId()
  };
}

var BannerNotificationsStoreModel =
/*#__PURE__*/
function (_Model) {
  _inherits(BannerNotificationsStoreModel, _Model);

  function BannerNotificationsStoreModel() {
    _classCallCheck(this, BannerNotificationsStoreModel);

    return _possibleConstructorReturn(this, _getPrototypeOf(BannerNotificationsStoreModel).apply(this, arguments));
  }

  _createClass(BannerNotificationsStoreModel, [{
    key: "_getNotificationsWithoutId",
    value: function _getNotificationsWithoutId(id) {
      return this.get(BANNER_NOTIFICATIONS_MODEL_KEYS.notifications).filterNot(function (item) {
        return item.id === id;
      });
    }
  }, {
    key: "getNotifications",
    value: function getNotifications() {
      return this.get(BANNER_NOTIFICATIONS_MODEL_KEYS.notifications);
    }
    /**
     * Adds new notification OR updates existing one if there's id
     *
     * @param {string} text
     * @param {string} type (one of NOTIFICATION_TYPES)
     * @param {int} [id=undefined]
     */

  }, {
    key: "withNotification",
    value: function withNotification(text, type) {
      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
      var notification = buildNotification(text, type, id);

      var notifications = this._getNotificationsWithoutId(id).push(notification);

      return this.set(BANNER_NOTIFICATIONS_MODEL_KEYS.notifications, notifications);
    }
  }, {
    key: "withNotificationRemoved",
    value: function withNotificationRemoved(id) {
      var notifications = this._getNotificationsWithoutId(id);

      return this.set(BANNER_NOTIFICATIONS_MODEL_KEYS.notifications, notifications);
    }
  }]);

  return BannerNotificationsStoreModel;
}(BaseModel(schema, 'BannerNotificationsStoreModel'));

var NOTIFICATIONS_ADD = '@Wikia/BannerNotifications/add';
var NOTIFICATIONS_REMOVE = '@Wikia/BannerNotifications/remove';
/**
 * Add notification, this function is not supposed to be called from outside of this file.
 * It's used only by `addAlert`, `addWarning`, `addSuccess` and `addMessage`.
 */

var addNotification = function addNotification(text, type) {
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : undefined;
  return {
    type: NOTIFICATIONS_ADD,
    payload: {
      text: text,
      type: type,
      id: id
    }
  };
};

var addAlert = function addAlert(text, id) {
  return addNotification(text, BANNER_NOTIFICATION_TYPES.ALERT, id);
};
var addWarning = function addWarning(text, id) {
  return addNotification(text, BANNER_NOTIFICATION_TYPES.WARNING, id);
};
var addSuccess = function addSuccess(text, id) {
  return addNotification(text, BANNER_NOTIFICATION_TYPES.SUCCESS, id);
};
var addMessage = function addMessage(text, id) {
  return addNotification(text, BANNER_NOTIFICATION_TYPES.MESSAGE, id);
};
var removeNotfication = function removeNotfication(id) {
  return {
    type: NOTIFICATIONS_REMOVE,
    payload: {
      id: id
    }
  };
};

function handleAddNotification(state, action) {
  var _action$payload = action.payload,
      text = _action$payload.text,
      type = _action$payload.type,
      id = _action$payload.id;
  return state.withNotification(text, type, id);
}

function handleRemoveNotification(state, action) {
  var id = action.payload.id;
  return state.withNotificationRemoved(id);
}

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : BannerNotificationsStoreModel.empty();
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var type = action.type;

  switch (type) {
    case NOTIFICATIONS_ADD:
      return handleAddNotification(state, action);

    case NOTIFICATIONS_REMOVE:
      return handleRemoveNotification(state, action);

    default:
      return state;
  }
}

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCloseTiny = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 12 12" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-systems/BannerNotifications-a", d: "M7.426 6.001l4.278-4.279A1.008 1.008 0 1 0 10.278.296L6 4.574 1.723.296A1.008 1.008 0 1 0 .295 1.722l4.278 4.28-4.279 4.277a1.008 1.008 0 1 0 1.427 1.426L6 7.427l4.278 4.278a1.006 1.006 0 0 0 1.426 0 1.008 1.008 0 0 0 0-1.426L7.425 6.001z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-systems/BannerNotifications-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconCloseTiny$1 = (function (props) {
  return React.createElement(IconCloseTiny, props);
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconAlertSmall = ((_ref) => {
  let props = _objectWithoutProperties$2(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$2({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-systems/BannerNotifications-a", d: "M2.618 15.995L9 3.199l6.382 12.796H2.618zm15.276.554l-8-16.04C9.555-.17 8.445-.17 8.105.51l-8 16.04A1.003 1.003 0 0 0 1 18h16c.347 0 .668-.18.85-.476a.998.998 0 0 0 .044-.975zM8 7.975V9.98a1 1 0 1 0 2 0V7.975a1 1 0 1 0-2 0m1.71 4.3c-.05-.04-.1-.09-.16-.12a.567.567 0 0 0-.17-.09.61.61 0 0 0-.19-.06.999.999 0 0 0-.9.27c-.09.101-.16.201-.21.33a1.01 1.01 0 0 0-.08.383c0 .26.11.52.29.711.19.18.44.291.71.291.06 0 .13-.01.19-.02a.635.635 0 0 0 .19-.06.59.59 0 0 0 .17-.09c.06-.04.11-.08.16-.12.18-.192.29-.452.29-.712 0-.132-.03-.261-.08-.382a.94.94 0 0 0-.21-.33" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-systems/BannerNotifications-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconAlertSmall$1 = (function (props) {
  return React.createElement(IconAlertSmall, props);
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconCheckmarkSmall = ((_ref) => {
  let props = _objectWithoutProperties$3(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$3({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M6 16a.997.997 0 0 1-.707-.293l-5-5a.999.999 0 1 1 1.414-1.414L6 13.586 16.293 3.293a.999.999 0 1 1 1.414 1.414l-11 11A.997.997 0 0 1 6 16", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconCheckmarkSmall$1 = (function (props) {
  return React.createElement(IconCheckmarkSmall, props);
});

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$4(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconFlagSmall = ((_ref) => {
  let props = _objectWithoutProperties$4(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$4({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-systems/BannerNotifications-a", d: "M3 11h10.586l-3.293-3.293a.999.999 0 0 1 0-1.414L13.586 3H3v8zm-1 7a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0h13a1.002 1.002 0 0 1 .707 1.707L12.414 7l4.293 4.293A1 1 0 0 1 16 13H3v4a1 1 0 0 1-1 1z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-systems/BannerNotifications-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconFlagSmall$1 = (function (props) {
  return React.createElement(IconFlagSmall, props);
});

function getIcon(type) {
  switch (type) {
    case 'alert':
      return React.createElement(IconAlertSmall$1, {
        className: "wds-banner-notification__icon-mark"
      });

    case 'warning':
      return React.createElement(IconAlertSmall$1, {
        className: "wds-banner-notification__icon-mark"
      });

    case 'success':
      return React.createElement(IconCheckmarkSmall$1, {
        className: "wds-banner-notification__icon-mark"
      });

    default:
      return React.createElement(IconFlagSmall$1, {
        className: "wds-banner-notification__icon-mark"
      });
  }
}

function getClassName(type) {
  switch (type) {
    case 'alert':
      return 'wds-alert';

    case 'warning':
      return 'wds-warning';

    case 'success':
      return 'wds-success';

    default:
      return 'wds-message';
  }
}
/**
 * This is a single component used in `BannerNotifications` component.
 */


var BannerNotification = function BannerNotification(_ref) {
  var className = _ref.className,
      type = _ref.type,
      text = _ref.text,
      onClose = _ref.onClose,
      children = _ref.children;
  return React.createElement("div", {
    className: "wds-banner-notification ".concat(getClassName(type), " ").concat(className)
  }, React.createElement("div", {
    className: "wds-banner-notification__icon"
  }, getIcon(type)), React.createElement("span", {
    className: "wds-banner-notification__text"
  }, children || text), React.createElement(IconCloseTiny$1, {
    className: "wds-banner-notification__close",
    onClick: onClose
  }));
};

BannerNotification.propTypes = {
  /** Children to display */
  children: PropTypes.node,

  /** An additional class name */
  className: PropTypes.string,
  onClose: PropTypes.func,

  /** Text to display if there are no children. */
  text: PropTypes.string,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired
};
BannerNotification.defaultProps = {
  children: null,
  className: '',
  onClose: null,
  text: ''
};

var messageType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  permanent: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired
});

/**
 * Component used to create notifications. For full functionality it needs some
 * app logic to handle the array of messages - adding/removing.
 *
 * See the following:
 * - https://github.com/Wikia/f2/blob/master/frontend/react-app/curationTools/containers/Notifications.jsx
 * - https://github.com/Wikia/f2/tree/master/frontend/react-app/curationTools/reducers/notifications
 *
 * The `messages` prop is an array of `bannerNotificationsMessageType` objects with the following props:
 * - `id`: unique string that's send as the param of the `onClose` function
 * - `type`: one of: `'alert'`, `'warning'`, `'success'` or `'message'`.
 * - `text`: text that is going to be displayed on the notification
 * - `permanent`: a boolean flag - if present the close button won't be displayed on the notification
 *
 * `bannerNotificationsMessageType` is exported along with `BannerNotification`
 */

var BannerNotifications =
/*#__PURE__*/
function (_React$Component) {
  _inherits(BannerNotifications, _React$Component);

  function BannerNotifications() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, BannerNotifications);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(BannerNotifications)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClose", function (id) {
      var onClose = _this.props.onClose;
      onClose(id);
    });

    return _this;
  }

  _createClass(BannerNotifications, [{
    key: "renderNotification",
    value: function renderNotification(_ref) {
      var _this2 = this;

      var text = _ref.text,
          type = _ref.type,
          id = _ref.id,
          permanent = _ref.permanent;
      var props = {
        key: id,
        type: type,
        text: text
      };

      if (permanent) {
        return React.createElement(BannerNotification, props);
      }

      return React.createElement(BannerNotification, _extends({}, props, {
        onClose: function onClose() {
          return _this2.onClose(id);
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          className = _this$props.className,
          messages = _this$props.messages;

      if (messages.length === 0) {
        return null;
      }

      return React.createElement("div", {
        className: "wds-banner-notification__container ".concat(className)
      }, messages.map(function (message) {
        return _this3.renderNotification(message);
      }));
    }
  }]);

  return BannerNotifications;
}(React.Component);

_defineProperty(BannerNotifications, "propTypes", {
  /** An additional class name */
  className: PropTypes.string,

  /** An array of `bannerNotificationsMessageType` objects */
  messages: PropTypes.arrayOf(messageType).isRequired,

  /** Action invoked when close button is clicked */
  onClose: PropTypes.func.isRequired
});

_defineProperty(BannerNotifications, "defaultProps", {
  className: ''
});

var mapStateToProps = function mapStateToProps(state) {
  return {
    messages: state.BannerNotificationsStore.getNotifications().toJS()
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onClose: function onClose(id) {
      // ignore what component will call

      /* istanbul ignore next */
      dispatch(removeNotfication(id));
    }
  };
};

var BannerNotificationsComponent = reactRedux.connect(mapStateToProps, mapDispatchToProps)(BannerNotifications);

/**
 * BannerNotifications system api
 */

exports.BannerNotificationsStore = reducer;
exports.BannerNotificationsStoreModel = BannerNotificationsStoreModel;
exports.BannerNotificationsComponent = BannerNotificationsComponent;
exports.addAlert = addAlert;
exports.addWarning = addWarning;
exports.addSuccess = addSuccess;
exports.addMessage = addMessage;
exports.removeNotfication = removeNotfication;
