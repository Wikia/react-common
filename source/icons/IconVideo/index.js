// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconVideoSvg from '../../_icons/24px/video.svg';

const IconVideo = styled(({ size, ...rest }) => <IconVideoSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconVideo.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconVideo.defaultProps = {
    size: 24,
};

// @component
export default IconVideo;
