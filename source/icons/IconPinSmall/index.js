// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPinSmallSvg from '../../_icons/18px/pin.svg';

const IconPinSmall = styled(({ size, ...rest }) => <IconPinSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPinSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPinSmall.defaultProps = {
    size: 18,
};

// @component
export default IconPinSmall;
