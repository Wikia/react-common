// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconShareSvg from '../../_icons/24px/share.svg';

const IconShare = styled(({ size, ...rest }) => <IconShareSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconShare.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconShare.defaultProps = {
    size: 24,
};

// @component
export default IconShare;
