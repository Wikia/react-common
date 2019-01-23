// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconH3TinySvg from '../../_icons/12px/H3.svg';

const IconH3Tiny = styled(({ size, ...rest }) => <IconH3TinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconH3Tiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconH3Tiny.defaultProps = {
    size: 12,
};

// @component
export default IconH3Tiny;
