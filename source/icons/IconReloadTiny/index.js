// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconReloadTinySvg from '../../_icons/12px/reload.svg';

const IconReloadTiny = styled(({ size, ...rest }) => <IconReloadTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconReloadTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconReloadTiny.defaultProps = {
    size: 12,
};

// @component
export default IconReloadTiny;
