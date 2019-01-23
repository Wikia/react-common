'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));
var PropTypes = _interopDefault(require('prop-types'));

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

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconFandomSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlnsXlink: "http://www.w3.org/1999/xlink", width: "24", height: "24", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-icons/IconFandom-a", d: "M21.342 11.374a.692.692 0 0 1-.203.488l-8.508 8.54a.63.63 0 0 1-.47.205.676.676 0 0 1-.488-.207l-.6-.564a.262.262 0 0 1-.006-.376l9.82-9.836c.167-.167.455-.05.455.185v1.565zm-10.912 6.44l-.487.434a.407.407 0 0 1-.554-.012l-6.476-6.33a.845.845 0 0 1-.255-.603V10.12c0-.426.52-.64.826-.341l6.873 6.72c.12.118.322.362.322.656 0 .188-.043.455-.249.658zM4.643 5.563L6.87 3.36a.268.268 0 0 1 .376 0l7.46 7.383a2.01 2.01 0 0 1 0 2.863l-2.226 2.203a.268.268 0 0 1-.376 0l-7.46-7.383a1.998 1.998 0 0 1-.596-1.432c0-.542.211-1.05.595-1.43zm8.827 1.262l2.328-2.303a2.055 2.055 0 0 1 1.74-.57c.458.062.875.298 1.202.622l2.357 2.333a.261.261 0 0 1 0 .372l-3.584 3.548a.268.268 0 0 1-.376 0l-3.667-3.63a.261.261 0 0 1 0-.372zm9.256-.437l-5.191-5.227a.553.553 0 0 0-.781-.001l-4.118 4.114a.822.822 0 0 1-1.156.003L7.361 1.207a.553.553 0 0 0-.772-.003L1.284 6.377A.939.939 0 0 0 1 7.049v4.898c0 .25.1.49.28.668L11.616 22.84a.553.553 0 0 0 .776 0L22.72 12.614a.94.94 0 0 0 .279-.667V7.051a.94.94 0 0 0-.274-.662z" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-icons/IconFandom-a" })
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconFandom = styled(IconFandomSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconFandom.propTypes = {
  size: PropTypes.number
};
IconFandom.defaultProps = {
  size: 24
}; // @component

module.exports = IconFandom;
