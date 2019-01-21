// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconClockSvg from '../../_icons/24x24/clock.svg';

const IconClock = styled(IconClockSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconClock.propTypes = {
    size: PropTypes.number,
};

IconClock.defaultProps = {
    size: 24,
};

// @component
export default IconClock;
