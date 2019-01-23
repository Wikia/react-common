// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSoundSmallSvg from '../../_icons/18px/sound.svg';

const IconSoundSmall = styled(({ size, ...rest }) => <IconSoundSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSoundSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSoundSmall.defaultProps = {
    size: 18,
};

// @component
export default IconSoundSmall;
