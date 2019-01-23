// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSettingsTinySvg from '../../_icons/12px/settings.svg';

const IconSettingsTiny = styled(({ size, ...rest }) => <IconSettingsTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSettingsTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSettingsTiny.defaultProps = {
    size: 12,
};

// @component
export default IconSettingsTiny;
