// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCommentSmallSvg from '../../_icons/18px/comment.svg';

const IconCommentSmall = styled(({ size, ...rest }) => <IconCommentSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCommentSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCommentSmall.defaultProps = {
    size: 18,
};

// @component
export default IconCommentSmall;
