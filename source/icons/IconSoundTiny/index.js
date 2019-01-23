// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSoundTinySvg from '../../_icons/12px/sound.svg';

const IconSoundTiny = styled(({ size, ...rest }) => <IconSoundTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSoundTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSoundTiny.defaultProps = {
    size: 12,
};

// @component
export default IconSoundTiny;
