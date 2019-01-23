// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBellSvg from '../../_icons/24px/bell.svg';

const IconBell = styled(({ size, ...rest }) => <IconBellSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBell.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBell.defaultProps = {
    size: 24,
};

// @component
export default IconBell;
