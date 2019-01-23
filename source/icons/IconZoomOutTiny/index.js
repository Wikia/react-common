// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconZoomOutTinySvg from '../../_icons/12px/zoom-out.svg';

const IconZoomOutTiny = styled(({ size, ...rest }) => <IconZoomOutTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconZoomOutTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconZoomOutTiny.defaultProps = {
    size: 12,
};

// @component
export default IconZoomOutTiny;
