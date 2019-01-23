// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCommentTinySvg from '../../_icons/12px/comment.svg';

const IconCommentTiny = styled(({ size, ...rest }) => <IconCommentTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCommentTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCommentTiny.defaultProps = {
    size: 12,
};

// @component
export default IconCommentTiny;
