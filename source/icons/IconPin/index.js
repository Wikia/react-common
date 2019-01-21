// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPinSvg from '../../_icons/24x24/pin.svg';

const IconPin = styled(IconPinSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPin.propTypes = {
    size: PropTypes.number,
};

IconPin.defaultProps = {
    size: 24,
};

// @component
export default IconPin;
