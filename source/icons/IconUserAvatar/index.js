// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUserAvatarSvg from '../../_icons/24px/user-avatar.svg';

const IconUserAvatar = styled(({ size, ...rest }) => <IconUserAvatarSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUserAvatar.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUserAvatar.defaultProps = {
    size: 24,
};

// @component
export default IconUserAvatar;
