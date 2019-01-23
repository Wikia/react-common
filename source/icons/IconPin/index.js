// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPinSvg from '../../_icons/24px/pin.svg';

const IconPin = styled(({ size, ...rest }) => <IconPinSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPin.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPin.defaultProps = {
    size: 24,
};

// @component
export default IconPin;
