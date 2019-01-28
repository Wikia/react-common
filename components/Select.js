'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));
var ReactSelect = require('react-select');
var ReactSelect__default = _interopDefault(ReactSelect);

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
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

var IndicatorsContainer = function IndicatorsContainer(props) {
  var isLoading = props.selectProps.isLoading; // eslint-disable-next-line no-unused-vars

  var _props$children = _slicedToArray(props.children, 4),
      clearIndicator = _props$children[0],
      spinner = _props$children[1],
      indicatorSeparator = _props$children[2],
      dropdownIndicator = _props$children[3];

  return React.createElement(ReactSelect.components.IndicatorsContainer, props, spinner, isLoading ? null : dropdownIndicator, indicatorSeparator);
};

function createSelectContainer(classNamePrefix, customClassName) {
  var className = ["".concat(classNamePrefix, "__wrapper"), customClassName].filter(Boolean).join(' ');
  return function (props) {
    return React.createElement("div", {
      className: className
    }, React.createElement(ReactSelect.components.SelectContainer, props));
  };
}

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconMagnifyingGlass = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18m12.207 3.293l-4.823-4.822A9.455 9.455 0 0 0 20 10.5C20 5.262 15.738 1 10.5 1S1 5.262 1 10.5 5.262 20 10.5 20c2.26 0 4.338-.793 5.97-2.115l4.823 4.822a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconMagnifyingGlass$1 = (function (props) {
  return React.createElement(IconMagnifyingGlass, props);
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconDropdown = ((_ref) => {
  let props = _objectWithoutProperties$2(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$2({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-components/Select-a", d: "M12.71 18.707a1 1 0 0 1-1.415 0l-10-10C.665 8.077 1.11 7 2.002 7h20c.89 0 1.337 1.077.707 1.707l-10 10z" })
    ),
    React.createElement("use", { xlinkHref: "#id-components/Select-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconDropdown$1 = (function (props) {
  return React.createElement(IconDropdown, props);
});

var SearchDropdownIndicator = function SearchDropdownIndicator(props) {
  return React.createElement(ReactSelect.components.DropdownIndicator, props, React.createElement(IconMagnifyingGlass$1, {
    className: "search-dropdown-indicator"
  }));
};
var DefaultDropdownIndicator = function DefaultDropdownIndicator(props) {
  var className = ['default-dropdown-indicator', props.isFocused ? 'is-focused' : undefined].filter(Boolean).join(' ');
  return React.createElement(ReactSelect.components.DropdownIndicator, props, React.createElement(IconDropdown$1, {
    className: className
  }));
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

var LoadingIndicator = function LoadingIndicator() {
  return React.createElement(Spinner, {
    size: 24
  });
};

function callWithValues(func, values, isMulti) {
  if (!func) {
    return;
  }

  if (isMulti) {
    func(values);
    return;
  }

  if (values.length === 0) {
    func(null, null);
    return;
  }

  var _values$ = values[0],
      value = _values$.value,
      label = _values$.label;
  func(value, label);
}

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  _createClass(Select, null, [{
    key: "createOption",
    value: function createOption(value, label) {
      return {
        value: value,
        label: label
      };
    }
  }]);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onBlur", function () {
      if (_this.preventBlur || !_this.selectRef.current) {
        _this.preventBlur = false;
        return;
      }

      callWithValues(_this.props.onBlur, _this.selectRef.current.select.getCommonProps().getValue(), _this.props.multi);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (values) {
      _this.preventBlur = true;
      var valuesAsArray = _this.props.multi ? values : [values];
      callWithValues(_this.props.onChange, valuesAsArray, _this.props.multi);
      callWithValues(_this.props.onBlur, valuesAsArray, _this.props.multi);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFocus", function () {
      if (!_this.props.onFocus) {
        return;
      }

      _this.props.onFocus();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onRequestNoOptionsMessage", function (_ref) {
      var inputValue = _ref.inputValue;
      var onNoOptions = _this.props.onNoOptions;

      if (typeof onNoOptions === 'function') {
        return onNoOptions(inputValue);
      }

      return onNoOptions;
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTextInputChange", function (input) {
      if (_this.props.onTextInputChange) {
        _this.props.onTextInputChange(input);
      }
    });

    _this.selectRef = React.createRef(); // react-select blur immediately follows change, but the updated value isn't available yet, so we're
    // going to manually fire the onBlur handler on a change so that we can reliably pass the value

    _this.preventBlur = false;
    return _this;
  }

  _createClass(Select, [{
    key: "getValueFromProps",
    value: function getValueFromProps() {
      var _this$props = this.props,
          value = _this$props.value,
          options = _this$props.options;

      if (!value) {
        return undefined;
      }

      var valuesWithLabels = value;

      if (!(value instanceof Array)) {
        valuesWithLabels = [value];
      }

      valuesWithLabels = valuesWithLabels.map(function (v) {
        return options.find(function (o) {
          return o.value === v;
        });
      }).filter(Boolean);

      if (valuesWithLabels.length === 0) {
        return undefined;
      }

      if (this.props.multi) {
        return valuesWithLabels;
      }

      return valuesWithLabels[0];
    }
  }, {
    key: "render",
    value: function render() {
      var className = 'fandom-select';
      return React.createElement(ReactSelect__default, {
        ref: this.selectRef,
        openMenuOnFocus: true,
        autoFocus: this.props.autoFocus,
        blurInputOnSelect: true,
        className: className,
        classNamePrefix: className,
        controlShouldRenderValue: this.props.multi ? this.props.multiValueRender : true,
        isDisabled: this.props.disabled || this.props.loading,
        isLoading: this.props.loading,
        isMulti: this.props.multi,
        isSearchable: this.props.searchable,
        noOptionsMessage: this.onRequestNoOptionsMessage,
        placeholder: this.props.placeholder,
        onBlur: this.onBlur,
        onChange: this.onChange,
        onFocus: this.onFocus,
        onInputChange: this.onTextInputChange,
        options: this.props.options,
        value: this.getValueFromProps(),
        inputId: "fandom-select-input",
        components: {
          IndicatorSeparator: null,
          DropdownIndicator: this.props.searchable ? SearchDropdownIndicator : DefaultDropdownIndicator,
          LoadingIndicator: LoadingIndicator,
          IndicatorsContainer: IndicatorsContainer,
          SelectContainer: createSelectContainer(className, this.props.className)
        }
      });
    }
  }]);

  return Select;
}(React.Component);

_defineProperty(Select, "propTypes", {
  /** Focus the control when it is mounted */
  autoFocus: PropTypes.bool,

  /** Additional class for root element */
  className: PropTypes.string,

  /** whether or not the input is disabled */
  disabled: PropTypes.bool,

  /** whether or not to show loading indicator */
  loading: PropTypes.bool,

  /** whether or not multiple values are allowed */
  multi: PropTypes.bool,

  /** whether or not the component should render values when `multi=true` */
  multiValueRender: PropTypes.bool,

  /** called when the input is blurred `onBlur(val, label)` */
  onBlur: PropTypes.func,

  /** called when the input is changed */
  onChange: PropTypes.func,

  /** called when input is focused `onFocus()` */
  onFocus: PropTypes.func,

  /** message when no options are present. If a `func`, the only argument is the input to the text input */
  onNoOptions: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),

  /** fired when the search input is changed. `onTextInputChange(currentInput)` */
  onTextInputChange: PropTypes.func,

  /** options to display. Use `createOption` exported from this module to create options */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })),

  /** Placeholder text used when no value is selected */
  placeholder: PropTypes.string,

  /** whether or not to allow text searching */
  searchable: PropTypes.bool,

  /** when using as controlled input, the currently selected values */
  value: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.any), PropTypes.any])
});

_defineProperty(Select, "defaultProps", {
  autoFocus: false,
  className: '',
  disabled: false,
  loading: false,
  multi: false,
  multiValueRender: true,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onNoOptions: 'No Options',
  onTextInputChange: undefined,
  options: [],
  placeholder: 'Select...',
  searchable: true,
  value: undefined
});

module.exports = Select;
