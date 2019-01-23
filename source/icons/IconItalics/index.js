// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconItalicsSvg from '../../_icons/24px/italics.svg';

const IconItalics = styled(({ size, ...rest }) => <IconItalicsSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconItalics.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconItalics.defaultProps = {
    size: 24,
};

// @component
export default IconItalics;
