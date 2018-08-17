'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var uniqueId = _interopDefault(require('lodash.uniqueid'));

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var _extends = Object.assign || function (target) {
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

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
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
      fullwidth = _ref.fullwidth,
      children = _ref.children,
      rest = objectWithoutProperties(_ref, ['className', 'href', 'text', 'secondary', 'square', 'fullwidth', 'children']);

  var classes = ['wds-button', className, secondary ? 'wds-is-secondary' : '', square ? 'wds-is-square' : '', text ? 'wds-is-text' : '', fullwidth ? 'wds-is-fullwidth' : ''].filter(function (c) {
    return c;
  }).join(' ');

  if (href) {
    return React.createElement(
      'a',
      _extends({ href: href, className: classes }, rest),
      children
    );
  }

  return React.createElement(
    'button',
    _extends({ className: classes }, rest),
    children
  );
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
  href: PropTypes.string,
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Disabled attribute for the `<button>`
   */
  disabled: PropTypes.bool,
  /**
   * Secondary flag
   */
  secondary: PropTypes.bool,
  /**
   * Square flag
   */
  square: PropTypes.bool,
  /**
   * Text flag
   */
  text: PropTypes.bool,
  /**
   * Full width flag
   */
  fullwidth: PropTypes.bool,
  /**
   * Callback for the `<button>`
   */
  onClick: PropTypes.func
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
      rest = objectWithoutProperties(_ref, ['className', 'children']);

  var classes = ['wds-button-group', className].filter(function (c) {
    return c;
  }).join(' ');

  return React.createElement(
    'div',
    _extends({ className: classes }, rest),
    children
  );
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

function generateId() {
  return uniqueId('wds_input_');
}

var Input = function (_React$Component) {
  inherits(Input, _React$Component);

  function Input(props) {
    classCallCheck(this, Input);

    var _this = possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    var value = props.value;
    var id = props.id || generateId();

    _this.state = {
      value: value,
      id: id,
      isEmpty: value.length === 0,
      isFocused: false,
      dynamicTextareaHeight: null
    };

    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleAutoResize = _this.handleAutoResize.bind(_this);
    return _this;
  }

  createClass(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.autoFocus();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var id = newProps.id || generateId();

      this.setState({
        value: newProps.value,
        id: id,
        isEmpty: newProps.value.length === 0
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.autoFocus();
    }
  }, {
    key: 'getClassName',
    value: function getClassName() {
      var statusClass = null;

      if (this.state.isFocused) {
        statusClass = 'is-focused';
      } else if (this.state.isEmpty) {
        statusClass = 'is-empty';
      }

      return ['wds-input', this.props.disabled ? 'is-disabled' : null, this.props.readonly ? 'is-readonly' : null, this.props.status === 'error' ? 'has-error' : null, typeof this.props.resize === 'boolean' && this.props.resize ? 'is-resize' : null, statusClass, this.props.className].filter(Boolean).join(' ');
    }
  }, {
    key: 'getInputClassName',
    value: function getInputClassName() {
      return ['wds-input__field', this.props.inputClassName].join(' ');
    }
  }, {
    key: 'getLabelClassName',
    value: function getLabelClassName() {
      return ['wds-input__label', this.props.labelClassName].join(' ');
    }
  }, {
    key: 'getHintClassName',
    value: function getHintClassName() {
      return ['wds-input__hint', this.props.hintClassName].join(' ');
    }
  }, {
    key: 'getSharedInputProps',
    value: function getSharedInputProps() {
      return {
        className: this.getInputClassName(),
        id: this.state.id,
        name: this.state.id,
        value: this.state.value,
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyUp: this.props.onKeyUp,
        onKeyDown: this.props.onKeyDown,
        onKeyPress: this.props.onKeyPress,
        onPaste: this.props.onPaste,
        readOnly: this.props.readonly,
        disabled: this.props.disabled,
        tabIndex: this.props.tabIndex,
        placeholder: this.props.placeholder
      };
    }
  }, {
    key: 'focus',
    value: function focus() {
      if (this.input && document.activeElement !== this.input) {
        this.input.focus();
      }
    }
  }, {
    key: 'blur',
    value: function blur() {
      if (this.input) {
        this.input.blur();
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      if (this.props.readonly || this.props.disabled) {
        return;
      }

      var value = event.target.value;

      this.setState({
        value: value,
        isEmpty: value.length === 0
      });
      this.props.onChange(value, event);
    }
  }, {
    key: 'handleFocus',
    value: function handleFocus(event) {
      if (this.props.readonly) {
        return;
      }

      this.setState({
        isFocused: true
      });
      this.props.onFocus(event);
    }
  }, {
    key: 'handleBlur',
    value: function handleBlur(event) {
      this.setState({
        isFocused: false
      });
      this.props.onBlur(event);
    }
  }, {
    key: 'isAutoFocus',
    value: function isAutoFocus() {
      return this.props.autoFocus && !this.props.disabled && !this.props.readonly;
    }
  }, {
    key: 'isAutoResize',
    value: function isAutoResize() {
      return this.props.resize === 'auto' && !this.props.disabled && !this.props.readonly;
    }
  }, {
    key: 'autoFocus',
    value: function autoFocus() {
      if (this.isAutoFocus() && this.input) {
        if (document.activeElement !== this.input) {
          this.input.focus();
        }
      }
    }
  }, {
    key: 'handleAutoResize',
    value: function handleAutoResize() {
      var _this2 = this;

      // height has to be reset first because if not it keeps increasing every time user will type a character
      // setting actual height must be done in setState callback, because React might optimize this into one setState call
      // scrollHeight includes padding but not border, we need to compensate this to avoid slight height change
      // keep value in sync with bottom-border in .wds-input__field styles
      var BOTTOM_BORDER_WIDTH = 1;

      this.setState({ dynamicTextareaHeight: 'auto' }, function () {
        _this2.setState({ dynamicTextareaHeight: _this2.input.scrollHeight + BOTTOM_BORDER_WIDTH + 'px' });
      });

      // to prevent scroll jumping
      this.input.scrollTop = this.input.scrollHeight;
    }
  }, {
    key: 'renderMultiline',
    value: function renderMultiline() {
      var _this3 = this;

      var props = _extends({}, this.getSharedInputProps(), {
        rows: this.props.rows
      });

      if (this.isAutoResize()) {
        props.onInput = this.handleAutoResize;
      }

      if (this.state.dynamicTextareaHeight) {
        props.style = { height: this.state.dynamicTextareaHeight };
      }

      return React.createElement(
        'textarea',
        _extends({ ref: function ref(input) {
            _this3.input = input;
          } }, props),
        this.state.value
      );
    }
  }, {
    key: 'renderInput',
    value: function renderInput() {
      var _this4 = this;

      if (this.props.type === 'multiline') {
        return this.renderMultiline();
      }

      var props = _extends({}, this.getSharedInputProps(), {
        type: this.props.type
      });

      return React.createElement('input', _extends({ ref: function ref(input) {
          _this4.input = input;
        } }, props));
    }
  }, {
    key: 'renderLabel',
    value: function renderLabel() {
      return React.createElement(
        'label',
        { className: this.getLabelClassName(), htmlFor: this.state.id },
        this.props.label
      );
    }
  }, {
    key: 'renderHint',
    value: function renderHint() {
      if (!this.props.hint) {
        return null;
      }

      return React.createElement(
        'div',
        { className: this.getHintClassName() },
        this.props.hint
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: this.getClassName() },
        this.renderInput(),
        this.renderHint(),
        this.renderLabel()
      );
    }
  }]);
  return Input;
}(React.Component);

Input.propTypes = {
  /**
   * Additional class name for the component
   */
  className: PropTypes.string,
  /**
   * Additional class name for the hint
   */
  hintClassName: PropTypes.string,
  /**
   * Additional class name for the input
   */
  inputClassName: PropTypes.string,
  /**
   * Additional class name for the label
   */
  labelClassName: PropTypes.string,
  /**
   * ID of the element - by default it's generated automatically
   */
  id: PropTypes.string,
  /**
   * Type of the input.
   * Use `multiline` for multi-line input (textarea).
   */
  type: PropTypes.oneOf(['text', 'number', 'email', 'search', 'tel', 'url', 'password', 'multiline']),
  /**
   * Value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Label that we want to display.
   */
  label: function label(props, propName) {
    if (props.placeholder && props[propName]) {
      return new Error('Prop ' + propName + ' is not used when placeholder is set');
    }

    if (!props.placeholder && !props[propName]) {
      return new Error('Prop ' + propName + ' is required when placeholder is not set');
    }

    if (typeof props[propName] !== 'string') {
      return new Error('Prop ' + propName + ' is not a string');
    }

    return null;
  },
  /**
   * Hint to display
   */
  hint: PropTypes.string,
  /**
   * Placeholder to display
   */
  placeholder: PropTypes.string,
  /**
   * Status
   */
  status: PropTypes.oneOf(['normal', 'error']),
  /**
   * Tab Index
   */
  tabIndex: PropTypes.number,
  /**
   * Initial number of rows
   *
   * **Note**: This prop only makes sense for multiline inputs.
   */
  rows: PropTypes.number,
  /**
   * Can the textarea be resized by the user
   * Use `auto` to adjust textarea height automatically
   *
   * **Note**: This prop only makes sense for multiline inputs.
   */
  resize: PropTypes.oneOf(['auto', true, false]),
  /**
   * Auto focus flag
   */
  autoFocus: PropTypes.bool,
  /**
   * Disabled flag
   */
  disabled: PropTypes.bool,
  /**
   * Readonly flag
   */
  readonly: PropTypes.bool,
  /**
   * Callback for `onBlur` event
   */
  onBlur: PropTypes.func,
  /**
   * Callback for `onChange` event - will be called whenever the value chnages
   * with `callback(value, event)`.
   */
  onChange: PropTypes.func,
  /**
   * Callback for `onFocus` event
   */
  onFocus: PropTypes.func,
  /**
   * Callback for `onKeyDown` event
   */
  onKeyDown: PropTypes.func,
  /**
   * Callback for `onKeyPress` event
   */
  onKeyPress: PropTypes.func,
  /**
   * Callback for `onKeyUp` event
   */
  onKeyUp: PropTypes.func,
  /**
   * Callback for `onPaste` event
   */
  onPaste: PropTypes.func
};

Input.defaultProps = {
  autoFocus: false,
  className: '',
  disabled: false,
  label: '',
  hint: null,
  placeholder: null,
  hintClassName: '',
  id: null,
  inputClassName: '',
  labelClassName: '',
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
  return React.createElement(
    'div',
    { className: 'wds-fieldset ' + className },
    children
  );
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

  return React.createElement(
    'div',
    { className: classes.join(' '), style: style },
    React.createElement(
      'svg',
      {
        width: size,
        height: size,
        viewBox: '0 0 ' + size + ' ' + size,
        xmlns: 'http://www.w3.org/2000/svg'
      },
      React.createElement(
        'g',
        { transform: 'translate(' + translate + ', ' + translate + ')' },
        React.createElement('circle', {
          fill: 'none',
          strokeWidth: stroke,
          strokeDasharray: dash,
          strokeDashoffset: dash,
          strokeLinecap: 'round',
          r: r
        })
      )
    )
  );
};

Spinner.propTypes = {
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Loader size
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Stroke width
   */
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Display block and center
   */
  block: PropTypes.bool,
  /**
   * Display contentinline based on line height
   */
  inline: PropTypes.bool
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
      rest = objectWithoutProperties(_ref, ['className', 'href', 'children']);

  var classes = ['wds-floating-button', className].filter(function (c) {
    return c;
  }).join(' ');

  if (href) {
    return React.createElement(
      'a',
      _extends({ href: href, className: classes }, rest),
      children
    );
  }

  return React.createElement(
    'button',
    _extends({ className: classes }, rest),
    children
  );
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
  href: PropTypes.string,
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Disabled attribute for the `<button>`
   */
  disabled: PropTypes.bool,
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
      rest = objectWithoutProperties(_ref, ['className', 'vertical', 'children']);

  var classes = ['wds-floating-button-group', vertical ? 'wds-is-vertical' : '', className].filter(function (c) {
    return c;
  }).join(' ');

  return React.createElement(
    'div',
    _extends({ className: classes }, rest),
    children
  );
};

FloatingButtonGroup.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * Vertical flag fro the group
   */
  vertical: PropTypes.bool,
  /**
   * Additional class name
   */
  className: PropTypes.string
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
      props = objectWithoutProperties(_ref, ['name', 'className']);

  var classes = ['wds-icon', className, /-small$/.test(name) ? 'wds-icon-small' : '', /-tiny$/.test(name) ? 'wds-icon-tiny' : ''].filter(function (c) {
    return c;
  }).join(' ');

  return React.createElement(
    'svg',
    _extends({ className: classes }, props),
    React.createElement('use', { xlinkHref: '#wds-icons-' + name })
  );
};

Icon.propTypes = {
  /**
   * Icon name
   */
  name: PropTypes.string.isRequired,
  /**
   * Additional class name
   */
  className: PropTypes.string
};

Icon.defaultProps = {
  className: ''
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
  return React.createElement(
    'div',
    { className: 'wds-banner-notification ' + getClassName(type) + ' ' + className },
    React.createElement(
      'div',
      { className: 'wds-banner-notification__icon' },
      React.createElement(Icon, { name: getIconName(type) })
    ),
    React.createElement(
      'span',
      { className: 'wds-banner-notification__text' },
      text
    ),
    onClose && React.createElement(Icon, { name: 'cross-tiny', className: 'wds-banner-notification__close', onClick: onClose })
  );
};

BannerNotification.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
  text: PropTypes.string.isRequired,
  onClose: PropTypes.func
};

BannerNotification.defaultProps = {
  className: '',
  onClose: null
};

