// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBellSmallSvg from '../../_icons/18px/bell.svg';

const IconBellSmall = styled(({ size, ...rest }) => <IconBellSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBellSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBellSmall.defaultProps = {
    size: 18,
};

// @component
export default IconBellSmall;
