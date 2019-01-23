// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMenuSmallSvg from '../../_icons/18px/menu.svg';

const IconMenuSmall = styled(({ size, ...rest }) => <IconMenuSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMenuSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMenuSmall.defaultProps = {
    size: 18,
};

// @component
export default IconMenuSmall;
