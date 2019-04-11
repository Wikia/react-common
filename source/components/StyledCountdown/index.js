import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import useInterval from '../../hooks/useInterval';

const Wrapper = styled.div`
    align-items: center;
    background-color: ${props => props.theme.color.white};
    border-radius: 100%;
    display: inline-flex;
    height: 40px;
    justify-content: center;
    position: relative;
    width: 40px;

    &::after {
        border: 1px solid ${props => props.theme.color.fandom_middle_gray};
        border-radius: 100%;
        content: ' ';
        height: 30px;
        left: 4px;
        position: absolute;
        top: 4px;
        width: 30px;
    }
`;

const Value = styled.span`
    color: ${props => props.theme.color.navy};
    font-size: ${props => props.theme.font_size.l};
    font-weight: ${props => props.theme.font_weight.bold};
`;

const circleAnimation = styled.keyframes`
    from {
        stroke-dashoffset: 0;
    }

    to {
        stroke-dashoffset: 95px;
    }
`;

const Circle = styled.circle`
    animation: ${circleAnimation} 10s linear forwards;
    fill: none;
    stroke-dasharray: 95px;
    stroke-dashoffset: 0;
    stroke-width: 3px;
`;

function levelToStrokeColor(level, themeColors) {
    switch (level) {
        case 'low':
            return themeColors.alert;
        case 'medium':
            return themeColors.warning;
        default:
            return themeColors.success;
    }
}

const AnimatedProgress = styled.svg`
    height: 34px;
    position: absolute;
    right: 3px;
    stroke: ${props => levelToStrokeColor(props.level, props.theme.color)};
    top: 3px;
    transform: rotateY(-180deg) rotateZ(-90deg);
    width: 34px;
    z-index: 1;
`;

const ONE_SECOND = 1000;
const START = 10;
const HIGH = 7;
const LOW = 3;

/**
 * Simple circular, countdown-from-10 component with callback.
 */
const StyledCountdown = ({ onTick }) => {
    const [value, setValue] = useState(START);

    useInterval(() => {
        const newValue = value - 1;
        setValue(newValue);
        onTick(newValue);
    }, value > 0 ? ONE_SECOND : null);

    // eslint-disable-next-line
    const level = (value <= LOW ? 'low' : (value <= HIGH ? 'medium' : 'high'));

    return (
        <Wrapper>
            <Value>{value}</Value>
            {value > 0 && <AnimatedProgress level={level}><Circle r="15" cx="17" cy="17" /></AnimatedProgress>}
        </Wrapper>
    );
};

StyledCountdown.propTypes = {
    /** Callback function that will be called at every tick - 1st param is the value */
    onTick: PropTypes.func.isRequired,
};

export default StyledCountdown;
