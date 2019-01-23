// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconEyeOffSmallSvg from '../../_icons/18px/eye-off.svg';

const IconEyeOffSmall = styled(({ size, ...rest }) => <IconEyeOffSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconEyeOffSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconEyeOffSmall.defaultProps = {
    size: 18,
};

// @component
export default IconEyeOffSmall;
