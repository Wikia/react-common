// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUserAvatarTinySvg from '../../_icons/12px/user-avatar.svg';

const IconUserAvatarTiny = styled(({ size, ...rest }) => <IconUserAvatarTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUserAvatarTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUserAvatarTiny.defaultProps = {
    size: 12,
};

// @component
export default IconUserAvatarTiny;
