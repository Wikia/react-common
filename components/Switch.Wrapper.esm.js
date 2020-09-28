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

export default SwitchWrapper;
