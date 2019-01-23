// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconRadioEmptySmallSvg from '../../_icons/18px/radio-empty.svg';

const IconRadioEmptySmall = styled(({ size, ...rest }) => <IconRadioEmptySmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconRadioEmptySmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconRadioEmptySmall.defaultProps = {
    size: 18,
};

// @component
export default IconRadioEmptySmall;
