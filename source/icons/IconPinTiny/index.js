// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPinTinySvg from '../../_icons/12px/pin.svg';

const IconPinTiny = styled(({ size, ...rest }) => <IconPinTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPinTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPinTiny.defaultProps = {
    size: 12,
};

// @component
export default IconPinTiny;
