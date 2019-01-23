// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconGripperSvg from '../../_icons/24px/gripper.svg';

const IconGripper = styled(({ size, ...rest }) => <IconGripperSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconGripper.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconGripper.defaultProps = {
    size: 24,
};

// @component
export default IconGripper;
