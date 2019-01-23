// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconEyeSvg from '../../_icons/24px/eye.svg';

const IconEye = styled(({ size, ...rest }) => <IconEyeSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconEye.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconEye.defaultProps = {
    size: 24,
};

// @component
export default IconEye;
