// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPencilSvg from '../../_icons/24px/pencil.svg';

const IconPencil = styled(({ size, ...rest }) => <IconPencilSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPencil.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPencil.defaultProps = {
    size: 24,
};

// @component
export default IconPencil;
