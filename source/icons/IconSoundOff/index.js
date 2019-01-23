// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSoundOffSvg from '../../_icons/24px/sound off.svg';

const IconSoundOff = styled(({ size, ...rest }) => <IconSoundOffSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSoundOff.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSoundOff.defaultProps = {
    size: 24,
};

// @component
export default IconSoundOff;
