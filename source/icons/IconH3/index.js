// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconH3Svg from '../../_icons/24px/H3.svg';

const IconH3 = styled(({ size, ...rest }) => <IconH3Svg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconH3.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconH3.defaultProps = {
    size: 24,
};

// @component
export default IconH3;
