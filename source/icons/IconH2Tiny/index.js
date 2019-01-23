// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconH2TinySvg from '../../_icons/12px/H2.svg';

const IconH2Tiny = styled(({ size, ...rest }) => <IconH2TinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconH2Tiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconH2Tiny.defaultProps = {
    size: 12,
};

// @component
export default IconH2Tiny;
