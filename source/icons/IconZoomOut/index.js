// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconZoomOutSvg from '../../_icons/24px/zoom-out.svg';

const IconZoomOut = styled(({ size, ...rest }) => <IconZoomOutSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconZoomOut.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconZoomOut.defaultProps = {
    size: 24,
};

// @component
export default IconZoomOut;
