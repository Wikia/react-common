// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconDropdown2SmallSvg from '../../_icons/18px/dropdown2.svg';

const IconDropdown2Small = styled(({ size, ...rest }) => <IconDropdown2SmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconDropdown2Small.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconDropdown2Small.defaultProps = {
    size: 18,
};

// @component
export default IconDropdown2Small;
