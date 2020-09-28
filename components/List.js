'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var classNames = _interopDefault(require('classnames'));
var PropTypes = _interopDefault(require('prop-types'));

var List = function List(_ref) {
  var children = _ref.children,
      isLinked = _ref.isLinked,
      bigItems = _ref.bigItems,
      boldItems = _ref.boldItems,
      linesBetween = _ref.linesBetween,
      hasEllipsis = _ref.hasEllipsis,
      className = _ref.className;
  return React.createElement("ul", {
    className: classNames('wds-list', className, {
      'wds-has-big-items': bigItems,
      'wds-has-bolded-items': boldItems,
      'wds-has-lines-between': linesBetween,
      'wds-is-linked': isLinked,
      'wds-has-ellipsis': hasEllipsis
    })
  }, children);
};

List.propTypes = {
  /** Whether or not the list contains big items */
  bigItems: PropTypes.bool,

  /** Whether or not list items should be bold */
  boldItems: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hasEllipsis: PropTypes.bool,

  /** Whether or not items are links */
  isLinked: PropTypes.bool,

  /** Whether or not show line separator between items */
  linesBetween: PropTypes.bool
};
List.defaultProps = {
  bigItems: false,
  boldItems: false,
  children: null,
  className: '',
  hasEllipsis: false,
  isLinked: false,
  linesBetween: false
};

module.exports = List;
