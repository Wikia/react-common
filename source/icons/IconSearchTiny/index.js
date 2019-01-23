// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconSearchTinySvg from '../../_icons/12px/search.svg';

const IconSearchTiny = styled(({ size, ...rest }) => <IconSearchTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconSearchTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconSearchTiny.defaultProps = {
    size: 12,
};

// @component
export default IconSearchTiny;
