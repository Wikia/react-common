// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDropdown1Svg from '../../_icons/24px/dropdown1.svg';

const IconDropdown1 = styled(({ size, ...rest }) => <IconDropdown1Svg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconDropdown1.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconDropdown1.defaultProps = {
    size: 24,
};

// @component
export default IconDropdown1;
