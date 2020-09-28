'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

var SECOND_MILLISECONDS = 1000;
var MINUTE_SECONDS = 60;
var HOUR_SECONDS = 60 * MINUTE_SECONDS;
var DAY_SECONDS = 24 * HOUR_SECONDS;
var FIVE_DAYS_SECONDS = 5 * DAY_SECONDS;
var TIMEAGO_SHOW_DATE_THRESHOLD = FIVE_DAYS_SECONDS;
var TIMEAGO_NOW_THRESHOLD = MINUTE_SECONDS;
/**
 * The Timeago component is a small component that
 * shows the number of seconds/minutes/days from given datetime.
 */

function Timeago(_ref) {
  var datetime = _ref.datetime,
      renderNow = _ref.renderNow,
      renderDate = _ref.renderDate,
      renderDays = _ref.renderDays,
      renderHours = _ref.renderHours,
      renderMinutes = _ref.renderMinutes;
  var date = new Date(datetime);

  var withCustomRender = function withCustomRender(renderFunction, value) {
    var defaultElement = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : value;
    return typeof renderFunction === 'function' ? renderFunction(value) : defaultElement;
  };

  var renderTime = function renderTime() {
    var now = Date.now();
    var diffInSeconds = (now - date.getTime()) / SECOND_MILLISECONDS;

    if (diffInSeconds > TIMEAGO_SHOW_DATE_THRESHOLD) {
      var dateString = date.toLocaleDateString();
      return withCustomRender(renderDate, dateString);
    }

    if (diffInSeconds > DAY_SECONDS) {
      // more than a day ago
      var days = Math.round(diffInSeconds / DAY_SECONDS);
      return withCustomRender(renderDays, days, "".concat(days, "d"));
    }

    if (diffInSeconds > HOUR_SECONDS) {
      // more than an hour ago
      var hours = Math.round(diffInSeconds / HOUR_SECONDS);
      return withCustomRender(renderHours, hours, "".concat(hours, "h"));
    }

    if (diffInSeconds > TIMEAGO_NOW_THRESHOLD) {
      var minutes = Math.round(diffInSeconds / MINUTE_SECONDS);
      return withCustomRender(renderMinutes, minutes, "".concat(minutes, "m"));
    } // less than a minute ago


    return typeof renderNow === 'function' ? renderNow() : 'now';
  };

  return React.createElement("time", {
    dateTime: date.toLocaleString(),
    title: date.toLocaleString()
  }, renderTime());
}
Timeago.propTypes = {
  datetime: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string]).isRequired,
  renderDate: PropTypes.func,
  renderDays: PropTypes.func,
  renderHours: PropTypes.func,
  renderMinutes: PropTypes.func,
  renderNow: PropTypes.func
};
Timeago.defaultProps = {
  renderDays: null,
  renderHours: null,
  renderMinutes: null,
  renderDate: null,
  renderNow: null
};

exports.DAY_SECONDS = DAY_SECONDS;
exports.FIVE_DAYS_SECONDS = FIVE_DAYS_SECONDS;
exports.HOUR_SECONDS = HOUR_SECONDS;
exports.MINUTE_SECONDS = MINUTE_SECONDS;
exports.SECOND_MILLISECONDS = SECOND_MILLISECONDS;
exports.TIMEAGO_NOW_THRESHOLD = TIMEAGO_NOW_THRESHOLD;
exports.TIMEAGO_SHOW_DATE_THRESHOLD = TIMEAGO_SHOW_DATE_THRESHOLD;
exports.default = Timeago;
