// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconLinkSvg from '../../_icons/24px/link.svg';

const IconLink = styled(({ size, ...rest }) => <IconLinkSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconLink.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconLink.defaultProps = {
    size: 24,
};

// @component
export default IconLink;
