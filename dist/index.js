'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

/**
 * Basic button component
 */

var Button = function Button(_ref) {
  var className = _ref.className,
      href = _ref.href,
      text = _ref.text,
      secondary = _ref.secondary,
      square = _ref.square,
      fullwidth = _ref.fullwidth,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "href", "text", "secondary", "square", "fullwidth", "children"]);

  var classes = ['wds-button', className, secondary ? 'wds-is-secondary' : '', square ? 'wds-is-square' : '', text ? 'wds-is-text' : '', fullwidth ? 'wds-is-fullwidth' : ''].filter(function (c) {
    return c;
  }).join(' ');

  if (href) {
    return React.createElement("a", _extends({
      href: href,
      className: classes
    }, rest), children);
  }

  return React.createElement("button", _extends({
    className: classes
  }, rest), children);
};

Button.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,

  /**
  * href attribute.
  * Button uses `<a>` tag if it's present.
  */
  className: PropTypes.string,

  /**
  * Additional class name
  */
  disabled: PropTypes.bool,

  /**
  * Disabled attribute for the `<button>`
  */
  fullwidth: PropTypes.bool,

  /**
  * Secondary flag
  */
  href: PropTypes.string,

  /**
  * Square flag
  */
  onClick: PropTypes.func,

  /**
  * Text flag
  */
  secondary: PropTypes.bool,

  /**
  * Full width flag
  */
  square: PropTypes.bool,

  /**
  * Callback for the `<button>`
  */
  text: PropTypes.bool
};
Button.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  fullwidth: false,
  href: null,
  secondary: false,
  square: false,
  text: false,
  onClick: function onClick() {}
};

/**
 * Button group component
 */

var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = ['wds-button-group', className].filter(function (c) {
    return c;
  }).join(' ');
  return React.createElement("div", _extends({
    className: classes
  }, rest), children);
};

ButtonGroup.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,

  /**
  * Additional class name
  */
  className: PropTypes.string
};
ButtonGroup.defaultProps = {
  children: null,
  className: ''
};

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
          className = _this$props.className;
      var _this$state = this.state,
          isEmpty = _this$state.isEmpty,
          isFocused = _this$state.isFocused;
      var statusClass = null;

      if (isFocused) {
        statusClass = 'is-focused';
      } else if (isEmpty) {
        statusClass = 'is-empty';
      }

      return ['wds-input', disabled ? 'is-disabled' : null, readonly ? 'is-readonly' : null, status === 'error' ? 'has-error' : null, typeof resize === 'boolean' && resize ? 'is-resize' : null, statusClass, className].filter(Boolean).join(' ');
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

var Fieldset = function Fieldset(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: "wds-fieldset ".concat(className)
  }, children);
};

Fieldset.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,

  /**
  * Additional class name
  */
  className: PropTypes.string
};
Fieldset.defaultProps = {
  children: null,
  className: ''
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

  return React.createElement("div", {
    className: classes.join(' '),
    style: style
  }, React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size),
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    transform: "translate(".concat(translate, ", ").concat(translate, ")")
  }, React.createElement("circle", {
    fill: "none",
    strokeWidth: stroke,
    strokeDasharray: dash,
    strokeDashoffset: dash,
    strokeLinecap: "round",
    r: r
  }))));
};

Spinner.propTypes = {
  /**
  * Additional class name
  */
  block: PropTypes.bool,

  /**
  * Loader size
  */
  className: PropTypes.string,

  /**
  * Stroke width
  */
  inline: PropTypes.bool,

  /**
  * Display block and center
  */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
  * Display contentinline based on line height
  */
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Spinner.defaultProps = {
  className: '',
  size: 30,
  stroke: 2,
  block: false,
  inline: false
};

/**
 * Floating button (icons-only)
 */

var FloatingButton = function FloatingButton(_ref) {
  var className = _ref.className,
      href = _ref.href,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "href", "children"]);

  var classes = ['wds-floating-button', className].filter(function (c) {
    return c;
  }).join(' ');

  if (href) {
    return React.createElement("a", _extends({
      href: href,
      className: classes
    }, rest), children);
  }

  return React.createElement("button", _extends({
    className: classes
  }, rest), children);
};

FloatingButton.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,

  /**
  * href attribute.
  * FloatingButton uses `<a>` tag if it's present.
  */
  className: PropTypes.string,

  /**
  * Additional class name
  */
  disabled: PropTypes.bool,

  /**
  * Disabled attribute for the `<button>`
  */
  href: PropTypes.string,

  /**
  * Callback for the `<button>`
  */
  onClick: PropTypes.func
};
FloatingButton.defaultProps = {
  children: null,
  className: '',
  disabled: false,
  href: null,
  onClick: function onClick() {}
};

