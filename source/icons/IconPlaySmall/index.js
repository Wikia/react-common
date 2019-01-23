// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPlaySmallSvg from '../../_icons/18px/play.svg';

const IconPlaySmall = styled(({ size, ...rest }) => <IconPlaySmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPlaySmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPlaySmall.defaultProps = {
    size: 18,
};

// @component
export default IconPlaySmall;
