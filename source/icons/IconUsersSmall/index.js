// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUsersSmallSvg from '../../_icons/18px/users.svg';

const IconUsersSmall = styled(({ size, ...rest }) => <IconUsersSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUsersSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUsersSmall.defaultProps = {
    size: 18,
};

// @component
export default IconUsersSmall;