/**
 * Floating button group
 */

var FloatingButtonGroup = function FloatingButtonGroup(_ref) {
  var className = _ref.className,
      vertical = _ref.vertical,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "vertical", "children"]);

  var classes = ['wds-floating-button-group', vertical ? 'wds-is-vertical' : '', className].filter(function (c) {
    return c;
  }).join(' ');
  return React.createElement("div", _extends({
    className: classes
  }, rest), children);
};

FloatingButtonGroup.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,

  /**
  * Vertical flag fro the group
  */
  className: PropTypes.string,

  /**
  * Additional class name
  */
  vertical: PropTypes.bool
};
FloatingButtonGroup.defaultProps = {
  children: null,
  vertical: false,
  className: ''
};

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
      props = _objectWithoutProperties(_ref, ["name", "className", "small", "tiny"]);

  var isSmall = small || /-small$/.test(name);
  var isTiny = tiny || /-tiny$/.test(name);
  var classes = ['wds-icon', className, isSmall ? 'wds-icon-small' : '', isTiny ? 'wds-icon-tiny' : ''].filter(function (c) {
    return c;
  }).join(' ');
  return React.createElement("svg", _extends({
    className: classes
  }, props), React.createElement("use", {
    xlinkHref: "#wds-icons-".concat(name)
  }));
};

Icon.propTypes = {
  /**
  * Icon name - both `-small` and `-tiny` prefix are also updating class name
  */
  className: PropTypes.string,

  /**
  * Additional class name
  */
  name: PropTypes.string.isRequired,

  /**
  * `wds-icon-small` flag for the class name (but not for the icon name)
  */
  small: PropTypes.bool,

  /**
  * `wds-icon-tiny` flag for the class name (but not for the icon name)
  */
  tiny: PropTypes.bool
};
Icon.defaultProps = {
  className: '',
  small: false,
  tiny: false
};

function getIconName(type) {
  switch (type) {
    case 'alert':
      return 'error-small';

    case 'warning':
      return 'alert-small';

    case 'success':
      return 'checkmark-circle-small';

    default:
      return 'flag-small';
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
      onClose = _ref.onClose;
  return React.createElement("div", {
    className: "wds-banner-notification ".concat(getClassName(type), " ").concat(className)
  }, React.createElement("div", {
    className: "wds-banner-notification__icon"
  }, React.createElement(Icon, {
    name: getIconName(type)
  })), React.createElement("span", {
    className: "wds-banner-notification__text"
  }, text), onClose && React.createElement(Icon, {
    name: "cross-tiny",
    className: "wds-banner-notification__close",
    onClick: onClose
  }));
};

BannerNotification.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired
};
BannerNotification.defaultProps = {
  className: '',
  onClose: null
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

  function BannerNotifications(props) {
    var _this;

    _classCallCheck(this, BannerNotifications);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BannerNotifications).call(this, props));
    _this.onClose = _this.onClose.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(BannerNotifications, [{
    key: "onClose",
    value: function onClose(id) {
      var onClose = this.props.onClose;
      onClose(id);
    }
  }, {
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

BannerNotifications.propTypes = {
  /**
  * An additional class name
  */
  className: PropTypes.string,

  /**
  * An array of `bannerNotificationsMessageType` objects
  * @type {bannerNotificationsMessageType}
  */
  messages: PropTypes.arrayOf(messageType).isRequired,

  /**
  * Action invoked when close button is clicked
  * @type {[type]}
  */
  onClose: PropTypes.func.isRequired
};
BannerNotifications.defaultProps = {
  className: ''
};

/**
 * Video Play icon
 */

var VideoPlayIcon = function VideoPlayIcon(_ref) {
  var className = _ref.className,
      size = _ref.size;
  var style = {
    height: size,
    width: size
  };
  return React.createElement("svg", {
    className: "fandom-video-play-icon ".concat(className),
    style: style,
    viewBox: "0 0 180 180",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "fandom-video-play-icon_b",
    width: "150",
    height: "150",
    rx: "75"
  }), React.createElement("filter", {
    x: "-15%",
    y: "-15%",
    width: "130%",
    height: "130%",
    filterUnits: "objectBoundingBox",
    id: "fandom-video-play-icon_a"
  }, React.createElement("feOffset", {
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), React.createElement("feGaussianBlur", {
    stdDeviation: "7.5",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0",
    in: "shadowBlurOuter1"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    className: "fandom-video-play-icon__circle",
    opacity: ".9",
    transform: "rotate(90 75 90)"
  }, React.createElement("use", {
    fill: "#000",
    filter: "url(#fandom-video-play-icon_a)",
    xlinkHref: "#fandom-video-play-icon_b"
  }), React.createElement("use", {
    fill: "#fff",
    xlinkHref: "#fandom-video-play-icon_b"
  })), React.createElement("path", {
    className: "fandom-video-play-icon__triangle",
    d: "M80.87 58.006l34.32 25.523c3.052 2.27 3.722 6.635 1.496 9.748a6.91 6.91 0 0 1-1.497 1.527l-34.318 25.523c-3.053 2.27-7.332 1.586-9.558-1.527A7.07 7.07 0 0 1 70 114.69V63.643c0-3.854 3.063-6.977 6.84-6.977 1.449 0 2.86.469 4.03 1.34z",
    fillRule: "nonzero"
  })));
};

VideoPlayIcon.propTypes = {
  /**
  * Additional class name
  */
  className: PropTypes.string,

  /**
  * Icon size
  */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
VideoPlayIcon.defaultProps = {
  className: '',
  size: 90
};

/**
 * ContentWell wraps `children` in `wds-content-well` CSS mixin.
 */

var ContentWell = function ContentWell(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: "wds-content-well ".concat(className)
  }, children);
};

ContentWell.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,

  /**
  * Additional class name
  */
  className: PropTypes.string
};
ContentWell.defaultProps = {
  children: null,
  className: ''
};

/**
 * FandomContentWell wraps `children` in `wds-content-well($use-xxlarge-breakpoint: false)` CSS mixin.
 */

var FandomContentWell = function FandomContentWell(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: "wds-fandom-content-well ".concat(className)
  }, children);
};

