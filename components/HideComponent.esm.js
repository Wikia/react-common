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
 * Component that's used to either show or hide own children.
 *
 * Since both `show` and `hide` shouldn't be used at the same time, `hide` has a priority
 *
 * | `hide` | `show` | Component visible? |
 * | ----------- | ----------- | ----------- |
 * | `undefined` | `undefined` | yes |
 * | `undefined` | `true` | yes |
 * | `undefined` | `false` | no |
 * | `true` | (any value) | no |
 * | `false` | (any value) | yes |
 */

var HideComponent = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(HideComponent, _React$PureComponent);

  var _super = _createSuper(HideComponent);

  function HideComponent() {
    _classCallCheck(this, HideComponent);

    return _super.apply(this, arguments);
  }

  _createClass(HideComponent, [{
    key: "shouldShow",
    value: function shouldShow() {
      var _this$props = this.props,
          show = _this$props.show,
          hide = _this$props.hide;

      if (typeof hide !== 'undefined') {
        if (hide === true) {
          return false;
        }

        return true;
      }

      if (typeof show === 'undefined' || show === true) {
        return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      return this.shouldShow() ? this.props.children : null;
    }
  }]);

  return HideComponent;
}(React.PureComponent);

HideComponent.propTypes = {
  /** @ignore */
  children: PropTypes.node,

  /** if `true` the component will be hidden; if `false` the component will be shown */
  hide: PropTypes.bool,

  /** if `true` the component will be shown; if `false` the component will be hidden */
  show: PropTypes.bool
};
HideComponent.defaultProps = {
  children: null,
  hide: undefined,
  show: undefined
};

export default HideComponent;
