// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUpvoteTinySvg from '../../_icons/12px/upvote.svg';

const IconUpvoteTiny = styled(({ size, ...rest }) => <IconUpvoteTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUpvoteTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUpvoteTiny.defaultProps = {
    size: 12,
};

// @component
export default IconUpvoteTiny;
