// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFacebookSmallSvg from '../../_icons/18px/facebook.svg';

const IconFacebookSmall = styled(({ size, ...rest }) => <IconFacebookSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFacebookSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconFacebookSmall.defaultProps = {
    size: 18,
};

// @component
export default IconFacebookSmall;
