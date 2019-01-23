// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconExternalLinkSmallSvg from '../../_icons/18px/external-link.svg';

const IconExternalLinkSmall = styled(({ size, ...rest }) => <IconExternalLinkSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconExternalLinkSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconExternalLinkSmall.defaultProps = {
    size: 18,
};

// @component
export default IconExternalLinkSmall;
