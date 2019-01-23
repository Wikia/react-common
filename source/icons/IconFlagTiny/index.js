// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFlagTinySvg from '../../_icons/12px/flag.svg';

const IconFlagTiny = styled(({ size, ...rest }) => <IconFlagTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFlagTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconFlagTiny.defaultProps = {
    size: 12,
};

// @component
export default IconFlagTiny;
