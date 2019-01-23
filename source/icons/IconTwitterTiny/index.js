// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTwitterTinySvg from '../../_icons/12px/twitter.svg';

const IconTwitterTiny = styled(({ size, ...rest }) => <IconTwitterTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTwitterTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTwitterTiny.defaultProps = {
    size: 12,
};

// @component
export default IconTwitterTiny;
