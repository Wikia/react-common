import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import IconClose from '@wikia/react-common/icons/IconCloseSmall';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    cursor: pointer;\n    height: 11px;\n    margin-left: 5px;\n    width: 11px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    align-items: center;\n    border-radius: 25px;\n    border: 1px solid ", ";\n    cursor: pointer;\n    display: inline-flex;\n    font-size: ", ";\n    line-height:  ", ";\n    padding: 2px 12px;\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var Wrapper = styled.span(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme.color.black;
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.font_size.s;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.line_height.tight;
}, function (_ref4) {
  var secondary = _ref4.secondary;
  return secondary && css(["background-color:", ";border:none;"], function (_ref5) {
    var theme = _ref5.theme;
    return theme.color.fandom_light_gray;
  });
});
var Icon = styled(IconClose)(_templateObject2());
/**
 * `StyledTag` component. Used mostly as an ArticleTag
 */

function StyledTag(_ref6) {
  var className = _ref6.className,
      onClick = _ref6.onClick,
      onRemove = _ref6.onRemove,
      removable = _ref6.removable,
      secondary = _ref6.secondary,
      tag = _ref6.tag;
  return React.createElement(Wrapper, {
    onClick: onClick,
    className: className,
    secondary: secondary
  }, tag, removable && React.createElement(Icon, {
    onClick: onRemove
  }));
}

StyledTag.propTypes = {
  /** Extra class name */
  className: PropTypes.string,
  onClick: PropTypes.func,
  onRemove: PropTypes.func,

  /** Flag to mark tag as removable */
  removable: PropTypes.bool,

  /** Secondary flag */
  secondary: PropTypes.bool,

  /** Tag name */
  tag: PropTypes.string.isRequired
};
StyledTag.defaultProps = {
  className: '',
  onClick: null,
  onRemove: null,
  removable: false,
  secondary: false
};

export default StyledTag;
