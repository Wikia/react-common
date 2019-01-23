// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUserAvatarSmallSvg from '../../_icons/18px/user-avatar.svg';

const IconUserAvatarSmall = styled(({ size, ...rest }) => <IconUserAvatarSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUserAvatarSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUserAvatarSmall.defaultProps = {
    size: 18,
};

// @component
export default IconUserAvatarSmall;
