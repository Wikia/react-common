'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

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

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
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

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to generate unique IDs. */
var idCounter = 0;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol$1 = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined,
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
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

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
  return !!value && typeof value == 'object';
}

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
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
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
  return value == null ? '' : baseToString(value);
}

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
  return toString(prefix) + id;
}

var lodash_uniqueid = uniqueId;

function generateId() {
  return lodash_uniqueid('wds_input_');
}

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));
    var value = props.value;
    var id = props.id || generateId();
    _this.state = {
      value: value,
      id: id,
      isEmpty: value.length === 0,
      isFocused: false,
      dynamicTextareaHeight: null
    };
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleAutoResize = _this.handleAutoResize.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.autoFocus();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
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
      var _this$props = this.props,
          disabled = _this$props.disabled,
          readonly = _this$props.readonly,
          status = _this$props.status,
          resize = _this$props.resize,
          className = _this$props.className,
          hint = _this$props.hint;
      var _this$state = this.state,
          isEmpty = _this$state.isEmpty,
          isFocused = _this$state.isFocused;
      var statusClass = null;

      if (isFocused) {
        statusClass = 'is-focused';
      } else if (isEmpty) {
        statusClass = 'is-empty';
      }

      return ['wds-input', disabled ? 'is-disabled' : null, readonly ? 'is-readonly' : null, status === 'error' ? 'has-error' : null, typeof resize === 'boolean' && resize ? 'is-resize' : null, hint ? 'has-hint' : null, statusClass, className].filter(Boolean).join(' ');
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
      var _this$props2 = this.props,
          disabled = _this$props2.disabled,
          onKeyDown = _this$props2.onKeyDown,
          onKeyPress = _this$props2.onKeyPress,
          onKeyUp = _this$props2.onKeyUp,
          onPaste = _this$props2.onPaste,
          placeholder = _this$props2.placeholder,
          readonly = _this$props2.readonly,
          tabIndex = _this$props2.tabIndex;
      return {
        className: this.getInputClassName(),
        id: id,
        name: id,
        value: value,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyUp: onKeyUp,
        onKeyDown: onKeyDown,
        onKeyPress: onKeyPress,
        onPaste: onPaste,
        readOnly: readonly,
        disabled: disabled,
        tabIndex: tabIndex,
        placeholder: placeholder
      };
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
    key: "handleChange",
    value: function handleChange(event) {
      var _this$props3 = this.props,
          readonly = _this$props3.readonly,
          disabled = _this$props3.disabled,
          onChange = _this$props3.onChange;

      if (readonly || disabled) {
        return;
      }

      var value = event.target.value;
      this.setState({
        value: value,
        isEmpty: value.length === 0
      });
      onChange(value, event);
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(event) {
      var _this$props4 = this.props,
          readonly = _this$props4.readonly,
          onFocus = _this$props4.onFocus;

      if (readonly) {
        return;
      }

      this.setState({
        isFocused: true
      });
      onFocus(event);
    }
  }, {
    key: "handleBlur",
    value: function handleBlur(event) {
      var onBlur = this.props.onBlur;
      this.setState({
        isFocused: false
      });
      onBlur(event);
    }
  }, {
    key: "isAutoFocus",
    value: function isAutoFocus() {
      var _this$props5 = this.props,
          autoFocus = _this$props5.autoFocus,
          forceFocus = _this$props5.forceFocus,
          disabled = _this$props5.disabled,
          readonly = _this$props5.readonly;
      return (autoFocus || forceFocus) && !disabled && !readonly;
    }
  }, {
    key: "isForceFocus",
    value: function isForceFocus() {
      var _this$props6 = this.props,
          forceFocus = _this$props6.forceFocus,
          disabled = _this$props6.disabled,
          readonly = _this$props6.readonly;
      return forceFocus && !disabled && !readonly;
    }
  }, {
    key: "isAutoResize",
    value: function isAutoResize() {
      var _this$props7 = this.props,
          resize = _this$props7.resize,
          disabled = _this$props7.disabled,
          readonly = _this$props7.readonly;
      return resize === 'auto' && !disabled && !readonly;
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
    key: "handleAutoResize",
    value: function handleAutoResize() {
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
    key: "renderMultiline",
    value: function renderMultiline() {
      var _this3 = this;

      var rows = this.props.rows;
      var _this$state3 = this.state,
          dynamicTextareaHeight = _this$state3.dynamicTextareaHeight,
          value = _this$state3.value;

      var props = _objectSpread({}, this.getSharedInputProps(), {
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

      var props = _objectSpread({}, this.getSharedInputProps(), {
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

Input.propTypes = {
  /**
   * Additional class name for the component
   */
  autoFocus: PropTypes.bool,

  /**
   * Additional class name for the hint
   */
  className: PropTypes.string,

  /**
   * Additional class name for the input
   */
  disabled: PropTypes.bool,

  /**
   * Additional class name for the label
   */
  forceFocus: PropTypes.bool,

  /**
   * ID of the element - by default it's generated automatically
   */
  hint: PropTypes.string,

  /**
   * Type of the input.
   * Use `multiline` for multi-line input (textarea).
   */
  hintClassName: PropTypes.string,

  /**
   * Value
   */
  id: PropTypes.string,

  /**
   * Label that we want to display.
   */
  inputClassName: PropTypes.string,

  /**
   * Hint to display
   */
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

  /**
   * Placeholder to display
   */
  labelClassName: PropTypes.string,

  /**
   * Status
   */
  onBlur: PropTypes.func,

  /**
   * Tab Index
   */
  onChange: PropTypes.func,

  /**
   * Initial number of rows
   *
   * **Note**: This prop only makes sense for multiline inputs.
   */
  onFocus: PropTypes.func,

  /**
   * Can the textarea be resized by the user
   * Use `auto` to adjust textarea height automatically
   *
   * **Note**: This prop only makes sense for multiline inputs.
   */
  onKeyDown: PropTypes.func,

  /**
   * Auto focus flag
   */
  onKeyPress: PropTypes.func,

  /**
   * Force focus flag
   */
  onKeyUp: PropTypes.func,

  /**
   * Disabled flag
   */
  onPaste: PropTypes.func,

  /**
   * Readonly flag
   */
  placeholder: PropTypes.string,

  /**
   * Callback for `onBlur` event
   */
  readonly: PropTypes.bool,

  /**
   * Callback for `onChange` event - will be called whenever the value chnages
   * with `callback(value, event)`.
   */
  resize: PropTypes.oneOf(['auto', true, false]),

  /**
   * Callback for `onFocus` event
   */
  rows: PropTypes.number,

  /**
   * Callback for `onKeyDown` event
   */
  status: PropTypes.oneOf(['normal', 'error']),

  /**
   * Callback for `onKeyPress` event
   */
  tabIndex: PropTypes.number,

  /**
   * Callback for `onKeyUp` event
   */
  type: PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url', 'password', 'multiline']),

  /**
   * Callback for `onPaste` event
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Input.defaultProps = {
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
  placeholder: null,
  readonly: false,
  resize: false,
  rows: 2,
  status: 'normal',
  tabIndex: 0,
  type: 'text',
  value: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  onKeyPress: function onKeyPress() {},
  onKeyUp: function onKeyUp() {},
  onPaste: function onPaste() {}
};

module.exports = Input;
