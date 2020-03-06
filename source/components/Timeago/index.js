import React from 'react';
import PropTypes from 'prop-types';

/* istanbul ignore next */
function getTimeDistanceString(datetime) {
    const date = new Date(parseInt(datetime, 10));
    const now = Date.now();
    const diffInSeconds = (now - date) / 1000;

    if (diffInSeconds > 432000) {
        // more than 5 days ago - show date
        return date.toLocaleDateString();
    }

    if (diffInSeconds > 86400) {
        // more than a day ago
        return `${Math.round(diffInSeconds / 60 / 60 / 24)}d`;
    }

    if (diffInSeconds > 3600) {
        // more than an hour ago
        return `${Math.round(diffInSeconds / 60 / 60)}h`;
    }

    if (diffInSeconds < 60) {
        // less than a minute ago
        return 'now';
    }

    return `${Math.round(diffInSeconds / 60)}m`;
}

/**
 * The Timeago component is a small component that
 * shows the number of seconds/minutes/days from given datetime.
 *
 * It all happens after the component is mounted so it's safe to use this
 * component on the Back-End without messing up the hydration.
 */
export default class Timeago extends React.Component {
    state = {
        display: this.props.datetime,
    };

    static propTypes = {
        datetime: PropTypes.oneOfType([
            PropTypes.instanceOf(Date),
            PropTypes.string,
        ]).isRequired,
    };

    componentDidMount() {
        const { datetime } = this.props;

        this.setState({
            display: getTimeDistanceString(datetime),
        });
    }

    render() {
        const { datetime } = this.props;
        const { display } = this.state;

        return (
            <span title={datetime}>
                {display}
            </span>
        );
    }
}
