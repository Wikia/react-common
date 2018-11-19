'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

/**
 * FandomContentWell wraps `children` in `wds-content-well($use-xxlarge-breakpoint: false)` CSS mixin.
 */

var FandomContentWell = function FandomContentWell(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: "wds-fandom-content-well ".concat(className)
  }, children);
};

FandomContentWell.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,

  /**
  * Additional class name
  */
  className: PropTypes.string
};
FandomContentWell.defaultProps = {
  children: null,
  className: ''
};

module.exports = FandomContentWell;
