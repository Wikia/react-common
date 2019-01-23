// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconControlsSmallSvg from '../../_icons/18px/controls.svg';

const IconControlsSmall = styled(({ size, ...rest }) => <IconControlsSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconControlsSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconControlsSmall.defaultProps = {
    size: 18,
};

// @component
export default IconControlsSmall;
