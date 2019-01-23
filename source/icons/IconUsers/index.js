// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUsersSvg from '../../_icons/24px/users.svg';

const IconUsers = styled(({ size, ...rest }) => <IconUsersSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUsers.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUsers.defaultProps = {
    size: 24,
};

// @component
export default IconUsers;
