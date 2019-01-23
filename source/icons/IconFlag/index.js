// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFlagSvg from '../../_icons/24px/flag.svg';

const IconFlag = styled(({ size, ...rest }) => <IconFlagSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFlag.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconFlag.defaultProps = {
    size: 24,
};

// @component
export default IconFlag;
