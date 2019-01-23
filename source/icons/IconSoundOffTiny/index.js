// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSoundOffTinySvg from '../../_icons/12px/sound-off.svg';

const IconSoundOffTiny = styled(({ size, ...rest }) => <IconSoundOffTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSoundOffTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSoundOffTiny.defaultProps = {
    size: 12,
};

// @component
export default IconSoundOffTiny;
