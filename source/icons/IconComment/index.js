// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCommentSvg from '../../_icons/24px/comment.svg';

const IconComment = styled(({ size, ...rest }) => <IconCommentSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconComment.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconComment.defaultProps = {
    size: 24,
};

// @component
export default IconComment;
