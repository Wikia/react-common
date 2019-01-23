// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSoundOffSmallSvg from '../../_icons/18px/sound-off.svg';

const IconSoundOffSmall = styled(({ size, ...rest }) => <IconSoundOffSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSoundOffSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSoundOffSmall.defaultProps = {
    size: 18,
};

// @component
export default IconSoundOffSmall;
