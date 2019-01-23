// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconImagesSmallSvg from '../../_icons/18px/images.svg';

const IconImagesSmall = styled(({ size, ...rest }) => <IconImagesSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconImagesSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconImagesSmall.defaultProps = {
    size: 18,
};

// @component
export default IconImagesSmall;
