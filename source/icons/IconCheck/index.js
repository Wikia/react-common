// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCheckSvg from '../../_icons/24px/check.svg';

const IconCheck = styled(({ size, ...rest }) => <IconCheckSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCheck.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCheck.defaultProps = {
    size: 24,
};

// @component
export default IconCheck;
