// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFlagSmallSvg from '../../_icons/18px/flag.svg';

const IconFlagSmall = styled(({ size, ...rest }) => <IconFlagSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFlagSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconFlagSmall.defaultProps = {
    size: 18,
};

// @component
export default IconFlagSmall;