FandomContentWell.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,

  /**
  * Additional class name
  */
  className: PropTypes.string
};
FandomContentWell.defaultProps = {
  children: null,
  className: ''
};

function makeShortText(text, characterLimit) {
  return text.substring(0, characterLimit);
}

/**
 * ExpandableText component can be used to temporarily limit text showed to the user.
 * It has a button used to fully expand the text.
 * If the source text is shorter than the limit the button do not show.
 *
 * Both button label and string used to ellipsis has to be configured.
 * Button and the text itself can be syled with classes passed to the component.
 */

var ExpandableText =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExpandableText, _React$Component);

  function ExpandableText(props) {
    var _this;

    _classCallCheck(this, ExpandableText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExpandableText).call(this, props));
    _this.handleExpandClick = _this.handleExpandClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    var shortText = makeShortText(props.text, props.characterLimit);
    _this.state = {
      isExpandable: shortText.length < props.text.length,
      isExpanded: false,
      shortText: shortText
    };
    return _this;
  }

  _createClass(ExpandableText, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(newProps) {
      var shortText = makeShortText(newProps.text, newProps.characterLimit);
      this.setState({
        isExpandable: shortText.length < newProps.text.length,
        isExpanded: false,
        shortText: shortText
      });
    }
  }, {
    key: "handleExpandClick",
    value: function handleExpandClick() {
      this.setState({
        isExpandable: false,
        isExpanded: true
      });
    }
  }, {
    key: "renderExpandBlock",
    value: function renderExpandBlock() {
      var _this$props = this.props,
          ellipsis = _this$props.ellipsis,
          expandLabel = _this$props.expandLabel,
          expandClassName = _this$props.expandClassName;
      return React.createElement("span", null, ellipsis, "\xA0", React.createElement("button", {
        className: "expandable-text__expand ".concat(expandClassName),
        onClick: this.handleExpandClick
      }, expandLabel));
    }
  }, {
    key: "renderText",
    value: function renderText() {
      var text = this.props.text;
      var _this$state = this.state,
          isExpanded = _this$state.isExpanded,
          shortText = _this$state.shortText;
      return isExpanded ? text : shortText;
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var isExpandable = this.state.isExpandable;
      return React.createElement("span", {
        className: "expandable-text ".concat(className)
      }, this.renderText(), isExpandable && this.renderExpandBlock());
    }
  }]);

  return ExpandableText;
}(React.Component);

ExpandableText.propTypes = {
  /**
  * Additional class name
  */
  characterLimit: PropTypes.number.isRequired,

  /**
  * Character limit
  */
  className: PropTypes.string,

  /**
  * Ellipsis (defaults to `&hellip;`)
  */
  ellipsis: PropTypes.string,

  /**
  * Additional class name for the expand button
  */
  expandClassName: PropTypes.string,

  /**
  * Label used on the expand button
  */
  expandLabel: PropTypes.string.isRequired,

  /**
  * Full text to display
  */
  text: PropTypes.string.isRequired
};
ExpandableText.defaultProps = {
  className: '',
  ellipsis: "\u2026",
  expandClassName: ''
};

