// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconAddSmallSvg from '../../_icons/18px/add.svg';

const IconAddSmall = styled(({ size, ...rest }) => <IconAddSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconAddSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconAddSmall.defaultProps = {
    size: 18,
};

// @component
export default IconAddSmall;
