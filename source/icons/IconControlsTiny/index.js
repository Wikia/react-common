// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconControlsTinySvg from '../../_icons/12px/controls.svg';

const IconControlsTiny = styled(({ size, ...rest }) => <IconControlsTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconControlsTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconControlsTiny.defaultProps = {
    size: 12,
};

// @component
export default IconControlsTiny;
