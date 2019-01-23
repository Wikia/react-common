// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCheckTinySvg from '../../_icons/12px/check.svg';

const IconCheckTiny = styled(({ size, ...rest }) => <IconCheckTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCheckTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCheckTiny.defaultProps = {
    size: 12,
};

// @component
export default IconCheckTiny;
