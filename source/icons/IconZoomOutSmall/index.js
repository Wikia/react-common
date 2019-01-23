// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconZoomOutSmallSvg from '../../_icons/18px/zoom-out.svg';

const IconZoomOutSmall = styled(({ size, ...rest }) => <IconZoomOutSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconZoomOutSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconZoomOutSmall.defaultProps = {
    size: 18,
};

// @component
export default IconZoomOutSmall;
