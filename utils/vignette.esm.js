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

var VIGNETTE_MODES = Object.freeze({
  auto: 'auto',
  scale: 'scale',
  smart: 'smart',
  thumbnail: 'thumbnail',
  topCrop: 'top-crop'
});
var VIGNETTE_DEFAULT_SERVER = 'https://static.wikia.nocookie.net/';
var VIGNETTE_UUID_REGEX = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
var VIGNETTE_SERVER_REGEX = /^https?:\/\/(vignette|static)\.wikia(-dev)?\.(pl|us|com|nocookie\.net)\//;
var VIGNETTE_BASE_IMAGE_REGEX = new RegExp(VIGNETTE_SERVER_REGEX.source + VIGNETTE_UUID_REGEX.source);
function isVignetteUrl(imageUrl) {
  return VIGNETTE_BASE_IMAGE_REGEX.test(imageUrl);
}
function isVignetteId(id) {
  return VIGNETTE_UUID_REGEX.test(id);
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

export { VIGNETTE_DEFAULT_SERVER, VIGNETTE_MODES, VIGNETTE_SERVER_REGEX, VIGNETTE_UUID_REGEX, VignetteHelper, isVignetteId, isVignetteUrl, vignette };
