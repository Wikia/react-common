// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSoundSvg from '../../_icons/24px/sound.svg';

const IconSound = styled(({ size, ...rest }) => <IconSoundSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSound.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSound.defaultProps = {
    size: 24,
};

// @component
export default IconSound;
