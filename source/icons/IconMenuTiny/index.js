// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMenuTinySvg from '../../_icons/12px/menu.svg';

const IconMenuTiny = styled(({ size, ...rest }) => <IconMenuTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMenuTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMenuTiny.defaultProps = {
    size: 12,
};

// @component
export default IconMenuTiny;
