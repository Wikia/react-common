// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconLinkSmallSvg from '../../_icons/18px/link.svg';

const IconLinkSmall = styled(({ size, ...rest }) => <IconLinkSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconLinkSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconLinkSmall.defaultProps = {
    size: 18,
};

// @component
export default IconLinkSmall;
