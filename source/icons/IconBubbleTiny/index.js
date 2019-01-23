// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBubbleTinySvg from '../../_icons/12px/bubble.svg';

const IconBubbleTiny = styled(({ size, ...rest }) => <IconBubbleTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBubbleTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBubbleTiny.defaultProps = {
    size: 12,
};

// @component
export default IconBubbleTiny;
