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

function makeShortText(text, characterLimit) {
  return text.substring(0, characterLimit);
}

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
/**
 * ExpandableText component can be used to temporarily limit text showed to the user.
 * It has a button used to fully expand the text.
 * If the source text is shorter than the limit the button do not show.
 *
 * Both button label and string used to ellipsis has to be configured.
 * Button and the text itself can be syled with classes passed to the component.
 */

var ExpandableText = /*#__PURE__*/function (_React$Component) {
  _inherits(ExpandableText, _React$Component);

  var _super = _createSuper(ExpandableText);

  function ExpandableText(props) {
    var _this;

    _classCallCheck(this, ExpandableText);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "handleExpandClick", function () {
      _this.setState({
        isExpandable: false,
        isExpanded: true
      });
    });

    var shortText = makeShortText(props.text, props.characterLimit);
    _this.state = {
      isExpandable: shortText.length < props.text.length,
      isExpanded: false,
      shortText: shortText
    };
    return _this;
  }

  _createClass(ExpandableText, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(newProps) {
      var shortText = makeShortText(newProps.text, newProps.characterLimit);
      this.setState({
        isExpandable: shortText.length < newProps.text.length,
        isExpanded: false,
        shortText: shortText
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

_defineProperty(ExpandableText, "propTypes", {
  /** Additional class name */
  characterLimit: PropTypes.number.isRequired,

  /** Character limit */
  className: PropTypes.string,

  /** Ellipsis (defaults to `&hellip;`) */
  ellipsis: PropTypes.string,

  /** Additional class name for the expand button */
  expandClassName: PropTypes.string,

  /** Label used on the expand button */
  expandLabel: PropTypes.string.isRequired,

  /** Full text to display */
  text: PropTypes.string.isRequired
});

_defineProperty(ExpandableText, "defaultProps", {
  className: '',
  ellipsis: "\u2026",
  expandClassName: ''
});

module.exports = ExpandableText;
