'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var Fieldset = function Fieldset(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: "wds-fieldset ".concat(className)
  }, children);
};

Fieldset.propTypes = {
  /**
  * @ignore
  */
  children: PropTypes.node,

  /**
  * Additional class name
  */
  className: PropTypes.string
};
Fieldset.defaultProps = {
  children: null,
  className: ''
};

module.exports = Fieldset;
