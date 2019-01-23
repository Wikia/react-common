// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconIndentRightSvg from '../../_icons/24px/indent-right.svg';

const IconIndentRight = styled(({ size, ...rest }) => <IconIndentRightSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconIndentRight.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconIndentRight.defaultProps = {
    size: 24,
};

// @component
export default IconIndentRight;
