// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUpvoteSmallSvg from '../../_icons/18px/upvote.svg';

const IconUpvoteSmall = styled(({ size, ...rest }) => <IconUpvoteSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUpvoteSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUpvoteSmall.defaultProps = {
    size: 18,
};

// @component
export default IconUpvoteSmall;
