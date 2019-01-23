// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconZoomInTinySvg from '../../_icons/12px/zoom-in.svg';

const IconZoomInTiny = styled(({ size, ...rest }) => <IconZoomInTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconZoomInTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconZoomInTiny.defaultProps = {
    size: 12,
};

// @component
export default IconZoomInTiny;
