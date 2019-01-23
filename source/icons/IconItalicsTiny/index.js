// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconItalicsTinySvg from '../../_icons/12px/italics.svg';

const IconItalicsTiny = styled(({ size, ...rest }) => <IconItalicsTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconItalicsTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconItalicsTiny.defaultProps = {
    size: 12,
};

// @component
export default IconItalicsTiny;
