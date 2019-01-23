// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTwitterSmallSvg from '../../_icons/18px/twitter.svg';

const IconTwitterSmall = styled(({ size, ...rest }) => <IconTwitterSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTwitterSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTwitterSmall.defaultProps = {
    size: 18,
};

// @component
export default IconTwitterSmall;