var messageType = PropTypes.shape({
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['alert', 'warning', 'success', 'message']).isRequired,
  id: PropTypes.string.isRequired,
  permanent: PropTypes.bool
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

var BannerNotifications = function (_React$Component) {
  inherits(BannerNotifications, _React$Component);

  function BannerNotifications(props) {
    classCallCheck(this, BannerNotifications);

    var _this = possibleConstructorReturn(this, (BannerNotifications.__proto__ || Object.getPrototypeOf(BannerNotifications)).call(this, props));

    _this.onClose = _this.onClose.bind(_this);
    return _this;
  }

  createClass(BannerNotifications, [{
    key: 'onClose',
    value: function onClose(id) {
      this.props.onClose(id);
    }
  }, {
    key: 'renderNotification',
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
      return React.createElement(BannerNotification, _extends({}, props, { onClose: function onClose() {
          return _this2.onClose(id);
        } }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          className = _props.className,
          messages = _props.messages;


      if (messages.length === 0) {
        return null;
      }

      return React.createElement(
        'div',
        { className: 'wds-banner-notification__container ' + className },
        messages.map(function (message) {
          return _this3.renderNotification(message);
        })
      );
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

var sprite = "<svg style=\"position:absolute;width:0;height:0\" width=\"0\" height=\"0\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"><defs><clipPath id=\"wds-company-logo-wikia-org-path\"><path fill=\"none\" clip-rule=\"evenodd\" d=\"M83.06 19.53v3h3v-3zm8.77-4a7 7 0 0 1 .34-2.28 4.92 4.92 0 0 1 .94-1.68 4 4 0 0 1 1.41-1 4.28 4.28 0 0 1 3.41 0 4 4 0 0 1 1.41 1 4.92 4.92 0 0 1 .94 1.68 7 7 0 0 1 .34 2.28 7 7 0 0 1-.34 2.28 4.77 4.77 0 0 1-.94 1.67 4.09 4.09 0 0 1-1.41 1 4.28 4.28 0 0 1-3.41 0 4.09 4.09 0 0 1-1.41-1 4.77 4.77 0 0 1-.94-1.67 7 7 0 0 1-.34-2.28zm-2.46 0a9.28 9.28 0 0 0 .44 2.9 6.61 6.61 0 0 0 1.31 2.34 6 6 0 0 0 2.16 1.56 8.09 8.09 0 0 0 5.91 0 6.06 6.06 0 0 0 2.14-1.56 6.61 6.61 0 0 0 1.31-2.34 9.28 9.28 0 0 0 .44-2.9 9.41 9.41 0 0 0-.44-2.91 6.59 6.59 0 0 0-1.31-2.35 6.21 6.21 0 0 0-2.13-1.58 7.91 7.91 0 0 0-5.91 0 6.18 6.18 0 0 0-2.16 1.57 6.59 6.59 0 0 0-1.31 2.35 9.41 9.41 0 0 0-.44 2.91zm16.36-7.08v14.12h2.32v-6.29a9.66 9.66 0 0 1 .27-2.42 4.63 4.63 0 0 1 .87-1.79 3.75 3.75 0 0 1 1.6-1.07 6.57 6.57 0 0 1 2.38-.38V8.11a5.22 5.22 0 0 0-3.11.76 6.29 6.29 0 0 0-2.06 2.55h-.05v-3zm21.37 12.91V8.44h-2.19v2a4.13 4.13 0 0 0-1.75-1.76 5.21 5.21 0 0 0-2.46-.59 6.29 6.29 0 0 0-3.09.7 6 6 0 0 0-2 1.78 7 7 0 0 0-1.09 2.4 10.73 10.73 0 0 0-.33 2.58 9.35 9.35 0 0 0 .4 2.75 6.57 6.57 0 0 0 1.19 2.27 5.77 5.77 0 0 0 2 1.54 6.22 6.22 0 0 0 2.76.57 5.64 5.64 0 0 0 2.58-.61 3.9 3.9 0 0 0 1.82-1.93h.05v.93a9.39 9.39 0 0 1-.23 2.16 4.51 4.51 0 0 1-.75 1.68 3.64 3.64 0 0 1-1.39 1.09 4.31 4.31 0 0 1-1.94.4 6.26 6.26 0 0 1-1.2-.12 4.37 4.37 0 0 1-1.16-.4 2.89 2.89 0 0 1-.9-.71 1.72 1.72 0 0 1-.4-1.07h-2.32a3.65 3.65 0 0 0 .6 1.94 4.33 4.33 0 0 0 1.38 1.28 6.15 6.15 0 0 0 1.86.71 9.61 9.61 0 0 0 2 .22q3.39 0 5-1.72a7.44 7.44 0 0 0 1.58-5.19zm-6.5-.68a3.55 3.55 0 0 1-1.91-.48 3.69 3.69 0 0 1-1.23-1.26 5.44 5.44 0 0 1-.66-1.73 9.73 9.73 0 0 1-.19-1.91 8 8 0 0 1 .23-1.94 4.81 4.81 0 0 1 .74-1.64 3.72 3.72 0 0 1 1.3-1.13 4 4 0 0 1 1.91-.42 3.69 3.69 0 0 1 1.86.44 3.62 3.62 0 0 1 1.24 1.16 5.11 5.11 0 0 1 .7 1.63 7.74 7.74 0 0 1 .22 1.83 8.53 8.53 0 0 1-.23 2 5.74 5.74 0 0 1-.72 1.76 3.81 3.81 0 0 1-1.3 1.26 3.76 3.76 0 0 1-2 .48z\"/></clipPath><linearGradient id=\"store-googleplay-gradient-1\" x1=\"91.536%\" x2=\"-37.559%\" y1=\"4.839%\" y2=\"71.968%\"><stop stop-color=\"#00A0FF\" offset=\"0%\"/><stop stop-color=\"#00A1FF\" offset=\".657%\"/><stop stop-color=\"#00BEFF\" offset=\"26.01%\"/><stop stop-color=\"#00D2FF\" offset=\"51.22%\"/><stop stop-color=\"#00DFFF\" offset=\"76.04%\"/><stop stop-color=\"#00E3FF\" offset=\"100%\"/></linearGradient><linearGradient id=\"store-googleplay-gradient-2\" x1=\"107.728%\" x2=\"-130.665%\" y1=\"49.428%\" y2=\"49.428%\"><stop stop-color=\"#FFE000\" offset=\"0%\"/><stop stop-color=\"#FFBD00\" offset=\"40.87%\"/><stop stop-color=\"orange\" offset=\"77.54%\"/><stop stop-color=\"#FF9C00\" offset=\"100%\"/></linearGradient><linearGradient id=\"store-googleplay-gradient-3\" x1=\"86.389%\" x2=\"-49.888%\" y1=\"17.815%\" y2=\"194.393%\"><stop stop-color=\"#FF3A44\" offset=\"0%\"/><stop stop-color=\"#C31162\" offset=\"100%\"/></linearGradient><linearGradient id=\"store-googleplay-gradient-4\" x1=\"-18.579%\" x2=\"42.275%\" y1=\"-54.527%\" y2=\"24.69%\"><stop stop-color=\"#32A071\" offset=\"0%\"/><stop stop-color=\"#2DA771\" offset=\"6.85%\"/><stop stop-color=\"#15CF74\" offset=\"47.62%\"/><stop stop-color=\"#06E775\" offset=\"80.09%\"/><stop stop-color=\"#00F076\" offset=\"100%\"/></linearGradient><rect id=\"b\" width=\"150\" height=\"150\" rx=\"75\"/><filter id=\"a\" width=\"130%\" height=\"130%\" x=\"-15%\" y=\"-15%\" filterUnits=\"objectBoundingBox\"><feOffset in=\"SourceAlpha\" result=\"shadowOffsetOuter1\"/><feGaussianBlur in=\"shadowOffsetOuter1\" result=\"shadowBlurOuter1\" stdDeviation=\"7.5\"/><feColorMatrix in=\"shadowBlurOuter1\" values=\"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0\"/></filter></defs><symbol id=\"wds-avatar-badges-admin\" viewBox=\"0 0 18 18\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#E3BD00\" d=\"M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9\"/><path fill=\"#FFF\" d=\"M12.567 7.523L10.41 7.21l-.964-1.954c-.17-.341-.728-.341-.897 0L7.585 7.21l-2.157.313a.5.5 0 0 0-.277.853l1.561 1.521-.368 2.148a.5.5 0 0 0 .725.527l1.928-1.014 1.93 1.014a.5.5 0 0 0 .725-.526l-.369-2.148 1.561-1.521a.501.501 0 0 0-.277-.854z\"/></g></symbol><symbol id=\"wds-avatar-badges-content-moderator\" viewBox=\"0 0 18 18\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#999\" d=\"M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9\"/><path d=\"M9.05 6.75l-3.9 3.9c-.1.1-.15.2-.15.35v1.5c0 .3.2.5.5.5H7c.15 0 .25-.05.35-.15l3.9-3.9-2.2-2.2zm3.8-.1l-1.5-1.5c-.2-.2-.5-.2-.7 0l-.9.9 2.2 2.2.9-.9c.2-.2.2-.5 0-.7z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-avatar-badges-discussion-moderator\" viewBox=\"0 0 18 18\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#999\" d=\"M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9\"/><path fill=\"#FFF\" d=\"M12.821 8.232c0 1.782-1.754 3.232-3.91 3.232a4.71 4.71 0 0 1-.98-.104l-1.832.727a.328.328 0 0 1-.319-.043.323.323 0 0 1-.126-.293l.171-1.533C5.292 9.653 5 8.953 5 8.232 5 6.45 6.754 5 8.91 5c2.157 0 3.911 1.45 3.911 3.232z\"/></g></symbol><symbol id=\"wds-avatar-badges-global-discussions-moderator\" viewBox=\"0 0 18 18\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#00B7E0\" d=\"M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9\"/><path fill=\"#FFF\" d=\"M12.821 8.232c0 1.782-1.754 3.232-3.91 3.232a4.71 4.71 0 0 1-.98-.104l-1.832.727a.328.328 0 0 1-.319-.043.323.323 0 0 1-.126-.293l.171-1.533C5.292 9.653 5 8.953 5 8.232 5 6.45 6.754 5 8.91 5c2.157 0 3.911 1.45 3.911 3.232z\"/></g></symbol><symbol id=\"wds-avatar-badges-helper\" viewBox=\"0 0 18 18\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#00B7E0\" d=\"M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9\"/><g fill=\"#FFF\"><path d=\"M7.667 5h2.667v8H7.667z\"/><path d=\"M13 7.667v2.667H5V7.667z\"/></g></g></symbol><symbol id=\"wds-avatar-badges-staff\" viewBox=\"0 0 18 18\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#00B7E0\" d=\"M1.661 5.96c.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9s1.247-2.04 1.661-3.04z\"/><path fill=\"#FFF\" d=\"M11.234 4L9.06 6.055 6.89 4.008 4 6.445V9.14L8.995 14 14 9.14l-.01-2.688L11.235 4zM5.245 6.703l1.608-1.356 3.739 3.526-1.484 1.485-3.863-3.655zm4.542.038l1.466-1.385L12.764 6.7l-1.467 1.468-1.51-1.426zM5 8.717v-.87l3.401 3.22-.487.486L5 8.717zm3.63 3.533l4.366-4.369.002.836-4.003 3.89-.365-.357z\"/></g></symbol><symbol id=\"wds-avatar-badges-vstf\" viewBox=\"0 0 18 18\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#00B7E0\" d=\"M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9\"/><path fill=\"#FFF\" d=\"M8.767 12.856a.268.268 0 0 0 .465 0l3.735-6.453A.268.268 0 0 0 12.735 6h-1.616a.268.268 0 0 0-.232.134L9 9.397l-.289-.5-1.596-2.763A.268.268 0 0 0 6.884 6H5.268a.268.268 0 0 0-.232.403l3.73 6.453z\"/></g></symbol><symbol id=\"wds-avatar-icon-tiny\"><g fill=\"none\" fill-rule=\"evenodd\"><circle fill=\"#FFF\" cx=\"6\" cy=\"6\" r=\"6\"/><path d=\"M6 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM5 7h2a2 2 0 0 1 2 2v.757a2 2 0 0 1-2.208 1.99 11.11 11.11 0 0 0-.79-.068c-.102 0-.366.023-.794.067A2 2 0 0 1 3 9.757V9a2 2 0 0 1 2-2z\" fill=\"#999\"/><circle stroke=\"#999\" cx=\"6\" cy=\"6\" r=\"5.5\"/></g></symbol><symbol id=\"wds-avatar-icon\" viewBox=\"0 0 24 24\"><g fill=\"none\" fill-rule=\"evenodd\"><circle fill=\"#FFF\" cx=\"12\" cy=\"12\" r=\"12\"/><path d=\"M12 12.267a3.203 3.203 0 0 1-3.2-3.2V8c0-1.765 1.435-3.2 3.2-3.2 1.765 0 3.2 1.435 3.2 3.2v1.067c0 1.764-1.435 3.2-3.2 3.2zm-2.667 1.066h5.334a3.737 3.737 0 0 1 3.733 3.734c0 .294.127 4.722-.167 4.722 0 0-4.702 1.44-6.781 1.282-2.08-.16-5.697-2.237-5.697-2.237-.295 0-.155-3.473-.155-3.767a3.737 3.737 0 0 1 3.733-3.734z\" fill=\"#999\"/><circle stroke=\"#FFF\" stroke-width=\"4\" cx=\"12\" cy=\"12\" r=\"10\"/><circle stroke=\"#999\" stroke-width=\"2\" cx=\"12\" cy=\"12\" r=\"11\"/></g></symbol><symbol id=\"wds-company-logo-fandom-heart\" viewBox=\"0 0 35 35\"><path d=\"M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z\" fill=\"#00D6D6\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-company-logo-fandom-powered-by-wikia-two-lines\" viewBox=\"0 0 164 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z\" fill=\"#00D6D6\"/><path d=\"M62.852 20.51l2.58-6.716a.468.468 0 0 1 .87 0l2.58 6.717h-6.03zm5.856-12.428c-.184-.48-.65-.8-1.17-.8h-3.342c-.52 0-.986.32-1.17.8l-7.083 18.5c-.21.552.2 1.14.796 1.14h2.753c.353 0 .67-.215.796-.542l.738-1.922a.849.849 0 0 1 .795-.542h8.088a.85.85 0 0 1 .796.542l.74 1.922c.125.327.44.543.795.543h2.754a.843.843 0 0 0 .796-1.14l-7.082-18.5zm93.504-.8h-2.715a1.86 1.86 0 0 0-1.677 1.047l-5.393 11.162-5.393-11.163a1.858 1.858 0 0 0-1.677-1.047h-2.715a.889.889 0 0 0-.893.883V26.84c0 .487.4.883.892.883h2.608a.889.889 0 0 0 .893-.883v-9.686l4.945 10.072c.15.304.46.497.803.497h1.073a.893.893 0 0 0 .803-.497l4.945-10.072v9.686c0 .487.4.883.894.883h2.608a.889.889 0 0 0 .893-.883V8.166c0-.487-.4-.883-.893-.883zm-106.972 8.8h-8.63V11.49h10.918a.88.88 0 0 0 .83-.578l.888-2.464a.872.872 0 0 0-.83-1.163h-15.18c-.486 0-.88.39-.88.87v18.7c0 .48.394.87.88.87h2.492c.486 0 .88-.39.88-.87V20.29h7.743a.88.88 0 0 0 .83-.578l.89-2.464a.872.872 0 0 0-.83-1.163zm51.76 7.61h-3.615V11.315H107c3.828 0 6.41 2.517 6.41 6.188 0 3.672-2.582 6.19-6.41 6.19zm-.124-16.41h-7.128c-.486 0-.88.39-.88.872v18.698c0 .48.394.87.88.87h7.128c6.453 0 10.912-4.44 10.912-10.16v-.117c0-5.72-4.46-10.162-10.912-10.162zm-11.947.03h-2.642a.87.87 0 0 0-.876.866v12.36l-8.755-12.72a1.242 1.242 0 0 0-1.023-.535H78.32a.873.873 0 0 0-.876.867v18.706c0 .48.393.867.877.867h2.64a.872.872 0 0 0 .878-.867V14.71l8.608 12.478c.23.334.613.535 1.022.535h3.46a.872.872 0 0 0 .877-.867V8.178a.87.87 0 0 0-.876-.867zm40.71 10.3c0 3.323-2.712 6.016-6.056 6.016-3.345 0-6.056-2.693-6.056-6.015v-.22c0-3.322 2.71-6.015 6.056-6.015 3.344 0 6.055 2.693 6.055 6.015v.22zm-6.056-10.44c-5.694 0-10.31 4.576-10.31 10.22v.22c0 5.646 4.616 10.22 10.31 10.22 5.693 0 10.308-4.574 10.308-10.22v-.22c0-5.644-4.615-10.22-10.308-10.22z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-company-logo-fandom-powered-by-wikia\" viewBox=\"0 0 295 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z\" fill=\"#00D6D6\"/><path d=\"M62.852 20.51l2.58-6.716a.468.468 0 0 1 .87 0l2.58 6.717h-6.03zm5.856-12.428c-.184-.48-.65-.8-1.17-.8h-3.342c-.52 0-.986.32-1.17.8l-7.083 18.5c-.21.552.2 1.14.796 1.14h2.753c.353 0 .67-.215.796-.542l.738-1.922a.849.849 0 0 1 .795-.542h8.088a.85.85 0 0 1 .796.542l.74 1.922c.125.327.44.543.795.543h2.754a.843.843 0 0 0 .796-1.14l-7.082-18.5zm93.504-.8h-2.715a1.86 1.86 0 0 0-1.677 1.047l-5.393 11.162-5.393-11.163a1.858 1.858 0 0 0-1.677-1.047h-2.715a.889.889 0 0 0-.893.883V26.84c0 .487.4.883.892.883h2.608a.889.889 0 0 0 .893-.883v-9.686l4.945 10.072c.15.304.46.497.803.497h1.073a.893.893 0 0 0 .803-.497l4.945-10.072v9.686c0 .487.4.883.894.883h2.608a.889.889 0 0 0 .893-.883V8.166c0-.487-.4-.883-.893-.883zm-106.972 8.8h-8.63V11.49h10.918a.88.88 0 0 0 .83-.578l.888-2.464a.872.872 0 0 0-.83-1.163h-15.18c-.486 0-.88.39-.88.87v18.7c0 .48.394.87.88.87h2.492c.486 0 .88-.39.88-.87V20.29h7.743a.88.88 0 0 0 .83-.578l.89-2.464a.872.872 0 0 0-.83-1.163zm51.76 7.61h-3.615V11.315H107c3.828 0 6.41 2.517 6.41 6.188 0 3.672-2.582 6.19-6.41 6.19zm-.124-16.41h-7.128c-.486 0-.88.39-.88.872v18.698c0 .48.394.87.88.87h7.128c6.453 0 10.912-4.44 10.912-10.16v-.117c0-5.72-4.46-10.162-10.912-10.162zm-11.947.03h-2.642a.87.87 0 0 0-.876.866v12.36l-8.755-12.72a1.242 1.242 0 0 0-1.023-.535H78.32a.873.873 0 0 0-.876.867v18.706c0 .48.393.867.877.867h2.64a.872.872 0 0 0 .878-.867V14.71l8.608 12.478c.23.334.613.535 1.022.535h3.46a.872.872 0 0 0 .877-.867V8.178a.87.87 0 0 0-.876-.867zm40.71 10.3c0 3.323-2.712 6.016-6.056 6.016-3.345 0-6.056-2.693-6.056-6.015v-.22c0-3.322 2.71-6.015 6.056-6.015 3.344 0 6.055 2.693 6.055 6.015v.22zm-6.056-10.44c-5.694 0-10.31 4.576-10.31 10.22v.22c0 5.646 4.616 10.22 10.31 10.22 5.693 0 10.308-4.574 10.308-10.22v-.22c0-5.644-4.615-10.22-10.308-10.22zm46.972 10.5c.316 0 .565-.082.747-.246.18-.164.272-.407.272-.727 0-.3-.083-.54-.25-.722-.165-.183-.422-.275-.77-.275h-1.296v1.97h1.297zm-3.42 4.31a.267.267 0 0 1-.088-.2v-7.43c0-.083.027-.154.08-.21a.268.268 0 0 1 .21-.087h3.276c1.003 0 1.79.225 2.36.675.573.45.858 1.11.858 1.98 0 .87-.284 1.52-.856 1.952-.57.43-1.358.647-2.36.647h-1.32v2.47a.286.286 0 0 1-.292.287h-1.666a.278.278 0 0 1-.202-.085zm12.935-1.878c.238-.24.365-.608.38-1.104.016-.443.024-.76.024-.95 0-.19-.008-.5-.023-.927-.015-.496-.142-.865-.38-1.105-.24-.24-.56-.36-.962-.36-.41 0-.733.12-.973.36s-.366.61-.382 1.105c-.007.213-.01.522-.01.927 0 .412.003.73.01.95.016.496.143.864.382 1.104.24.24.564.36.973.36.4 0 .722-.12.96-.36m-3.553 1.288c-.633-.526-.97-1.3-1.008-2.323a33.76 33.76 0 0 1-.01-.986c0-.442.003-.774.01-.996.03-1.007.37-1.784 1.013-2.33.645-.545 1.507-.818 2.588-.818 1.073 0 1.93.273 2.576.82.644.544.982 1.32 1.013 2.328.015.443.023.775.023.996 0 .23-.008.557-.023.985-.04 1.02-.373 1.796-1 2.322-.63.527-1.493.79-2.59.79-1.095 0-1.96-.263-2.592-.79m9.086.57a.443.443 0 0 1-.145-.27l-1.24-7.326a.23.23 0 0 1 .065-.235.232.232 0 0 1 .168-.075h1.516c.224 0 .348.088.37.263l.707 4.327.8-2.507c.06-.206.188-.31.38-.31h.87c.192 0 .32.104.38.31l.8 2.496.718-4.316c.016-.09.05-.158.105-.2.054-.042.14-.063.255-.063h1.516c.07 0 .128.025.174.074.046.05.07.104.07.165v.07l-1.24 7.325a.426.426 0 0 1-.15.27.478.478 0 0 1-.312.107h-1.17a.432.432 0 0 1-.29-.09.459.459 0 0 1-.138-.207l-1.146-3.17-1.146 3.17a.533.533 0 0 1-.15.206.432.432 0 0 1-.29.09h-1.158a.462.462 0 0 1-.318-.107m9.42.025a.274.274 0 0 1-.087-.2v-7.43c0-.083.027-.154.08-.21a.27.27 0 0 1 .21-.087h5.464a.29.29 0 0 1 .214.086c.058.058.087.13.087.213v1.133a.266.266 0 0 1-.086.206.307.307 0 0 1-.214.08h-3.658v1.454h3.403a.294.294 0 0 1 .301.298v1.042a.285.285 0 0 1-.086.212.295.295 0 0 1-.215.085h-3.403v1.49h3.75a.292.292 0 0 1 .302.296v1.133a.27.27 0 0 1-.087.207.303.303 0 0 1-.214.08h-5.557a.279.279 0 0 1-.203-.085m11.534-4.393c.33 0 .584-.082.758-.246.174-.164.26-.39.26-.68 0-.29-.086-.524-.26-.7-.174-.175-.427-.263-.758-.263h-1.286v1.89h1.286zm-3.375 4.39a.274.274 0 0 1-.087-.2v-7.43c0-.083.027-.154.08-.21a.268.268 0 0 1 .21-.087h3.183c1.018 0 1.815.23 2.39.687.575.458.862 1.103.862 1.934 0 .534-.125.988-.376 1.362-.25.374-.596.664-1.036.87l1.563 2.793c.023.047.035.09.035.127a.24.24 0 0 1-.07.166.225.225 0 0 1-.173.074h-1.633a.483.483 0 0 1-.475-.308l-1.273-2.485h-1.112v2.506a.267.267 0 0 1-.086.207.303.303 0 0 1-.215.08h-1.585a.276.276 0 0 1-.202-.086zm8.721 0a.274.274 0 0 1-.087-.2v-7.43c0-.083.027-.154.08-.21a.268.268 0 0 1 .21-.087h5.464a.29.29 0 0 1 .215.086c.058.058.087.13.087.213v1.133a.27.27 0 0 1-.087.206.307.307 0 0 1-.214.08h-3.657v1.454h3.403a.295.295 0 0 1 .302.298v1.042a.293.293 0 0 1-.3.297h-3.403v1.49h3.75a.294.294 0 0 1 .302.296v1.133a.27.27 0 0 1-.087.207.303.303 0 0 1-.214.08h-5.557a.279.279 0 0 1-.203-.085m11.402-1.635c.487 0 .846-.114 1.078-.343.23-.23.355-.595.37-1.1.016-.22.023-.506.023-.857 0-.35-.006-.634-.022-.847-.015-.49-.148-.85-.4-1.082-.25-.232-.62-.348-1.105-.348h-1.1v4.58h1.158zm-3.246 1.632a.274.274 0 0 1-.087-.2v-7.43c0-.083.027-.154.08-.21a.268.268 0 0 1 .21-.087h3.044c1.143 0 2.03.27 2.664.807.633.538.965 1.31.996 2.318.007.22.01.515.01.88 0 .368-.003.658-.01.87-.078 2.092-1.278 3.137-3.6 3.137h-3.104a.278.278 0 0 1-.202-.085zm16.132-1.46c.3 0 .535-.086.7-.257a.877.877 0 0 0 .25-.636.88.88 0 0 0-.255-.647c-.17-.172-.4-.258-.694-.258h-1.55v1.797h1.55zm-.104-3.297c.286 0 .506-.076.66-.228a.802.802 0 0 0 .232-.596.78.78 0 0 0-.226-.577c-.15-.148-.373-.223-.666-.223h-1.447v1.625h1.447zm-3.537 4.757a.275.275 0 0 1-.087-.2v-7.43c0-.083.027-.154.082-.21a.263.263 0 0 1 .208-.087h3.577c.98 0 1.71.198 2.188.595.48.397.718.96.718 1.694 0 .366-.097.683-.294.95a1.902 1.902 0 0 1-.654.584c.316.137.583.365.8.68.215.318.323.675.323 1.07 0 .772-.257 1.37-.77 1.798-.513.428-1.25.64-2.205.64h-3.682a.28.28 0 0 1-.203-.084zm10.822 0a.274.274 0 0 1-.087-.2v-2.44l-2.675-4.92a.233.233 0 0 1 .042-.293.232.232 0 0 1 .168-.075h1.528c.108 0 .197.027.266.08.07.053.12.11.15.172l1.61 2.873 1.61-2.873c.03-.062.08-.12.15-.172a.427.427 0 0 1 .266-.08h1.528c.062 0 .118.025.168.074a.23.23 0 0 1 .041.291l-2.674 4.923v2.438a.27.27 0 0 1-.087.207.303.303 0 0 1-.215.08h-1.586a.277.277 0 0 1-.203-.085m10.893-.022a.437.437 0 0 1-.144-.27l-1.24-7.326a.23.23 0 0 1 .065-.235.235.235 0 0 1 .17-.075h1.515c.224 0 .348.088.37.263l.707 4.327.8-2.507c.06-.206.188-.31.38-.31h.87c.192 0 .32.104.38.31l.8 2.496.718-4.316a.307.307 0 0 1 .104-.2c.054-.042.14-.063.255-.063h1.516c.07 0 .127.025.173.074.045.05.07.104.07.165v.07l-1.24 7.325a.435.435 0 0 1-.15.27.48.48 0 0 1-.313.107h-1.17a.432.432 0 0 1-.29-.09.459.459 0 0 1-.138-.207l-1.147-3.17-1.146 3.17a.533.533 0 0 1-.15.206.432.432 0 0 1-.29.09h-1.158a.466.466 0 0 1-.32-.107m9.425.025a.274.274 0 0 1-.087-.2v-7.44a.27.27 0 0 1 .087-.207.29.29 0 0 1 .203-.08h1.655a.29.29 0 0 1 .21.08.28.28 0 0 1 .08.206v7.44a.288.288 0 0 1-.08.202.279.279 0 0 1-.21.085h-1.655a.279.279 0 0 1-.203-.085m4.498-.001a.267.267 0 0 1-.088-.2v-7.43c0-.083.027-.154.08-.21a.268.268 0 0 1 .21-.087h1.55c.086 0 .155.028.21.086.053.058.08.13.08.213v2.495l2.05-2.564c.084-.153.235-.23.45-.23h1.772c.062 0 .118.026.168.075.05.05.075.104.075.165 0 .06-.015.107-.046.138l-2.697 3.456 2.918 3.8c.032.03.047.076.047.137a.23.23 0 0 1-.075.166.245.245 0 0 1-.18.074h-1.817a.538.538 0 0 1-.3-.074.478.478 0 0 1-.163-.154l-2.2-2.794v2.735a.288.288 0 0 1-.08.202.277.277 0 0 1-.21.085h-1.55a.279.279 0 0 1-.203-.085m8.549.001a.274.274 0 0 1-.087-.2v-7.44a.27.27 0 0 1 .087-.207.29.29 0 0 1 .202-.08h1.656c.085 0 .154.027.208.08.054.053.08.122.08.206v7.44a.284.284 0 0 1-.288.287h-1.656a.278.278 0 0 1-.202-.085m6.884-2.995h2.06l-1.03-2.92-1.03 2.92zm-2.97 3.005a.23.23 0 0 1-.075-.166.38.38 0 0 1 .01-.103l2.698-7.337c.077-.22.23-.332.463-.332h1.807c.232 0 .386.11.463.332l2.698 7.337a.38.38 0 0 1 .01.103c0 .06-.024.117-.074.166a.231.231 0 0 1-.168.074h-1.505a.401.401 0 0 1-.392-.25l-.417-1.112h-3.033l-.416 1.11a.4.4 0 0 1-.393.252h-1.505a.231.231 0 0 1-.168-.074z\" fill=\"#002A32\"/><path fill=\"#00D6D6\" d=\"M173 9.75h122V8H173m0 19.75h122V26H173\"/></g></symbol><symbol id=\"wds-company-logo-fandom-white\" viewBox=\"0 0 164 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z\" fill=\"#00D6D6\"/><path d=\"M62.852 20.51l2.58-6.716a.468.468 0 0 1 .87 0l2.58 6.717h-6.03zm5.856-12.428c-.184-.48-.65-.8-1.17-.8h-3.342c-.52 0-.986.32-1.17.8l-7.083 18.5c-.21.552.2 1.14.796 1.14h2.753c.353 0 .67-.215.796-.542l.738-1.922a.849.849 0 0 1 .795-.542h8.088a.85.85 0 0 1 .796.542l.74 1.922c.125.327.44.543.795.543h2.754a.843.843 0 0 0 .796-1.14l-7.082-18.5zm93.504-.8h-2.715a1.86 1.86 0 0 0-1.677 1.047l-5.393 11.162-5.393-11.163a1.858 1.858 0 0 0-1.677-1.047h-2.715a.889.889 0 0 0-.893.883V26.84c0 .487.4.883.892.883h2.608a.889.889 0 0 0 .893-.883v-9.686l4.945 10.072c.15.304.46.497.803.497h1.073a.893.893 0 0 0 .803-.497l4.945-10.072v9.686c0 .487.4.883.894.883h2.608a.889.889 0 0 0 .893-.883V8.166c0-.487-.4-.883-.893-.883zm-106.972 8.8h-8.63V11.49h10.918a.88.88 0 0 0 .83-.578l.888-2.464a.872.872 0 0 0-.83-1.163h-15.18c-.486 0-.88.39-.88.87v18.7c0 .48.394.87.88.87h2.492c.486 0 .88-.39.88-.87V20.29h7.743a.88.88 0 0 0 .83-.578l.89-2.464a.872.872 0 0 0-.83-1.163zm51.76 7.61h-3.615V11.315H107c3.828 0 6.41 2.517 6.41 6.188 0 3.672-2.582 6.19-6.41 6.19zm-.124-16.41h-7.128c-.486 0-.88.39-.88.872v18.698c0 .48.394.87.88.87h7.128c6.453 0 10.912-4.44 10.912-10.16v-.117c0-5.72-4.46-10.162-10.912-10.162zm-11.947.03h-2.642a.87.87 0 0 0-.876.866v12.36l-8.755-12.72a1.242 1.242 0 0 0-1.023-.535H78.32a.873.873 0 0 0-.876.867v18.706c0 .48.393.867.877.867h2.64a.872.872 0 0 0 .878-.867V14.71l8.608 12.478c.23.334.613.535 1.022.535h3.46a.872.872 0 0 0 .877-.867V8.178a.87.87 0 0 0-.876-.867zm40.71 10.3c0 3.323-2.712 6.016-6.056 6.016-3.345 0-6.056-2.693-6.056-6.015v-.22c0-3.322 2.71-6.015 6.056-6.015 3.344 0 6.055 2.693 6.055 6.015v.22zm-6.056-10.44c-5.694 0-10.31 4.576-10.31 10.22v.22c0 5.646 4.616 10.22 10.31 10.22 5.693 0 10.308-4.574 10.308-10.22v-.22c0-5.644-4.615-10.22-10.308-10.22z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-company-logo-fandom\" viewBox=\"0 0 164 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 0 1-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 0 1-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 0 1 .592 0l11.736 11.603a3.158 3.158 0 0 1 0 4.5l-3.503 3.462a.423.423 0 0 1-.59 0L5.732 11.89a3.132 3.132 0 0 1-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 0 1 2.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 0 1 0 .585l-5.64 5.576a.419.419 0 0 1-.59 0l-5.77-5.704a.411.411 0 0 1 0-.585zm14.56-.687L26.014.475a.869.869 0 0 0-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 0 0 8.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 0 0 1.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z\" fill=\"#00D6D6\"/><path d=\"M62.852 20.51l2.58-6.716a.468.468 0 0 1 .87 0l2.58 6.717h-6.03zm5.856-12.428c-.184-.48-.65-.8-1.17-.8h-3.342c-.52 0-.986.32-1.17.8l-7.083 18.5c-.21.552.2 1.14.796 1.14h2.753c.353 0 .67-.215.796-.542l.738-1.922a.849.849 0 0 1 .795-.542h8.088a.85.85 0 0 1 .796.542l.74 1.922c.125.327.44.543.795.543h2.754a.843.843 0 0 0 .796-1.14l-7.082-18.5zm93.504-.8h-2.715a1.86 1.86 0 0 0-1.677 1.047l-5.393 11.162-5.393-11.163a1.858 1.858 0 0 0-1.677-1.047h-2.715a.889.889 0 0 0-.893.883V26.84c0 .487.4.883.892.883h2.608a.889.889 0 0 0 .893-.883v-9.686l4.945 10.072c.15.304.46.497.803.497h1.073a.893.893 0 0 0 .803-.497l4.945-10.072v9.686c0 .487.4.883.894.883h2.608a.889.889 0 0 0 .893-.883V8.166c0-.487-.4-.883-.893-.883zm-106.972 8.8h-8.63V11.49h10.918a.88.88 0 0 0 .83-.578l.888-2.464a.872.872 0 0 0-.83-1.163h-15.18c-.486 0-.88.39-.88.87v18.7c0 .48.394.87.88.87h2.492c.486 0 .88-.39.88-.87V20.29h7.743a.88.88 0 0 0 .83-.578l.89-2.464a.872.872 0 0 0-.83-1.163zm51.76 7.61h-3.615V11.315H107c3.828 0 6.41 2.517 6.41 6.188 0 3.672-2.582 6.19-6.41 6.19zm-.124-16.41h-7.128c-.486 0-.88.39-.88.872v18.698c0 .48.394.87.88.87h7.128c6.453 0 10.912-4.44 10.912-10.16v-.117c0-5.72-4.46-10.162-10.912-10.162zm-11.947.03h-2.642a.87.87 0 0 0-.876.866v12.36l-8.755-12.72a1.242 1.242 0 0 0-1.023-.535H78.32a.873.873 0 0 0-.876.867v18.706c0 .48.393.867.877.867h2.64a.872.872 0 0 0 .878-.867V14.71l8.608 12.478c.23.334.613.535 1.022.535h3.46a.872.872 0 0 0 .877-.867V8.178a.87.87 0 0 0-.876-.867zm40.71 10.3c0 3.323-2.712 6.016-6.056 6.016-3.345 0-6.056-2.693-6.056-6.015v-.22c0-3.322 2.71-6.015 6.056-6.015 3.344 0 6.055 2.693 6.055 6.015v.22zm-6.056-10.44c-5.694 0-10.31 4.576-10.31 10.22v.22c0 5.646 4.616 10.22 10.31 10.22 5.693 0 10.308-4.574 10.308-10.22v-.22c0-5.644-4.615-10.22-10.308-10.22z\" fill=\"#002A32\"/></g></symbol><symbol id=\"wds-company-logo-powered-by-wikia\" viewBox=\"0 0 129 10\"><path d=\"M3.836 4.292c.334 0 .597-.088.79-.264.19-.176.286-.436.286-.78 0-.32-.088-.577-.263-.774-.176-.196-.447-.294-.814-.294h-1.37v2.112h1.37zM.22 8.915A.296.296 0 0 1 .13 8.7V.73C.13.64.156.566.213.504A.291.291 0 0 1 .434.41h3.463c1.06 0 1.892.243 2.496.726.603.483.905 1.19.905 2.124 0 .934-.302 1.632-.905 2.094-.604.463-1.436.694-2.496.694H2.502V8.7a.31.31 0 0 1-.086.215.284.284 0 0 1-.22.092H.436a.294.294 0 0 1-.216-.092zM13.89 6.9c.252-.257.387-.652.403-1.184.016-.474.025-.814.025-1.02 0-.203-.01-.535-.025-.994-.016-.532-.15-.927-.404-1.185-.253-.258-.592-.386-1.016-.386-.432 0-.775.13-1.028.387-.253.258-.387.653-.403 1.185-.01.23-.013.56-.013.995 0 .442.004.782.013 1.02.016.53.15.926.403 1.184.253.26.596.388 1.028.388.424 0 .763-.13 1.015-.387m-3.756 1.383C9.464 7.718 9.11 6.887 9.07 5.79c-.01-.23-.013-.58-.013-1.056 0-.475.004-.83.012-1.068.032-1.08.39-1.914 1.07-2.5.68-.585 1.592-.878 2.734-.878 1.134 0 2.04.293 2.722.88.68.584 1.038 1.417 1.07 2.498.017.475.025.83.025 1.068 0 .245-.007.598-.023 1.056-.04 1.097-.394 1.928-1.06 2.493-.664.565-1.575.847-2.733.847-1.158 0-2.072-.282-2.74-.847m9.602.607a.46.46 0 0 1-.153-.288l-1.31-7.86a.19.19 0 0 1-.01-.073.25.25 0 0 1 .078-.18.255.255 0 0 1 .18-.08h1.6c.238 0 .37.096.393.284l.746 4.642.843-2.69c.066-.22.2-.33.404-.33h.918c.203 0 .338.11.403.33l.845 2.677.758-4.63a.336.336 0 0 1 .11-.214c.058-.046.148-.07.27-.07h1.603c.073 0 .135.028.184.08a.266.266 0 0 1 .073.18v.073l-1.31 7.86a.457.457 0 0 1-.158.287.486.486 0 0 1-.33.117h-1.236a.441.441 0 0 1-.453-.32l-1.21-3.402-1.212 3.402a.566.566 0 0 1-.158.22.439.439 0 0 1-.306.1h-1.223c-.14 0-.25-.04-.337-.118m9.954.028A.298.298 0 0 1 29.6 8.7V.73c0-.09.03-.165.086-.227a.291.291 0 0 1 .22-.092h5.775A.317.317 0 0 1 36 .732v1.216c0 .09-.032.164-.093.222a.318.318 0 0 1-.226.085h-3.865v1.56h3.596a.31.31 0 0 1 .318.319V5.25a.311.311 0 0 1-.317.319h-3.595v1.595h3.963c.09 0 .166.03.227.092.06.062.092.138.092.228V8.7c0 .09-.03.164-.092.22a.307.307 0 0 1-.227.087h-5.872a.29.29 0 0 1-.214-.092M41.88 4.206c.35 0 .62-.088.802-.264.184-.176.275-.42.275-.73 0-.312-.09-.562-.275-.75-.183-.188-.45-.282-.8-.282h-1.36v2.026h1.36zm-3.565 4.71a.295.295 0 0 1-.092-.216V.73c0-.09.028-.165.085-.227a.291.291 0 0 1 .22-.092h3.365c1.077 0 1.92.247 2.526.738.607.49.91 1.183.91 2.075 0 .574-.132 1.06-.397 1.462-.265.4-.63.712-1.095.933l1.652 2.996c.024.05.037.094.037.135a.255.255 0 0 1-.074.177.238.238 0 0 1-.183.08h-1.725a.511.511 0 0 1-.502-.33L41.697 6.01h-1.174V8.7c0 .09-.03.164-.092.22a.304.304 0 0 1-.225.087H38.53a.29.29 0 0 1-.215-.092zm9.215-.001a.296.296 0 0 1-.09-.215V.73a.32.32 0 0 1 .084-.227.291.291 0 0 1 .22-.092h5.775c.09 0 .164.032.225.093a.31.31 0 0 1 .092.228v1.216a.29.29 0 0 1-.092.222.316.316 0 0 1-.226.085h-3.867v1.56h3.597c.09 0 .165.03.226.092.06.06.092.137.092.227V5.25c0 .09-.03.166-.092.227a.31.31 0 0 1-.226.092h-3.597v1.595h3.964c.09 0 .165.03.226.092.06.062.092.138.092.228V8.7c0 .09-.03.164-.092.22a.305.305 0 0 1-.226.087h-5.872a.293.293 0 0 1-.215-.092m12.057-1.75c.514 0 .893-.123 1.138-.368.244-.246.375-.64.39-1.18.017-.236.025-.543.025-.92 0-.376-.008-.68-.024-.91-.016-.523-.157-.91-.422-1.16-.265-.25-.655-.374-1.168-.374H58.36v4.912h1.225zm-3.432 1.75a.298.298 0 0 1-.092-.215V.73c0-.09.03-.165.087-.227a.291.291 0 0 1 .22-.092h3.218c1.207 0 2.145.29 2.814.867.667.577 1.018 1.406 1.05 2.487.01.237.013.553.013.945 0 .392-.004.703-.012.932-.08 2.244-1.35 3.365-3.804 3.365h-3.28a.29.29 0 0 1-.213-.092zM73.2 7.35c.32 0 .566-.093.74-.277a.946.946 0 0 0 .264-.682.95.95 0 0 0-.27-.692c-.178-.184-.423-.276-.733-.276h-1.638V7.35h1.64zm-.11-3.537c.302 0 .535-.082.698-.246.163-.163.245-.376.245-.64 0-.252-.08-.46-.24-.618-.158-.16-.392-.24-.702-.24h-1.528v1.743h1.53zm-3.737 5.102a.296.296 0 0 1-.09-.215V.73a.32.32 0 0 1 .084-.227.291.291 0 0 1 .22-.092h3.78c1.036 0 1.807.214 2.313.64.506.426.76 1.03.76 1.817 0 .393-.105.733-.313 1.02a2.03 2.03 0 0 1-.692.626c.335.147.616.39.845.73.228.34.342.723.342 1.148 0 .828-.27 1.47-.814 1.93-.542.458-1.32.687-2.33.687h-3.89a.293.293 0 0 1-.215-.092zm11.435 0a.296.296 0 0 1-.09-.215V6.085L77.87.805a.269.269 0 0 1-.036-.136.25.25 0 0 1 .08-.18.245.245 0 0 1 .177-.08h1.616a.44.44 0 0 1 .28.087.56.56 0 0 1 .16.184l1.7 3.084 1.7-3.083a.595.595 0 0 1 .16-.183.447.447 0 0 1 .282-.086h1.615a.25.25 0 0 1 .177.08c.053.055.08.114.08.18a.262.262 0 0 1-.037.134l-2.826 5.28V8.7c0 .09-.03.164-.092.22a.307.307 0 0 1-.226.087h-1.677a.293.293 0 0 1-.215-.092M92.3 8.89a.464.464 0 0 1-.152-.288l-1.31-7.86a.166.166 0 0 1-.012-.073c0-.066.027-.126.08-.18a.25.25 0 0 1 .177-.08h1.603c.236 0 .367.096.39.284l.748 4.642.844-2.69c.065-.22.2-.33.404-.33h.917c.203 0 .337.11.403.33l.844 2.677.76-4.63c.015-.097.052-.17.11-.214.056-.046.145-.07.268-.07h1.603c.073 0 .134.028.183.08.05.054.074.114.074.18v.073l-1.31 7.86a.444.444 0 0 1-.158.287.486.486 0 0 1-.33.117H97.2a.439.439 0 0 1-.452-.32l-1.21-3.402-1.213 3.402a.552.552 0 0 1-.16.22.431.431 0 0 1-.305.1h-1.223c-.14 0-.25-.04-.336-.118m9.955.028a.296.296 0 0 1-.09-.215V.718a.304.304 0 0 1 .305-.307h1.75c.09 0 .163.03.22.087a.3.3 0 0 1 .086.22V8.7a.31.31 0 0 1-.086.215.284.284 0 0 1-.22.092h-1.75a.294.294 0 0 1-.214-.092m4.751 0a.298.298 0 0 1-.092-.215V.73c0-.09.03-.165.086-.227a.291.291 0 0 1 .22-.092h1.64c.09 0 .163.032.22.093a.324.324 0 0 1 .085.228V3.41l2.166-2.75c.09-.165.25-.247.477-.247h1.872a.25.25 0 0 1 .177.08c.052.055.08.114.08.18 0 .065-.018.114-.05.147l-2.85 3.708 3.082 4.077c.033.033.05.082.05.147a.246.246 0 0 1-.08.177.257.257 0 0 1-.19.08h-1.92a.578.578 0 0 1-.32-.08.517.517 0 0 1-.17-.165l-2.325-2.997V8.7a.305.305 0 0 1-.085.215.284.284 0 0 1-.22.092h-1.64a.293.293 0 0 1-.214-.092m9.037 0a.298.298 0 0 1-.092-.215V.718c0-.09.03-.163.092-.22a.3.3 0 0 1 .214-.087h1.75c.09 0 .163.03.22.087a.3.3 0 0 1 .086.22V8.7a.31.31 0 0 1-.086.215.284.284 0 0 1-.22.092h-1.75a.293.293 0 0 1-.214-.092m7.276-3.211h2.176l-1.09-3.132-1.087 3.132zm-3.14 3.223a.25.25 0 0 1-.08-.178c0-.05.005-.087.013-.11l2.85-7.872c.082-.238.246-.357.49-.357h1.91c.244 0 .406.12.488.358l2.852 7.87a.384.384 0 0 1 .012.11.25.25 0 0 1-.08.18.246.246 0 0 1-.177.08h-1.59a.424.424 0 0 1-.416-.27l-.44-1.192h-3.205l-.44 1.19a.425.425 0 0 1-.417.27h-1.59a.238.238 0 0 1-.177-.08z\" fill=\"#002A32\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-company-logo-wikia-org\" viewBox=\"0 0 128 29\"><path fill=\"#092140\" d=\"M37.35 22.64V1.14h4.8v12l1.29-1.57 2.77-3.32h6.83l-5.72 5.72 5.99 8.67h-6.27l-3.23-5.44-1.66 1.57v3.87h-4.8zM10.23 8.25l-2.4 9.78-1.85-9.78H1l3.69 14.39h6.46l1.84-7.47 1.76 7.47h6.55l3.69-14.39h-5.08l-1.84 9.78-2.31-9.78h-5.53zm69.84 4.24l.28-4.24h-4.43l-.37 1.57A5.64 5.64 0 0 0 71 7.88c-4 0-6.18 2.58-6.18 7.47s2.21 7.47 6.18 7.47a5.94 5.94 0 0 0 4.52-1.94l.37 1.66h4.43l-.28-4.24zm-4.8 4.71a3.39 3.39 0 0 1-2.86 1.29c-1.48 0-2.58-.92-2.58-3.14s1.11-3.14 2.58-3.14a3.46 3.46 0 0 1 2.86 1.38zM30.16 1.23A2.78 2.78 0 0 0 27.39 4a2.72 2.72 0 0 0 2.77 2.77A2.78 2.78 0 0 0 32.92 4a2.84 2.84 0 0 0-2.76-2.77zm4.15 10.06V8.25h-6.92v14.39h6.92V19.6h-2.22v-8.31h2.22zM57 4a2.72 2.72 0 0 0 2.77 2.77A2.77 2.77 0 1 0 57 4zm.84 7.29v8.31h-2.22v3.04h6.92V8.25h-6.92v3.04h2.22z\"/><g clip-path=\"url(#wds-company-logo-wikia-org-path)\"><path fill=\"#7e7e7e\" d=\"M76.25 5.78h60.19v24.44H76.25z\"/></g></symbol><symbol id=\"wds-company-logo-wikia\" viewBox=\"0 0 64 23\"><path fill-rule=\"evenodd\" d=\"M28.82 19.085v-17h3.827v9.526l1.02-1.27 2.2-2.59h5.47l-4.588 4.48 4.78 6.858h-4.96l-2.608-4.31-1.318 1.25v3.06H28.82M7.297 7.748L5.442 15.49l-1.45-7.743H.004l2.948 11.338h5.126L9.514 13.2l1.436 5.885h5.126l2.956-11.338h-4.005l-1.442 7.743L11.7 7.747H7.297m55.486 3.297l.213-3.297h-3.492L59.24 8.99c-.804-.847-1.804-1.547-3.563-1.547-3.184 0-4.923 2.055-4.923 5.952 0 3.898 1.74 5.953 4.923 5.953 1.76 0 2.76-.7 3.563-1.545l.274 1.282h3.482l-.213-3.337v-4.704zm-3.817 3.793c-.49.635-1.253 1.06-2.25 1.06-1.145 0-2.057-.744-2.057-2.502 0-1.758.91-2.5 2.052-2.5.998 0 1.762.425 2.25 1.06v2.882zM23.113 2.147a2.186 2.186 0 1 0 0 4.372 2.184 2.184 0 1 0 0-4.367m3.294 7.988V7.75h-5.48v11.338h5.48v-2.38H24.69V10.14h1.717m18.06-5.807c0 1.208.98 2.186 2.188 2.186a2.186 2.186 0 0 0 2.188-2.184c0-1.203-.98-2.18-2.188-2.18a2.185 2.185 0 0 0-2.187 2.183m.612 12.374h-1.72v2.38h5.483V7.746H43.36v2.39h1.72\"/></symbol><symbol id=\"wds-company-store-appstore\" viewBox=\"0 0 119 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path d=\"M114.766 35H4.17C1.87 35 0 33.138 0 30.859V4.135C0 1.855 1.87 0 4.169 0h110.597C117.063 0 119 1.855 119 4.135V30.86c0 2.279-1.937 4.141-4.234 4.141\" fill=\"#A9AAA9\"/><path d=\"M118.147 30.86c0 1.851-1.511 3.35-3.38 3.35H4.17c-1.87 0-3.385-1.498-3.385-3.35V4.134C.785 2.284 2.3.78 4.169.78h110.597c1.87 0 3.38 1.505 3.38 3.355V30.86\" fill=\"#0A0B09\"/><path d=\"M26.557 17.311c-.025-2.82 2.327-4.192 2.434-4.257-1.332-1.928-3.396-2.19-4.122-2.211-1.734-.181-3.416 1.03-4.299 1.03-.9 0-2.262-1.012-3.727-.983-1.885.03-3.65 1.113-4.619 2.797-1.997 3.432-.507 8.477 1.406 11.251.958 1.36 2.076 2.877 3.54 2.823 1.432-.06 1.967-.907 3.696-.907 1.713 0 2.216.907 3.709.873 1.537-.025 2.505-1.365 3.429-2.736 1.106-1.558 1.55-3.092 1.568-3.171-.036-.012-2.986-1.129-3.015-4.509m-2.82-8.293c.77-.957 1.296-2.258 1.15-3.578-1.115.049-2.51.765-3.312 1.7-.71.825-1.345 2.176-1.181 3.447 1.253.092 2.539-.628 3.343-1.57M43.858 22.71l-.992-3.04c-.104-.31-.301-1.042-.592-2.194h-.034a84.012 84.012 0 0 1-.557 2.195l-.974 3.04h3.15zm3.43 4.856h-2.003l-1.096-3.42h-3.811l-1.045 3.42h-1.948l3.776-11.644h2.332l3.794 11.644zm7.796-4.233c0-.817-.185-1.491-.557-2.021-.407-.553-.951-.83-1.636-.83a1.96 1.96 0 0 0-1.262.459 2.115 2.115 0 0 0-.74 1.2 2.42 2.42 0 0 0-.087.57v1.4c0 .61.19 1.126.566 1.546.378.42.868.63 1.47.63.708 0 1.26-.27 1.654-.811.394-.542.592-1.256.592-2.143zm1.914-.068c0 1.427-.388 2.556-1.166 3.385-.696.738-1.56 1.106-2.593 1.106-1.113 0-1.914-.397-2.401-1.193h-.036v4.423h-1.879v-9.052c0-.898-.024-1.82-.07-2.765h1.653l.105 1.331h.035c.626-1.002 1.578-1.503 2.854-1.503.998 0 1.83.391 2.498 1.174.667.784 1 1.815 1 3.094zm7.815.068c0-.817-.186-1.491-.557-2.021-.407-.553-.952-.83-1.636-.83-.465 0-.885.154-1.263.459a2.123 2.123 0 0 0-.738 1.2c-.058.231-.088.42-.088.57v1.4c0 .61.189 1.126.564 1.546.378.42.869.63 1.473.63.707 0 1.258-.27 1.652-.811.395-.542.593-1.256.593-2.143zm1.914-.068c0 1.427-.388 2.556-1.167 3.385-.695.738-1.56 1.106-2.592 1.106-1.114 0-1.915-.397-2.401-1.193h-.036v4.423h-1.879v-9.052c0-.898-.024-1.82-.07-2.765h1.654l.104 1.331h.035c.626-1.002 1.576-1.503 2.854-1.503.997 0 1.83.391 2.498 1.174.666.784 1 1.815 1 3.094zm10.878 1.036c0 .99-.347 1.796-1.042 2.418-.764.68-1.828 1.02-3.196 1.02-1.26 0-2.274-.242-3.04-.726l.436-1.555a5.18 5.18 0 0 0 2.716.743c.708 0 1.26-.158 1.655-.476.395-.317.59-.741.59-1.272 0-.473-.16-.87-.487-1.194-.323-.323-.864-.623-1.617-.9-2.054-.76-3.081-1.874-3.081-3.34 0-.956.36-1.741 1.08-2.353.717-.611 1.674-.917 2.871-.917 1.068 0 1.955.184 2.662.552l-.47 1.521c-.661-.357-1.409-.535-2.245-.535-.661 0-1.178.16-1.548.483a1.38 1.38 0 0 0-.47 1.055c0 .46.179.84.54 1.139.312.277.88.577 1.705.9 1.01.403 1.75.874 2.228 1.415.476.542.713 1.216.713 2.022m6.213-3.731h-2.071v4.076c0 1.037.365 1.555 1.096 1.555.336 0 .616-.029.836-.086l.051 1.417c-.37.137-.857.206-1.461.206-.743 0-1.323-.224-1.741-.672-.416-.45-.627-1.204-.627-2.264V20.57h-1.234v-1.4H79.9v-1.538l1.846-.553v2.09h2.071v1.4m7.398 2.79c0-.774-.168-1.438-.505-1.992-.394-.67-.958-1.005-1.687-1.005-.756 0-1.33.334-1.724 1.005-.337.554-.504 1.229-.504 2.027 0 .774.167 1.439.504 1.992.407.67.975 1.005 1.707 1.005.717 0 1.28-.34 1.687-1.022.347-.565.522-1.236.522-2.01zm1.95-.06c0 1.29-.371 2.35-1.114 3.178-.778.853-1.811 1.279-3.099 1.279-1.241 0-2.23-.409-2.966-1.227-.737-.817-1.106-1.849-1.106-3.092 0-1.301.38-2.367 1.14-3.196.76-.83 1.783-1.244 3.071-1.244 1.242 0 2.24.409 2.995 1.227.719.794 1.079 1.819 1.079 3.075zm6.108-2.489a3.281 3.281 0 0 0-.592-.05c-.661 0-1.172.247-1.532.742-.314.438-.47.99-.47 1.658v4.406h-1.878l.016-5.752c0-.969-.023-1.85-.07-2.645h1.638l.068 1.607h.052c.198-.552.512-.997.94-1.33.418-.3.871-.449 1.358-.449.174 0 .331.012.47.034v1.78m6.613 1.676c.013-.553-.11-1.03-.365-1.434-.325-.518-.825-.777-1.497-.777-.615 0-1.115.252-1.496.76-.314.403-.5.887-.556 1.45h3.914zm1.792.484c0 .334-.022.616-.069.846h-5.637c.022.83.294 1.463.817 1.901.475.391 1.09.587 1.844.587.834 0 1.596-.133 2.281-.398l.294 1.296c-.8.346-1.745.519-2.835.519-1.312 0-2.342-.384-3.09-1.15-.747-.766-1.123-1.794-1.123-3.084 0-1.267.347-2.32 1.046-3.16.73-.9 1.716-1.348 2.957-1.348 1.219 0 2.142.448 2.769 1.347.497.714.746 1.596.746 2.643zM42.263 8.783c0-.667-.178-1.18-.535-1.536-.357-.356-.877-.535-1.56-.535-.292 0-.54.02-.745.06v4.277c.114.018.322.026.624.026.707 0 1.253-.195 1.638-.585.385-.39.578-.96.578-1.707zm.974-.025c0 1.03-.31 1.805-.932 2.326-.577.48-1.394.72-2.454.72-.525 0-.975-.022-1.351-.067V6.11c.49-.079 1.02-.118 1.59-.118 1.01 0 1.77.218 2.284.654.574.492.863 1.196.863 2.113zm4.206.929c0-.38-.083-.706-.248-.978-.194-.33-.47-.495-.83-.495-.37 0-.652.165-.846.495-.165.272-.248.604-.248.995 0 .38.083.707.248.98.2.328.478.492.838.492.354 0 .63-.167.83-.501.17-.278.256-.607.256-.988zm.958-.03c0 .635-.182 1.155-.547 1.562-.383.42-.89.629-1.522.629-.61 0-1.096-.2-1.458-.603-.362-.402-.543-.909-.543-1.52 0-.639.186-1.162.56-1.57.373-.408.876-.61 1.508-.61.611 0 1.1.2 1.472.602.352.39.53.894.53 1.51zm6.925-2.027l-1.3 4.124h-.845l-.54-1.791a13.32 13.32 0 0 1-.334-1.333h-.016c-.08.453-.191.898-.334 1.333l-.573 1.79h-.855L49.307 7.63h.949l.47 1.96c.113.465.208.906.283 1.325h.016c.068-.345.182-.784.342-1.316l.59-1.969h.752l.565 1.927c.137.47.248.922.333 1.358h.026c.062-.425.157-.877.283-1.358l.504-1.927h.906m4.789 4.124h-.924V9.39c0-.728-.278-1.092-.837-1.092a.837.837 0 0 0-.667.301c-.171.2-.257.436-.257.707v2.447h-.924V8.809c0-.363-.011-.755-.033-1.18h.812l.043.645h.026c.107-.2.268-.367.478-.498.25-.155.53-.232.838-.232.387 0 .71.125.967.374.319.305.478.76.478 1.366v2.47m1.625-6.017h.923v6.017h-.923zm5.402 3.95c0-.38-.082-.706-.247-.978-.193-.33-.471-.495-.829-.495-.372 0-.654.165-.847.495-.165.272-.248.604-.248.995 0 .38.083.707.248.98.2.328.479.492.838.492.354 0 .629-.167.829-.501.172-.278.256-.607.256-.988zm.96-.03c0 .635-.183 1.155-.548 1.562-.382.42-.89.629-1.522.629-.611 0-1.097-.2-1.458-.603-.362-.402-.542-.909-.542-1.52 0-.639.186-1.162.559-1.57.373-.408.877-.61 1.508-.61.612 0 1.1.2 1.472.602.353.39.53.894.53 1.51zm3.511.679V9.7c-1.019-.017-1.528.26-1.528.832 0 .215.058.376.177.483.119.108.27.161.451.161a.927.927 0 0 0 .564-.19.777.777 0 0 0 .336-.65zm.96 1.418h-.83l-.07-.475h-.025c-.284.379-.689.569-1.214.569-.392 0-.709-.125-.949-.374a1.168 1.168 0 0 1-.325-.84c0-.504.212-.888.637-1.155.425-.265 1.023-.396 1.793-.39v-.077c0-.543-.288-.814-.863-.814-.41 0-.772.101-1.083.305l-.188-.603c.386-.237.862-.356 1.426-.356 1.086 0 1.63.569 1.63 1.707v1.519c0 .412.02.74.06.984zm4.291-1.74v-.687a1.043 1.043 0 0 0-.36-.844.908.908 0 0 0-.617-.226.952.952 0 0 0-.813.407c-.197.272-.296.62-.296 1.044 0 .408.094.739.284.993.2.271.47.408.807.408a.895.895 0 0 0 .73-.34c.178-.209.265-.46.265-.755zm.958 1.74h-.82l-.042-.662h-.027c-.262.503-.707.755-1.334.755-.501 0-.917-.195-1.248-.585-.33-.391-.496-.897-.496-1.52 0-.667.179-1.208.539-1.62a1.662 1.662 0 0 1 1.283-.578c.557 0 .948.187 1.17.56h.017V5.737h.925v4.906c0 .401.01.771.033 1.11zm6.943-2.067c0-.38-.083-.706-.248-.978-.194-.33-.47-.495-.83-.495-.37 0-.652.165-.847.495-.165.272-.248.604-.248.995 0 .38.083.707.248.98.2.328.479.492.839.492.353 0 .63-.167.83-.501.17-.278.256-.607.256-.988zm.957-.03c0 .635-.182 1.155-.547 1.562-.383.42-.889.629-1.522.629-.61 0-1.095-.2-1.458-.603-.362-.402-.542-.909-.542-1.52 0-.639.186-1.162.56-1.57.372-.408.875-.61 1.51-.61.608 0 1.1.2 1.469.602.353.39.53.894.53 1.51zm4.968 2.097h-.923V9.39c0-.728-.279-1.092-.839-1.092a.833.833 0 0 0-.666.301c-.17.2-.257.436-.257.707v2.447h-.924V8.809c0-.363-.01-.755-.033-1.18h.811l.043.645h.026c.108-.2.269-.367.478-.498.252-.155.531-.232.839-.232.388 0 .71.125.966.374.32.305.478.76.478 1.366v2.47m6.218-3.438h-1.019v2.004c0 .509.181.764.54.764.165 0 .302-.014.41-.043l.025.696c-.182.068-.422.102-.718.102-.365 0-.649-.11-.853-.331-.207-.221-.309-.591-.309-1.112v-2.08h-.608v-.687h.608v-.756l.905-.271v1.027h1.019v.687m4.89 3.438h-.924V9.409c0-.74-.28-1.11-.837-1.11-.429 0-.721.215-.882.644-.027.09-.042.2-.042.33v2.48h-.923V5.738h.923v2.485h.017c.29-.452.708-.678 1.248-.678.383 0 .699.125.95.374.314.31.47.772.47 1.383v2.453m4.163-2.497a1.23 1.23 0 0 0-.179-.704c-.16-.255-.404-.382-.735-.382a.88.88 0 0 0-.735.374 1.38 1.38 0 0 0-.274.712h1.923zm.882.238c0 .165-.013.303-.035.416h-2.77c.012.408.144.718.4.934.235.192.539.288.909.288.41 0 .783-.064 1.12-.195l.145.636c-.394.17-.857.256-1.395.256-.643 0-1.15-.188-1.516-.565-.368-.377-.55-.882-.55-1.515 0-.622.17-1.14.512-1.553.358-.442.842-.663 1.453-.663.598 0 1.052.221 1.358.663.246.35.369.784.369 1.298z\" fill=\"#FFF\"/></g></symbol><symbol id=\"wds-company-store-googleplay\" viewBox=\"0 0 119 35\"><g fill=\"none\" fill-rule=\"evenodd\"><path fill=\"#000\" d=\"M114.593 35H4.407C1.94 35 0 33.075 0 30.625V4.375C0 1.925 1.94 0 4.407 0h110.186C117.06 0 119 1.925 119 4.375v26.25c0 2.362-1.94 4.375-4.407 4.375z\"/><path fill=\"#A6A6A6\" d=\"M114.593.7c2.027 0 3.702 1.662 3.702 3.675v26.25c0 2.013-1.675 3.675-3.702 3.675H4.407C2.38 34.3.705 32.638.705 30.625V4.375C.705 2.362 2.38.7 4.407.7h110.186zm0-.7H4.407C1.94 0 0 1.925 0 4.375v26.25C0 33.075 1.94 35 4.407 35h110.186c2.468 0 4.407-1.925 4.407-4.375V4.375C119 2.013 117.06 0 114.593 0z\"/><path fill=\"#FFF\" stroke=\"#FFF\" stroke-width=\".2\" d=\"M41.475 8.925c0 .7-.175 1.313-.613 1.75-.525.525-1.137.787-1.925.787-.787 0-1.4-.262-1.924-.787-.526-.525-.788-1.138-.788-1.925 0-.787.262-1.4.788-1.925.525-.525 1.137-.788 1.925-.788.35 0 .7.088 1.05.263.35.175.612.35.787.612l-.438.438c-.35-.438-.787-.612-1.4-.612-.524 0-1.05.174-1.4.612-.437.35-.612.875-.612 1.488 0 .612.175 1.137.613 1.487.437.35.875.613 1.4.613.612 0 1.05-.176 1.487-.613.263-.262.438-.612.438-1.05h-1.925v-.613h2.537v.263zM45.5 6.737h-2.362V8.4h2.187v.612h-2.187v1.663H45.5v.7h-3.062v-5.25H45.5zm2.888 4.638h-.7V6.737H46.2v-.612h3.675v.612h-1.487zm4.025 0v-5.25h.7v5.25zm3.674 0h-.7V6.737H53.9v-.612h3.587v.612H56v4.638zm8.313-.7c-.525.525-1.138.787-1.925.787-.788 0-1.4-.262-1.925-.787-.525-.525-.787-1.138-.787-1.925 0-.787.262-1.4.787-1.925.525-.525 1.138-.788 1.925-.788.788 0 1.4.263 1.925.788.525.525.787 1.138.787 1.925 0 .787-.262 1.4-.787 1.925zm-3.325-.438c.35.35.875.613 1.4.613.525 0 1.05-.175 1.4-.612.35-.35.612-.875.612-1.488s-.174-1.138-.612-1.487c-.35-.35-.875-.613-1.4-.613-.525 0-1.05.175-1.4.612-.35.35-.613.875-.613 1.488s.175 1.137.613 1.488zm5.075 1.138v-5.25h.788l2.537 4.113V6.125h.7v5.25h-.7l-2.712-4.287v4.287z\"/><path fill=\"#FFF\" d=\"M59.587 19.075c-2.1 0-3.762 1.575-3.762 3.762 0 2.1 1.662 3.763 3.762 3.763s3.763-1.575 3.763-3.763c0-2.274-1.663-3.762-3.763-3.762zm0 5.95c-1.137 0-2.1-.962-2.1-2.275s.963-2.275 2.1-2.275c1.138 0 2.1.875 2.1 2.275 0 1.313-.962 2.275-2.1 2.275zm-8.137-5.95c-2.1 0-3.763 1.575-3.763 3.762 0 2.1 1.663 3.763 3.763 3.763 2.1 0 3.762-1.575 3.762-3.763 0-2.274-1.662-3.762-3.762-3.762zm0 5.95c-1.138 0-2.1-.962-2.1-2.275s.962-2.275 2.1-2.275c1.137 0 2.1.875 2.1 2.275 0 1.313-.962 2.275-2.1 2.275zm-9.713-4.813v1.576H45.5c-.087.875-.438 1.575-.875 2.012-.525.525-1.4 1.137-2.888 1.137-2.362 0-4.112-1.837-4.112-4.2 0-2.362 1.837-4.2 4.112-4.2 1.225 0 2.188.526 2.888 1.138l1.138-1.137c-.963-.876-2.188-1.575-3.938-1.575-3.15 0-5.863 2.624-5.863 5.775 0 3.15 2.713 5.774 5.863 5.774 1.75 0 2.975-.524 4.025-1.662 1.05-1.05 1.4-2.538 1.4-3.675 0-.35 0-.7-.087-.963h-5.425zm39.726 1.226c-.35-.875-1.225-2.363-3.15-2.363-1.925 0-3.5 1.488-3.5 3.762 0 2.1 1.575 3.763 3.674 3.763 1.663 0 2.713-1.05 3.063-1.663l-1.225-.875c-.438.613-.963 1.05-1.838 1.05-.874 0-1.4-.35-1.837-1.137l4.987-2.1-.174-.438zm-5.075 1.225c0-1.4 1.137-2.188 1.924-2.188.613 0 1.225.35 1.4.787l-3.325 1.4zm-4.113 3.587h1.662V15.312h-1.662V26.25zm-2.625-6.387c-.438-.438-1.138-.875-2.013-.875-1.837 0-3.587 1.662-3.587 3.762s1.663 3.675 3.588 3.675c.874 0 1.575-.438 1.924-.875h.088v.525c0 1.4-.788 2.188-2.013 2.188-.962 0-1.662-.7-1.837-1.313l-1.4.613c.438.962 1.487 2.187 3.325 2.187 1.925 0 3.5-1.137 3.5-3.85v-6.65H69.65v.613zm-1.925 5.162c-1.137 0-2.1-.962-2.1-2.275s.963-2.275 2.1-2.275c1.138 0 2.013.962 2.013 2.275s-.876 2.275-2.013 2.275zm21.35-9.712h-3.938V26.25H86.8v-4.113h2.275c1.837 0 3.587-1.312 3.587-3.412 0-2.1-1.75-3.413-3.587-3.413zm.087 5.25H86.8V16.8h2.362c1.225 0 1.925 1.05 1.925 1.837-.087.963-.787 1.925-1.925 1.925zm10.063-1.575c-1.225 0-2.45.524-2.887 1.662l1.487.613c.35-.613.875-.788 1.487-.788.876 0 1.663.525 1.75 1.4v.087c-.262-.174-.962-.437-1.662-.437-1.575 0-3.15.875-3.15 2.45 0 1.487 1.313 2.45 2.713 2.45 1.137 0 1.662-.525 2.1-1.05h.087v.875h1.575v-4.2c-.175-1.925-1.662-3.063-3.5-3.063zm-.175 6.037c-.525 0-1.313-.262-1.313-.962 0-.875.963-1.138 1.75-1.138.7 0 1.05.175 1.488.35-.175 1.05-1.05 1.75-1.925 1.75zm9.188-5.775l-1.838 4.725h-.088l-1.924-4.725h-1.75l2.887 6.65-1.663 3.675h1.663l4.462-10.325h-1.75zm-14.7 7H95.2V15.312h-1.663V26.25z\"/><path fill=\"url(#store-googleplay-gradient-1)\" d=\"M9.1 6.563c-.262.262-.438.7-.438 1.224v19.338c0 .525.175.962.438 1.225l.088.087 10.85-10.85v-.174L9.1 6.563z\"/><path fill=\"url(#store-googleplay-gradient-2)\" d=\"M23.625 21.262l-3.587-3.587v-.262l3.587-3.588.087.088L28 16.363c1.225.7 1.225 1.837 0 2.537l-4.375 2.363z\"/><path fill=\"url(#store-googleplay-gradient-3)\" d=\"M23.712 21.175L20.038 17.5 9.1 28.438c.438.437 1.05.437 1.838.087l12.774-7.35\"/><path fill=\"url(#store-googleplay-gradient-4)\" d=\"M23.712 13.825L10.938 6.563c-.788-.438-1.4-.35-1.838.087L20.038 17.5l3.674-3.675z\"/><path fill=\"#000\" d=\"M23.625 21.087l-12.688 7.175c-.7.438-1.312.35-1.75 0l-.087.088.088.087c.437.35 1.05.438 1.75 0l12.687-7.35z\" opacity=\".2\"/><path fill=\"#000\" d=\"M9.15 28.262c-.3-.262-.4-.7-.4-1.224v.087c0 .525.2.962.5 1.225v-.088h-.1zM28 18.637l-4.375 2.45.087.088L28 18.725c.613-.35.875-.788.875-1.225 0 .438-.35.788-.875 1.137z\" opacity=\".12\"/><path fill=\"#FFF\" d=\"M10.938 6.65L28 16.363c.525.35.875.7.875 1.137 0-.438-.262-.875-.875-1.225L10.937 6.563c-1.224-.7-2.187-.088-2.187 1.312v.088c0-1.4.963-2.013 2.188-1.313z\" opacity=\".25\"/></g></symbol><symbol id=\"wds-icons-activity-small\" viewBox=\"0 0 18 18\"><path d=\"M10.75 17.002a1.5 1.5 0 0 1-1.449-1.11L6.934 7.099 5.881 9.586a1.499 1.499 0 0 1-1.381.916h-3a1.5 1.5 0 1 1 0-3h2.005l2.363-5.584c.25-.591.839-.97 1.485-.912a1.5 1.5 0 0 1 1.345 1.106l2.337 8.679.949-2.351a1.5 1.5 0 0 1 1.391-.938H16.5a1.5 1.5 0 0 1 0 3h-2.114l-2.246 5.562a1.5 1.5 0 0 1-1.39.938\"/></symbol><symbol id=\"wds-icons-activity\" viewBox=\"0 0 24 24\"><path d=\"M14.218 22l-.097-.003a1.498 1.498 0 0 1-1.351-1.117L9.486 8.289l-1.799 4.517c-.226.57-.778.943-1.389.943H2.496A1.497 1.497 0 0 1 1 12.25c0-.827.67-1.498 1.496-1.498h2.788l3.11-7.808a1.49 1.49 0 0 1 1.482-.94c.644.04 1.19.49 1.354 1.116l3.292 12.622 1.635-4.052a1.495 1.495 0 0 1 1.386-.938h3.96a1.498 1.498 0 0 1 0 2.997h-2.95l-2.949 7.314c-.229.57-.78.937-1.386.937\"/></symbol><symbol id=\"wds-icons-alert-small\" viewBox=\"0 0 18 16\"><path d=\"M17.928 15.156c.1.178.096.392-.013.565a.603.603 0 0 1-.515.28H.6a.607.607 0 0 1-.515-.28.544.544 0 0 1-.013-.564L8.472.278c.21-.37.847-.37 1.056 0l8.4 14.878zM8 5.99v4.02A1 1 0 0 0 9 11c.556 0 1-.444 1-.99V5.99A1 1 0 0 0 9 5c-.556 0-1 .444-1 .99zM8 13c0 .556.448 1 1 1 .556 0 1-.448 1-1 0-.556-.448-1-1-1-.556 0-1 .448-1 1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-alert\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M23.905 21.84a.775.775 0 0 1-.018.777.802.802 0 0 1-.686.383H.8a.804.804 0 0 1-.688-.383.775.775 0 0 1-.017-.777l11.2-20.458c.28-.51 1.13-.51 1.41 0l11.2 20.458zM11 8.997v6.006c0 .544.448.997 1 .997.556 0 1-.446 1-.997V8.997C13 8.453 12.552 8 12 8c-.556 0-1 .446-1 .997zM11 19c0 .556.448 1 1 1 .556 0 1-.448 1-1 0-.556-.448-1-1-1-.556 0-1 .448-1 1z\"/></symbol><symbol id=\"wds-icons-arrow-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M16 7.994H4.419l3.29-3.287a1 1 0 1 0-1.415-1.414l-5 4.997a.998.998 0 0 0-.002 1.412l4.996 5.004a.997.997 0 0 0 1.414.002.998.998 0 0 0 .002-1.414l-3.295-3.3h11.59a1 1 0 1 0 0-2\"/></symbol><symbol id=\"wds-icons-arrow-tiny\" viewBox=\"0 0 12 12\"><path fill-rule=\"evenodd\" d=\"M5.712 10.707a.996.996 0 0 0 0-1.412L3.412 7h7.587a.999.999 0 1 0 0-1.998H3.416l2.301-2.297a.996.996 0 0 0 0-1.413 1 1 0 0 0-1.414 0L.3 5.29a1.004 1.004 0 0 0-.224.332.99.99 0 0 0-.065.325C.01 5.967 0 5.981 0 6v.002a1 1 0 0 0 .078.383c.033.08.09.147.143.216.027.035.04.075.072.107l4.005 4a1 1 0 0 0 1.414 0\"/></symbol><symbol id=\"wds-icons-arrow\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M22.999 12a1 1 0 0 0-1-1H4.413l5.293-5.293a.999.999 0 1 0-1.414-1.414l-7 7a1 1 0 0 0 0 1.415l7 7a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.415L4.413 13h17.586a1 1 0 0 0 1-1\"/></symbol><symbol id=\"wds-icons-article-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M13 5.5a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm-5 3a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5zM16 2v9h-6v6H3c-.6 0-1-.4-1-1V2c0-.6.4-1 1-1h12c.6 0 1 .4 1 1zm-4 11h4l-4 4v-4z\"/></symbol><symbol id=\"wds-icons-article-tiny\" viewBox=\"0 0 12 12\"><path fill-rule=\"evenodd\" d=\"M10.341 0H1.658A.659.659 0 0 0 1 .658v10.684c0 .363.295.658.658.658H7V8h4V.658A.659.659 0 0 0 10.341 0zM8 9h3l-3 3V9z\"/></symbol><symbol id=\"wds-icons-article\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M19 6a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2h12a1 1 0 0 0 1-1zm0 5a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2h12a1 1 0 0 0 1-1zm-8 5a1 1 0 0 0-1-1H6a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1zM23 1v15h-7a1 1 0 0 0-1 1v7H2a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1zm-6 17h5.414L17 23.414V18z\"/></symbol><symbol id=\"wds-icons-articles-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M14.842 4.563v9.463c0 .654-.531 1.184-1.184 1.184H6.562c.36.477.927.79 1.57.79h5.526a1.975 1.975 0 0 0 1.974-1.974V6.131c0-.642-.313-1.208-.79-1.568\"/><path d=\"M12.079 14.421a1.975 1.975 0 0 0 1.974-1.974V4.158h-.04a1.947 1.947 0 0 0-.365-.79 1.97 1.97 0 0 0-.385-.384v1.174h-.072c.044.124.072.256.072.395v7.894c0 .653-.531 1.185-1.184 1.185H6.553a1.17 1.17 0 0 1-.395-.073v.073H4.984a2.024 2.024 0 0 0 1.174.749v.04h5.921z\"/><path d=\"M4.974 12.053a1.17 1.17 0 0 1-.395-.073 1.182 1.182 0 0 1-.79-1.112V2.973c0-.652.532-1.184 1.185-1.184H10.5c.514 0 .948.331 1.112.79.044.124.072.256.072.395v7.894c0 .653-.531 1.185-1.184 1.185H4.974zm.467.79H10.5a1.975 1.975 0 0 0 1.974-1.975V2.58h-.04a1.947 1.947 0 0 0-.365-.79A1.964 1.964 0 0 0 10.5 1H4.974A1.976 1.976 0 0 0 3 2.974v7.894c0 .643.313 1.21.79 1.57.23.174.495.305.789.364v.04h.861z\"/><path d=\"M6.158 8.105h4.737v-.79H4.578v.79h.79zm0-1.579h4.737v-.79H4.578v.79h.79zm0 3.158h4.737v-.79H4.578v.79h.79zm-.75-4.737h5.486V2.578H4.58v2.369h.79z\"/></g></symbol><symbol id=\"wds-icons-bell\" viewBox=\"0 0 24 24\"><path d=\"M21.882 19.472a.998.998 0 0 0-.05-1.026C21.814 18.418 20 15.656 20 12V8c0-4.411-3.59-8-8-8-4.411 0-8 3.589-8 8v4c0 3.628-1.815 6.419-1.832 6.446a1.003 1.003 0 0 0-.05 1.026c.175.325.514.528.882.528h18a1 1 0 0 0 .882-.528M12 24c1.474 0 2.75-.81 3.444-2H8.556c.694 1.19 1.97 2 3.444 2\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-bold-small\" viewBox=\"0 0 18 18\"><path d=\"M12.56 8.316a3.483 3.483 0 0 0 1.418-3.207C13.782 3.305 12.143 2 10.33 2H3v1l1.447.724A1 1 0 0 1 5 4.618v8.764a1 1 0 0 1-.553.894L3 15v1h7.823c2.104 0 3.98-1.547 4.162-3.643a4.001 4.001 0 0 0-2.424-4.04zM8 4h1a2 2 0 1 1 0 4H8V4zm2 10H8v-4h2a2 2 0 1 1 0 4z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-bold\" viewBox=\"0 0 24 24\"><path d=\"M3 23v-2.37l1.3-.41a1 1 0 0 0 .7-.954V4.756a1 1 0 0 0-.726-.963L3 3.431V1h10.11c5.196 0 6.654 2.37 6.654 5.378 0 2.887-1.853 4.498-3.706 5.105v.09C19.522 11.97 21 13.963 21 17c0 4.497-3.393 6-8.164 6H3zm8.165-12.762c2.187 0 4.132-.517 4.132-3.1 0-2.492-1.58-2.826-3.677-2.826H10v5.926h1.165zm.88 9.48c2.553 0 4.224-.608 4.224-3.251 0-2.523-1.7-3.19-3.767-3.19H10v6.44h2.046z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-bookmark-small\" viewBox=\"0 0 18 18\"><path d=\"M14.333 1H3.666c-.4 0-.666.267-.666.667v14.666c0 .267.133.467.333.6.133.067.2.067.333.067.134 0 .2-.067.334-.133l5-3.134 5 3.134c.133.066.2.133.333.133s.2 0 .333-.067a.7.7 0 0 0 .334-.6V1.667c0-.4-.267-.667-.667-.667\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-bookmark\" viewBox=\"0 0 24 24\"><path d=\"M20 0H4c-.6 0-1 .4-1 1v22c0 .4.2.7.5.9.2.1.3.1.5.1s.3-.1.5-.2l7.5-4.7 7.5 4.7c.2.1.3.2.5.2s.3 0 .5-.1c.3-.2.5-.5.5-.9V1c0-.6-.4-1-1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-bullet-list-small\" viewBox=\"0 0 18 18\"><g transform=\"translate(1 1)\" fill-rule=\"evenodd\"><circle cx=\"2\" cy=\"2\" r=\"2\"/><path d=\"M6 1h10v2H6z\"/><circle cx=\"2\" cy=\"8\" r=\"2\"/><path d=\"M6 7h10v2H6z\"/><circle cx=\"2\" cy=\"14\" r=\"2\"/><path d=\"M6 13h10v2H6z\"/></g></symbol><symbol id=\"wds-icons-bullet-list\" viewBox=\"0 0 24 24\"><path d=\"M4 7c1.654 0 3-1.346 3-3S5.654 1 4 1 1 2.346 1 4s1.346 3 3 3m0 8c1.654 0 3-1.346 3-3S5.654 9 4 9s-3 1.346-3 3 1.346 3 3 3m0 8c1.654 0 3-1.346 3-3s-1.346-3-3-3-3 1.346-3 3 1.346 3 3 3M22 3H10a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2m0 8H10a1 1 0 1 0 0 2h12a1 1 0 1 0 0-2m1 9a1 1 0 0 0-1-1H10a1 1 0 1 0 0 2h12a1 1 0 0 0 1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-camera\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12 18.5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5M23 6h-5.5l-1.7-2.6c-.2-.2-.5-.4-.8-.4H9c-.3 0-.6.2-.8.4L6.5 6H1c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1\"/><path d=\"M12 10.5c-1.68 0-3 1.32-3 3s1.32 3 3 3 3-1.32 3-3-1.32-3-3-3M1.5 5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0 0 1\"/></g></symbol><symbol id=\"wds-icons-chart-small\" viewBox=\"0 0 18 18\"><rect x=\"1\" y=\"11\" width=\"4\" height=\"6\" rx=\"1\"/><rect x=\"7\" y=\"1\" width=\"4\" height=\"16\" rx=\"1\"/><rect x=\"13\" y=\"6\" width=\"4\" height=\"11\" rx=\"1\"/></symbol><symbol id=\"wds-icons-checkbox\" viewBox=\"0 0 24 24\"><path d=\"M17.03 9.53l-6 6a.748.748 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l2.47 2.47 5.47-5.47a.75.75 0 1 1 1.06 1.06M20.25 3H3.75a.75.75 0 0 0-.75.75v16.5c0 .414.335.75.75.75h16.5a.75.75 0 0 0 .75-.75V3.75a.75.75 0 0 0-.75-.75\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-checkmark-circle-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M9 17A8 8 0 1 1 9 1a8 8 0 0 1 0 16zm-1.083-5a.73.73 0 0 0 .52-.22l4.33-4.403c.3-.305.312-.81.024-1.13a.722.722 0 0 0-1.062-.026l-3.83 3.895L6.25 8.563a.72.72 0 0 0-1.06.068.835.835 0 0 0 .063 1.13l2.165 2.04a.725.725 0 0 0 .5.2z\"/></symbol><symbol id=\"wds-icons-checkmark-circle\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M12 23C5.925 23 1 18.075 1 12S5.925 1 12 1s11 4.925 11 11-4.925 11-11 11zm-1.12-7.247a1 1 0 0 0 .69-.277l5.76-5.506a1 1 0 0 0-1.384-1.446l-5.092 4.87-2.19-1.94a1 1 0 1 0-1.327 1.496l2.88 2.55a.998.998 0 0 0 .662.253z\"/></symbol><symbol id=\"wds-icons-checkmark-small\" viewBox=\"0 0 18 18\"><path d=\"M6.333 15.2a.995.995 0 0 1-.663-.251L.336 10.223a1 1 0 0 1 1.327-1.497l4.644 4.115L16.31 3.278a.998.998 0 0 1 1.413.032.998.998 0 0 1-.032 1.413l-10.666 10.2a1 1 0 0 1-.69.277\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-checkmark\" viewBox=\"0 0 24 24\"><path d=\"M8.293 18.707a.997.997 0 0 0 1.414 0l13-13a.999.999 0 1 0-1.414-1.414L9 16.586l-6.293-6.293a.999.999 0 1 0-1.414 1.414l7 7z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-circle-plus\" viewBox=\"0 0 24 24\"><path d=\"M12 21.333c5.155 0 9.333-4.178 9.333-9.333S17.155 2.667 12 2.667 2.667 6.845 2.667 12 6.845 21.333 12 21.333zm1.333-10.666V6.66c0-.737-.597-1.327-1.333-1.327-.742 0-1.333.595-1.333 1.328v4.01H6.66c-.737 0-1.327.597-1.327 1.333 0 .743.595 1.334 1.328 1.334h4.01v4.006c0 .737.597 1.327 1.333 1.327.743 0 1.334-.596 1.334-1.33v-4.01h4.006c.737 0 1.327-.597 1.327-1.333 0-.743-.596-1.334-1.33-1.334h-4.01zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z\"/></symbol><symbol id=\"wds-icons-clipboard-small\" viewBox=\"0 0 19 18\"><path d=\"M7.3 12.7l-2-2c-.4-.4-.4-1 0-1.4.4-.4 1-.4 1.4 0L8 10.6l3.3-3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4 4c-.4.4-.9.5-1.4 0zM16 2h-3v2h2v11H3V4h2V2H2c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h14c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1zM6 1h6v4H6V1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-clipboard\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M14.382 10.264l-3.42 3.388-1.37-1.257a.937.937 0 0 0-1.352.085 1.017 1.017 0 0 0 .082 1.399l2.03 1.86a.937.937 0 0 0 1.295-.025l4.058-4.018a1.017 1.017 0 0 0 .03-1.401.934.934 0 0 0-1.353-.031\"/><path d=\"M19 20H5V4h3v2.497c0 .278.225.503.503.503H10a2 2 0 1 1 4 0h1.497A.503.503 0 0 0 16 6.497V4h3v16zm1.5-19h-17A1.5 1.5 0 0 0 2 2.5v19A1.5 1.5 0 0 0 3.5 23h17a1.5 1.5 0 0 0 1.5-1.5v-19A1.5 1.5 0 0 0 20.5 1z\"/></g></symbol><symbol id=\"wds-icons-clock-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M13 9a1 1 0 0 0-1-1h-2V6a1 1 0 1 0-2 0v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1M9 3C5.691 3 3 5.691 3 9s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6m0 14c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8\"/></symbol><symbol id=\"wds-icons-clock-tiny\" viewBox=\"0 0 12 12\"><path fill-rule=\"evenodd\" d=\"M9 6a1 1 0 0 0-1-1H7V4a1 1 0 1 0-2 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1M6 2C3.794 2 2 3.794 2 6s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4M0 6c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6-6-2.691-6-6z\"/></symbol><symbol id=\"wds-icons-clock\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M18 12a1 1 0 0 0-1-1h-4V7a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1m-6-9c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9m0 20C5.935 23 1 18.065 1 12S5.935 1 12 1s11 4.935 11 11-4.935 11-11 11\"/></symbol><symbol id=\"wds-icons-community-small\" viewBox=\"0 0 18 18\"><path d=\"M6.378 3.176c0 1.203-.98 2.177-2.19 2.177A2.182 2.182 0 0 1 2 3.176C2 1.975 2.98 1 4.189 1s2.19.975 2.19 2.176zm9.583 0c0 1.203-.98 2.177-2.19 2.177a2.182 2.182 0 0 1-2.188-2.177c0-1.201.98-2.176 2.188-2.176 1.21 0 2.19.975 2.19 2.176zM7.243 6.26h-5.2v10.48h5.2v-1.71H5.488V7.995h1.755V6.26zm3.553 0H16v10.48h-5.204v-1.71h1.73V7.995h-1.73V6.26z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-community\" viewBox=\"0 0 24 24\"><path d=\"M9.004 5.489a2.495 2.495 0 0 1-2.503 2.489A2.495 2.495 0 0 1 4 5.488 2.495 2.495 0 0 1 6.501 3a2.496 2.496 0 0 1 2.503 2.489zm10.951 0a2.495 2.495 0 0 1-2.502 2.489 2.495 2.495 0 0 1-2.501-2.49A2.495 2.495 0 0 1 17.452 3a2.496 2.496 0 0 1 2.503 2.489zM9.992 9.016H4.049V21h5.943v-1.955H7.986v-8.046h2.006V9.016zm4.06 0H20V21h-5.948v-1.955h1.977v-8.046h-1.977V9.016z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-controls\" viewBox=\"0 0 24 24\"><path d=\"M12.494 6H22.5a.5.5 0 0 0 0-1H12.494a.5.5 0 0 0 0 1M1.5 13h11.994v1.482c0 .29.235.526.525.526h2.947c.29 0 .526-.236.526-.526v-3.956a.526.526 0 0 0-.526-.526h-2.947a.525.525 0 0 0-.525.526V12H1.5a.5.5 0 0 0 0 1m21 5.998H12.494a.5.5 0 0 0 0 1H22.5a.5.5 0 0 0 0-1M1.5 6h2.998v1.48c0 .29.235.526.526.526H7.97a.526.526 0 0 0 .526-.526V3.526A.525.525 0 0 0 7.97 3H5.024a.525.525 0 0 0-.526.526V5H1.5a.5.5 0 0 0 0 1m20.99 6h-2.003a.5.5 0 0 0 0 1h2.003a.5.5 0 0 0 0-1M7.97 17H5.023a.525.525 0 0 0-.525.526V19H1.5a.5.5 0 1 0 0 1h2.998v1.47c0 .29.235.526.525.526H7.97c.29 0 .526-.236.526-.526v-3.944A.526.526 0 0 0 7.97 17\"/></symbol><symbol id=\"wds-icons-cross-tiny\" viewBox=\"0 0 12 12\"><path d=\"M6 4.554L2.746 1.3C2.346.9 1.7.9 1.3 1.3c-.4.4-.4 1.046 0 1.446L4.554 6 1.3 9.254c-.4.4-.4 1.047 0 1.446.4.4 1.046.4 1.446 0L6 7.446 9.254 10.7c.4.4 1.047.4 1.446 0 .4-.4.4-1.046 0-1.446L7.446 6 10.7 2.746c.4-.4.4-1.047 0-1.446-.4-.4-1.046-.4-1.446 0L6 4.554z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-cross\" viewBox=\"0 0 24 24\"><path d=\"M19.707 4.293a.999.999 0 0 0-1.414 0L12 10.586 5.707 4.293a.999.999 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a.999.999 0 1 0 1.414 1.414L12 13.414l6.293 6.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414 12l6.293-6.293a.999.999 0 0 0 0-1.414\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-dashboard-small\" viewBox=\"0 0 18 18\"><path d=\"M9 3a6 6 0 0 1 6 6c0 .342-.035.676-.09 1.003l-4.928.01L8.428 6.13a.999.999 0 1 0-1.856.742l1.258 3.145-4.736.01A5.998 5.998 0 0 1 3 9a6 6 0 0 1 6-6m0-2a8 8 0 1 0 0 16A8 8 0 0 0 9 1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-document\" viewBox=\"0 0 24 24\"><path d=\"M11 10h2V8h-2v2zm-1 2h4a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1zm6-2a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zm0-3a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1zM9 17a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1zm0-3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1zm11 5.363a.646.646 0 0 1-.637.637H7.903c.063-.202.097-.415.097-.637V4h12v15.363zM5 20c-.471 0-1-.415-1-.637V14h2v5.363c0 .222-.529.637-1 .637zM21 2H7a1 1 0 0 0-1 1v9H3a1 1 0 0 0-1 1v6.363C2 20.872 3.584 22 5 22h14.363A2.64 2.64 0 0 0 22 19.363V3a1 1 0 0 0-1-1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-download-small\" viewBox=\"0 0 18 18\"><path d=\"M16 11a1 1 0 0 0-1 1v3H3v-3a1 1 0 1 0-2 0v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1\"/><path d=\"M8.293 13.707a.997.997 0 0 0 1.414 0l4.5-4.5a1 1 0 1 0-1.414-1.414L10 10.586V2a1 1 0 1 0-2 0v8.586L5.207 7.793a1 1 0 1 0-1.414 1.414l4.5 4.5z\"/></symbol><symbol id=\"wds-icons-download-tiny\" viewBox=\"0 0 12 12\"><path d=\"M11 10H1a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2m-5.707-.793a.997.997 0 0 0 1.414 0l3-3a1 1 0 1 0-1.414-1.414L7 6.086V1a1 1 0 1 0-2 0v5.086L3.707 4.793a1 1 0 1 0-1.414 1.414l3 3z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-download\" viewBox=\"0 0 24 24\"><path d=\"M21 15a1 1 0 0 0-1 1v4H4v-4a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1\"/><path d=\"M11.293 17.707a.997.997 0 0 0 1.414 0l6-6a1 1 0 1 0-1.414-1.414L13 14.586V3a1 1 0 1 0-2 0v11.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l6 6z\"/></symbol><symbol id=\"wds-icons-dropdown-tiny\" viewBox=\"0 0 12 12\"><path d=\"M6 9l4-5H2\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-dropdown\" viewBox=\"0 0 24 24\"><path d=\"M7 8h10l-5 6z\"/></symbol><symbol id=\"wds-icons-embed\" viewBox=\"0 0 24 24\"><path d=\"M6.792 8.793L3.535 12.05l3.257 3.258a1.05 1.05 0 0 1-1.484 1.485l-4-4a1.05 1.05 0 0 1 0-1.485l4-4a1.049 1.049 0 1 1 1.484 1.485zm10.516 6.515l3.257-3.258-3.257-3.257a1.05 1.05 0 0 1 1.484-1.485l4 4c.41.41.41 1.075 0 1.485l-4 4a1.049 1.049 0 1 1-1.484-1.485zm-6.24 4.997a1.05 1.05 0 1 1-2.037-.512l4-16a1.05 1.05 0 1 1 2.041.51l-4 16z\"/></symbol><symbol id=\"wds-icons-error-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M10.414 9l1.417-1.416a1.003 1.003 0 0 0-.002-1.412.996.996 0 0 0-1.412-.003L9 7.585 7.584 6.17a1.003 1.003 0 0 0-1.412.002.996.996 0 0 0-.003 1.412L7.585 9 6.17 10.416a1.003 1.003 0 0 0 .002 1.412.996.996 0 0 0 1.412.003L9 10.415l1.416 1.417a1.003 1.003 0 0 0 1.412-.002.996.996 0 0 0 .003-1.412L10.415 9zm1.9-8L17 5.686v6.628L12.314 17H5.686L1 12.314V5.686L5.686 1h6.628z\"/></symbol><symbol id=\"wds-icons-error\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M14.15 12l2.556-2.555a1 1 0 0 0 .007-1.414l-.74-.74a1.002 1.002 0 0 0-1.416.006L12 9.852 9.446 7.296A1 1 0 0 0 8.03 7.29l-.74.74a1.002 1.002 0 0 0 .006 1.415L9.852 12l-2.556 2.556a1 1 0 0 0-.007 1.415l.74.742a1.002 1.002 0 0 0 1.415-.007L12 14.15l2.556 2.556a1 1 0 0 0 1.415.007l.742-.74a1.002 1.002 0 0 0-.007-1.416L14.15 12zm2.406-11L23 7.444v9.112L16.556 23H7.444L1 16.556V7.444L7.444 1h9.112z\"/></symbol><symbol id=\"wds-icons-explore-tiny\" viewBox=\"0 0 12 12\"><path d=\"M10.5 8.5a5.132 5.132 0 0 0-1.875-.357c-.675 0-1.35.143-1.875.357V3.143c0-.214.675-.714 1.875-.714s1.875.5 1.875.714V8.5zm-7.125-.357c-.675 0-1.35.143-1.875.357V3.143c0-.214.675-.714 1.875-.714s1.875.5 1.875.714V8.5a5.132 5.132 0 0 0-1.875-.357zM8.625 1C7.575 1 6.6 1.286 6 1.786 5.4 1.286 4.425 1 3.375 1 1.425 1 0 1.929 0 3.143v7.143c0 .428.3.714.75.714s.75-.286.75-.714c0-.215.675-.715 1.875-.715s1.875.5 1.875.715c0 .428.3.714.75.714s.75-.286.75-.714c0-.215.675-.715 1.875-.715s1.875.5 1.875.715c0 .428.3.714.75.714s.75-.286.75-.714V3.143C12 1.929 10.575 1 8.625 1z\"/></symbol><symbol id=\"wds-icons-eye-crossed-small\" viewBox=\"0 0 18 18\"><path d=\"M15.6 6.6l-8.2 8.2c.5.1 1.1.2 1.6.2 3.6 0 6.4-3.1 7.6-4.9.5-.7.5-1.6 0-2.3-.2-.3-.6-.7-1-1.2zm-.3-5.3L12.6 4c-1.1-.6-2.3-1-3.6-1-3.6 0-6.4 3.1-7.6 4.9-.5.7-.5 1.6 0 2.2.5.8 1.4 1.8 2.4 2.7l-2.5 2.5c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l14-14c.4-.4.4-1 0-1.4-.4-.4-1-.4-1.4 0zm-9 9C6.1 9.9 6 9.5 6 9c0-1.7 1.3-3 3-3 .5 0 .9.1 1.3.3l-4 4z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-eye-crossed\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M20.201 8.041l-4.228 4.228a3.981 3.981 0 0 1-3.703 3.703l-3.439 3.439A9.108 9.108 0 0 0 12 20c6.473 0 10.69-7.195 10.866-7.501a.996.996 0 0 0 .002-.995c-.081-.142-1.032-1.764-2.667-3.463zM5.647 17.624c.97-1.015 2.039-2.115 3.153-3.249A3.96 3.96 0 0 1 8 12c0-2.206 1.794-4 4-4a3.96 3.96 0 0 1 2.375.8 336.506 336.506 0 0 1 3.122-3.031C15.941 4.748 14.092 4 12 4 5.461 4 1.304 11.2 1.13 11.507a1 1 0 0 0 .002.989c.108.189 1.748 3.002 4.515 5.128z\"/><path d=\"M3 22a.999.999 0 0 1-.707-1.707l18-18a.999.999 0 1 1 1.414 1.414l-18 18A.997.997 0 0 1 3 22z\"/></g></symbol><symbol id=\"wds-icons-eye-small\" viewBox=\"0 0 18 18\"><path d=\"M9 6c1.705 0 3.009 1.3 3.009 3s-1.304 3-3.01 3c-1.704 0-3.008-1.3-3.008-3S7.295 6 9 6m0 9c3.61 0 6.42-3.1 7.624-4.9.5-.7.5-1.6 0-2.3C15.42 6.1 12.61 3 9 3 5.389 3 2.58 6.1 1.376 7.9c-.501.7-.501 1.6 0 2.2C2.58 11.9 5.389 15 9 15\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-eye\" viewBox=\"0 0 24 24\"><path d=\"M22.95 11.5c-.2-.3-4.4-7.5-10.9-7.5s-10.7 7.2-10.9 7.5c-.2.3-.2.7 0 1 .2.3 4.4 7.5 10.9 7.5s10.7-7.2 10.9-7.5c.1-.3.1-.7 0-1zM12.05 16c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-facebook\" viewBox=\"0 0 24 24\"><path d=\"M16.762 5.432h-1.786c-1.428 0-1.666.71-1.666 1.657v2.248h3.452l-.357 3.55h-2.857V22H9.976v-9.112H7v-3.55h2.976V6.733C9.976 3.775 11.762 2 14.381 2c1.19 0 2.262.118 2.619.118v3.314h-.238z\"/></symbol><symbol id=\"wds-icons-fandom-heart-small\" viewBox=\"0 0 18 18\"><path d=\"M12.77.13L9.44 3.5a.66.66 0 0 1-.94 0L5.16.17a.44.44 0 0 0-.63 0L.24 4.4a.77.77 0 0 0-.24.55V9a.77.77 0 0 0 .23.55l8.37 8.37a.44.44 0 0 0 .63 0L17.6 9.5a.77.77 0 0 0 .23-.5V5a.77.77 0 0 0-.22-.54L13.4.13a.44.44 0 0 0-.63 0zm-2.66 4.94a.22.22 0 0 1 0-.3L12 2.88a1.65 1.65 0 0 1 1.41-.47 1.73 1.73 0 0 1 1 .51l1.91 1.91a.22.22 0 0 1 0 .3L13.39 8a.22.22 0 0 1-.3 0zm1 5.24l-1.8 1.8a.22.22 0 0 1-.3 0l-6-6A1.66 1.66 0 0 1 3 3.73l1.8-1.8a.22.22 0 0 1 .3 0l6 6a1.66 1.66 0 0 1 .01 2.38zm5.37-3.11v1.29a.57.57 0 0 1-.16.4l-6.89 7a.51.51 0 0 1-.38.17.54.54 0 0 1-.4-.17l-.49-.46a.22.22 0 0 1 0-.31l8-8a.22.22 0 0 1 .33.09zm-8.63 6a.75.75 0 0 1-.2.54l-.39.36a.33.33 0 0 1-.45 0L1.56 8.92a.69.69 0 0 1-.21-.49v-1A.39.39 0 0 1 2 7.18l5.57 5.5a.81.81 0 0 1 .28.54z\"/></symbol><symbol id=\"wds-icons-fandom-heart\" viewBox=\"0 0 14 15\"><path fill-rule=\"evenodd\" d=\"M12.945 6.661c0 .117-.047.23-.13.314l-5.414 5.483a.4.4 0 0 1-.298.132.428.428 0 0 1-.311-.133l-.382-.362a.169.169 0 0 1-.004-.242l6.249-6.315a.17.17 0 0 1 .29.118v1.005zM6 10.796l-.31.28a.257.257 0 0 1-.353-.009l-4.12-4.064a.545.545 0 0 1-.163-.388v-.759a.31.31 0 0 1 .526-.219l4.374 4.315c.076.076.204.232.204.421a.59.59 0 0 1-.158.423zM2.318 2.93l1.417-1.416a.17.17 0 0 1 .24 0l4.747 4.741c.508.508.508 1.33 0 1.838L7.305 9.51a.17.17 0 0 1-.24 0L2.32 4.768a1.289 1.289 0 0 1-.38-.919c0-.348.135-.674.38-.918zm5.617.81l1.482-1.479a1.3 1.3 0 0 1 1.107-.366c.292.04.557.191.765.4l1.5 1.497a.169.169 0 0 1 0 .24L10.51 6.31a.17.17 0 0 1-.24 0L7.935 3.98a.169.169 0 0 1 0-.239zm5.89-.28L10.523.103a.35.35 0 0 0-.497 0l-2.62 2.641a.52.52 0 0 1-.736.002L4.05.133A.35.35 0 0 0 3.555.13L.181 3.452A.605.605 0 0 0 0 3.884v3.145c0 .16.064.315.178.429l6.578 6.566a.35.35 0 0 0 .494 0l6.572-6.566A.606.606 0 0 0 14 7.029V3.885a.606.606 0 0 0-.174-.425z\"/></symbol><symbol id=\"wds-icons-flag-small\" viewBox=\"0 0 18 18\"><path d=\"M8.1 16.5l-7-13C.9 3 1 2.4 1.5 2.1c.5-.2 1.1-.1 1.4.4l7 13c.2.5.1 1.1-.4 1.4-.5.2-1.1.1-1.4-.4zM17 6.7c-2.8 2.5-6.2-.6-8.3 3.1L5.5 4.1C7.6.4 11 3.5 13.7 1L17 6.7z\"/></symbol><symbol id=\"wds-icons-flag\" viewBox=\"0 0 24 24\"><path d=\"M1.487 5.166a.973.973 0 0 0-.356 1.33l9.247 16.017a.972.972 0 0 0 1.33.357.973.973 0 0 0 .356-1.33L2.817 5.522a.973.973 0 0 0-1.33-.356m9.481 9.39c1.172-2.065 2.62-2.225 4.537-2.225l.977.004c1.776 0 3.825-.138 5.676-1.796.352-.316.435-.835.199-1.245l-4.5-7.794a1.003 1.003 0 0 0-1.542-.236c-1.31 1.2-2.763 1.3-4.26 1.3l-1.146-.007c-1.984 0-4.218.223-5.878 2.728l5.567 9.643a1 1 0 0 0 .37-.372\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-fullscreen-off-small\" viewBox=\"0 0 18 18\"><path d=\"M3.751 2H6v5H1V4.75h2.751zm10.498 0H12v5h5V4.75h-2.751zM3.751 16H6v-5H1v2.25h2.751zm10.498 0H12v-5h5v2.25h-2.751z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-fullscreen-off\" viewBox=\"0 0 24 24\"><path d=\"M5.5 9H8V2H5v4H1v3h4.5zm13 0H16V2h3v4h4v3h-4.5zm-13 6H8v7H5v-4H1v-3h4.5zm13 0H16v7h3v-4h4v-3h-4.5z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-fullscreen-small\" viewBox=\"0 0 18 18\"><path d=\"M3.249 7H1V2h5v2.25H3.249zm11.502 0H17V2h-5v2.25h2.751zM3.249 11H1v5h5v-2.25H3.249zm11.502 0H17v5h-5v-2.25h2.751z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-fullscreen\" viewBox=\"0 0 24 24\"><path d=\"M21.5 22H23v-7h-3v4h-4v3h5.5zM23 3.5V9h-3V5h-4V2h7v1.5zm-22 17V15h3v4h4v3H1v-1.5zM2.5 2H1v7h3V5h4V2H2.5z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-gear-small\" viewBox=\"0 0 18 18\"><path d=\"M9 7.09a1.909 1.909 0 1 1 0 3.819A1.909 1.909 0 0 1 9 7.09m-4.702-.03a1.07 1.07 0 0 1-.99.667h-.672A.637.637 0 0 0 2 8.364v1.272c0 .352.285.637.636.637h.672c.436 0 .824.264.99.667l.006.013c.167.403.08.864-.229 1.172L3.6 12.6a.636.636 0 0 0 0 .9l.9.9a.636.636 0 0 0 .9 0l.475-.475a1.072 1.072 0 0 1 1.185-.223c.403.166.667.554.667.99v.672c0 .35.285.636.637.636h1.272a.637.637 0 0 0 .637-.636v-.672c0-.436.264-.824.667-.99l.013-.006a1.07 1.07 0 0 1 1.172.229l.475.475a.636.636 0 0 0 .9 0l.9-.9a.636.636 0 0 0 0-.9l-.475-.475a1.072 1.072 0 0 1-.229-1.172l.006-.013a1.07 1.07 0 0 1 .99-.667h.672A.637.637 0 0 0 16 9.636V8.364a.637.637 0 0 0-.636-.637h-.672a1.07 1.07 0 0 1-.996-.68 1.072 1.072 0 0 1 .229-1.172L14.4 5.4a.636.636 0 0 0 0-.9l-.9-.9a.636.636 0 0 0-.9 0l-.475.475c-.308.308-.77.396-1.172.229l-.013-.006a1.07 1.07 0 0 1-.667-.99v-.672A.637.637 0 0 0 9.636 2H8.364a.637.637 0 0 0-.637.636v.672a1.07 1.07 0 0 1-.68.996 1.07 1.07 0 0 1-1.172-.229L5.4 3.6a.636.636 0 0 0-.9 0l-.9.9a.636.636 0 0 0 0 .9l.475.475a1.072 1.072 0 0 1 .223 1.185\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-gear\" viewBox=\"0 0 24 24\"><path d=\"M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6m-7.389-.049A1.683 1.683 0 0 1 3.055 10H2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1.055a1.683 1.683 0 0 1 1.565 1.069 1.684 1.684 0 0 1-.359 1.842l-.746.746a.999.999 0 0 0 0 1.414l1.414 1.414a.999.999 0 0 0 1.414 0l.746-.746a1.684 1.684 0 0 1 1.862-.35c.633.26 1.049.871 1.049 1.556V22a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.055a1.683 1.683 0 0 1 1.069-1.565 1.684 1.684 0 0 1 1.842.359l.746.746a.999.999 0 0 0 1.414 0l1.414-1.414a.999.999 0 0 0 0-1.414l-.746-.746a1.684 1.684 0 0 1-.35-1.862A1.683 1.683 0 0 1 20.945 14H22a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1.055a1.683 1.683 0 0 1-1.565-1.069 1.684 1.684 0 0 1 .359-1.842l.746-.746a.999.999 0 0 0 0-1.414l-1.414-1.414a.999.999 0 0 0-1.414 0l-.746.746a1.684 1.684 0 0 1-1.862.35A1.683 1.683 0 0 1 14 3.055V2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v1.055A1.683 1.683 0 0 1 8.931 4.62a1.684 1.684 0 0 1-1.842-.359l-.746-.746a.999.999 0 0 0-1.414 0L3.515 4.929a.999.999 0 0 0 0 1.414l.746.746a1.684 1.684 0 0 1 .35 1.862\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-gift\" viewBox=\"0 0 24 24\"><path d=\"M23 4h-4.2c.1-.3.2-.6.2-1 0-1.7-1.3-3-3-3-2 0-3.2 1.3-4 2.5C11.2 1.3 10 0 8 0 6.3 0 5 1.3 5 3c0 .4.1.7.2 1H1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1h22c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1zm-7-2c.6 0 1 .4 1 1s-.4 1-1 1h-2.5c.4-.9 1.3-2 2.5-2zM7 3c0-.6.4-1 1-1 1.2 0 2.1 1.1 2.5 2H8c-.6 0-1-.4-1-1zm4 7H3c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h8V10zm10 0h-8v14h8c.6 0 1-.4 1-1V11c0-.6-.4-1-1-1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-googleplus\" viewBox=\"0 0 24 24\"><path d=\"M21.146 11.163V8.564h-1.844v2.6h-2.655v1.856h2.655v2.673h1.844V13.02h2.58v-1.857h-2.58zm-13.422-.148v2.97s2.862-.004 4.027-.004c-.631 1.926-1.612 2.974-4.027 2.974-2.444 0-4.35-1.994-4.35-4.455 0-2.46 1.906-4.455 4.35-4.455 1.292 0 2.127.457 2.892 1.094.613-.617.561-.705 2.12-2.187A7.393 7.393 0 0 0 7.724 5C3.611 5 .276 8.358.276 12.5c0 4.142 3.335 7.5 7.448 7.5 6.149 0 7.652-5.391 7.153-8.985H7.724z\"/></symbol><symbol id=\"wds-icons-grid-small\" viewBox=\"0 0 18 18\"><rect width=\"4\" height=\"4\" rx=\"1\" x=\"1\" y=\"1\"/><rect width=\"4\" height=\"4\" x=\"7\" rx=\"1\" y=\"1\"/><rect width=\"4\" height=\"4\" x=\"13\" rx=\"1\" y=\"1\"/><rect width=\"4\" height=\"4\" y=\"7\" rx=\"1\" x=\"1\"/><rect width=\"4\" height=\"4\" x=\"7\" y=\"7\" rx=\"1\"/><rect width=\"4\" height=\"4\" x=\"13\" y=\"7\" rx=\"1\"/><rect width=\"4\" height=\"4\" y=\"13\" rx=\"1\" x=\"1\"/><rect width=\"4\" height=\"4\" x=\"7\" y=\"13\" rx=\"1\"/><rect width=\"4\" height=\"4\" x=\"13\" y=\"13\" rx=\"1\"/></symbol><symbol id=\"wds-icons-grid-tiny\" viewBox=\"0 0 12 12\"><rect width=\"5\" height=\"5\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"7\" rx=\"1\"/><rect width=\"5\" height=\"5\" y=\"7\" rx=\"1\"/><rect width=\"5\" height=\"5\" x=\"7\" y=\"7\" rx=\"1\"/></symbol><symbol id=\"wds-icons-grid\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M22.234 18h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467a.766.766 0 0 0 .766-.766v-3.468a.766.766 0 0 0-.766-.766m-8.5 0h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467a.766.766 0 0 0 .766-.766v-3.468a.766.766 0 0 0-.766-.766m-8.5 0H1.767a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467A.766.766 0 0 0 6 22.234v-3.468A.766.766 0 0 0 5.234 18m17-8.5h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467a.766.766 0 0 0 .766-.766v-3.468a.766.766 0 0 0-.766-.766m-8.5 0h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467a.766.766 0 0 0 .766-.766v-3.468a.766.766 0 0 0-.766-.766m-8.5 0H1.767a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467A.766.766 0 0 0 6 13.734v-3.468a.766.766 0 0 0-.766-.766m17-8.5h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467A.766.766 0 0 0 23 5.234V1.766A.766.766 0 0 0 22.234 1m-8.5 0h-3.467a.766.766 0 0 0-.767.766v3.468c0 .423.343.766.767.766h3.467a.766.766 0 0 0 .766-.766V1.766A.766.766 0 0 0 13.734 1M6 1.766v3.468A.766.766 0 0 1 5.234 6H1.767A.766.766 0 0 1 1 5.234V1.766C1 1.343 1.343 1 1.767 1h3.467c.423 0 .766.343.766.766\"/></symbol><symbol id=\"wds-icons-help\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M6.507 2.193L5.093 3.607l4.4 4.4 1.414-1.414zm.086 8.714l1.414-1.414-4.4-4.4-1.414 1.414zm15.214-4.4l-1.414-1.414-4.4 4.4 1.414 1.414zm-8.714.086l1.414 1.414 4.4-4.4-1.414-1.414zm4.4 15.214l1.414-1.414-4.4-4.4-1.414 1.414zm-.086-8.714l-1.414 1.414 4.4 4.4 1.414-1.414zm-15.214 4.4l1.414 1.414 4.4-4.4-1.414-1.414zm8.714-.086l-1.414-1.414-4.4 4.4 1.414 1.414z\"/><path d=\"M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z\"/><path d=\"M18 12a6 6 0 1 0-12 0 6 6 0 0 0 12 0zM8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z\"/></g></symbol><symbol id=\"wds-icons-hourglass\" viewBox=\"0 0 24 24\"><path d=\"M21.6 2c.2 0 .4-.2.4-.4V.4c0-.2-.2-.4-.4-.4H2.4c-.2 0-.4.2-.4.4v1.2c0 .2.2.4.4.4H4c0 4.1 1.4 7.8 3.6 10C5.4 14.2 4 17.9 4 22H2.4c-.2 0-.4.2-.4.4v1.1c0 .3.2.5.4.5h19.1c.2 0 .4-.2.4-.4v-1.1c0-.2-.2-.4-.4-.4H20c0-4.1-1.4-7.8-3.6-10C18.6 9.8 20 6.1 20 2h1.6zM18 22H6c0-1.4.2-2.8.5-4h10.9c.4 1.2.6 2.6.6 4zm-3.7-10.8l-1.1.8 1.2.8c1 .7 1.8 1.8 2.4 3.2H7.3c.6-1.4 1.4-2.5 2.4-3.2l1.2-.8-1.2-.8C7.5 9.6 6 5.9 6 2h12c0 3.9-1.5 7.6-3.7 9.2z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-house-small\" viewBox=\"0 0 18 18\"><path d=\"M11.955 16.925h2c.6 0 1-.4 1-1v-7h1c.3 0 .6-.1.8-.3.4-.4.3-1-.1-1.4l-7-6c-.4-.3-.9-.3-1.3 0l-7 6c-.4.4-.5 1-.1 1.4.1.2.4.3.7.3h1v7c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h4v3c0 .6.4 1 1 1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-house\" viewBox=\"0 0 24 24\"><path d=\"M22.664 10.126L12.662 1.25a.996.996 0 0 0-1.327.005l-10.003 9a.998.998 0 0 0-.264 1.104c.148.386.518.64.93.64h.005l1.989-.012V22c0 .553.446 1 .997 1H7.98a.998.998 0 0 0 .997-1v-4.5h5.983V22c0 .553.446 1 .997 1h2.992a.998.998 0 0 0 .997-1V11.888l2.062-.013a1 1 0 0 0 .655-1.75\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-image-add\" viewBox=\"0 0 24 24\"><path d=\"M9.5 5.75a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 9.5 5.75\"/><path d=\"M16.688 20a3.316 3.316 0 0 1-3.314-3.313 3.316 3.316 0 0 1 3.313-3.312A3.316 3.316 0 0 1 20 16.687 3.316 3.316 0 0 1 16.687 20zm-6.558-7.735l-3.378-2.027a1 1 0 0 0-1.22.15L4 11.919V4h15v6.036l-3.303-2.202a1 1 0 0 0-1.26.125l-4.307 4.306zM21 13.616V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h10.623c.867.62 1.917 1 3.063 1A5.318 5.318 0 0 0 22 16.687a5.258 5.258 0 0 0-1-3.071z\"/><path d=\"M18.413 16.188h-1.225v-1.225a.5.5 0 0 0-1 0v1.225h-1.225a.5.5 0 1 0 0 1h1.225v1.225a.5.5 0 0 0 1 0v-1.226h1.225a.5.5 0 0 0 0-1\"/></symbol><symbol id=\"wds-icons-image-remove\" viewBox=\"0 0 24 24\"><path d=\"M9.5 5.75a1.75 1.75 0 1 0 .001 3.501A1.75 1.75 0 0 0 9.5 5.75\"/><path d=\"M16.688 20a3.316 3.316 0 0 1-3.314-3.312 3.316 3.316 0 0 1 3.313-3.313A3.316 3.316 0 0 1 20 16.688 3.316 3.316 0 0 1 16.687 20zm-6.558-7.735l-3.378-2.027a1 1 0 0 0-1.22.15L4 11.919V4h15v6.036l-3.303-2.202a1 1 0 0 0-1.26.125l-4.307 4.306zM21 13.616V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h10.623c.867.62 1.917 1 3.063 1A5.318 5.318 0 0 0 22 16.688a5.258 5.258 0 0 0-1-3.072z\"/><path d=\"M18.45 17.125H15a.5.5 0 1 1 0-1h3.45a.5.5 0 0 1 0 1\"/></symbol><symbol id=\"wds-icons-image-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M15 3v6.966l-2.381-1.984a.642.642 0 0 0-.898.076l-3.446 4.021-2.724-2.18a.643.643 0 0 0-.802 0L3 11.298V3h12zm1-2H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z\"/><path d=\"M7.4 8h.2C8.37 8 9 7.37 9 6.6v-.2C9 5.63 8.37 5 7.6 5h-.2C6.63 5 6 5.63 6 6.4v.2C6 7.37 6.63 8 7.4 8\"/></g></symbol><symbol id=\"wds-icons-image-tiny\" viewBox=\"0 0 12 12\"><g fill-rule=\"evenodd\"><path d=\"M4 5a1 1 0 1 0 0-2 1 1 0 0 0 0 2\"/><path d=\"M1 1h10v6.023L8.805 5.242a.503.503 0 0 0-.706.059L5.387 8.465 3.243 6.75a.507.507 0 0 0-.631 0L1 8.04V1zm10.5-1H.5a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5z\"/></g></symbol><symbol id=\"wds-icons-image\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M3 4h18v8.737l-3.83-3.191a.916.916 0 0 0-1.282.108l-4.924 5.744-3.891-3.114a.92.92 0 0 0-1.146 0L3 14.626V4zm19-2H2a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z\"/><path d=\"M9 10c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2\"/></g></symbol><symbol id=\"wds-icons-information\" viewBox=\"0 0 24 24\"><path d=\"M14 18h-4a1 1 0 1 1 0-2h1v-4h-1a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1v5h1a1 1 0 1 1 0 2zM11 6a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0V6zm1-6C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-instagram\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M12 2.162c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.014 7.052.072c-1.95.089-3.663.567-5.038 1.942C.639 3.389.161 5.102.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.089 1.95.567 3.663 1.942 5.038 1.375 1.375 3.088 1.853 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.95-.089 3.663-.567 5.038-1.942 1.375-1.375 1.853-3.088 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.089-1.95-.567-3.663-1.942-5.038C20.611.639 18.898.161 16.948.072 15.668.014 15.259 0 12 0z\"/><path d=\"M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z\"/><circle cx=\"18.406\" cy=\"5.594\" r=\"1.44\"/></g></symbol><symbol id=\"wds-icons-italics-small\" viewBox=\"0 0 18 18\"><path d=\"M13 3V1H7v2h1.27a.5.5 0 0 1 .496.57l-1.51 10.571a1 1 0 0 1-.99.859H5v2h6v-2H9.73a.5.5 0 0 1-.496-.57l1.51-10.571a1 1 0 0 1 .99-.859H13z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-italics\" viewBox=\"0 0 24 24\"><path d=\"M6 24l.166-1.625 2.42-.232c.464-.032.53-.165.596-.663l2.652-18.96c.066-.498.034-.63-.43-.664l-2.32-.232L9.282 0h8.885l-.2 1.624-2.518.265c-.498.067-.532.133-.598.63l-2.685 18.929c-.066.53-.066.596.43.663l2.454.264L14.884 24H6z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-line\" viewBox=\"0 0 24 24\"><path d=\"M21.727 10.908c0-4.37-4.428-7.925-9.87-7.925-5.441 0-9.869 3.555-9.869 7.925 0 3.918 3.511 7.2 8.254 7.82.321.068.759.21.87.481.1.247.065.633.031.883l-.14.836c-.043.247-.199.966.855.527 1.053-.44 5.683-3.312 7.753-5.67 1.43-1.553 2.116-3.128 2.116-4.877zm-13.732 2.6H6.033a.515.515 0 0 1-.517-.512V9.115c0-.282.232-.512.517-.512.286 0 .518.23.518.512v3.369h1.444c.285 0 .517.23.517.512a.515.515 0 0 1-.517.512zm2.028-.512a.515.515 0 0 1-.518.512.515.515 0 0 1-.517-.512V9.115c0-.282.232-.512.517-.512.286 0 .518.23.518.512v3.88zm4.72 0a.51.51 0 0 1-.518.512.523.523 0 0 1-.414-.205l-2.01-2.708v2.4a.515.515 0 0 1-.517.513.515.515 0 0 1-.517-.512V9.115a.512.512 0 0 1 .518-.512.52.52 0 0 1 .413.205l2.01 2.708V9.115c0-.282.232-.512.518-.512.285 0 .517.23.517.512v3.88zm3.173-2.453c.285 0 .518.23.518.513a.516.516 0 0 1-.518.512h-1.443v.916h1.443c.285 0 .518.23.518.512a.516.516 0 0 1-.518.512h-1.961a.516.516 0 0 1-.517-.512V9.115c0-.282.232-.512.517-.512h1.961c.285 0 .518.23.518.512a.515.515 0 0 1-.518.512h-1.443v.916h1.443z\"/></symbol><symbol id=\"wds-icons-link\" viewBox=\"0 0 24 24\"><path d=\"M5 17h5c2.757 0 5-2.243 5-5a1 1 0 1 0-2 0c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3s1.346-3 3-3h2a1 1 0 1 0 0-2H5c-2.757 0-5 2.243-5 5s2.243 5 5 5zM19 7h-5c-2.757 0-5 2.243-5 5a1 1 0 1 0 2 0c0-1.654 1.346-3 3-3h5c1.654 0 3 1.346 3 3s-1.346 3-3 3h-2a1 1 0 1 0 0 2h2c2.757 0 5-2.243 5-5s-2.243-5-5-5z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-linkedin\" viewBox=\"0 0 24 24\"><path d=\"M.351 24h4.982V7.93H.351zM18.035 7.509c-2.386 0-4.07 1.333-4.702 2.596h-.07V7.93H8.491V24h4.983v-7.93c0-2.105.421-4.14 3.017-4.14 2.597 0 2.597 2.386 2.597 4.28V24H24v-8.842c0-4.351-.912-7.65-5.965-7.65M2.877 0A2.845 2.845 0 0 0 0 2.877a2.845 2.845 0 0 0 2.877 2.877c1.614 0 2.877-1.333 2.877-2.877A2.845 2.845 0 0 0 2.877 0\"/></symbol><symbol id=\"wds-icons-loading\" viewBox=\"0 0 24 24\"><path d=\"M15.01 3.516A9 9 0 1 0 12 21h.36v-1.152H12A7.848 7.848 0 1 1 19.848 12v.36H21V12a9.003 9.003 0 0 0-5.99-8.484zm-.24.678A8.283 8.283 0 0 1 20.28 12l.36-.36h-.432l.36.36a8.57 8.57 0 0 0-5.702-8.077A8.568 8.568 0 1 0 12 20.568l-.36-.36v.432l.36-.36a8.28 8.28 0 1 1 2.77-16.086z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-lock-small\" viewBox=\"0 0 18 18\"><path d=\"M11 6H7V5c0-1.1.9-2 2-2s2 .9 2 2v1zm-1 6.7V14H8v-1.3c-.6-.3-1-1-1-1.7 0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7zM9 1C6.8 1 5 2.8 5 5v1H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1h-2V5c0-2.2-1.8-4-4-4z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-lock\" viewBox=\"0 0 24 24\"><path d=\"M16 8H8V6c0-2.206 1.794-4 4-4s4 1.794 4 4v2zm-3 9.816V19a1 1 0 0 1-2 0v-1.184A2.996 2.996 0 0 1 9 15c0-1.654 1.346-3 3-3s3 1.346 3 3a2.996 2.996 0 0 1-2 2.816zM12 0C8.691 0 6 2.691 6 6v2H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-2V6c0-3.309-2.691-6-6-6z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-magnifying-glass-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M16.984 16.025l-4.03-4.043a.713.713 0 0 0-1.011 0 .72.72 0 0 0 0 1.015l4.03 4.043c.279.28.732.28 1.011 0a.72.72 0 0 0 0-1.015z\"/><path d=\"M2.178 7.924c0-3.17 2.56-5.74 5.72-5.74 3.16 0 5.72 2.57 5.72 5.74 0 3.17-2.56 5.739-5.72 5.739-3.16 0-5.72-2.57-5.72-5.74zm-1.43 0c0 3.962 3.2 7.174 7.15 7.174s7.15-3.212 7.15-7.174S11.848.75 7.898.75.748 3.962.748 7.924z\"/></g></symbol><symbol id=\"wds-icons-magnifying-glass-tiny\" viewBox=\"0 0 12 12\"><path fill-rule=\"evenodd\" d=\"M1.5 5c0-1.93 1.57-3.5 3.5-3.5S8.5 3.07 8.5 5 6.93 8.5 5 8.5 1.5 6.93 1.5 5m10.28 5.72L9.014 7.953C9.626 7.123 10 6.108 10 5c0-2.757-2.243-5-5-5S0 2.243 0 5s2.243 5 5 5a4.95 4.95 0 0 0 2.953-.987l2.767 2.767c.146.147.338.22.53.22a.749.749 0 0 0 .53-1.28\"/></symbol><symbol id=\"wds-icons-magnifying-glass\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M21.747 20.524l-4.872-4.871a.864.864 0 1 0-1.222 1.222l4.871 4.872a.864.864 0 1 0 1.223-1.223z\"/><path d=\"M3.848 10.763a6.915 6.915 0 0 1 6.915-6.915 6.915 6.915 0 0 1 6.915 6.915 6.915 6.915 0 0 1-6.915 6.915 6.915 6.915 0 0 1-6.915-6.915zm-1.729 0a8.643 8.643 0 0 0 8.644 8.644 8.643 8.643 0 0 0 8.644-8.644 8.643 8.643 0 0 0-8.644-8.644 8.643 8.643 0 0 0-8.644 8.644z\"/></g></symbol><symbol id=\"wds-icons-mail\" viewBox=\"0 0 24 24\"><path d=\"M23 2H1a1 1 0 0 0-1 1v3a1 1 0 0 0 .521.878l11 6a1.003 1.003 0 0 0 .958 0l11-6A1 1 0 0 0 24 6V3a1 1 0 0 0-1-1zM12 15c-.498 0-.994-.126-1.433-.364L0 8.872V21a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V8.872l-10.563 5.762c-.443.24-.939.366-1.437.366z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-map\" viewBox=\"0 0 24 24\"><path d=\"M22.725 1.039L17 2.675v20.08l6.275-1.793A1 1 0 0 0 24 20V2a1 1 0 0 0-1.275-.961M15 2.72l-6-1.5v20.06l6 1.5zM1 23a.993.993 0 0 0 .275-.039L7 21.326V1.246L.725 3.039A1 1 0 0 0 0 4v18a.998.998 0 0 0 1 1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-megaphone\" viewBox=\"0 0 18 18\"><path d=\"M3.9 4.5C1.8 4.5 0 6.3 0 8.4s1.8 3.9 3.9 3.9H4l3 4.9c.4.8 1.5 1 2.4.6.8-.4 1-1.5.6-2.4l-1.9-3h2.1l7.9 4.5V0l-7.9 4.5H3.9z\"/></symbol><symbol id=\"wds-icons-meneame\" viewBox=\"0 0 24 24\"><path d=\"M20.494 7.792c-1.427 1.37-4.004 1.33-4.962 3.181-.818 2.195 1.107 5.702 1.911 7.702.545 1.033-4.253 2.03-3.666 2.285 3.385-.036 4.83-1.206 4.423-2.641-.389-1.373-2.144-4.114-2.144-6.305.05-1.654 2.004-2.162 3.263-2.836 1.463-.62 2.831-2.006 2.453-3.63-.016-.574-1.07-2.482-.64-1.003.235 1.092.347 2.44-.638 3.247\"/><path d=\"M16.091 5.326c-1.842-.9-3.89-1.444-6.032-.97-1.151.201-2.507.797-3.279 1.794-1.011 1.144-1.05 2.807-.387 4.115.515 1.007 1.299 2.128 2.569 2.296 1.092.155 2.292.015 3.22-.582-1.103.18-2.381.55-3.372-.147-1.66-1.005-2.467-3.287-1.46-4.952.81-1.452 2.441-1.86 4.167-1.932 2.301-.096 4.507 1.147 5.353 1.45.815.242 1.985.55 2.565-.27.339-.38.203-1.429-.072-1.526.08.735-.49 1.659-1.376 1.418-.662-.148-1.27-.449-1.896-.694M3.742 11.824c-1.067 1.592-2.042 3.457-1.67 5.398.342 2.03 2.416 3.46 4.478 3.715 2.117.234 4.23.174 6.352.03.358-.328-1.732-.319-2.612-.439-2.008-.215-4.186-.255-5.907-1.383-1.604-1.136-1.814-3.365-1.045-5.007.644-1.55 1.607-3.048 2.619-4.343-.79.621-1.519 1.084-2.215 2.029\"/><path d=\"M9.014 16.833c1.251.091 3.326-.029 4.301.616.35.497-.3 3.247-.076 3.564.498.139 1.067-3.222.752-4.057-.239-.637-4.479-.298-4.977-.123\"/></symbol><symbol id=\"wds-icons-menu-control-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M9 14a.997.997 0 0 1-.707-.293l-7-7a.999.999 0 1 1 1.414-1.414L9 11.586l6.293-6.293a.999.999 0 1 1 1.414 1.414l-7 7A.997.997 0 0 1 9 14\"/></symbol><symbol id=\"wds-icons-menu-control-tiny\" viewBox=\"0 0 12 12\"><path fill-rule=\"evenodd\" d=\"M6.001 10a.997.997 0 0 1-.706-.293l-5.002-5a.999.999 0 1 1 1.414-1.414L6 7.587l4.292-4.292a.999.999 0 1 1 1.414 1.414L6.708 9.707a.997.997 0 0 1-.707.293\"/></symbol><symbol id=\"wds-icons-menu-control\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M21.293 6.293L12 15.586 2.707 6.293a.999.999 0 1 0-1.414 1.414l10 10a.997.997 0 0 0 1.414 0l10-10a.999.999 0 1 0-1.414-1.414\"/></symbol><symbol id=\"wds-icons-menu-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M16 8a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h14zM2 5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2H2zm14 8a1 1 0 1 1 0 2H2a1 1 0 1 1 0-2h14z\"/></symbol><symbol id=\"wds-icons-menu-tiny\" viewBox=\"0 0 12 12\"><path fill-rule=\"evenodd\" d=\"M11 5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h10zm0 4a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2h10zM1 3a1 1 0 1 1 0-2h10a1 1 0 1 1 0 2H1z\"/></symbol><symbol id=\"wds-icons-menu\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M23 11H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2zm0-7H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2zm0 14H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2z\"/></symbol><symbol id=\"wds-icons-more\" viewBox=\"0 0 24 24\"><path d=\"M12 21a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 21m0-7a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 14m0-7a2 2 0 1 0 .001-3.999A2 2 0 0 0 12 7\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-nk\" viewBox=\"0 0 24 24\"><path d=\"M3.852 9.339c.573-.25 1.12-.505 1.68-.727 1.016-.403 2.066-.691 3.17-.714.331-.007.675.04.994.126.992.271 1.496.99 1.602 1.93.082.723.044 1.467-.01 2.197-.118 1.585-.278 3.167-.423 4.75-.09.976-.185 1.952-.268 2.93-.015.173-.082.236-.258.235-.877-.005-1.755-.008-2.632.002-.245.003-.275-.114-.256-.305.083-.86.161-1.718.24-2.577l.37-3.989c.047-.515.086-1.031.142-1.546.077-.7-.21-.987-.932-.911-.7.073-1.332.336-1.947.65-.421.214-.845.426-1.254.662a.467.467 0 0 0-.207.308c-.121 1.165-.226 2.332-.333 3.499-.12 1.293-.242 2.586-.352 3.88-.022.248-.115.337-.38.332-.803-.017-1.605-.006-2.408-.006-.356 0-.366-.002-.337-.337.14-1.61.285-3.22.428-4.83.119-1.34.24-2.678.354-4.017.032-.382.02-.383-.365-.385-.49-.003-.483-.002-.436-.478.053-.533.1-1.067.13-1.602.011-.22.091-.303.32-.299.578.011 1.157.003 1.735.004.982 0 1.362.28 1.633 1.218m9.826-3.941h-.861c0-.182-.012-.342.002-.5.049-.552.113-1.101.158-1.653.014-.176.089-.229.263-.228.83.007 1.661-.006 2.491.008.677.01 1.26.625 1.206 1.281-.12 1.455-.26 2.909-.389 4.363-.1 1.13-.193 2.26-.295 3.388-.103 1.138-.217 2.275-.32 3.413-.103 1.13-.196 2.26-.296 3.388-.031.353-.062.705-.113 1.055-.01.07-.112.181-.172.182-.97.01-1.94.004-2.91 0-.025 0-.05-.021-.113-.05l1.349-14.647m9.079 14.69c-.148.008-.238.017-.328.017-.905.001-1.81-.004-2.716.004-.2.002-.319-.054-.416-.236a942.803 942.803 0 0 0-3.025-5.618c-.08-.149-.078-.255.014-.395 1.215-1.842 2.422-3.687 3.64-5.527.06-.09.197-.182.3-.183 1.138-.013 2.276-.008 3.415-.007.044 0 .089.01.177.022-.072.112-.125.202-.186.287-1.297 1.799-2.592 3.599-3.897 5.393-.125.172-.137.296-.035.485.969 1.8 1.926 3.607 2.886 5.412.051.096.096.194.171.346\"/></symbol><symbol id=\"wds-icons-note\" viewBox=\"0 0 24 24\"><path d=\"M23 1H1a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h6.52l3.699 4.625a1 1 0 0 0 1.562 0L16.48 18H23a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-numbered-list-small\" viewBox=\"0 0 18 18\"><path d=\"M6 2h11v2H6zm0 6h11v2H6zm0 6h11v2H6zM1.368 5v-.549l.598-.048c.097-.007.11-.035.11-.139V1.84c0-.083-.02-.125-.09-.145l-.604-.126L1.46 1h1.666v3.264c0 .111.007.132.111.139l.57.048V5H1.368zm-.321 6v-.63l.907-.886c.684-.663.975-.934.975-1.32 0-.25-.122-.433-.48-.433-.373 0-.529.122-.529.603L1 8.252C1.007 7.176 1.826 7 2.536 7c1.05 0 1.422.447 1.422 1.083 0 .636-.44 1.056-.934 1.53l-.765.73h.995c.067 0 .095-.013.108-.08l.095-.535h.717V11H1.047zm2.297 3.682c.567.087.88.427.88 1.026 0 .88-.66 1.292-1.612 1.292-.673 0-1.272-.24-1.612-.613l.533-.586c.253.247.533.44.999.44.373 0 .693-.133.693-.6 0-.406-.253-.573-.666-.573a2.73 2.73 0 0 0-.493.047v-.666l.326-.04c.48-.06.74-.293.74-.72 0-.252-.114-.459-.487-.459-.36 0-.532.12-.532.593l-.913-.08c0-1.052.793-1.232 1.492-1.232 1.026 0 1.419.393 1.419 1.106 0 .56-.347.912-.767 1.039v.026z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-numbered-list\" viewBox=\"0 0 24 24\"><path d=\"M23 5H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 8H9a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 8H9a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2zM1.56 6.593V5.88l.774-.063c.126-.008.144-.045.144-.18V2.498c0-.108-.027-.163-.117-.19l-.783-.161.099-.739h2.16V5.64c0 .144.01.17.144.18l.739.062v.712H1.56zm-.469 8.067v-.837l1.207-1.18c.91-.882 1.296-1.241 1.296-1.755 0-.333-.162-.576-.639-.576-.495 0-.702.162-.702.802l-1.225-.109c.01-1.431 1.099-1.665 2.044-1.665 1.395 0 1.89.594 1.89 1.44 0 .847-.584 1.405-1.242 2.035l-1.017.972h1.324c.09 0 .126-.018.144-.108l.126-.711h.954v1.692H1.09zm3.039 5.241c.765.117 1.188.576 1.188 1.386 0 1.189-.89 1.747-2.178 1.747-.91 0-1.72-.324-2.18-.828l.721-.792c.342.333.72.594 1.35.594.505 0 .937-.18.937-.81 0-.55-.342-.775-.9-.775a3.69 3.69 0 0 0-.667.063v-.9l.442-.054c.648-.081.999-.396.999-.972 0-.342-.153-.621-.658-.621-.485 0-.72.162-.72.801l-1.233-.108c0-1.423 1.072-1.666 2.017-1.666 1.386 0 1.917.531 1.917 1.495 0 .756-.468 1.233-1.035 1.404v.036z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-odnoklassniki\" viewBox=\"0 0 24 24\"><path d=\"M14.289 16.068c.33.319.618.598.909.875.644.613 1.296 1.22 1.934 1.84.67.65.694 1.557.071 2.176-.629.624-1.624.635-2.294-.01-.934-.9-1.844-1.823-2.794-2.764-.16.145-.26.23-.353.32-.812.778-1.625 1.554-2.432 2.337-.39.378-.837.626-1.408.576-.645-.056-1.113-.372-1.354-.953-.248-.598-.13-1.153.33-1.61.673-.672 1.372-1.318 2.061-1.974.267-.254.538-.503.863-.806-.214-.065-.356-.095-.486-.15-.806-.334-1.635-.629-2.407-1.024-.876-.449-1.114-1.383-.634-2.14.466-.734 1.412-.933 2.247-.475 2.342 1.285 4.684 1.284 7.025-.006.828-.456 1.78-.247 2.243.49.468.747.235 1.677-.618 2.116-.772.398-1.598.697-2.403 1.034-.135.057-.283.085-.5.148zM6.695 7.176c.01-2.858 2.419-5.131 5.422-5.118 2.925.013 5.31 2.344 5.29 5.171-.021 2.865-2.414 5.103-5.441 5.089-2.913-.013-5.282-2.325-5.271-5.142zm5.364-2.03c-1.191-.003-2.158.901-2.175 2.035-.017 1.114 1.009 2.1 2.177 2.093 1.164-.009 2.148-.957 2.154-2.077.005-1.123-.967-2.048-2.156-2.051z\"/></symbol><symbol id=\"wds-icons-out-arrow-tiny\" viewBox=\"0 0 12 12\"><path d=\"M9.75 6.75A.75.75 0 0 0 9 7.5v3H1.5V3h3a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0-.75.75v9c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V7.5a.75.75 0 0 0-.75-.75\"/><path d=\"M11.5 0H8a.5.5 0 0 0-.354.854l1.22 1.219-3.771 3.772a.749.749 0 1 0 1.06 1.06l3.772-3.771 1.219 1.22a.504.504 0 0 0 .545.108A.5.5 0 0 0 12 4V.5a.5.5 0 0 0-.5-.5\"/></symbol><symbol id=\"wds-icons-pages-small\" viewBox=\"0 0 18 18\"><g fill=\"#999\" fill-rule=\"evenodd\"><path d=\"M13 0H4a1 1 0 1 0 0 2h8v10a1 1 0 1 0 2 0V1a1 1 0 0 0-1-1z\"/><path d=\"M2 14h6V6H2v8zM9 4H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z\"/></g></symbol><symbol id=\"wds-icons-pages\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M4 21.053h13v-15H4v15zm14-17H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-17a1 1 0 0 0-1-1z\"/><path d=\"M21 1H5.505a1 1 0 1 0 0 2H20v17.229a1 1 0 1 0 2 0V2a1 1 0 0 0-1-1\"/><path d=\"M7 10.042h7a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2m0 4.011h6a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2m0 4h3a1 1 0 1 0 0-2H7a1 1 0 1 0 0 2\"/></g></symbol><symbol id=\"wds-icons-paragraph\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M13.93 12.888v6.79c0 .723.592 1.322 1.323 1.322a1.32 1.32 0 0 0 1.324-1.323V5.647h1.34c.72 0 1.32-.593 1.32-1.324 0-.736-.592-1.323-1.32-1.323h-9.26v.005h-.023v.007C6.044 3.19 4 5.337 4 7.96s2.045 4.77 4.634 4.95v6.767c0 .724.593 1.323 1.324 1.323a1.32 1.32 0 0 0 1.324-1.323V5.64h2.648v7.248z\"/></symbol><symbol id=\"wds-icons-pause-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><rect width=\"5\" height=\"16\" rx=\"1\" x=\"2\" y=\"1\"/><rect x=\"11\" width=\"5\" height=\"16\" rx=\"1\" y=\"1\"/></g></symbol><symbol id=\"wds-icons-pause\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><rect width=\"7\" height=\"22\" rx=\"1\" x=\"3\" y=\"1\"/><rect x=\"14\" width=\"7\" height=\"22\" rx=\"1\" y=\"1\"/></g></symbol><symbol id=\"wds-icons-pencil-small\" viewBox=\"0 0 18 18\"><path d=\"M9.1 4.5l-7.8 7.8c-.2.2-.3.4-.3.7v3c0 .6.4 1 1 1h3c.3 0 .5-.1.7-.3l7.8-7.8-4.4-4.4zm7.6-.2l-3-3c-.4-.4-1-.4-1.4 0l-1.8 1.8 4.4 4.4 1.8-1.8c.4-.4.4-1 0-1.4z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-pencil\" viewBox=\"0 0 24 24\"><path d=\"M1.293 16.293A1 1 0 0 0 1 17v5a1 1 0 0 0 1 1h5c.265 0 .52-.105.707-.293L19 11.414 12.586 5 1.293 16.293zm21.414-10l-5-5a.999.999 0 0 0-1.414 0L14 3.586 20.414 10l2.293-2.293a.999.999 0 0 0 0-1.414z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-pin-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M5.617 2v1.23h.618v4.917L5 9.377v1.229h2.136L8.573 16h.261l1.438-5.394h2.135v-1.23l-1.234-1.23V3.23h.617V2z\"/></symbol><symbol id=\"wds-icons-play-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M14.767 9.437L3.858 16.903a.553.553 0 0 1-.565.037.531.531 0 0 1-.293-.473V1.533c0-.199.113-.381.293-.473a.557.557 0 0 1 .565.036l10.91 7.467A.53.53 0 0 1 15 9a.53.53 0 0 1-.233.437z\"/></symbol><symbol id=\"wds-icons-play-tiny\" viewBox=\"0 0 12 12\"><path fill-rule=\"evenodd\" d=\"M2.767.087l8.018 5.5a.498.498 0 0 1 0 .82L2.767 11.91A.49.49 0 0 1 2 11.5V.497a.49.49 0 0 1 .767-.41\"/></symbol><symbol id=\"wds-icons-play\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M19.69 12.6L5.143 22.867a.722.722 0 0 1-.753.05.733.733 0 0 1-.391-.65V1.733c0-.274.15-.524.391-.65a.724.724 0 0 1 .753.05l14.545 10.266a.734.734 0 0 1 0 1.201z\"/></symbol><symbol id=\"wds-icons-plus-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M16 8h-6V2a1 1 0 1 0-2 0v6H2a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2\"/></symbol><symbol id=\"wds-icons-plus-tiny\" viewBox=\"0 0 12 12\"><path fill-rule=\"evenodd\" d=\"M11 5H7V1a1 1 0 1 0-2 0v4H1a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0V7h4a1 1 0 1 0 0-2\"/></symbol><symbol id=\"wds-icons-plus\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M11 13v9a1 1 0 1 0 2 0v-9h9a1 1 0 1 0 0-2h-9V2a1 1 0 1 0-2 0v9H2a1 1 0 1 0 0 2h9z\"/></symbol><symbol id=\"wds-icons-question\" viewBox=\"0 0 24 24\"><path d=\"M13 12.868V13a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1c1.065 0 2-.934 2-2 0-1.065-.935-2-2-2-.812 0-1.592.672-1.876 1.322a1 1 0 1 1-1.832-.801C8.93 6.061 10.489 5 12 5c2.168 0 4 1.832 4 4 0 1.825-1.297 3.411-3 3.868zM13 18a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0v1zM12 0C5.383 0 0 5.384 0 12c0 6.617 5.383 12 12 12s12-5.383 12-12c0-6.616-5.383-12-12-12z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-quote-small\" viewBox=\"0 0 18 18\"><path d=\"M7.287 10.334c-1.113-1.03-2.939-1.248-4.257-.22-.113-.929-.024-1.781.291-2.544.966-2.335 3.684-3.147 3.713-3.155a.72.72 0 0 0 .497-.892.732.732 0 0 0-.901-.496 7.51 7.51 0 0 0-1.208.493c-1.637.786-4.144 2.662-4.392 6.765a9.57 9.57 0 0 0-.022.48c0 .062-.008.117-.008.179v.053c0 .182.007.363.02.543l.002.024c.012.17.029.337.052.503l.008.057C1.395 14.276 2.633 16 4.94 16a3.304 3.304 0 0 0 2.853-1.6c.72-1.189.623-3.023-.505-4.066zm8.746 0c-1.114-1.03-2.94-1.248-4.258-.22-.112-.929-.023-1.781.292-2.544.965-2.335 3.684-3.147 3.712-3.155a.72.72 0 0 0 .497-.892.732.732 0 0 0-.9-.496 7.51 7.51 0 0 0-1.209.493c-1.636.786-4.143 2.662-4.392 6.765a9.57 9.57 0 0 0-.021.48c-.001.062-.008.117-.008.179v.053c0 .182.007.363.02.543l.001.024c.012.17.03.337.052.503l.009.057C10.14 14.276 11.378 16 13.685 16a3.304 3.304 0 0 0 2.853-1.6c.72-1.189.622-3.023-.505-4.066z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-quote\" viewBox=\"0 0 24 24\"><path d=\"M9.647 13.156c-1.532-1.427-4.042-1.728-5.856-.303-.154-1.287-.032-2.468.401-3.524C5.52 6.095 9.26 4.97 9.298 4.959a.999.999 0 0 0 .684-1.235 1.006 1.006 0 0 0-1.24-.686c-.071.02-.75.22-1.66.682-2.251 1.089-5.7 3.686-6.04 9.368-.018.22-.025.443-.031.666-.001.085-.011.16-.011.247l.001.038-.001.035c0 .253.01.504.027.752 0 .012.002.022.003.034.016.235.04.467.071.697.004.026.01.052.012.078.43 2.98 2.133 5.368 5.305 5.368 1.63 0 3.092-.833 3.924-2.217.989-1.645.856-4.185-.695-5.63zm12.028 0c-1.532-1.427-4.043-1.728-5.856-.303-.154-1.287-.032-2.468.401-3.524 1.328-3.234 5.067-4.358 5.106-4.37a.999.999 0 0 0 .684-1.235 1.006 1.006 0 0 0-1.24-.686c-.071.02-.75.22-1.661.682-2.25 1.089-5.698 3.686-6.04 9.368-.017.22-.024.443-.03.666-.001.085-.011.16-.011.247v.073c0 .253.01.504.027.752 0 .012.002.022.003.034.016.235.04.467.071.697.004.026.01.052.012.078.43 2.98 2.133 5.368 5.304 5.368a4.537 4.537 0 0 0 3.924-2.217c.99-1.645.856-4.185-.694-5.63z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-qzone\" viewBox=\"0 0 24 24\"><path d=\"M21.602 9.72c-1.418 1.324-2.836 2.65-4.257 3.971-.2.185-.313.386-.236.66l.09.54c-.758.011-1.515-.025-2.273-.058-.796-.035-1.592-.082-2.388-.13-.513-.032-1.026-.076-1.538-.116-.076-.006-.154-.013-.21-.082.212-.176.432-.325.652-.475a687.562 687.562 0 0 0 5.657-3.907c.03-.022.082-.034.072-.081-.01-.048-.061-.038-.098-.044a25.625 25.625 0 0 0-3.692-.439 30.083 30.083 0 0 0-7.275.538c-.168.034-.334.077-.502.115a.253.253 0 0 0 .121.022c1.058.02 2.114.053 3.17.1 1.18.053 2.361.114 3.537.252.397.046.792.108 1.189.163.026.004.062.006.07.033.01.035-.023.054-.048.073l-.183.128a24252.936 24252.936 0 0 0-6.138 4.326c-.046.04-.037.067.02.077.074.01.148.015.223.024 1.24.143 2.488.22 3.737.246a32.84 32.84 0 0 0 3.954-.153 23.413 23.413 0 0 0 2.696-.42c.106-.024.065-.055.17-.082.107-.028.175-.053.175-.064v.002c0 .015.13.029.121.043a2.872 2.872 0 0 1-.914.496c-.27.096-.233.097-.166.376.002.007.027.014.03.02.002.026.009.055.014.08.086.474.177.947.265 1.42.06.32.126.639.188.958.026.25.086.493.13.74.08.442.164.884.242 1.328a.58.58 0 0 1-.003.22c-.048.206-.208.294-.42.246a1.126 1.126 0 0 1-.3-.13c-1.68-.97-3.363-1.937-5.042-2.91-.347-.2-.675-.197-1.02.003-1.687.976-3.376 1.946-5.065 2.92a1.054 1.054 0 0 1-.245.11c-.295.08-.533-.152-.466-.452.074-.333.132-.669.189-1.006.043-.258.102-.512.153-.768.021-.107.04-.215.06-.323.069-.342.139-.684.207-1.027.084-.424.148-.852.236-1.276.087-.41.166-.824.234-1.238.026-.154.082-.302.075-.46.102-.22.062-.356-.16-.56L2.242 9.715a.858.858 0 0 1-.254-.374c.009-.228.133-.358.398-.392.412-.052.826-.095 1.239-.142l1.601-.18 1.568-.173c.499-.055.998-.114 1.497-.166.297-.03.466-.209.586-.46.4-.835.801-1.669 1.203-2.503l1.413-2.933a.984.984 0 0 1 .183-.284c.159-.158.347-.16.508-.005a.845.845 0 0 1 .18.272c.843 1.868 1.689 3.734 2.525 5.606.133.3.378.352.655.38.695.067 1.39.138 2.086.206.671.066 1.343.128 2.014.195.606.06 1.211.119 1.815.186.189.022.363.083.414.302.002.21-.132.341-.27.47\"/></symbol><symbol id=\"wds-icons-reddit\" viewBox=\"0 0 24 24\"><path d=\"M21.334 12.023c.359-.283.538-.671.538-1.166 0-.354-.112-.663-.342-.928a1.111 1.111 0 0 0-.882-.398 1.17 1.17 0 0 0-.734.268 5.004 5.004 0 0 1 1.42 2.224m-2.572-9.275a.97.97 0 0 0-.222.638c0 .247.076.458.222.635a.697.697 0 0 0 .562.265c.23 0 .426-.088.59-.265a.904.904 0 0 0 .244-.635.908.908 0 0 0-.244-.638.773.773 0 0 0-.59-.264.697.697 0 0 0-.562.264M14.156 14.09c.31.319.677.477 1.102.477.424 0 .793-.158 1.102-.477.311-.319.466-.724.466-1.219 0-.46-.146-.848-.44-1.167-.294-.316-.67-.476-1.128-.476-.458 0-.832.16-1.127.476-.295.32-.44.708-.44 1.167 0 .495.153.9.465 1.219m-2.18 4.716c1.568 0 2.84-.529 3.822-1.589l-.638-.635c-.815.848-1.878 1.27-3.184 1.27a4.38 4.38 0 0 1-1.666-.319c-.523-.21-.9-.422-1.128-.635l-.343-.316-.637.635c.98 1.06 2.237 1.59 3.774 1.59M7.221 12.87c0 .495.157.9.467 1.219.309.319.677.477 1.102.477a1.49 1.49 0 0 0 1.104-.477c.308-.319.463-.724.463-1.219 0-.46-.145-.848-.44-1.167-.293-.316-.67-.476-1.127-.476-.457 0-.832.16-1.128.476-.292.32-.44.708-.44 1.167m-4.556-.9c.262-.814.734-1.537 1.42-2.172a1.167 1.167 0 0 0-.734-.268c-.326 0-.613.133-.858.398a1.316 1.316 0 0 0-.367.928c0 .53.18.902.539 1.114M23 10.911c0 1.094-.44 1.89-1.324 2.383.034.179.05.425.05.744 0 2.013-.955 3.735-2.866 5.167-1.91 1.43-4.206 2.145-6.884 2.145s-4.965-.708-6.86-2.121c-1.896-1.412-2.843-3.125-2.843-5.14 0-.352.017-.616.05-.795C1.44 12.801 1 12.004 1 10.91c0-.74.245-1.37.733-1.88.492-.513 1.063-.77 1.717-.77.588 0 1.127.229 1.616.69C6.864 7.607 8.97 6.884 11.39 6.778h.096l1.52-5.459 4.409.952C17.87 1.423 18.509 1 19.324 1h.05c.621 0 1.135.231 1.543.69.408.459.613 1.024.613 1.696 0 .67-.205 1.236-.613 1.696a1.975 1.975 0 0 1-1.542.687h-.05c-.555 0-1.046-.203-1.47-.608a2.186 2.186 0 0 1-.686-1.51l-3.283-.743-1.078 3.921c2.484.177 4.524.885 6.126 2.121.488-.461 1.045-.69 1.665-.69.653 0 1.218.257 1.69.77.474.51.711 1.14.711 1.88\"/></symbol><symbol id=\"wds-icons-refresh\" viewBox=\"0 0 24 24\"><path d=\"M12 23c6.065 0 11-4.863 11-10.84a.992.992 0 0 0-1-.985c-.553 0-1 .44-1 .986 0 4.89-4.037 8.868-9 8.868s-9-3.978-9-8.868c0-4.89 4.037-8.869 9-8.869a8.991 8.991 0 0 1 6.975 3.292l-3.794-.501a.996.996 0 0 0-1.124.845.987.987 0 0 0 .858 1.108l5.946.785a.996.996 0 0 0 1.124-.845l.797-5.86a.987.987 0 0 0-.858-1.107.994.994 0 0 0-1.124.846l-.446 3.28A10.997 10.997 0 0 0 12 1.322c-6.065 0-11 4.862-11 10.839C1 18.137 5.935 23 12 23\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-reply-arrow-small\" viewBox=\"0 0 18 18\"><path d=\"M8.73 4.985V1.379a.38.38 0 0 0-.217-.347.352.352 0 0 0-.391.067L1.119 7.726a.388.388 0 0 0 0 .56l7.003 6.627c.106.1.26.128.39.067a.38.38 0 0 0 .218-.347v-3.589c5.166.246 7.555 5.675 7.579 5.731a.364.364 0 0 0 .408.217.376.376 0 0 0 .288-.37v-1.989c0-7.342-5.038-9.5-8.275-9.648\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-reply-arrow\" viewBox=\"0 0 24 24\"><path d=\"M11.628 6.479V1.52a.523.523 0 0 0-.298-.476.485.485 0 0 0-.538.09l-9.628 9.113a.533.533 0 0 0 0 .77l9.628 9.113a.486.486 0 0 0 .538.09.523.523 0 0 0 .298-.475V14.81c7.104.338 10.388 7.803 10.421 7.88a.5.5 0 0 0 .561.298.516.516 0 0 0 .396-.51v-2.733c0-10.096-6.926-13.062-11.378-13.267\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-reply-small\" viewBox=\"0 0 18 18\"><path d=\"M18 8.273c0 4.01-4.037 7.272-9 7.272-.752 0-1.508-.078-2.252-.233l-4.22 1.636a.77.77 0 0 1-.732-.096.719.719 0 0 1-.291-.66l.395-3.45C.672 11.47 0 9.896 0 8.273 0 4.263 4.037 1 9 1s9 3.263 9 7.273z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-reply-tiny\" viewBox=\"0 0 12 12\"><path d=\"M11.997 5.845c0 2.672-2.691 4.846-5.999 4.846-.5 0-1.005-.052-1.5-.156l-2.813 1.09a.513.513 0 0 1-.488-.064.479.479 0 0 1-.194-.439l.263-2.299C.448 7.976 0 6.926 0 5.845 0 3.174 2.69 1 5.998 1c3.308 0 5.999 2.174 5.999 4.845z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-reply\" viewBox=\"0 0 24 24\"><path d=\"M12 2c6.066 0 11 4.078 11 9.09 0 5.014-4.934 9.092-11 9.092-.919 0-1.843-.098-2.753-.292L4.09 21.935a.922.922 0 0 1-.895-.12.907.907 0 0 1-.356-.824l.483-4.313C1.822 15.088 1 13.118 1 11.091 1 6.078 5.934 2 12 2\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-share-small\" viewBox=\"0 0 18 18\"><path d=\"M4.545 11.667c.714 0 1.358-.312 1.821-.809l4.642 2.779a2.76 2.76 0 0 0-.099.696c0 1.471 1.142 2.667 2.546 2.667C14.858 17 16 15.804 16 14.333c0-1.47-1.142-2.666-2.545-2.666-.714 0-1.358.311-1.821.808L6.992 9.697A2.76 2.76 0 0 0 7.091 9a2.76 2.76 0 0 0-.1-.697l4.643-2.778a2.481 2.481 0 0 0 1.82.808C14.859 6.333 16 5.137 16 3.667 16 2.196 14.858 1 13.455 1c-1.404 0-2.546 1.196-2.546 2.667 0 .242.041.473.1.696L6.365 7.142a2.481 2.481 0 0 0-1.82-.809C3.141 6.333 2 7.53 2 9c0 1.47 1.142 2.667 2.545 2.667\"/></symbol><symbol id=\"wds-icons-share\" viewBox=\"0 0 24 24\"><path d=\"M5 16a3.984 3.984 0 0 0 2.861-1.213l7.295 4.168A3.964 3.964 0 0 0 15 20c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4a3.984 3.984 0 0 0-2.861 1.213l-7.295-4.168C8.935 12.71 9 12.364 9 12c0-.364-.065-.71-.156-1.045l7.295-4.168A3.984 3.984 0 0 0 19 8c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 .364.065.71.156 1.045L7.861 9.213A3.984 3.984 0 0 0 5 8c-2.206 0-4 1.794-4 4s1.794 4 4 4\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-tag-small\" viewBox=\"0 0 18 18\"><path d=\"M14.138 1c.764 0 1.48.298 2.015.839.535.541.826 1.26.818 2.023l-.042 4.242a2.862 2.862 0 0 1-.845 2.006l-6.036 6.037a2.863 2.863 0 0 1-2.035.845 2.818 2.818 0 0 1-2.005-.829l-4.18-4.18A2.813 2.813 0 0 1 1 9.94c.01-.752.31-1.461.845-1.997l6.038-6.038a2.86 2.86 0 0 1 1.993-.844L14.096 1h.042zm0 2h-.013l-4.22.061a.879.879 0 0 0-.608.258L3.26 9.357a.858.858 0 0 0-.017 1.212l4.18 4.18a.832.832 0 0 0 .591.243.878.878 0 0 0 .621-.26l6.036-6.036a.876.876 0 0 0 .26-.612l.041-4.241A.829.829 0 0 0 14.138 3zm-3.476 2.186a1.5 1.5 0 1 1 2.122 2.122 1.5 1.5 0 0 1-2.122-2.122z\"/></symbol><symbol id=\"wds-icons-text-small\" viewBox=\"0 0 18 18\"><path d=\"M9 1H2v4h1l.724-1.447A1 1 0 0 1 4.618 3H8v11.28a1 1 0 0 1-.684.948L5 16v1h8v-1l-2.316-.772a1 1 0 0 1-.684-.949V3h3.382a1 1 0 0 1 .894.553L15 5h1V1H9z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-text\" viewBox=\"0 0 24 24\"><path d=\"M23 0H1a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1c.334 0 .646-.167.832-.445L4.535 4H10v15.382l-3.447 1.723c-.339.17-.553.516-.553.895v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1c0-.379-.214-.725-.553-.895L14 19.382V4h5.465l1.703 2.555c.186.278.498.445.832.445h1a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-trash-open-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M6.23 3.345l3.845-1.106.353 1.228-3.843 1.106-.354-1.228zm10.725-.716a.998.998 0 0 0-1.238-.684l-3.366.968-.631-2.19A.998.998 0 0 0 10.483.04L4.717 1.699a1.002 1.002 0 0 0-.684 1.238l.63 2.189-2.94.845A1 1 0 0 0 2 7.933V17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v9H4V7.397l12.27-3.531a1 1 0 0 0 .685-1.237z\"/><path d=\"M6 10.001v4a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0m4 0v4a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0\"/></g></symbol><symbol id=\"wds-icons-trash-open\" viewBox=\"0 0 24 24\"><path d=\"M11.797 11.848v6.77a.84.84 0 0 0 .833.846.84.84 0 0 0 .834-.846v-6.77a.84.84 0 0 0-.834-.846.84.84 0 0 0-.833.846m-3.334 0v6.77a.84.84 0 0 0 .834.846.84.84 0 0 0 .833-.846v-6.77a.84.84 0 0 0-.833-.846.84.84 0 0 0-.834.846m6.667 0v6.77a.84.84 0 0 0 .834.846.84.84 0 0 0 .834-.846v-6.77a.84.84 0 0 0-.834-.846.84.84 0 0 0-.833.846\"/><path d=\"M9.166 3.225l4.83-1.314.414 1.565L9.58 4.79l-.414-1.565zm12.184-.761a.83.83 0 0 0-1.02-.598l-4.311 1.172-.628-2.383a.849.849 0 0 0-.389-.514.822.822 0 0 0-.632-.085L7.93 1.81a.848.848 0 0 0-.589 1.037l.629 2.382-5.352 1.455a.847.847 0 0 0-.59 1.036.835.835 0 0 0 1.021.6l2.08-.567V22.85a.84.84 0 0 0 .834.846h13.335a.84.84 0 0 0 .833-.846V7.616a.84.84 0 0 0-.833-.846.84.84 0 0 0-.834.846v14.387H6.796V7.616a.856.856 0 0 0-.06-.3l2.169-.59c.035.004.067.017.103.017a.828.828 0 0 0 .52-.186l5.796-1.578a.814.814 0 0 0 .642-.174L20.76 3.5a.847.847 0 0 0 .59-1.036z\"/></symbol><symbol id=\"wds-icons-trash-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M14 15H4V6h10v9zM6.875 3h4v1h-4V3zM16 4h-3.125V2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2H2a1 1 0 0 0 0 2v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0 0-2z\"/><path d=\"M7 14a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1m4 0a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v4a1 1 0 0 0 1 1\"/></g></symbol><symbol id=\"wds-icons-trash\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M18.417 21.167H5.583V6.5h12.834v14.667zM9.25 2.833h5.5v1.834h-5.5V2.833zm12.833 1.834h-5.5v-2.75A.916.916 0 0 0 15.667 1H8.333a.917.917 0 0 0-.916.917v2.75h-5.5a.917.917 0 0 0 0 1.833H3.75v15.583c0 .507.41.917.917.917h14.666c.507 0 .917-.41.917-.917V6.5h1.833a.916.916 0 1 0 0-1.833z\"/><path d=\"M12 9.25a.917.917 0 0 0-.917.917V17.5a.916.916 0 1 0 1.834 0v-7.333A.917.917 0 0 0 12 9.25m-3.667 0a.917.917 0 0 0-.916.917V17.5a.916.916 0 1 0 1.833 0v-7.333a.917.917 0 0 0-.917-.917m6.417.917V17.5a.916.916 0 1 0 1.833 0v-7.333a.916.916 0 1 0-1.833 0\"/></g></symbol><symbol id=\"wds-icons-tumblr\" viewBox=\"0 0 24 24\"><path d=\"M13.987 20.999c-3.79.067-5.226-2.794-5.226-4.807V10.31H7V7.985c2.64-.984 3.275-3.447 3.423-4.85.01-.097.083-.135.126-.135h2.549v4.585h3.48v2.725h-3.494v5.603c.013.763.282 1.814 1.675 1.775.461-.012 1.08-.152 1.403-.31L17 19.944c-.315.477-1.734 1.03-3.013 1.054\"/></symbol><symbol id=\"wds-icons-twitter\" viewBox=\"0 0 24 24\"><path d=\"M20.681 7.328v.577c0 5.915-4.486 12.695-12.735 12.695-2.605 0-4.92-.721-6.946-2.02.434 0 .724.145 1.158.145 2.026 0 4.052-.722 5.644-1.876-1.882 0-3.618-1.298-4.197-3.174.29 0 .579.145.868.145.434 0 .434 0 1.013-.145-2.17-.432-4.052-2.308-4.052-4.472 0 .433 1.592.433 2.316.577-1.158-.865-1.882-2.164-1.882-3.75 0-.866.29-1.587.724-2.309 2.17 2.741 5.644 4.472 9.261 4.761-.144-.433-.144-.721-.144-1.01C11.709 5.02 13.735 3 16.195 3c1.302 0 2.46.433 3.328 1.443 1.013-.289 1.882-.577 2.75-1.154-.434 1.154-1.158 1.875-1.881 2.452a13.73 13.73 0 0 0 2.604-.721c-.723.865-1.447 1.73-2.315 2.308z\"/></symbol><symbol id=\"wds-icons-undo\" viewBox=\"0 0 24 24\"><path d=\"M4.414 15H16a5 5 0 1 0 0-10H2a1 1 0 0 1 0-2h14a7 7 0 1 1 0 14H4.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a.997.997 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 1.414L4.414 15z\" fill-rule=\"evenodd\" fill-opacity=\"100\"/></symbol><symbol id=\"wds-icons-unlock-small\" viewBox=\"0 0 18 18\"><path d=\"M10 12.7V14H8v-1.3c-.6-.3-1-1-1-1.7 0-1.1.9-2 2-2s2 .9 2 2c0 .7-.4 1.4-1 1.7M15 6H7V5c0-1.1.9-2 2-2 .6 0 1.225.25 1.625.75.182.244.547.5.875.5a1 1 0 0 0 .761-1.651c.004-.004-.003.003 0 0L12 2.3C11.2 1.5 10.1 1 9 1 6.8 1 5 2.8 5 5v1H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-unlock\" viewBox=\"0 0 24 24\"><path d=\"M13 17.816V19a1 1 0 0 1-2 0v-1.184A2.996 2.996 0 0 1 9 15c0-1.654 1.346-3 3-3s3 1.346 3 3a2.996 2.996 0 0 1-2 2.816M20 8H8V6c0-2.206 1.794-4 4-4 1.447 0 2.788.793 3.499 2.069a1 1 0 1 0 1.747-.974A6.015 6.015 0 0 0 12 0C8.691 0 6 2.691 6 6v2H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-upload\" viewBox=\"0 0 24 24\"><path d=\"M12 17.999a1 1 0 0 0 1-1V5.413l3.293 3.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-5-5a.999.999 0 0 0-1.089-.216.999.999 0 0 0-.325.216l-5 5a.999.999 0 1 0 1.414 1.414L11 5.413v11.586a1 1 0 0 0 1 1zm-7-3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5a1 1 0 0 0-2 0v4H6v-4a1 1 0 0 0-1-1z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-upvote-reply-tiny\" viewBox=\"0 0 12 12\"><path d=\"M10.707 5.292l-4-4a1.001 1.001 0 0 0-1.414 0l-4 4a.999.999 0 1 0 1.414 1.414L5 4.413v5.586a1 1 0 0 0 2 0V4.413l2.293 2.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-upvote-small\" viewBox=\"0 0 18 18\"><path fill-rule=\"evenodd\" d=\"M12.53 8.78a.748.748 0 0 1-1.06 0L9.75 7.06v6.44a.75.75 0 0 1-1.5 0V7.06L6.53 8.78a.75.75 0 1 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06M9 0C4.037 0 0 4.037 0 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9\"/></symbol><symbol id=\"wds-icons-upvote-tiny\" viewBox=\"0 0 12 12\"><path fill-rule=\"evenodd\" d=\"M8.354 5.854a.499.499 0 0 1-.707 0L6.5 4.707V9a.5.5 0 0 1-1 0V4.707L4.354 5.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708M6 0C2.692 0 0 2.692 0 6c0 3.309 2.692 6 6 6 3.309 0 6-2.691 6-6 0-3.308-2.691-6-6-6\"/></symbol><symbol id=\"wds-icons-upvote\" viewBox=\"0 0 24 24\"><path fill-rule=\"evenodd\" d=\"M16.707 11.707a.997.997 0 0 1-1.414 0L13 9.414V18a1 1 0 0 1-2 0V9.414l-2.293 2.293a.999.999 0 1 1-1.414-1.414l4-4a.999.999 0 0 1 1.089-.216c.122.051.233.124.325.216l4 4a.999.999 0 0 1 0 1.414M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0\"/></symbol><symbol id=\"wds-icons-user\" viewBox=\"0 0 24 24\"><path d=\"M12 14c3.309 0 6-2.691 6-6V6c0-3.309-2.691-6-6-6S6 2.691 6 6v2c0 3.309 2.691 6 6 6zm5 2H7c-3.86 0-7 3.14-7 7a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1c0-3.86-3.14-7-7-7z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-video-camera\" viewBox=\"0 0 24 24\"><path d=\"M23.6 6.2c-.3-.2-.6-.2-.9-.1L17 8.5V5c0-.6-.4-1-1-1H1c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h15c.6 0 1-.4 1-1v-3.5l5.6 2.4c.1.1.3.1.4.1.2 0 .4-.1.6-.2.3-.2.4-.5.4-.8V7c0-.3-.2-.6-.4-.8z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-vkontakte\" viewBox=\"0 0 24 24\"><path d=\"M8.169 7.816a1.17 1.17 0 0 1 .792-.65 5.11 5.11 0 0 1 1.037-.175 27.89 27.89 0 0 1 1.925-.025c.329.006.662.048.984.117.591.126.88.45.924 1.062.03.439.013.882-.003 1.322-.018.462-.064.924-.089 1.386a13.41 13.41 0 0 0-.024.981c.007.384.044.77.285 1.09.233.31.279.34.621.132.189-.115.348-.294.487-.472.964-1.23 1.699-2.59 2.26-4.052.054-.138.124-.27.179-.407.182-.446.528-.631.983-.633.414-.001.829.022 1.244.024.62.002 1.24-.012 1.861-.004.267.005.538.024.797.082.353.078.477.305.41.666-.094.508-.315.965-.567 1.407-.464.812-1.043 1.54-1.612 2.275a68.25 68.25 0 0 0-1.066 1.42 1.933 1.933 0 0 0-.191.345c-.229.504-.158.905.252 1.32.419.422.855.828 1.276 1.248.62.62 1.19 1.284 1.655 2.031.117.187.205.402.259.615.068.273-.05.5-.278.658-.265.187-.575.248-.884.251-.645.008-1.292-.013-1.937-.02-.326-.004-.653-.011-.976.067-.09.023-.2-.01-.296-.033-.618-.148-1.127-.489-1.587-.916-.454-.422-.833-.91-1.221-1.39-.14-.173-.3-.334-.478-.466a.989.989 0 0 0-.443-.189c-.321-.046-.577.107-.678.423-.083.263-.116.543-.155.82-.036.272-.037.55-.077.824-.075.517-.227.743-.878.859-.536.094-1.072.047-1.607-.001-.74-.069-1.468-.207-2.166-.472-1.063-.401-1.96-1.049-2.739-1.874-.822-.873-1.521-1.845-2.186-2.841-1-1.5-1.835-3.091-2.607-4.719-.217-.458-.452-.91-.565-1.41-.04-.178-.06-.36-.091-.539-.018-.107.016-.19.115-.223.21-.069.421-.17.634-.18.528-.026 1.057-.006 1.586-.01.44-.004.88-.019 1.319-.022.1-.001.2.02.3.034a.732.732 0 0 1 .572.41c.124.25.254.497.363.754a20.133 20.133 0 0 0 1.94 3.517c.16.233.32.47.503.684.1.118.237.217.376.285.23.113.435.048.54-.184a2.32 2.32 0 0 0 .204-.662c.13-.972.145-1.95.053-2.925a4.61 4.61 0 0 0-.126-.662c-.077-.312-.278-.525-.568-.652a38.53 38.53 0 0 1-.494-.222c-.05-.021-.095-.051-.147-.08\"/></symbol><symbol id=\"wds-icons-volume-off-small\" viewBox=\"0 0 18 18\"><path d=\"M8.45 2.17L4.664 6.28H1.036C.256 6.28 0 6.739 0 7.175v3.522c0 .436.256.985 1.036.985h3.646l3.785 4.176a1.1 1.1 0 0 0 .533.143.964.964 0 0 0 .5-.137c.33-.185.5-.526.5-.897V3.013c0-.37-.17-.713-.5-.898-.33-.186-.72-.13-1.05.054zm7.192 7.33l2.121-2.122a.807.807 0 1 0-1.142-1.141l-2.122 2.12-2.12-2.12a.808.808 0 0 0-1.142 1.141L13.358 9.5l-2.121 2.121a.807.807 0 1 0 1.142 1.142l2.12-2.12 2.122 2.12a.805.805 0 0 0 1.142 0 .807.807 0 0 0 0-1.142L15.642 9.5z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-volume-off\" viewBox=\"0 0 24 24\"><path d=\"M6 8.007H1.347C.333 8.007 0 8.769 0 9.391v5.032C0 15.045.333 16 1.347 16H6l5.007 5.796c.215.132.454.205.693.205.24 0 .436-.063.65-.196.429-.265.65-.75.65-1.28V3.447c0-.53-.221-1.02-.65-1.284-.429-.265-.935-.187-1.365.078L6 8.007zM20.305 12l2.425-2.425a.922.922 0 1 0-1.306-1.305l-2.425 2.424-2.423-2.424a.923.923 0 0 0-1.306 1.305L17.695 12l-2.425 2.425a.922.922 0 1 0 1.306 1.304L19 13.306l2.425 2.423a.92.92 0 0 0 1.306 0 .922.922 0 0 0 0-1.304L20.305 12z\" fill-rule=\"evenodd\"/></symbol><symbol id=\"wds-icons-volume-small\" viewBox=\"0 0 18 18\"><g fill-rule=\"evenodd\"><path d=\"M8.45 2.17L4.664 6.28H1.036C.256 6.28 0 6.739 0 7.175v3.522c0 .436.256.985 1.036.985h3.646l3.785 4.176a1.1 1.1 0 0 0 .533.143.964.964 0 0 0 .5-.137c.33-.185.5-.526.5-.897V3.013c0-.37-.17-.713-.5-.898-.33-.186-.72-.13-1.05.054zm4.95 10.156a4.393 4.393 0 0 0 0-6.19.708.708 0 0 0-1.004 1 2.978 2.978 0 0 1 0 4.192.707.707 0 1 0 1.003.998z\"/><path d=\"M17.515 9.231A6.186 6.186 0 0 0 15.7 4.84a.707.707 0 1 0-1.003.998A4.777 4.777 0 0 1 16.1 9.231a4.778 4.778 0 0 1-1.4 3.394.708.708 0 1 0 1.002.999 6.186 6.186 0 0 0 1.814-4.393z\"/></g></symbol><symbol id=\"wds-icons-volume\" viewBox=\"0 0 24 24\"><g fill-rule=\"evenodd\"><path d=\"M6 8.007H1.347C.333 8.007 0 8.769 0 9.391v5.032C0 15.045.333 16 1.347 16H6l5.007 5.796c.215.132.454.205.693.205.24 0 .436-.063.65-.196.429-.265.65-.75.65-1.28V3.447c0-.53-.221-1.02-.65-1.284-.429-.265-.935-.187-1.365.078L6 8.007zm11.612 8.524a5.858 5.858 0 0 0 0-8.253.944.944 0 0 0-1.337 1.332 3.97 3.97 0 0 1 0 5.59.943.943 0 1 0 1.337 1.331z\"/><path d=\"M23.03 12.135c0-2.21-.859-4.292-2.418-5.857a.943.943 0 1 0-1.337 1.332 6.37 6.37 0 0 1 1.868 4.525 6.37 6.37 0 0 1-1.868 4.525.943.943 0 1 0 1.338 1.332 8.249 8.249 0 0 0 2.418-5.857z\"/></g></symbol><symbol id=\"wds-icons-weibo\" viewBox=\"0 0 24 24\"><path d=\"M16.562 11.618c-.273-.081-.46-.137-.318-.493.31-.775.342-1.443.006-1.92-.63-.894-2.353-.845-4.328-.024 0 0-.62.27-.461-.219.303-.97.258-1.783-.215-2.253-1.072-1.065-3.921.04-6.365 2.468-1.83 1.819-2.893 3.746-2.893 5.413 0 3.188 4.115 5.126 8.14 5.126 5.275 0 8.785-3.047 8.785-5.465 0-1.46-1.238-2.29-2.351-2.633m-6.424 6.955c-3.211.315-5.984-1.127-6.192-3.223-.209-2.095 2.226-4.049 5.437-4.364 3.212-.316 5.985 1.127 6.193 3.221.208 2.096-2.226 4.05-5.438 4.366m9.927-12.789a5.155 5.155 0 0 0-4.888-1.572.738.738 0 1 0 .31 1.444c1.234-.26 2.57.12 3.476 1.117a3.611 3.611 0 0 1 .763 3.55.744.744 0 0 0 1.414.455v-.003a5.076 5.076 0 0 0-1.075-4.991\"/><path d=\"M18.109 7.539a2.51 2.51 0 0 0-2.381-.765.635.635 0 1 0 .266 1.242 1.23 1.23 0 0 1 1.165.374c.303.334.385.79.255 1.19a.635.635 0 0 0 .411.8.64.64 0 0 0 .805-.41 2.47 2.47 0 0 0-.521-2.431m-7.649 5.059c-1.53-.395-3.257.362-3.92 1.7-.676 1.365-.023 2.88 1.521 3.375 1.6.513 3.485-.273 4.14-1.746.647-1.44-.16-2.922-1.742-3.329m-1.167 3.486c-.31.492-.976.708-1.477.48-.494-.223-.64-.795-.329-1.275.307-.478.95-.691 1.447-.484.503.213.664.781.359 1.279m1.023-1.306c-.112.191-.36.283-.555.204-.191-.079-.251-.292-.142-.48.112-.186.35-.277.541-.202.194.07.264.286.156.478\"/></symbol><symbol id=\"wds-icons-wykop\" viewBox=\"0 0 24 24\"><path d=\"M6.76 20.985a9.543 9.543 0 0 1-2.192-.45c-2.005-.646-2.991-2.095-3.251-3.988a34.21 34.21 0 0 1-.081-8.58c.308-2.687 2.073-4.3 4.983-4.635 3.068-.353 6.147-.287 9.223-.17a19.45 19.45 0 0 1 3.321.41c2.425.52 3.734 2.024 3.981 4.351.26 2.447.35 4.898.157 7.35-.093 1.183-.247 2.37-.935 3.412-.927 1.405-2.37 2.057-4.039 2.22-1.942.19-9.402.211-11.167.08zm7.421-2.064c1.314-.076 2.63-.154 3.933-.313.836-.102 1.547-.53 1.87-1.295.262-.622.516-1.291.548-1.95.093-1.902.101-3.81.08-5.715-.008-.658-.153-1.325-.322-1.967-.314-1.19-1.13-1.917-2.448-2.077-.743-.09-1.491-.189-2.24-.202a175.972 175.972 0 0 0-5.531-.018c-1.19.016-2.381.071-3.565.176-1.546.136-2.424.863-2.808 2.222a5.68 5.68 0 0 0-.126.546c-.345 1.919-.274 3.854-.204 5.784.028.78.155 1.565.317 2.333.23 1.096.928 1.842 2.101 2.132.41.101.833.182 1.253.203 1.656.083 6.422.182 7.142.14zm.995-12.884L12.6 7.227l3.196 6.103-1.269.6-3.248-6.091L8.66 9.048l3.204 6.117-1.269.6L7.34 9.66l-2.563 1.184 3.87 7.369 10.368-4.835-3.838-7.34\"/></symbol><symbol id=\"wds-icons-youtube\" viewBox=\"0 0 24 24\"><path d=\"M23.8 7.6s-.2-1.7-1-2.4c-.9-1-1.9-1-2.4-1C17 4 12 4 12 4s-5 0-8.4.2c-.5.1-1.5.1-2.4 1-.7.7-1 2.4-1 2.4S0 9.5 0 11.5v1.8c0 1.9.2 3.9.2 3.9s.2 1.7 1 2.4c.9 1 2.1.9 2.6 1 1.9.2 8.2.2 8.2.2s5 0 8.4-.3c.5-.1 1.5-.1 2.4-1 .7-.7 1-2.4 1-2.4s.2-1.9.2-3.9v-1.8c0-1.9-.2-3.8-.2-3.8zM9.5 15.5V8.8l6.5 3.4-6.5 3.3z\"/></symbol><symbol id=\"wds-player-icon-play\" viewBox=\"0 0 180 180\"><g fill=\"none\" fill-rule=\"evenodd\"><g opacity=\".9\" transform=\"rotate(90 75 90)\"><use fill=\"#000\" filter=\"url(#a)\" xlink:href=\"#b\"/><use fill=\"#FFF\" xlink:href=\"#b\"/></g><path fill=\"#00D6D6\" fill-rule=\"nonzero\" d=\"M80.87 58.006l34.32 25.523c3.052 2.27 3.722 6.633 1.496 9.746a6.91 6.91 0 0 1-1.497 1.527l-34.32 25.523c-3.053 2.27-7.33 1.586-9.558-1.527A7.07 7.07 0 0 1 70 114.69V63.643c0-3.854 3.063-6.977 6.84-6.977 1.45 0 2.86.47 4.03 1.34z\"/></g></symbol></svg>";

var IconSprite = function IconSprite() {
  return (
    // eslint-disable-next-line react/no-danger
    React.createElement('div', { dangerouslySetInnerHTML: { __html: sprite } })
  );
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

  return React.createElement(
    'svg',
    {
      className: 'fandom-video-play-icon ' + className,
      style: style,
      viewBox: '0 0 180 180',
      xmlns: 'http://www.w3.org/2000/svg',
      xmlnsXlink: 'http://www.w3.org/1999/xlink'
    },
    React.createElement(
      'defs',
      null,
      React.createElement('rect', { id: 'fandom-video-play-icon_b', width: '150', height: '150', rx: '75' }),
      React.createElement(
        'filter',
        {
          x: '-15%',
          y: '-15%',
          width: '130%',
          height: '130%',
          filterUnits: 'objectBoundingBox',
          id: 'fandom-video-play-icon_a'
        },
        React.createElement('feOffset', { 'in': 'SourceAlpha', result: 'shadowOffsetOuter1' }),
        React.createElement('feGaussianBlur', { stdDeviation: '7.5', 'in': 'shadowOffsetOuter1', result: 'shadowBlurOuter1' }),
        React.createElement('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0', 'in': 'shadowBlurOuter1' })
      )
    ),
    React.createElement(
      'g',
      { fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { className: 'fandom-video-play-icon__circle', opacity: '.9', transform: 'rotate(90 75 90)' },
        React.createElement('use', { fill: '#000', filter: 'url(#fandom-video-play-icon_a)', xlinkHref: '#fandom-video-play-icon_b' }),
        React.createElement('use', { fill: '#fff', xlinkHref: '#fandom-video-play-icon_b' })
      ),
      React.createElement('path', {
        className: 'fandom-video-play-icon__triangle',
        d: 'M80.87 58.006l34.32 25.523c3.052 2.27 3.722 6.635 1.496 9.748a6.91 6.91 0 0 1-1.497 1.527l-34.318 25.523c-3.053 2.27-7.332 1.586-9.558-1.527A7.07 7.07 0 0 1 70 114.69V63.643c0-3.854 3.063-6.977 6.84-6.977 1.449 0 2.86.469 4.03 1.34z',
        fillRule: 'nonzero'
      })
    )
  );
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
  return React.createElement(
    'div',
    { className: 'wds-content-well ' + className },
    children
  );
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
  return React.createElement(
    'div',
    { className: 'wds-fandom-content-well ' + className },
    children
  );
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

var ExpandableText = function (_React$Component) {
  inherits(ExpandableText, _React$Component);

  function ExpandableText(props) {
    classCallCheck(this, ExpandableText);

    var _this = possibleConstructorReturn(this, (ExpandableText.__proto__ || Object.getPrototypeOf(ExpandableText)).call(this, props));

    _this.handleExpandClick = _this.handleExpandClick.bind(_this);

    var text = makeShortText(props.text, props.characterLimit);
    _this.state = {
      isExpandable: text.length < props.text.length,
      isExpanded: false,
      text: text
    };
    return _this;
  }

  createClass(ExpandableText, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      var text = makeShortText(newProps.text, newProps.characterLimit);
      this.setState({
        isExpandable: text.length < newProps.text.length,
        isExpanded: false,
        text: text
      });
    }
  }, {
    key: 'handleExpandClick',
    value: function handleExpandClick() {
      this.setState({
        isExpandable: false,
        isExpanded: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var expandBlock = React.createElement(
        'span',
        null,
        this.props.ellipsis,
        '\xA0',
        React.createElement(
          'button',
          {
            className: 'expandable-text__expand ' + this.props.expandClassName,
            onClick: this.handleExpandClick
          },
          this.props.expandLabel
        )
      );

      return React.createElement(
        'span',
        { className: 'expandable-text ' + this.props.className },
        this.state.isExpanded ? this.props.text : this.state.text,
        this.state.isExpandable && expandBlock
      );
    }
  }]);
  return ExpandableText;
}(React.Component);

ExpandableText.propTypes = {
  /**
   * Additional class name
   */
  className: PropTypes.string,
  /**
   * Character limit
   */
  characterLimit: PropTypes.number.isRequired,
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
  ellipsis: '\u2026',
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
  return '/top-crop/width/' + width + '/height/' + height;
}

function getVignetteParamsThumbnail(width, height, allowUpscaling) {
  if (allowUpscaling) {
    return '/thumbnail/width/' + width + '/height/' + height;
  }
  return '/thumbnail-down/width/' + width + '/height/' + height;
}

function getVignetteParamsScale(width, height, allowUpscaling) {
  if (width) {
    if (allowUpscaling) {
      return '/scale-to-width/' + width;
    }
    return '/scale-to-width-down/' + width;
  }

  if (height) {
    return '/scale-to-height-down/' + height;
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
      rest = objectWithoutProperties(_ref, ['allowUpscaling', 'alt', 'className', 'height', 'image', 'method', 'width']);

  var imageUrlOrUuid = image.replace('//static.wikia.nocookie.net/', '//vignette.wikia.nocookie.net/');

  if (imageUrlOrUuid.indexOf('vignette.wikia.nocookie.net') !== -1) {
    var uuid = getUuid(imageUrlOrUuid);

    if (uuid) {
      var params = getVignetteParams({ width: width, height: height, method: method, allowUpscaling: allowUpscaling });
      imageUrlOrUuid = 'https://vignette.wikia.nocookie.net/' + uuid + params;
    }
  }

  return React.createElement('img', _extends({ className: className, src: imageUrlOrUuid, alt: alt }, rest));
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
  width: PropTypes.number,
  /**
   * Desired image mode
   */
  method: PropTypes.oneOf(['auto', 'scale', 'thumbnail', 'top-crop'])
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
exports.IconSprite = IconSprite;
exports.Icon = Icon;
exports.VideoPlayIcon = VideoPlayIcon;
exports.ContentWell = ContentWell;
exports.FandomContentWell = FandomContentWell;
exports.ExpandableText = ExpandableText;
exports.Vignette = Vignette;
exports.bannerNotificationsMessageType = messageType;
