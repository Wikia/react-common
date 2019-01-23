// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconAlertSvg from '../../_icons/24px/alert.svg';

const IconAlert = styled(({ size, ...rest }) => <IconAlertSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconAlert.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconAlert.defaultProps = {
    size: 24,
};

// @component
export default IconAlert;
