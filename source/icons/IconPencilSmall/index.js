// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPencilSmallSvg from '../../_icons/18px/pencil.svg';

const IconPencilSmall = styled(({ size, ...rest }) => <IconPencilSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPencilSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPencilSmall.defaultProps = {
    size: 18,
};

// @component
export default IconPencilSmall;
