// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconZoomInSmallSvg from '../../_icons/18px/zoom-in.svg';

const IconZoomInSmall = styled(({ size, ...rest }) => <IconZoomInSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconZoomInSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconZoomInSmall.defaultProps = {
    size: 18,
};

// @component
export default IconZoomInSmall;
