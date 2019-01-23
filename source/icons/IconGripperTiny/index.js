// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconGripperTinySvg from '../../_icons/12px/gripper.svg';

const IconGripperTiny = styled(({ size, ...rest }) => <IconGripperTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconGripperTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconGripperTiny.defaultProps = {
    size: 12,
};

// @component
export default IconGripperTiny;
