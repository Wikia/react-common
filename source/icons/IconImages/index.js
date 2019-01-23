// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconImagesSvg from '../../_icons/24px/images.svg';

const IconImages = styled(({ size, ...rest }) => <IconImagesSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconImages.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconImages.defaultProps = {
    size: 24,
};

// @component
export default IconImages;
