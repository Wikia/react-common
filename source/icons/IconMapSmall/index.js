// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMapSmallSvg from '../../_icons/18px/map.svg';

const IconMapSmall = styled(({ size, ...rest }) => <IconMapSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMapSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMapSmall.defaultProps = {
    size: 18,
};

// @component
export default IconMapSmall;
