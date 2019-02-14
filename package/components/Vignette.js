'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

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
  /** Do we want to upscale image if needed? */
  allowUpscaling: PropTypes.bool,

  /** Alt text */
  alt: PropTypes.string,

  /** Additional class name */
  className: PropTypes.string,

  /** Desired image height */
  height: PropTypes.number,

  /** Either an URL to image or UUID. */
  image: PropTypes.string.isRequired,

  /** Desired image mode */
  method: PropTypes.oneOf(['auto', 'scale', 'thumbnail', 'top-crop']),

  /** Desired image width */
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

module.exports = Vignette;
