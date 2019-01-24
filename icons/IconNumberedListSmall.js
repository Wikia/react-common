'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconNumberedListSmall = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ viewBox: "0 0 18 18", xmlns: "http://www.w3.org/2000/svg" }, props),
    React.createElement("path", { d: "M6 2h11v2H6zm0 6h11v2H6zm0 6h11v2H6zM1.368 5v-.549l.598-.048c.097-.007.11-.035.11-.139V1.84c0-.083-.02-.125-.09-.145l-.604-.126L1.46 1h1.666v3.264c0 .111.007.132.111.139l.57.048V5H1.368zm-.321 6v-.63l.907-.886c.684-.663.975-.934.975-1.32 0-.25-.122-.433-.48-.433-.373 0-.529.122-.529.603L1 8.252C1.007 7.176 1.826 7 2.536 7c1.05 0 1.422.447 1.422 1.083 0 .636-.44 1.056-.934 1.53l-.765.73h.995c.067 0 .095-.013.108-.08l.095-.535h.717V11H1.047zm2.297 3.682c.567.087.88.427.88 1.026 0 .88-.66 1.292-1.612 1.292-.673 0-1.272-.24-1.612-.613l.533-.586c.253.247.533.44.999.44.373 0 .693-.133.693-.6 0-.406-.253-.573-.666-.573a2.73 2.73 0 0 0-.493.047v-.666l.326-.04c.48-.06.74-.293.74-.72 0-.252-.114-.459-.487-.459-.36 0-.532.12-.532.593l-.913-.08c0-1.052.793-1.232 1.492-1.232 1.026 0 1.419.393 1.419 1.106 0 .56-.347.912-.767 1.039v.026z", fillRule: "evenodd" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var index = (function (props) {
  return React.createElement(IconNumberedListSmall, props);
});

module.exports = index;
