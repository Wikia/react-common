'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

/**
 * Loader block component used to indicate loading state.
 *
 * Based on http://fandomdesignsystem.com/#/components/progress-indicators
 */

var Spinner = function Spinner(_ref) {
  var className = _ref.className,
      size = _ref.size,
      stroke = _ref.stroke,
      block = _ref.block,
      inline = _ref.inline;
  var style = {
    width: size,
    height: size
  };
  var r = (size - stroke) / 2;
  var translate = r + stroke / 2;
  var dash = 2 * Math.PI * r;
  var classes = ['fandom-spinner'];

  if (block) {
    classes.push('is-block');
  }

  if (inline) {
    classes.push('is-inline');
  }

  if (className) {
    classes.push(className);
  }

  return React.createElement("div", {
    className: classes.join(' '),
    style: style
  }, React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 ".concat(size, " ").concat(size),
    xmlns: "http://www.w3.org/2000/svg"
  }, React.createElement("g", {
    transform: "translate(".concat(translate, ", ").concat(translate, ")")
  }, React.createElement("circle", {
    fill: "none",
    strokeWidth: stroke,
    strokeDasharray: dash,
    strokeDashoffset: dash,
    strokeLinecap: "round",
    r: r
  }))));
};

Spinner.propTypes = {
  /**
  * Additional class name
  */
  block: PropTypes.bool,

  /**
  * Loader size
  */
  className: PropTypes.string,

  /**
  * Stroke width
  */
  inline: PropTypes.bool,

  /**
  * Display block and center
  */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /**
  * Display contentinline based on line height
  */
  stroke: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
Spinner.defaultProps = {
  className: '',
  size: 30,
  stroke: 2,
  block: false,
  inline: false
};

module.exports = Spinner;
