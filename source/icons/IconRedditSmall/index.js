// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconRedditSmallSvg from '../../_icons/18px/reddit.svg';

const IconRedditSmall = styled(({ size, ...rest }) => <IconRedditSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconRedditSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconRedditSmall.defaultProps = {
    size: 18,
};

// @component
export default IconRedditSmall;
