// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMapTinySvg from '../../_icons/12px/map.svg';

const IconMapTiny = styled(({ size, ...rest }) => <IconMapTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMapTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMapTiny.defaultProps = {
    size: 12,
};

// @component
export default IconMapTiny;
