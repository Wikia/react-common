// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconAlertSmallSvg from '../../_icons/18px/alert.svg';

const IconAlertSmall = styled(({ size, ...rest }) => <IconAlertSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconAlertSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconAlertSmall.defaultProps = {
    size: 18,
};

// @component
export default IconAlertSmall;
