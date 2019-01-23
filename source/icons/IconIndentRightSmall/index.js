// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconIndentRightSmallSvg from '../../_icons/18px/indent-right.svg';

const IconIndentRightSmall = styled(({ size, ...rest }) => <IconIndentRightSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconIndentRightSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconIndentRightSmall.defaultProps = {
    size: 18,
};

// @component
export default IconIndentRightSmall;
