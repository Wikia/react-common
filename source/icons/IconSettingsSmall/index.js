// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSettingsSmallSvg from '../../_icons/18px/settings.svg';

const IconSettingsSmall = styled(({ size, ...rest }) => <IconSettingsSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSettingsSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSettingsSmall.defaultProps = {
    size: 18,
};

// @component
export default IconSettingsSmall;
