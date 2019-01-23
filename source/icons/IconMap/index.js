// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMapSvg from '../../_icons/24px/map.svg';

const IconMap = styled(({ size, ...rest }) => <IconMapSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMap.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMap.defaultProps = {
    size: 24,
};

// @component
export default IconMap;
