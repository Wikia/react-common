// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBookTinySvg from '../../_icons/12px/book.svg';

const IconBookTiny = styled(({ size, ...rest }) => <IconBookTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBookTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBookTiny.defaultProps = {
    size: 12,
};

// @component
export default IconBookTiny;
