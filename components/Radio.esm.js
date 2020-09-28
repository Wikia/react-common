import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconRadioActiveSmall from '@wikia/react-common/icons/IconRadioActiveSmall';
import IconRadioEmptySmall from '@wikia/react-common/icons/IconRadioEmptySmall';
import IconLockSmall from '@wikia/react-common/icons/IconLockSmall';

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

function Radio(_ref) {
  var children = _ref.children,
      className = _ref.className,
      checked = _ref.checked,
      disabled = _ref.disabled,
      restProps = _objectWithoutProperties(_ref, ["children", "className", "checked", "disabled"]);

  return (// eslint-disable-next-line jsx-a11y/label-has-associated-control
    React.createElement("label", {
      className: classNames('wds-radio', className)
    }, React.createElement("input", _extends({}, restProps, {
      className: "wds-radio__input",
      type: "radio",
      checked: checked,
      disabled: disabled
    })), React.createElement("span", {
      className: "wds-radio__label"
    }, checked && !disabled && React.createElement(IconRadioActiveSmall, {
      className: "wds-icon wds-icon-small wds-radio__icon"
    }), !checked && !disabled && React.createElement(IconRadioEmptySmall, {
      className: "wds-icon wds-icon-small wds-radio__icon"
    }), disabled && React.createElement(IconLockSmall, {
      className: "wds-icon wds-icon-small wds-radio__lock-icon"
    }), React.createElement("span", {
      className: "wds-radio__label-text"
    }, children)))
  );
}
Radio.propTypes = {
  /** Is radio button checked */
  checked: PropTypes.bool,

  /** Label passed as a child */
  children: PropTypes.node,

  /** Additional class name */
  className: PropTypes.string,

  /** Is radio button disabled */
  disabled: PropTypes.bool,

  /** Function triggered when checkbox changes its state */
  onChange: PropTypes.func,

  /** Value that will be associated with radio */
  value: PropTypes.string.isRequired
};
Radio.defaultProps = {
  checked: false,
  children: null,
  className: undefined,
  disabled: false,
  onChange: undefined
};

export default Radio;
