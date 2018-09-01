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
            this.forceFocus();
        }
    }, {
        key: 'getClassName',
        value: function getClassName() {
            var _props = this.props,
                disabled = _props.disabled,
                readonly = _props.readonly,
                status = _props.status,
                resize = _props.resize,
                className = _props.className;
            var _state = this.state,
                isEmpty = _state.isEmpty,
                isFocused = _state.isFocused;


            var statusClass = null;

            if (isFocused) {
                statusClass = 'is-focused';
            } else if (isEmpty) {
                statusClass = 'is-empty';
            }

            return ['wds-input', disabled ? 'is-disabled' : null, readonly ? 'is-readonly' : null, status === 'error' ? 'has-error' : null, typeof resize === 'boolean' && resize ? 'is-resize' : null, statusClass, className].filter(Boolean).join(' ');
        }
    }, {
        key: 'getInputClassName',
        value: function getInputClassName() {
            var inputClassName = this.props.inputClassName;


            return ['wds-input__field', inputClassName].join(' ');
        }
    }, {
        key: 'getLabelClassName',
        value: function getLabelClassName() {
            var labelClassName = this.props.labelClassName;


            return ['wds-input__label', labelClassName].join(' ');
        }
    }, {
        key: 'getHintClassName',
        value: function getHintClassName() {
            var hintClassName = this.props.hintClassName;


            return ['wds-input__hint', hintClassName].join(' ');
        }
    }, {
        key: 'getSharedInputProps',
        value: function getSharedInputProps() {
            var _state2 = this.state,
                id = _state2.id,
                value = _state2.value;
            var _props2 = this.props,
                disabled = _props2.disabled,
                onKeyDown = _props2.onKeyDown,
                onKeyPress = _props2.onKeyPress,
                onKeyUp = _props2.onKeyUp,
                onPaste = _props2.onPaste,
                placeholder = _props2.placeholder,
                readonly = _props2.readonly,
                tabIndex = _props2.tabIndex;


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
            var _props3 = this.props,
                readonly = _props3.readonly,
                disabled = _props3.disabled,
                onChange = _props3.onChange;


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
        key: 'handleFocus',
        value: function handleFocus(event) {
            var _props4 = this.props,
                readonly = _props4.readonly,
                onFocus = _props4.onFocus;


            if (readonly) {
                return;
            }

            this.setState({
                isFocused: true
            });
            onFocus(event);
        }
    }, {
        key: 'handleBlur',
        value: function handleBlur(event) {
            var onBlur = this.props.onBlur;


            this.setState({
                isFocused: false
            });
            onBlur(event);
        }
    }, {
        key: 'isAutoFocus',
        value: function isAutoFocus() {
            var _props5 = this.props,
                autoFocus = _props5.autoFocus,
                forceFocus = _props5.forceFocus,
                disabled = _props5.disabled,
                readonly = _props5.readonly;


            return (autoFocus || forceFocus) && !disabled && !readonly;
        }
    }, {
        key: 'isForceFocus',
        value: function isForceFocus() {
            var _props6 = this.props,
                forceFocus = _props6.forceFocus,
                disabled = _props6.disabled,
                readonly = _props6.readonly;


            return forceFocus && !disabled && !readonly;
        }
    }, {
        key: 'isAutoResize',
        value: function isAutoResize() {
            var _props7 = this.props,
                resize = _props7.resize,
                disabled = _props7.disabled,
                readonly = _props7.readonly;


            return resize === 'auto' && !disabled && !readonly;
        }
    }, {
        key: 'autoFocus',
        value: function autoFocus() {
            if (this.isAutoFocus() && this.input) {
                this.input.focus();
            }
        }
    }, {
        key: 'forceFocus',
        value: function forceFocus() {
            if (this.isForceFocus() && this.input) {
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

            var rows = this.props.rows;
            var _state3 = this.state,
                dynamicTextareaHeight = _state3.dynamicTextareaHeight,
                value = _state3.value;


            var props = _extends({}, this.getSharedInputProps(), {
                rows: rows
            });

            if (this.isAutoResize()) {
                props.onInput = this.handleAutoResize;
            }

            if (dynamicTextareaHeight) {
                props.style = { height: dynamicTextareaHeight };
            }

            return React.createElement(
                'textarea',
                _extends({
                    ref: function ref(input) {
                        _this3.input = input;
                    }
                }, props),
                value
            );
        }
    }, {
        key: 'renderInput',
        value: function renderInput() {
            var _this4 = this;

            var type = this.props.type;


            if (type === 'multiline') {
                return this.renderMultiline();
            }

            var props = _extends({}, this.getSharedInputProps(), {
                type: type
            });

            return React.createElement('input', _extends({
                ref: function ref(input) {
                    _this4.input = input;
                }
            }, props));
        }
    }, {
        key: 'renderLabel',
        value: function renderLabel() {
            var id = this.state.id;
            var label = this.props.label;


            return React.createElement(
                'label',
                { className: this.getLabelClassName(), htmlFor: id },
                label
            );
        }
    }, {
        key: 'renderHint',
        value: function renderHint() {
            var hint = this.props.hint;


            if (!hint) {
                return null;
            }

            return React.createElement(
                'div',
                { className: this.getHintClassName() },
                hint
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
            return new Error('Prop ' + propName + ' is not used when placeholder is set');
        }

        // eslint-disable-next-line react/destructuring-assignment
        if (!props.placeholder && !props[propName]) {
            return new Error('Prop ' + propName + ' is required when placeholder is not set');
        }

        // eslint-disable-next-line react/destructuring-assignment
        if (typeof props[propName] !== 'string') {
            return new Error('Prop ' + propName + ' is not a string');
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
        props = objectWithoutProperties(_ref, ['name', 'className', 'small', 'tiny']);

    var isSmall = small || /-small$/.test(name);
    var isTiny = tiny || /-tiny$/.test(name);

    var classes = ['wds-icon', className, isSmall ? 'wds-icon-small' : '', isTiny ? 'wds-icon-tiny' : ''].filter(function (c) {
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
            var onClose = this.props.onClose;


            onClose(id);
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

        var shortText = makeShortText(props.text, props.characterLimit);

        _this.state = {
            isExpandable: shortText.length < props.text.length,
            isExpanded: false,
            shortText: shortText
        };
        return _this;
    }

    createClass(ExpandableText, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(newProps) {
            var shortText = makeShortText(newProps.text, newProps.characterLimit);

            this.setState({
                isExpandable: shortText.length < newProps.text.length,
                isExpanded: false,
                shortText: shortText
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
        key: 'renderExpandBlock',
        value: function renderExpandBlock() {
            var _props = this.props,
                ellipsis = _props.ellipsis,
                expandLabel = _props.expandLabel,
                expandClassName = _props.expandClassName;


            return React.createElement(
                'span',
                null,
                ellipsis,
                '\xA0',
                React.createElement(
                    'button',
                    {
                        className: 'expandable-text__expand ' + expandClassName,
                        onClick: this.handleExpandClick
                    },
                    expandLabel
                )
            );
        }
    }, {
        key: 'renderText',
        value: function renderText() {
            var text = this.props.text;
            var _state = this.state,
                isExpanded = _state.isExpanded,
                shortText = _state.shortText;


            return isExpanded ? text : shortText;
        }
    }, {
        key: 'render',
        value: function render() {
            var className = this.props.className;
            var isExpandable = this.state.isExpandable;


            return React.createElement(
                'span',
                { className: 'expandable-text ' + className },
                this.renderText(),
                isExpandable && this.renderExpandBlock()
            );
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
            var params = getVignetteParams({
                width: width, height: height, method: method, allowUpscaling: allowUpscaling
            });
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
