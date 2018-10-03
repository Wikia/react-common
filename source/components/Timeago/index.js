import React from 'react';
import PropTypes from 'prop-types';
import distanceInWordsStrict from 'date-fns/distance_in_words_strict';

import buildDistanceInWordsLocale from './buildDistanceInWordsLocale';

/**
 * The Timeago component is a small component that
 * shows the number of seconds/minutes/days from given datetime.
 *
 * It all happens after the component is mounted so it's safe to use this
 * component on the Back-End without messing up the hydration.
 */
class Timeago extends React.Component {
    state = {
        // eslint-disable-next-line react/destructuring-assignment
        display: this.props.datetime,
    };

    componentDidMount() {
        const { datetime } = this.props;

        this.setState({
            display: distanceInWordsStrict(Date.now(), datetime, {
                locale: {
                    distanceInWords: buildDistanceInWordsLocale(),
                },
            }),
        });
    }

    render() {
        const { datetime } = this.props;
        const { display } = this.state;

        return (
            <time dateTime={datetime}>
                {display}
            </time>
        );
    }
}

Timeago.propTypes = {
    datetime: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
    ]).isRequired,
};

export default Timeago;
