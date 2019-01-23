// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconHomeSmallSvg from '../../_icons/18px/home.svg';

const IconHomeSmall = styled(({ size, ...rest }) => <IconHomeSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconHomeSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconHomeSmall.defaultProps = {
    size: 18,
};

// @component
export default IconHomeSmall;
