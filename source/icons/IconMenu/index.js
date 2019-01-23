// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMenuSvg from '../../_icons/24px/menu.svg';

const IconMenu = styled(({ size, ...rest }) => <IconMenuSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMenu.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMenu.defaultProps = {
    size: 24,
};

// @component
export default IconMenu;
