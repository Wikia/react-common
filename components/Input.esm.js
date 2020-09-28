import React from 'react';
import PropTypes from 'prop-types';

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

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal || freeSelf || Function('return this')();

var _root = root;

/** Built-in value references. */
var Symbol = _root.Symbol;

var _Symbol = Symbol;

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

function generateId() {
  return uniqueId_1('wds_input_');
}

var Input = /*#__PURE__*/function (_React$Component) {
  _inherits(Input, _React$Component);

  var _super = _createSuper(Input);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      var _this$props = _this.props,
          readonly = _this$props.readonly,
          disabled = _this$props.disabled,
          onChange = _this$props.onChange;

      if (readonly || disabled) {
        return;
      }

      var value = event.target.value;

      _this.setState({
        value: value,
        isEmpty: value.length === 0
      });

      onChange(value, event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (event) {
      var _this$props2 = _this.props,
          readonly = _this$props2.readonly,
          disabled = _this$props2.disabled,
          onClick = _this$props2.onClick;

      if (readonly || disabled) {
        return;
      }

      onClick(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (event) {
      var _this$props3 = _this.props,
          readonly = _this$props3.readonly,
          onFocus = _this$props3.onFocus;

      if (readonly) {
        return;
      }

      _this.setState({
        isFocused: true
      });

      onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (event) {
      var onBlur = _this.props.onBlur;

      _this.setState({
        isFocused: false
      });

      onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), "handleAutoResize", function () {
      _this.doAutoResize();
    });

    var _value = props.value;
    var id = props.id || generateId();
    _this.state = {
      value: _value,
      id: id,
      isEmpty: _value.length === 0,
      isFocused: false,
      dynamicTextareaHeight: null
    };
    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.autoFocus();

      if (this.isAutoResize()) {
        this.handleAutoResize();
      }
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      var id = newProps.id || generateId();
      this.setState({
        value: newProps.value,
        id: id,
        isEmpty: newProps.value.length === 0
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.forceFocus();
    }
  }, {
    key: "getClassName",
    value: function getClassName() {
      var _this$props4 = this.props,
          disabled = _this$props4.disabled,
          readonly = _this$props4.readonly,
          status = _this$props4.status,
          resize = _this$props4.resize,
          className = _this$props4.className,
          hint = _this$props4.hint;
      var _this$state = this.state,
          isEmpty = _this$state.isEmpty,
          isFocused = _this$state.isFocused;
      return ['wds-input', disabled ? 'is-disabled' : null, readonly ? 'is-readonly' : null, status === 'error' ? 'has-error' : null, typeof resize === 'boolean' && resize ? 'is-resize' : null, hint ? 'has-hint' : null, isEmpty ? 'is-empty' : null, isFocused ? 'is-focused' : null, className].filter(Boolean).join(' ');
    }
  }, {
    key: "getInputClassName",
    value: function getInputClassName() {
      var inputClassName = this.props.inputClassName;
      return ['wds-input__field', inputClassName].join(' ');
    }
  }, {
    key: "getLabelClassName",
    value: function getLabelClassName() {
      var labelClassName = this.props.labelClassName;
      return ['wds-input__label', labelClassName].join(' ');
    }
  }, {
    key: "getHintClassName",
    value: function getHintClassName() {
      var hintClassName = this.props.hintClassName;
      return ['wds-input__hint', hintClassName].join(' ');
    }
  }, {
    key: "getSharedInputProps",
    value: function getSharedInputProps() {
      var _this$state2 = this.state,
          id = _this$state2.id,
          value = _this$state2.value;
      var _this$props5 = this.props,
          disabled = _this$props5.disabled,
          onKeyDown = _this$props5.onKeyDown,
          onKeyPress = _this$props5.onKeyPress,
          onKeyUp = _this$props5.onKeyUp,
          onPaste = _this$props5.onPaste,
          placeholder = _this$props5.placeholder,
          readonly = _this$props5.readonly,
          tabIndex = _this$props5.tabIndex,
          maxLength = _this$props5.maxLength;
      return {
        className: this.getInputClassName(),
        id: id,
        name: id,
        value: value,
        onChange: this.handleChange,
        onClick: this.handleClick,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyUp: onKeyUp,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        onPaste: onPaste,
        readOnly: readonly,
        disabled: disabled,
        tabIndex: tabIndex,
        placeholder: placeholder,
        maxLength: maxLength
      };
    }
  }, {
    key: "doAutoResize",
    value: function doAutoResize() {
      var _this2 = this;

      // height has to be reset first because if not it keeps increasing every time user will type a character
      // setting actual height must be done in setState callback, because React might optimize this into one setState call
      // scrollHeight includes padding but not border, we need to compensate this to avoid slight height change
      // keep value in sync with bottom-border in .wds-input__field styles
      var BOTTOM_BORDER_WIDTH = 1;
      this.setState({
        dynamicTextareaHeight: 'auto'
      }, function () {
        _this2.setState({
          dynamicTextareaHeight: "".concat(_this2.input.scrollHeight + BOTTOM_BORDER_WIDTH, "px")
        });
      }); // to prevent scroll jumping

      this.input.scrollTop = this.input.scrollHeight;
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.input && document.activeElement !== this.input) {
        this.input.focus();
      }
    }
  }, {
    key: "blur",
    value: function blur() {
      if (this.input) {
        this.input.blur();
      }
    }
  }, {
    key: "isAutoFocus",
    value: function isAutoFocus() {
      var _this$props6 = this.props,
          autoFocus = _this$props6.autoFocus,
          forceFocus = _this$props6.forceFocus,
          disabled = _this$props6.disabled,
          readonly = _this$props6.readonly;
      return (autoFocus || forceFocus) && !disabled && !readonly;
    }
  }, {
    key: "isForceFocus",
    value: function isForceFocus() {
      var _this$props7 = this.props,
          forceFocus = _this$props7.forceFocus,
          disabled = _this$props7.disabled,
          readonly = _this$props7.readonly;
      return forceFocus && !disabled && !readonly;
    }
  }, {
    key: "isAutoResize",
    value: function isAutoResize() {
      var resize = this.props.resize;
      return resize === 'auto';
    }
  }, {
    key: "autoFocus",
    value: function autoFocus() {
      if (this.isAutoFocus() && this.input) {
        this.input.focus();
      }
    }
  }, {
    key: "forceFocus",
    value: function forceFocus() {
      if (this.isForceFocus() && this.input) {
        if (document.activeElement !== this.input) {
          this.input.focus();
        }
      }
    }
  }, {
    key: "renderMultiline",
    value: function renderMultiline() {
      var _this3 = this;

      var rows = this.props.rows;
      var _this$state3 = this.state,
          dynamicTextareaHeight = _this$state3.dynamicTextareaHeight,
          value = _this$state3.value;

      var props = _objectSpread2({}, this.getSharedInputProps(), {
        rows: rows
      });

      if (this.isAutoResize()) {
        props.onInput = this.handleAutoResize;
      }

      if (dynamicTextareaHeight) {
        props.style = {
          height: dynamicTextareaHeight
        };
      }

      return React.createElement("textarea", _extends({
        ref: function ref(input) {
          _this3.input = input;
        }
      }, props), value);
    }
  }, {
    key: "renderInput",
    value: function renderInput() {
      var _this4 = this;

      var type = this.props.type;

      if (type === 'multiline') {
        return this.renderMultiline();
      }

      var props = _objectSpread2({}, this.getSharedInputProps(), {
        type: type
      });

      return React.createElement("input", _extends({
        ref: function ref(input) {
          _this4.input = input;
        }
      }, props));
    }
  }, {
    key: "renderLabel",
    value: function renderLabel() {
      var id = this.state.id;
      var label = this.props.label;
      return React.createElement("label", {
        className: this.getLabelClassName(),
        htmlFor: id
      }, label);
    }
  }, {
    key: "renderHint",
    value: function renderHint() {
      var hint = this.props.hint;

      if (!hint) {
        return null;
      }

      return React.createElement("div", {
        className: this.getHintClassName()
      }, hint);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement("div", {
        className: this.getClassName()
      }, this.renderInput(), this.renderHint(), this.renderLabel());
    }
  }]);

  return Input;
}(React.Component);

