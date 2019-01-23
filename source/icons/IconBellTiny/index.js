// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBellTinySvg from '../../_icons/12px/bell.svg';

const IconBellTiny = styled(({ size, ...rest }) => <IconBellTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBellTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBellTiny.defaultProps = {
    size: 12,
};

// @component
export default IconBellTiny;
