// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconExternalLinkSvg from '../../_icons/24px/external link.svg';

const IconExternalLink = styled(({ size, ...rest }) => <IconExternalLinkSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconExternalLink.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconExternalLink.defaultProps = {
    size: 24,
};

// @component
export default IconExternalLink;
