// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconH2Svg from '../../_icons/24px/H2.svg';

const IconH2 = styled(({ size, ...rest }) => <IconH2Svg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconH2.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconH2.defaultProps = {
    size: 24,
};

// @component
export default IconH2;
