// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBookmarkTinySvg from '../../_icons/12px/bookmark.svg';

const IconBookmarkTiny = styled(({ size, ...rest }) => <IconBookmarkTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBookmarkTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBookmarkTiny.defaultProps = {
    size: 12,
};

// @component
export default IconBookmarkTiny;
