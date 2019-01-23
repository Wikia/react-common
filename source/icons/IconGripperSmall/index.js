// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconGripperSmallSvg from '../../_icons/18px/gripper.svg';

const IconGripperSmall = styled(({ size, ...rest }) => <IconGripperSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconGripperSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconGripperSmall.defaultProps = {
    size: 18,
};

// @component
export default IconGripperSmall;
