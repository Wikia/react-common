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

/**
 * Floating button (icons-only)
 */

var FloatingButton = function FloatingButton(_ref) {
  var className = _ref.className,
      href = _ref.href,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "href", "children"]);

  var classes = ['wds-floating-button', className].filter(function (c) {
    return c;
  }).join(' ');

  if (href) {
    return React.createElement("a", _extends({
      href: href,
      className: classes
    }, rest), children);
  }

  return React.createElement("button", _extends({
    className: classes
  }, rest), children);
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

module.exports = FloatingButton;
