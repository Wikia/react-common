// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconEyeOffSvg from '../../_icons/24px/eye-off.svg';

const IconEyeOff = styled(({ size, ...rest }) => <IconEyeOffSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconEyeOff.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconEyeOff.defaultProps = {
    size: 24,
};

// @component
export default IconEyeOff;