_defineProperty(Input, "propTypes", {
  /** Auto focus flag */
  autoFocus: PropTypes.bool,

  /** Additional class name for the component */
  className: PropTypes.string,

  /** Disabled flag */
  disabled: PropTypes.bool,

  /** Force focus flag */
  forceFocus: PropTypes.bool,

  /** Hint to display */
  hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),

  /** Additional class name for the hint  */
  hintClassName: PropTypes.string,

  /** ID of the element - by default it's generated automatically */
  id: PropTypes.string,

  /** Additional class name for the input */
  inputClassName: PropTypes.string,

  /** Label that we want to display. */
  label: function label(props, propName) {
    // eslint-disable-next-line react/destructuring-assignment
    if (props.placeholder && props[propName]) {
      return new Error("Prop ".concat(propName, " is not used when placeholder is set"));
    } // eslint-disable-next-line react/destructuring-assignment


    if (!props.placeholder && !props[propName]) {
      return new Error("Prop ".concat(propName, " is required when placeholder is not set"));
    } // eslint-disable-next-line react/destructuring-assignment


    if (typeof props[propName] !== 'string') {
      return new Error("Prop ".concat(propName, " is not a string"));
    }

    return null;
  },

  /** Additional class name for the label */
  labelClassName: PropTypes.string,
  maxLength: PropTypes.number,

  /** Callback for `onBlur` event */
  onBlur: PropTypes.func,

  /**
   * Callback for `onChange` event - will be called whenever the value chnages
   * with `callback(value, event)`.
   */
  onChange: PropTypes.func,

  /** called for `onClick` event */
  onClick: PropTypes.func,

  /** Callback for `onFocus` event */
  onFocus: PropTypes.func,

  /** Callback for `onKeyDown` event */
  onKeyDown: PropTypes.func,

  /** Callback for `onKeyPress` event */
  onKeyPress: PropTypes.func,

  /** Callback for `onKeyUp` event */
  onKeyUp: PropTypes.func,

  /** Callback for `onPaste` event */
  onPaste: PropTypes.func,

  /** Placeholder to display */
  placeholder: PropTypes.string,

  /** Readonly flag */
  readonly: PropTypes.bool,

  /**
   * Can the textarea be resized by the user
   * Use `auto` to adjust textarea height automatically
   *
   * **Note**: This prop only makes sense for multiline inputs.
   */
  resize: PropTypes.oneOf(['auto', true, false]),

  /**
   * Initial number of rows
   *
   * **Note**: This prop only makes sense for multiline inputs.
   */
  rows: PropTypes.number,

  /** Status */
  status: PropTypes.oneOf(['normal', 'error']),

  /** Tab Index */
  tabIndex: PropTypes.number,

  /**
   * Type of the input.
   * Use `multiline` for multi-line input (textarea).
   */
  type: PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url', 'password', 'multiline']),

  /** Value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
});

_defineProperty(Input, "defaultProps", {
  autoFocus: false,
  className: '',
  disabled: false,
  forceFocus: false,
  hint: null,
  hintClassName: '',
  id: null,
  inputClassName: '',
  label: '',
  labelClassName: '',
  maxLength: undefined,
  placeholder: null,
  readonly: false,
  resize: false,
  rows: 2,
  status: 'normal',
  tabIndex: 0,
  type: 'text',
  value: '',
  onChange: function onChange() {},
  onClick: function onClick() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {},
  onPaste: function onPaste() {}
});

export default Input;