function getUuid(urlOrUuid) {
  var matches = urlOrUuid.match(/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/);

  if (matches) {
    // UUID found in `urlOrUuid`
    return matches[0];
  }

  return false;
}

function getVignetteParamsTopCrop(width, height) {
  return "/top-crop/width/".concat(width, "/height/").concat(height);
}

function getVignetteParamsThumbnail(width, height, allowUpscaling) {
  if (allowUpscaling) {
    return "/thumbnail/width/".concat(width, "/height/").concat(height);
  }

  return "/thumbnail-down/width/".concat(width, "/height/").concat(height);
}

function getVignetteParamsScale(width, height, allowUpscaling) {
  if (width) {
    if (allowUpscaling) {
      return "/scale-to-width/".concat(width);
    }

    return "/scale-to-width-down/".concat(width);
  }

  if (height) {
    return "/scale-to-height-down/".concat(height);
  }

  return '';
}

function getVignetteParams(_ref) {
  var width = _ref.width,
      height = _ref.height,
      method = _ref.method,
      allowUpscaling = _ref.allowUpscaling;

  switch (method) {
    case 'top-crop':
      return getVignetteParamsTopCrop(width, height);

    case 'thumbnail':
      return getVignetteParamsThumbnail(width, height, allowUpscaling);

    case 'scale':
      return getVignetteParamsScale(width, height, allowUpscaling);

    default:
      // auto
      if (width && height) {
        return getVignetteParamsThumbnail(width, height, allowUpscaling);
      }

      return getVignetteParamsScale(width, height, allowUpscaling);
  }
}

/**
 * Vignette helper for getting scaled/resized images from Static Image Assets service.
 *
 * Works for any URL (non-vignette ones won't be resized) and for UUIDs.
 * The `mode` along with `width`, `height` and '`allowUpscaling` will dictate if
 * the final image will be scaled, resized or cropped.
 */

var Vignette = function Vignette(_ref) {
  var allowUpscaling = _ref.allowUpscaling,
      alt = _ref.alt,
      className = _ref.className,
      height = _ref.height,
      image = _ref.image,
      method = _ref.method,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, ["allowUpscaling", "alt", "className", "height", "image", "method", "width"]);

  var imageUrlOrUuid = image.replace('//static.wikia.nocookie.net/', '//vignette.wikia.nocookie.net/');

  if (imageUrlOrUuid.indexOf('vignette.wikia.nocookie.net') !== -1) {
    var uuid = getUuid(imageUrlOrUuid);

    if (uuid) {
      var params = getVignetteParams({
        width: width,
        height: height,
        method: method,
        allowUpscaling: allowUpscaling
      });
      imageUrlOrUuid = "https://vignette.wikia.nocookie.net/".concat(uuid).concat(params);
    }
  }

  return React.createElement("img", _extends({
    className: className,
    src: imageUrlOrUuid,
    alt: alt
  }, rest));
};

Vignette.propTypes = {
  /*
  * Do we want to upscale image if needed?
  */
  allowUpscaling: PropTypes.bool,

  /**
  * Alt text
  */
  alt: PropTypes.string,

  /**
  * Additional class name
  */
  className: PropTypes.string,

  /**
  * Desired image height
  */
  height: PropTypes.number,

  /**
  * Either an URL to image or UUID.
  */
  image: PropTypes.string.isRequired,

  /**
  * Desired image width
  */
  method: PropTypes.oneOf(['auto', 'scale', 'thumbnail', 'top-crop']),

  /**
  * Desired image mode
  */
  width: PropTypes.number
};
Vignette.defaultProps = {
  allowUpscaling: false,
  alt: '',
  className: '',
  height: null,
  method: 'auto',
  width: null
};

// Design System Elements

exports.Button = Button;
exports.ButtonGroup = ButtonGroup;
exports.Input = Input;
exports.Fieldset = Fieldset;
exports.Spinner = Spinner;
exports.FloatingButton = FloatingButton;
exports.FloatingButtonGroup = FloatingButtonGroup;
exports.BannerNotification = BannerNotification;
exports.BannerNotifications = BannerNotifications;
exports.VideoPlayIcon = VideoPlayIcon;
exports.ContentWell = ContentWell;
exports.FandomContentWell = FandomContentWell;
exports.ExpandableText = ExpandableText;
exports.Vignette = Vignette;
exports.bannerNotificationsMessageType = messageType;
