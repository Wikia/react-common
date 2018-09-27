'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

/**
 * ContentWell wraps `children` in `wds-content-well` CSS mixin.
 */

var ContentWell = function ContentWell(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: "wds-content-well ".concat(className)
  }, children);
};

ContentWell.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,

  /**
  * Additional class name
  */
  className: PropTypes.string
};
ContentWell.defaultProps = {
  children: null,
  className: ''
};

module.exports = ContentWell;
