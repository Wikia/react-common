// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUpvoteSvg from '../../_icons/24px/upvote.svg';

const IconUpvote = styled(({ size, ...rest }) => <IconUpvoteSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUpvote.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUpvote.defaultProps = {
    size: 24,
};

// @component
export default IconUpvote;
