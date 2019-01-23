// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBubbleSvg from '../../_icons/24px/bubble.svg';

const IconBubble = styled(({ size, ...rest }) => <IconBubbleSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBubble.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBubble.defaultProps = {
    size: 24,
};

// @component
export default IconBubble;
