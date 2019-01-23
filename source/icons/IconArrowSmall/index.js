// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconArrowSmallSvg from '../../_icons/18px/arrow.svg';

const IconArrowSmall = styled(({ size, ...rest }) => <IconArrowSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconArrowSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconArrowSmall.defaultProps = {
    size: 18,
};

// @component
export default IconArrowSmall;
