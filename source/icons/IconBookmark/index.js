// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBookmarkSvg from '../../_icons/24px/bookmark.svg';

const IconBookmark = styled(({ size, ...rest }) => <IconBookmarkSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBookmark.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBookmark.defaultProps = {
    size: 24,
};

// @component
export default IconBookmark;
