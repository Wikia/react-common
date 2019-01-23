// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSitemapSmallSvg from '../../_icons/18px/sitemap.svg';

const IconSitemapSmall = styled(({ size, ...rest }) => <IconSitemapSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSitemapSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSitemapSmall.defaultProps = {
    size: 18,
};

// @component
export default IconSitemapSmall;
