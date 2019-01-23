// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconIndentLeftTinySvg from '../../_icons/12px/indent-left.svg';

const IconIndentLeftTiny = styled(({ size, ...rest }) => <IconIndentLeftTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconIndentLeftTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconIndentLeftTiny.defaultProps = {
    size: 12,
};

// @component
export default IconIndentLeftTiny;
