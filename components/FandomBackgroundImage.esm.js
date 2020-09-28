import React from 'react';
import PropTypes from 'prop-types';

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

/**
 * An image background that can be used as a sample image.
 */

var FandomBackgroundImage = function FandomBackgroundImage(_ref) {
  var className = _ref.className,
      width = _ref.width,
      rest = _objectWithoutProperties(_ref, ["className", "width"]);

  var height = Math.floor(width * 9.0 / 16.0);
  return (
    /* eslint-disable max-len */
    React.createElement("svg", _extends({
      className: className,
      width: width,
      height: height,
      viewBox: "0 0 322 182",
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink"
    }, rest), React.createElement("defs", null, React.createElement("path", {
      id: "fandom-background-image-a",
      d: "M0 0h322v181.125H0z"
    })), React.createElement("g", {
      fill: "none",
      fillRule: "evenodd"
    }, React.createElement("mask", {
      id: "fandom-background-image-b",
      fill: "#fff"
    }, React.createElement("use", {
      xlinkHref: "#fandom-background-image-a"
    })), React.createElement("use", {
      fill: "#00D6D6",
      xlinkHref: "#fandom-background-image-a"
    }), React.createElement("g", {
      fill: "#002A32",
      opacity: ".07",
      mask: "url(#fandom-background-image-b)"
    }, React.createElement("path", {
      d: "M220.746 101.305c0 1.17-.457 2.29-1.27 3.122l-53.435 54.578c-.9.908-1.81 1.315-2.94 1.315-1.17 0-2.2-.444-3.07-1.32l-3.77-3.607a1.695 1.695 0 0 1-.03-2.402l61.67-62.86c1.05-1.07 2.86-.32 2.86 1.19v10zm-68.525 41.157l-3.05 2.783a2.52 2.52 0 0 1-3.48-.078l-40.66-40.454a5.465 5.465 0 0 1-1.6-3.86v-7.56c0-2.722 3.26-4.094 5.19-2.18l43.17 42.947c.75.756 2.02 2.315 2.02 4.2 0 1.2-.27 2.902-1.56 4.202zm-36.34-78.29l13.99-14.086a1.66 1.66 0 0 1 2.36 0l46.85 47.188c5.02 5.053 5.02 13.244 0 18.296l-13.98 14.082a1.66 1.66 0 0 1-2.36 0l-46.84-47.19c-2.41-2.43-3.74-5.678-3.74-9.148 0-3.465 1.33-6.712 3.74-9.14zm55.43 8.07l14.62-14.726c2.85-2.867 6.82-4.218 10.93-3.647 2.88.4 5.5 1.9 7.56 3.98l14.81 14.91c.65.65.65 1.72 0 2.38L196.7 97.81a1.663 1.663 0 0 1-2.363 0L171.31 74.62a1.692 1.692 0 0 1 0-2.38zm58.14-2.797l-32.61-33.408a3.422 3.422 0 0 0-4.9-.01l-25.86 26.298a5.097 5.097 0 0 1-7.26.02l-25.86-26.02a3.424 3.424 0 0 0-4.85-.018L94.8 69.367a6.024 6.024 0 0 0-1.8 4.296v31.307c0 1.6.63 3.135 1.755 4.267l64.92 65.363a3.425 3.425 0 0 0 4.87-.002l64.862-65.363a6.055 6.055 0 0 0 1.753-4.265V73.673c0-1.58-.617-3.1-1.718-4.228z"
    }), React.createElement("path", {
      d: "M248.557 243.388a6.624 6.624 0 0 1-1.886 4.632l-79.28 80.987c-1.34 1.347-2.69 1.95-4.37 1.95-1.73 0-3.26-.66-4.55-1.958l-5.59-5.36a2.517 2.517 0 0 1-.06-3.57l91.51-93.29c1.56-1.59 4.25-.48 4.25 1.75v14.83zm-101.68 61.07l-4.536 4.13a3.735 3.735 0 0 1-5.16-.115l-60.34-60.03a8.074 8.074 0 0 1-2.37-5.727V231.5c0-4.04 4.84-6.077 7.69-3.237l64.05 63.727c1.12 1.123 3 3.436 3 6.232 0 1.78-.4 4.308-2.31 6.237zm-53.93-116.17l20.752-20.903a2.46 2.46 0 0 1 3.5 0l69.51 70.02c7.44 7.5 7.44 19.653 0 27.15l-20.74 20.895c-.97.975-2.54.975-3.51 0l-69.51-70.022c-3.58-3.606-5.55-8.426-5.55-13.575 0-5.142 1.97-9.96 5.54-13.565zm82.255 11.972l21.692-21.85c4.23-4.254 10.117-6.26 16.212-5.41 4.276.594 8.16 2.83 11.21 5.905l21.965 22.125c.97.975.97 2.555 0 3.532l-33.4 33.648c-.96.973-2.54.973-3.5 0l-34.16-34.42a2.505 2.505 0 0 1 0-3.53zm86.26-4.148l-48.38-49.573a5.084 5.084 0 0 0-7.278-.02l-38.37 39.02a7.565 7.565 0 0 1-10.774.03l-38.38-38.62a5.088 5.088 0 0 0-7.2-.03l-49.43 49.06a8.978 8.978 0 0 0-2.65 6.37v46.45c0 2.372.936 4.65 2.605 6.33l96.33 96.99a5.088 5.088 0 0 0 7.23 0l96.244-96.99a9.015 9.015 0 0 0 2.6-6.33v-46.44c0-2.35-.92-4.6-2.55-6.277zM74.452-61.735c0-1.733.68-3.397 1.887-4.63l79.28-80.988c1.34-1.347 2.69-1.95 4.37-1.95 1.73 0 3.26.66 4.55 1.958l5.59 5.352c1.01.963 1.03 2.57.06 3.565l-91.5 93.286c-1.56 1.59-4.25.477-4.25-1.755v-14.838zm101.68-61.07l4.537-4.13a3.735 3.735 0 0 1 5.16.115l60.34 60.03a8.078 8.078 0 0 1 2.37 5.728v11.215c0 4.04-4.84 6.077-7.69 3.237l-64.05-63.727c-1.12-1.123-3-3.436-3-6.232 0-1.78.4-4.3 2.31-6.23zm53.93 116.17L209.31 14.268a2.464 2.464 0 0 1-3.504 0l-69.517-70.02c-7.45-7.498-7.45-19.653 0-27.15l20.74-20.895a2.46 2.46 0 0 1 3.5 0l69.51 70.023c3.58 3.605 5.55 8.426 5.55 13.574 0 5.142-1.97 9.96-5.54 13.565zM147.81-18.607l-21.692 21.85c-4.23 4.255-10.117 6.26-16.212 5.412-4.276-.595-8.16-2.832-11.21-5.906L76.728-19.38a2.507 2.507 0 0 1 0-3.532l33.403-33.646a2.472 2.472 0 0 1 3.51 0l34.17 34.418c.97.976.97 2.557 0 3.53zM61.55-14.46l48.38 49.576a5.086 5.086 0 0 0 7.278.013l38.37-39.02a7.556 7.556 0 0 1 10.774-.03l38.38 38.61a5.079 5.079 0 0 0 7.2.02l49.43-49.06a8.984 8.984 0 0 0 2.65-6.38v-46.45a8.97 8.97 0 0 0-2.605-6.33l-96.33-96.99a5.088 5.088 0 0 0-7.23 0L61.6-73.5a8.986 8.986 0 0 0-2.6 6.327v46.44c0 2.348.915 4.6 2.55 6.274zM8.612 177.558a6.624 6.624 0 0 1-4.632-1.886l-80.987-79.285c-1.347-1.338-1.95-2.688-1.95-4.37 0-1.734.66-3.266 1.958-4.557l5.36-5.59a2.515 2.515 0 0 1 3.57-.058l93.29 91.505c1.59 1.558.48 4.243-1.75 4.243H8.62zm-61.07-101.68l-4.13-4.536a3.74 3.74 0 0 1 .115-5.164L3.557 5.83a8.074 8.074 0 0 1 5.726-2.378H20.5c4.04 0 6.077 4.837 3.237 7.69L-39.99 75.2c-1.123 1.113-3.436 2.993-6.232 2.993-1.78 0-4.308-.402-6.237-2.317zm116.17-53.93L84.615 42.7a2.464 2.464 0 0 1 0 3.504l-70.02 69.517c-7.5 7.45-19.653 7.45-27.15 0L-33.45 94.98a2.468 2.468 0 0 1 0-3.507L36.572 21.96c3.606-3.58 8.426-5.55 13.575-5.55 5.142 0 9.96 1.967 13.565 5.54zM51.74 104.202l21.85 21.692c4.254 4.23 6.26 10.117 5.41 16.212-.594 4.276-2.83 8.16-5.905 11.21L50.97 175.282c-.975.97-2.555.97-3.532 0L13.79 141.878a2.47 2.47 0 0 1 0-3.507l34.42-34.16a2.505 2.505 0 0 1 3.53 0zm4.148 86.26l49.573-48.38c2.05-2 2.06-5.272.02-7.278l-39.02-38.37a7.565 7.565 0 0 1-.03-10.774l38.62-38.38c2-1.987 2.01-5.202.03-7.2L56.01-9.35A8.997 8.997 0 0 0 49.63-12H3.174a8.974 8.974 0 0 0-6.33 2.605l-96.99 96.33a5.086 5.086 0 0 0 .002 7.23l96.99 96.244a9.009 9.009 0 0 0 6.328 2.6h46.44a9 9 0 0 0 6.274-2.55zM313.735 3.452c1.733 0 3.397.68 4.63 1.887l80.988 79.28c1.347 1.34 1.95 2.69 1.95 4.37 0 1.73-.66 3.26-1.958 4.55l-5.352 5.59a2.511 2.511 0 0 1-3.565.06l-93.286-91.5c-1.59-1.56-.477-4.25 1.755-4.25h14.838zm61.07 101.68l4.13 4.537a3.735 3.735 0 0 1-.115 5.16l-60.03 60.34a8.078 8.078 0 0 1-5.728 2.37h-11.215c-4.04 0-6.077-4.84-3.237-7.69l63.727-64.06c1.123-1.12 3.436-3 6.232-3 1.78 0 4.3.4 6.23 2.312zm-116.17 53.93l-20.903-20.75a2.466 2.466 0 0 1 0-3.505l70.02-69.517c7.498-7.444 19.653-7.444 27.15 0l20.895 20.743c.975.97.975 2.54 0 3.507l-70.023 69.515c-3.605 3.578-8.426 5.55-13.574 5.55-5.142 0-9.96-1.968-13.565-5.542zm11.972-82.254l-21.85-21.692c-4.255-4.23-6.26-10.117-5.412-16.212.595-4.276 2.832-8.16 5.906-11.21L271.38 5.73a2.507 2.507 0 0 1 3.532 0l33.646 33.402c.975.968.975 2.54 0 3.507L274.14 76.8a2.508 2.508 0 0 1-3.53 0zm-4.148-86.26l-49.58 48.38a5.084 5.084 0 0 0-.02 7.278l39.02 38.37a7.574 7.574 0 0 1 .03 10.774l-38.61 38.38a5.088 5.088 0 0 0-.03 7.2l49.05 49.43a8.978 8.978 0 0 0 6.37 2.65h46.46c2.37 0 4.65-.936 6.33-2.605l96.99-96.33a5.08 5.08 0 0 0-.01-7.23L325.5-9.4a8.986 8.986 0 0 0-6.327-2.6h-46.44c-2.348 0-4.6.915-6.274 2.55z"
    }))))
    /* eslint-enable max-len */

  );
};

FandomBackgroundImage.propTypes = {
  /** Additional class name */
  className: PropTypes.string,

  /** Image width */
  width: PropTypes.number
};
FandomBackgroundImage.defaultProps = {
  className: '',
  width: 322
};

export default FandomBackgroundImage;
