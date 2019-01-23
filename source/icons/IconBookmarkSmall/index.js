// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBookmarkSmallSvg from '../../_icons/18px/bookmark.svg';

const IconBookmarkSmall = styled(({ size, ...rest }) => <IconBookmarkSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBookmarkSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBookmarkSmall.defaultProps = {
    size: 18,
};

// @component
export default IconBookmarkSmall;
