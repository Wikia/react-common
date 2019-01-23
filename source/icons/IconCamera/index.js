// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCameraSvg from '../../_icons/24px/camera.svg';

const IconCamera = styled(({ size, ...rest }) => <IconCameraSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCamera.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCamera.defaultProps = {
    size: 24,
};

// @component
export default IconCamera;
