// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconReloadSmallSvg from '../../_icons/18px/reload.svg';

const IconReloadSmall = styled(({ size, ...rest }) => <IconReloadSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconReloadSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconReloadSmall.defaultProps = {
    size: 18,
};

// @component
export default IconReloadSmall;
