'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * BREAKPOINTS:
 * @see https://github.com/Wikia/design-system/blob/master/style-guide/styles/wds-variables/_wds-breakpoints.scss
 */
var BREAKPOINTS = Object.freeze({
  small: 0,
  medium: 768,
  large: 1024,
  xlarge: 1280,
  xxlarge: 1500
});

var mediaQueryString = function mediaQueryString(query) {
  return "only screen and ".concat(query);
};

var MEDIAQUERIES = Object.freeze({
  // up breakpoints
  small_up: 'only screen',
  medium_up: mediaQueryString("(min-width: ".concat(BREAKPOINTS.medium, "px)")),
  large_up: mediaQueryString("(min-width: ".concat(BREAKPOINTS.large, "px)")),
  xlarge_up: mediaQueryString("(min-width: ".concat(BREAKPOINTS.xlarge, "px)")),
  xxlarge_up: mediaQueryString("(min-width: ".concat(BREAKPOINTS.xxlarge, "px)")),
  // down breakpoints
  small_down: mediaQueryString("(max-width: ".concat(BREAKPOINTS.medium - 1, "px)")),
  medium_down: mediaQueryString("(max-width: ".concat(BREAKPOINTS.large - 1, "px)")),
  large_down: mediaQueryString("(max-width: ".concat(BREAKPOINTS.xlarge - 1, "px)")),
  xlarge_down: mediaQueryString("(max-width: ".concat(BREAKPOINTS.xxlarge - 1, "px)")),
  xxlarge_down: 'only screen',
  // only breakpoints
  small_only: mediaQueryString("(max-width: ".concat(BREAKPOINTS.medium - 1, "px)")),
  medium_only: mediaQueryString("(min-width: ".concat(BREAKPOINTS.medium, "px) and (max-width: ").concat(BREAKPOINTS.large - 1, "px)")),
  large_only: mediaQueryString("(min-width: ".concat(BREAKPOINTS.large, "px) and (max-width: ").concat(BREAKPOINTS.xlarge - 1, "px)")),
  xlarge_only: mediaQueryString("(min-width: ".concat(BREAKPOINTS.xlarge, "px) and (max-width: ").concat(BREAKPOINTS.xxlarge - 1, "px)")),
  xxlarge_only: mediaQueryString("(min-width: ".concat(BREAKPOINTS.xxlarge, "px)"))
});
var CONTENT_WELL_MARGIN = 18;
var CONTENT_WELL_MARGIN_PX = "".concat(CONTENT_WELL_MARGIN, "px");
var BREAKPOINTS_AVAILABLE_WIDTH = Object.freeze({
  medium: BREAKPOINTS.medium - 2 * CONTENT_WELL_MARGIN,
  large: BREAKPOINTS.large - 2 * CONTENT_WELL_MARGIN,
  xlarge: BREAKPOINTS.xlarge - 2 * CONTENT_WELL_MARGIN,
  xxlarge: BREAKPOINTS.xxlarge - 2 * CONTENT_WELL_MARGIN
});
var BREAKPOINTS_AVAILABLE_WIDTH_PX = Object.freeze({
  medium: "".concat(BREAKPOINTS_AVAILABLE_WIDTH.medium, "px"),
  large: "".concat(BREAKPOINTS_AVAILABLE_WIDTH.large, "px"),
  xlarge: "".concat(BREAKPOINTS_AVAILABLE_WIDTH.xlarge, "px"),
  xxlarge: "".concat(BREAKPOINTS_AVAILABLE_WIDTH.xxlarge, "px")
});

exports.BREAKPOINTS = BREAKPOINTS;
exports.BREAKPOINTS_AVAILABLE_WIDTH = BREAKPOINTS_AVAILABLE_WIDTH;
exports.BREAKPOINTS_AVAILABLE_WIDTH_PX = BREAKPOINTS_AVAILABLE_WIDTH_PX;
exports.CONTENT_WELL_MARGIN = CONTENT_WELL_MARGIN;
exports.CONTENT_WELL_MARGIN_PX = CONTENT_WELL_MARGIN_PX;
exports.MEDIAQUERIES = MEDIAQUERIES;
