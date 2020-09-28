import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

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

var VIGNETTE_MODES = Object.freeze({
  auto: 'auto',
  scale: 'scale',
  smart: 'smart',
  thumbnail: 'thumbnail',
  topCrop: 'top-crop'
});
var VIGNETTE_UUID_REGEX = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
var VIGNETTE_SERVER_REGEX = /^https?:\/\/(vignette|static)\.wikia(-dev)?\.(pl|us|com|nocookie\.net)\//;
var VIGNETTE_BASE_IMAGE_REGEX = new RegExp(VIGNETTE_SERVER_REGEX.source + VIGNETTE_UUID_REGEX.source);
function isVignetteUrl(imageUrl) {
  return VIGNETTE_BASE_IMAGE_REGEX.test(imageUrl);
}
/**
 * Helper factory function
 */

function vignette(imageUrl) {
  return new VignetteHelper(imageUrl);
}
var VignetteHelper = /*#__PURE__*/function () {
  function VignetteHelper(imageUrl) {
    _classCallCheck(this, VignetteHelper);

    this.baseImage = undefined;
    this.set(imageUrl);
  }

  _createClass(VignetteHelper, [{
    key: "isOk",
    value: function isOk() {
      return !!this.baseImage;
    }
  }, {
    key: "resetParams",
    value: function resetParams() {
      this.allowUpscaling = false;
      this.height = undefined;
      this.mode = undefined;
      this.width = undefined;
    }
  }, {
    key: "set",
    value: function set(imageUrl) {
      this.resetParams();

      if (isVignetteUrl(imageUrl)) {
        var matches = imageUrl.match(VIGNETTE_BASE_IMAGE_REGEX);
        this.baseImage = matches[0]; // eslint-disable-line prefer-destructuring

        var paramsStr = imageUrl.substring(this.baseImage.length + 1); // if `imageUrl` has some params, grab them - basically revert `::getParams`

        if (paramsStr) {
          var params = paramsStr.split('/');

          switch (params[0]) {
            case 'smart':
              // /smart/width/123/height/123
              this.mode = VIGNETTE_MODES.smart;
              this.height = params[4]; // eslint-disable-line prefer-destructuring

              this.width = params[2]; // eslint-disable-line prefer-destructuring

              break;

            case 'top-crop':
              // /top-crop/width/123/height/123
              this.mode = VIGNETTE_MODES.topCrop;
              this.height = params[4]; // eslint-disable-line prefer-destructuring

              this.width = params[2]; // eslint-disable-line prefer-destructuring

              break;

            case 'thumbnail':
              // /thumbnail/width/123/height/123
              this.mode = VIGNETTE_MODES.thumbnail;
              this.allowUpscaling = true;
              this.height = params[4]; // eslint-disable-line prefer-destructuring

              this.width = params[2]; // eslint-disable-line prefer-destructuring

              break;

            case 'thumbnail-down':
              // /thumbnail-down/width/123/height/123
              this.mode = VIGNETTE_MODES.thumbnail;
              this.height = params[4]; // eslint-disable-line prefer-destructuring

              this.width = params[2]; // eslint-disable-line prefer-destructuring

              break;

            case 'scale-to-width':
              // /scale-to-width/1234
              this.mode = VIGNETTE_MODES.scale;
              this.allowUpscaling = true;
              this.width = params[1]; // eslint-disable-line prefer-destructuring

              break;

            case 'scale-to-width-down':
              // /scale-to-width-down/1234
              this.mode = VIGNETTE_MODES.scale;
              this.width = params[1]; // eslint-disable-line prefer-destructuring

              break;

            case 'scale-to-height-down':
              // /scale-to-height/1234
              this.mode = VIGNETTE_MODES.scale;
              this.height = params[1]; // eslint-disable-line prefer-destructuring

              break;

            default:
              console.error("Unknown vignette mode: ".concat(params[0], ", ignoring"));
          }
        }

        return true;
      }

      this.baseImage = undefined;
      return false;
    }
  }, {
    key: "getParams",
    value: function getParams() {
      var height = this.height,
          width = this.width,
          allowUpscaling = this.allowUpscaling;
      var mode = this.mode;

      if (mode === VIGNETTE_MODES.auto) {
        mode = width && height ? VIGNETTE_MODES.thumbnail : VIGNETTE_MODES.scale;
      }

      switch (mode) {
        case VIGNETTE_MODES.smart:
          return "/smart/width/".concat(width, "/height/").concat(height);

        case VIGNETTE_MODES.topCrop:
          return "/top-crop/width/".concat(width, "/height/").concat(height);

        case VIGNETTE_MODES.thumbnail:
          if (allowUpscaling) {
            return "/thumbnail/width/".concat(width, "/height/").concat(height);
          }

          return "/thumbnail-down/width/".concat(width, "/height/").concat(height);

        case VIGNETTE_MODES.scale:
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

        default:
          return '';
      }
    }
  }, {
    key: "get",
    value: function get() {
      return "".concat(this.baseImage).concat(this.getParams());
    }
  }, {
    key: "clone",
    value: function clone() {
      return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }
  }, {
    key: "withTransform",
    value: function withTransform(kv) {
      var myClone = this.clone();
      myClone.resetParams();
      Object.keys(kv).forEach(function (key) {
        myClone[key] = kv[key];
      });
      return myClone;
    }
  }, {
    key: "withScaleToHeight",
    value: function withScaleToHeight(height) {
      var allowUpscaling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.withTransform({
        mode: VIGNETTE_MODES.scale,
        width: undefined,
        height: height,
        allowUpscaling: allowUpscaling
      });
    }
  }, {
    key: "withScaleToWidth",
    value: function withScaleToWidth(width) {
      var allowUpscaling = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.withTransform({
        mode: VIGNETTE_MODES.scale,
        height: undefined,
        width: width,
        allowUpscaling: allowUpscaling
      });
    }
  }, {
    key: "withThumbnail",
    value: function withThumbnail(width, height) {
      var allowUpscaling = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return this.withTransform({
        mode: VIGNETTE_MODES.thumbnail,
        width: width,
        height: height,
        allowUpscaling: allowUpscaling
      });
    }
  }, {
    key: "withTopCrop",
    value: function withTopCrop(width, height) {
      return this.withTransform({
        mode: VIGNETTE_MODES.topCrop,
        width: width,
        height: height
      });
    }
  }, {
    key: "withSmart",
    value: function withSmart(width, height) {
      return this.withTransform({
        mode: VIGNETTE_MODES.smart,
        width: width,
        height: height
      });
    }
  }, {
    key: "withAuto",
    value: function withAuto() {
      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
      var allowUpscaling = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return this.withTransform({
        mode: VIGNETTE_MODES.auto,
        width: width,
        height: height,
        allowUpscaling: allowUpscaling
      });
    }
  }]);

  return VignetteHelper;
}();

