// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSitemapSvg from '../../_icons/24px/sitemap.svg';

const IconSitemap = styled(({ size, ...rest }) => <IconSitemapSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSitemap.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSitemap.defaultProps = {
    size: 24,
};

// @component
export default IconSitemap;
