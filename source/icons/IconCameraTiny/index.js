// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCameraTinySvg from '../../_icons/12px/camera.svg';

const IconCameraTiny = styled(({ size, ...rest }) => <IconCameraTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCameraTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCameraTiny.defaultProps = {
    size: 12,
};

// @component
export default IconCameraTiny;
