// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBookSvg from '../../_icons/24px/book.svg';

const IconBook = styled(({ size, ...rest }) => <IconBookSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBook.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBook.defaultProps = {
    size: 24,
};

// @component
export default IconBook;
