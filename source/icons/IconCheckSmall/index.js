// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCheckSmallSvg from '../../_icons/18px/check.svg';

const IconCheckSmall = styled(({ size, ...rest }) => <IconCheckSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCheckSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCheckSmall.defaultProps = {
    size: 18,
};

// @component
export default IconCheckSmall;
