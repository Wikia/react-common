// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconLeftAlignTinySvg from '../../_icons/12px/left-align.svg';

const IconLeftAlignTiny = styled(({ size, ...rest }) => <IconLeftAlignTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconLeftAlignTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconLeftAlignTiny.defaultProps = {
    size: 12,
};

// @component
export default IconLeftAlignTiny;
