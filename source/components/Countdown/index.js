import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useInterval from '../../hooks/useInterval';

import './styles.scss';

const ONE_SECOND = 1000;
const START = 10;
const HIGH = 7;
const LOW = 3;

/**
 * Simple circular, countdown-from-10 component with callback.
 */
const Countdown = ({ onTick }) => {
    const [value, setValue] = useState(START);

    useInterval(() => {
        const newValue = value - 1;
        setValue(newValue);
        onTick(newValue);
    }, value > 0 ? ONE_SECOND : null);

    // eslint-disable-next-line
    const rangeClassName = (value < LOW ? 'is-low' : (value < HIGH ? 'is-medium' : 'is-high'));

    return (
        <div className="countdown__wrapper">
            <span className="countdown__value">{value}</span>
            {value > 0 && (
                <svg className={`countdown__animation ${rangeClassName}`}>
                    <circle r="15" cx="17" cy="17" />
                </svg>
            )}
        </div>
    );
};

Countdown.propTypes = {
    /** Callback function that will be called at every tick - 1st param is the value */
    onTick: PropTypes.func.isRequired,
};

export default Countdown;
