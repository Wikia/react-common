// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconIndentLeftSvg from '../../_icons/24px/indent-left.svg';

const IconIndentLeft = styled(({ size, ...rest }) => <IconIndentLeftSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconIndentLeft.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconIndentLeft.defaultProps = {
    size: 24,
};

// @component
export default IconIndentLeft;
