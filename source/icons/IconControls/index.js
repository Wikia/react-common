// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconControlsSvg from '../../_icons/24px/controls.svg';

const IconControls = styled(({ size, ...rest }) => <IconControlsSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconControls.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconControls.defaultProps = {
    size: 24,
};

// @component
export default IconControls;
