// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconLeftAlignSmallSvg from '../../_icons/18px/left-align.svg';

const IconLeftAlignSmall = styled(({ size, ...rest }) => <IconLeftAlignSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconLeftAlignSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconLeftAlignSmall.defaultProps = {
    size: 18,
};

// @component
export default IconLeftAlignSmall;
