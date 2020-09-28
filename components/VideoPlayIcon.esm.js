import React from 'react';
import PropTypes from 'prop-types';

/**
 * Video Play icon
 */

var VideoPlayIcon = function VideoPlayIcon(_ref) {
  var className = _ref.className,
      size = _ref.size;
  var style = {
    height: size,
    width: size
  };
  return React.createElement("svg", {
    className: "fandom-video-play-icon ".concat(className),
    style: style,
    viewBox: "0 0 180 180",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, React.createElement("defs", null, React.createElement("rect", {
    id: "fandom-video-play-icon_b",
    width: "150",
    height: "150",
    rx: "75"
  }), React.createElement("filter", {
    x: "-15%",
    y: "-15%",
    width: "130%",
    height: "130%",
    filterUnits: "objectBoundingBox",
    id: "fandom-video-play-icon_a"
  }, React.createElement("feOffset", {
    in: "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), React.createElement("feGaussianBlur", {
    stdDeviation: "7.5",
    in: "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0",
    in: "shadowBlurOuter1"
  }))), React.createElement("g", {
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("g", {
    className: "fandom-video-play-icon__circle",
    opacity: ".9",
    transform: "rotate(90 75 90)"
  }, React.createElement("use", {
    fill: "#000",
    filter: "url(#fandom-video-play-icon_a)",
    xlinkHref: "#fandom-video-play-icon_b"
  }), React.createElement("use", {
    fill: "#fff",
    xlinkHref: "#fandom-video-play-icon_b"
  })), React.createElement("path", {
    className: "fandom-video-play-icon__triangle",
    d: "M80.87 58.006l34.32 25.523c3.052 2.27 3.722 6.635 1.496 9.748a6.91 6.91 0 0 1-1.497 1.527l-34.318 25.523c-3.053 2.27-7.332 1.586-9.558-1.527A7.07 7.07 0 0 1 70 114.69V63.643c0-3.854 3.063-6.977 6.84-6.977 1.449 0 2.86.469 4.03 1.34z",
    fillRule: "nonzero"
  })));
};

VideoPlayIcon.propTypes = {
  /** Additional class name */
  className: PropTypes.string,

  /** Icon size */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
VideoPlayIcon.defaultProps = {
  className: '',
  size: 90
};

export default VideoPlayIcon;
