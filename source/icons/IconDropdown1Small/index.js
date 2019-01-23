// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDropdown1SmallSvg from '../../_icons/18px/dropdown1.svg';

const IconDropdown1Small = styled(({ size, ...rest }) => <IconDropdown1SmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconDropdown1Small.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconDropdown1Small.defaultProps = {
    size: 18,
};

// @component
export default IconDropdown1Small;
