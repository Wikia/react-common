// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconReloadSvg from '../../_icons/24px/reload.svg';

const IconReload = styled(({ size, ...rest }) => <IconReloadSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconReload.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconReload.defaultProps = {
    size: 24,
};

// @component
export default IconReload;
