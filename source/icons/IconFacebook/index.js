// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFacebookSvg from '../../_icons/24px/facebook.svg';

const IconFacebook = styled(({ size, ...rest }) => <IconFacebookSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFacebook.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconFacebook.defaultProps = {
    size: 24,
};

// @component
export default IconFacebook;
