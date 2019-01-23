// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSitemapTinySvg from '../../_icons/12px/sitemap.svg';

const IconSitemapTiny = styled(({ size, ...rest }) => <IconSitemapTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSitemapTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSitemapTiny.defaultProps = {
    size: 12,
};

// @component
export default IconSitemapTiny;
