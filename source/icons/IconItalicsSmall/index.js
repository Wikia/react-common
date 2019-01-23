// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconItalicsSmallSvg from '../../_icons/18px/italics.svg';

const IconItalicsSmall = styled(({ size, ...rest }) => <IconItalicsSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconItalicsSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconItalicsSmall.defaultProps = {
    size: 18,
};

// @component
export default IconItalicsSmall;
