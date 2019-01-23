// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBookSmallSvg from '../../_icons/18px/book.svg';

const IconBookSmall = styled(({ size, ...rest }) => <IconBookSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBookSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBookSmall.defaultProps = {
    size: 18,
};

// @component
export default IconBookSmall;
