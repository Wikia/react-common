// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBubbleSmallSvg from '../../_icons/18px/bubble.svg';

const IconBubbleSmall = styled(({ size, ...rest }) => <IconBubbleSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBubbleSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBubbleSmall.defaultProps = {
    size: 18,
};

// @component
export default IconBubbleSmall;
