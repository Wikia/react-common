// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPauseSmallSvg from '../../_icons/18px/pause.svg';

const IconPauseSmall = styled(({ size, ...rest }) => <IconPauseSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPauseSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPauseSmall.defaultProps = {
    size: 18,
};

// @component
export default IconPauseSmall;
