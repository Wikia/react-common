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
 * A single WDS icon.
 *
 * **NOTE**: This icon is using `IconSprite` component.
 */

var Icon = function Icon(_ref) {
  var name = _ref.name,
      className = _ref.className,
      small = _ref.small,
      tiny = _ref.tiny,
      props = _objectWithoutProperties(_ref, ["name", "className", "small", "tiny"]);

  var isSmall = small || /-small$/.test(name);
  var isTiny = tiny || /-tiny$/.test(name);
  var classes = ['wds-icon', className, isSmall ? 'wds-icon-small' : '', isTiny ? 'wds-icon-tiny' : ''].filter(function (c) {
    return c;
  }).join(' ');
  return React.createElement("svg", _extends({
    className: classes
  }, props), React.createElement("use", {
    xlinkHref: "#wds-icons-".concat(name)
  }));
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

/**
 * Basic DropdownIcon component
 */

var DropdownIcon = function DropdownIcon(_ref) {
  var isLevel2 = _ref.isLevel2;

  if (isLevel2) {
    return React.createElement(Icon, {
      name: "menu-control-tiny",
      className: "wds-icon wds-icon-tiny wds-dropdown-chevron"
    });
  } else {
    return React.createElement(Icon, {
      name: "menu-control-tiny",
      className: "wds-icon wds-icon-tiny wds-dropdown__toggle-chevron"
    });
  }
};

DropdownIcon.propTypes = {
  isLevel2: PropTypes.bool
};
DropdownIcon.defaultProps = {
  isLevel2: false
};

module.exports = DropdownIcon;
