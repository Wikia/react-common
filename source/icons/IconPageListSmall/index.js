// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPageListSmallSvg from '../../_icons/18px/page-list.svg';

const IconPageListSmall = styled(({ size, ...rest }) => <IconPageListSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPageListSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPageListSmall.defaultProps = {
    size: 18,
};

// @component
export default IconPageListSmall;
