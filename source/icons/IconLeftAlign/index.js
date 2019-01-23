// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconLeftAlignSvg from '../../_icons/24px/left-align.svg';

const IconLeftAlign = styled(({ size, ...rest }) => <IconLeftAlignSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconLeftAlign.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconLeftAlign.defaultProps = {
    size: 24,
};

// @component
export default IconLeftAlign;
