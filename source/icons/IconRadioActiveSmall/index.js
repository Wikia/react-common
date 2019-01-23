// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconRadioActiveSmallSvg from '../../_icons/18px/radio-active.svg';

const IconRadioActiveSmall = styled(({ size, ...rest }) => <IconRadioActiveSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconRadioActiveSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconRadioActiveSmall.defaultProps = {
    size: 18,
};

// @component
export default IconRadioActiveSmall;
