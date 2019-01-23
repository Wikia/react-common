// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconRedditSvg from '../../_icons/24px/reddit.svg';

const IconReddit = styled(({ size, ...rest }) => <IconRedditSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconReddit.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconReddit.defaultProps = {
    size: 24,
};

// @component
export default IconReddit;
