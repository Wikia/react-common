// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUserSvg from '../../_icons/24px/user.svg';

const IconUser = styled(({ size, ...rest }) => <IconUserSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUser.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUser.defaultProps = {
    size: 24,
};

// @component
export default IconUser;
