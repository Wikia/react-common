// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconAlertTinySvg from '../../_icons/12px/alert.svg';

const IconAlertTiny = styled(({ size, ...rest }) => <IconAlertTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconAlertTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconAlertTiny.defaultProps = {
    size: 12,
};

// @component
export default IconAlertTiny;
