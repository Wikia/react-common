// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconVideoSmallSvg from '../../_icons/18px/video.svg';

const IconVideoSmall = styled(({ size, ...rest }) => <IconVideoSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconVideoSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconVideoSmall.defaultProps = {
    size: 18,
};

// @component
export default IconVideoSmall;
