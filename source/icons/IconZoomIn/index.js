// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconZoomInSvg from '../../_icons/24px/zoom-in.svg';

const IconZoomIn = styled(({ size, ...rest }) => <IconZoomInSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconZoomIn.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconZoomIn.defaultProps = {
    size: 24,
};

// @component
export default IconZoomIn;
