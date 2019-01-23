// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMoreSmallSvg from '../../_icons/18px/more.svg';

const IconMoreSmall = styled(({ size, ...rest }) => <IconMoreSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMoreSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMoreSmall.defaultProps = {
    size: 18,
};

// @component
export default IconMoreSmall;