function _createSuper$1(Derived) {
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
var LAZY_IMAGE_SIZE = 5;

var Image = /*#__PURE__*/function (_React$Component) {
  _inherits(Image, _React$Component);

  var _super = _createSuper$1(Image);

  function Image() {
    var _this;

    _classCallCheck(this, Image);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      src: _this.props.src,
      isLimbo: false
    });

    return _this;
  }

  _createClass(Image, [{
    key: "componentDidUpdate",
    // after the component updates once we want to
    value: function componentDidUpdate() {
      var _this2 = this;

      if (this.props.src !== this.state.src) {
        // this is one of the rare cases to conditionally call setState after a component update
        // this allows the images to be removed from the DOM properly
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState(function () {
          return {
            src: _this2.props.src
          };
        });
      }
    }
    /**
     * Create a super low resolution image that will automatically be blurred in most browsers
     */

  }, {
    key: "getLowResSrcFromVignette",
    value: function getLowResSrcFromVignette() {
      return vignette(this.props.src).withSmart(LAZY_IMAGE_SIZE, LAZY_IMAGE_SIZE).get();
    }
  }, {
    key: "renderPlainImage",
    value: function renderPlainImage() {
      var _this$props = this.props,
          src = _this$props.src,
          alt = _this$props.alt,
          className = _this$props.className,
          disableLazy = _this$props.disableLazy,
          rest = _objectWithoutProperties(_this$props, ["src", "alt", "className", "disableLazy"]);

      return React.createElement("img", _extends({
        className: classNames(className),
        src: src,
        alt: alt
      }, rest));
    }
  }, {
    key: "renderVignetteImage",
    value: function renderVignetteImage() {
      var _this3 = this;

      var _this$props2 = this.props,
          _skip1 = _this$props2.src,
          _skip2 = _this$props2.srcSet,
          alt = _this$props2.alt,
          className = _this$props2.className,
          disableLazy = _this$props2.disableLazy,
          rest = _objectWithoutProperties(_this$props2, ["src", "srcSet", "alt", "className", "disableLazy"]);

      if (disableLazy) {
        return this.renderPlainImage();
      }

      return React.createElement(ImagePreloader, {
        src: this.state.src,
        srcSet: this.props.srcSet
      }, function (_ref) {
        var src = _ref.src,
            srcSet = _ref.srcSet,
            state = _ref.state;

        // we will not test the functionality of ImagePreloader here

        /* istanbul ignore next */
        if (state !== ImagePreloader.STATE.PENDING) {
          return React.createElement("img", _extends({
            className: classNames(className),
            src: src,
            srcSet: srcSet,
            alt: alt
          }, rest));
        } // if the image is loading, render low quality image


        return React.createElement("img", _extends({
          className: classNames(className),
          src: _this3.getLowResSrcFromVignette(),
          alt: alt
        }, rest));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          src = _this$state.src,
          isLimbo = _this$state.isLimbo;

      if (isVignetteUrl(src)) {
        // Limbo state happens when only the src and/or srcset is changed
        // there is no standard on how to handle the state of the image when the src is changed across browsers
        // lets just remove the entire node from html when in limbo
        return React.createElement(React.Fragment, null, !isLimbo && this.renderVignetteImage(), React.createElement("noscript", null, this.renderPlainImage()));
      } // if the image is not a Vignette one, just render it and don't care


      return this.renderPlainImage();
    }
  }], [{
    key: "getDerivedStateFromProps",
    // When the src changes first replace the src with a temp image so it doesn't stall displaying
    // the old image
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state
    value: function getDerivedStateFromProps(props, state) {
      // when only the src changes we are in "limbo" mode
      return {
        isLimbo: props.src !== state.src
      };
    }
  }]);

  return Image;
}(React.Component);

_defineProperty(Image, "propTypes", {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  disableLazy: PropTypes.bool,
  src: PropTypes.string.isRequired,
  srcSet: PropTypes.string
});

_defineProperty(Image, "defaultProps", {
  className: undefined,
  disableLazy: false,
  srcSet: undefined
});

export default Image;
