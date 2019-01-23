// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCameraSmallSvg from '../../_icons/18px/camera.svg';

const IconCameraSmall = styled(({ size, ...rest }) => <IconCameraSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCameraSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCameraSmall.defaultProps = {
    size: 18,
};

// @component
export default IconCameraSmall;
