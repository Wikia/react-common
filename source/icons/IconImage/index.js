// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconImageSvg from '../../_icons/24px/image.svg';

const IconImage = styled(({ size, ...rest }) => <IconImageSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconImage.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconImage.defaultProps = {
    size: 24,
};

// @component
export default IconImage;
