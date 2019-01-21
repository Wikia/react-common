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
var IconDownloadSvg = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ width: "24", height: "24", viewBox: "0 0 24 24", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { d: "M11.293 16.707a1.009 1.009 0 0 0 .704.293h.006a.988.988 0 0 0 .704-.293l7-7a.999.999 0 1 0-1.414-1.414L13 13.586V2a1 1 0 1 0-2 0v11.586L5.707 8.293a.999.999 0 1 0-1.414 1.414l7 7zM22 16a1 1 0 0 0-1 1v4H3v-4a1 1 0 1 0-2 0v5a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1", id: "id-icons/IconDownload-a" })
    ),
    React.createElement(
      "g",
      { id: "download", fill: "none", fillRule: "evenodd" },
      React.createElement(
        "mask",
        { id: "mask-2", fill: "#fff" },
        React.createElement("use", { xlinkHref: "#id-icons/IconDownload-a" })
      ),
      React.createElement("use", { id: "icons/24px/Download", fill: "#000", xlinkHref: "#id-icons/IconDownload-a" })
    )
  );
});

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    fill: currentColor;\n    height: ", "px;\n    width: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var IconDownload = styled(IconDownloadSvg)(_templateObject(), function (props) {
  return props.size;
}, function (props) {
  return props.size;
});
IconDownload.propTypes = {
  size: PropTypes.number
};
IconDownload.defaultProps = {
  size: 24
}; // @component

module.exports = IconDownload;
