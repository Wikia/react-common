import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * **NOTE**: This component should only be used with `<Switch.Item>`,
 * see `<Switch>` above for a complete example.
 */

var SwitchWrapper = function SwitchWrapper(_ref) {
  var children = _ref.children,
      className = _ref.className;
  var allClassNames = classNames('switch-wrapper', className);
  return React.createElement("div", {
    className: allClassNames
  }, children);
};

SwitchWrapper.propTypes = {
  /** @ignore */
  children: PropTypes.node.isRequired,

  /** Additional class name */
  className: PropTypes.string
};
SwitchWrapper.defaultProps = {
  className: undefined
};

/**
 * **NOTE**: This component should only be used with `<Switch.Wrapper>`,
 * see `<Switch>` above for a complete example.
 */

var SwitchItem = function SwitchItem(_ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      onClick = _ref.onClick;
  var allClassNames = classNames('switch-item', className, {
    'switch-item__active': active
  });
  return React.createElement("button", {
    type: "button",
    className: allClassNames,
    onClick: onClick
  }, children);
};

SwitchItem.propTypes = {
  /** is the current item active */
  active: PropTypes.bool,

  /** @ignore */
  children: PropTypes.node.isRequired,

  /** Additional class name */
  className: PropTypes.string,

  /** Function fired when clicking on the element */
  onClick: PropTypes.func
};
SwitchItem.defaultProps = {
  active: false,
  className: undefined,
  onClick: undefined
};

/**
 * `<Switch>` component is built from two sub-components,
 * `<Switch.Wrapper>` and `<Switch.Item>`.
 *
 * @component
 */

var index = {
  Wrapper: SwitchWrapper,
  Item: SwitchItem
};

export default index;
