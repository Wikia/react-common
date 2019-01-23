// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconIndentLeftSmallSvg from '../../_icons/18px/indent-left.svg';

const IconIndentLeftSmall = styled(({ size, ...rest }) => <IconIndentLeftSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconIndentLeftSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconIndentLeftSmall.defaultProps = {
    size: 18,
};

// @component
export default IconIndentLeftSmall;
