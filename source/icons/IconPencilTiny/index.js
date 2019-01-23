// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPencilTinySvg from '../../_icons/12px/pencil.svg';

const IconPencilTiny = styled(({ size, ...rest }) => <IconPencilTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPencilTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPencilTiny.defaultProps = {
    size: 12,
};

// @component
export default IconPencilTiny;
