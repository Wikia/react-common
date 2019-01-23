// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCheckBoxEmptySmallSvg from '../../_icons/18px/check-box-empty.svg';

const IconCheckBoxEmptySmall = styled(({ size, ...rest }) => <IconCheckBoxEmptySmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCheckBoxEmptySmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCheckBoxEmptySmall.defaultProps = {
    size: 18,
};

// @component
export default IconCheckBoxEmptySmall;
