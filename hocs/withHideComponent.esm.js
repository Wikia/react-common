import React from 'react';
import PropTypes from 'prop-types';

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

function withHideComponent(component) {
  function HideComponentView(props) {
    var hide = props.hide,
        rest = _objectWithoutProperties(props, ["hide"]);

    if (hide) {
      return false;
    }

    var Component = component;
    return React.createElement(Component, rest);
  }

  HideComponentView.propTypes = {
    hide: PropTypes.bool
  };
  HideComponentView.defaultProps = {
    hide: false
  };
  return HideComponentView;
}

export default withHideComponent;
