// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSettingsSvg from '../../_icons/24px/settings.svg';

const IconSettings = styled(({ size, ...rest }) => <IconSettingsSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSettings.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSettings.defaultProps = {
    size: 24,
};

// @component
export default IconSettings;
