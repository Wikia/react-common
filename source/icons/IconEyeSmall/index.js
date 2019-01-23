// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconEyeSmallSvg from '../../_icons/18px/eye.svg';

const IconEyeSmall = styled(({ size, ...rest }) => <IconEyeSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconEyeSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconEyeSmall.defaultProps = {
    size: 18,
};

// @component
export default IconEyeSmall;
