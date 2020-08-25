import React from 'react';
import PropTypes from 'prop-types';

export const SECOND_MILLISECONDS = 1000;
export const MINUTE_SECONDS = 60;
export const HOUR_SECONDS = 60 * MINUTE_SECONDS;
export const DAY_SECONDS = 24 * HOUR_SECONDS;
export const FIVE_DAYS_SECONDS = 5 * DAY_SECONDS;

export const TIMEAGO_SHOW_DATE_THRESHOLD = FIVE_DAYS_SECONDS;
export const TIMEAGO_NOW_THRESHOLD = MINUTE_SECONDS;

/**
 * The Timeago component is a small component that
 * shows the number of seconds/minutes/days from given datetime.
 */
export default function Timeago({
    datetime, renderNow, renderDate, renderDays, renderHours, renderMinutes,
}) {
    const date = new Date(datetime);

    const withCustomRender = (renderFunction, value, defaultElement = value) => (typeof (renderFunction) === 'function' ? renderFunction(value) : defaultElement);

    const renderTime = () => {
        const now = Date.now();
        const diffInSeconds = (now - date.getTime()) / SECOND_MILLISECONDS;

        if (diffInSeconds > TIMEAGO_SHOW_DATE_THRESHOLD) {
            const dateString = date.toLocaleDateString();

            return withCustomRender(renderDate, dateString);
        }

        if (diffInSeconds > DAY_SECONDS) {
            // more than a day ago
            const days = Math.round(diffInSeconds / DAY_SECONDS);
            return withCustomRender(renderDays, days, `${days}d`);
        }

        if (diffInSeconds > HOUR_SECONDS) {
            // more than an hour ago
            const hours = Math.round(diffInSeconds / HOUR_SECONDS);
            return withCustomRender(renderHours, hours, `${hours}h`);
        }

        if (diffInSeconds > TIMEAGO_NOW_THRESHOLD) {
            const minutes = Math.round(diffInSeconds / MINUTE_SECONDS);
            return withCustomRender(renderMinutes, minutes, `${minutes}m`);
        }

        // less than a minute ago
        return typeof (renderNow) === 'function' ? renderNow() : 'now';
    };


    return (
        <time dateTime={date.toLocaleString()} title={date.toLocaleString()}>
            {renderTime()}
        </time>
    );
}

Timeago.propTypes = {
    datetime: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]).isRequired,
    renderDate: PropTypes.func,
    renderDays: PropTypes.func,
    renderHours: PropTypes.func,
    renderMinutes: PropTypes.func,
    renderNow: PropTypes.func,
};

Timeago.defaultProps = {
    renderDays: null,
    renderHours: null,
    renderMinutes: null,
    renderDate: null,
    renderNow: null,
};
