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
 * A helper component that encapsulates image preloading logic.
 */

var ImagePreloader = /*#__PURE__*/function (_React$Component) {
  _inherits(ImagePreloader, _React$Component);

  var _super = _createSuper(ImagePreloader);

  function ImagePreloader() {
    var _this;

    _classCallCheck(this, ImagePreloader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      src: null,
      srcSet: null,
      state: ImagePreloader.STATE.PENDING,
      error: null
    });

    _defineProperty(_assertThisInitialized(_this), "requestId", null);

    _defineProperty(_assertThisInitialized(_this), "image", null);

    _defineProperty(_assertThisInitialized(_this), "handleStartFetch", function (src, srcSet) {
      _this.handleStopFetch();
      /* istanbul ignore next */


      _this.requestId = requestAnimationFrame(function () {
        var image = document.createElement('img');
        image.onload = _this.handleSuccess;
        image.onerror = _this.handleError;
        image.src = src;
        image.srcset = srcSet || src;

        if (image.complete) {
          _this.handleSuccess();
        }

        _this.image = image;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleStopFetch", function () {
      if (_this.requestId) {
        cancelAnimationFrame(_this.requestId);
        _this.requestId = null;
      }

      _this.handleImageClear();
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageClear", function () {
      /* istanbul ignore next */
      if (_this.image) {
        _this.image.src = '';
        _this.image.srcset = '';
        _this.image.onload = null;
        _this.image.onerror = null;
        _this.image = null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleSuccess", function () {
      _this.setState({
        state: ImagePreloader.STATE.SUCCESS,
        src: _this.props.src
      });

      _this.handleStopFetch();
    });

    _defineProperty(_assertThisInitialized(_this), "handleError", function (error) {
      _this.setState({
        state: ImagePreloader.STATE.ERROR,
        src: _this.props.src,
        srcSet: _this.props.srcSet,
        error: error
      });

      _this.handleStopFetch();
    });

    return _this;
  }

  _createClass(ImagePreloader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.src) {
        this.handleStartFetch(this.props.src);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.src === null) {
        this.handleStopFetch();
      }

      if (this.props.src && this.props.src !== prevProps.src && !this.state.state !== ImagePreloader.STATE.PENDING) {
        this.handleStartFetch(this.props.src, this.props.srcSet);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleStopFetch();
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children(this.state);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return {
        src: nextProps.src === null ? null : prevState.src,
        srcSet: nextProps.srcSet === null ? null : prevState.srcSet,
        state: nextProps.src === prevState.src ? prevState.state : ImagePreloader.STATE.PENDING
      };
    }
  }]);

  return ImagePreloader;
}(React.Component);

_defineProperty(ImagePreloader, "STATE", Object.freeze({
  PENDING: 'pending',
  SUCCESS: 'success',
  ERROR: 'error'
}));

_defineProperty(ImagePreloader, "propTypes", {
  /** A function that will recieve the state, see below */
  children: PropTypes.func,

  /* source for the image */
  src: PropTypes.string,

  /** Optional `srcSet` for the image */
  srcSet: PropTypes.string
});

_defineProperty(ImagePreloader, "defaultProps", {
  children: null,
  src: null,
  srcSet: null
});

module.exports = ImagePreloader;
