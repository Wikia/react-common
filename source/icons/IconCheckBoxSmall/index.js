// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCheckBoxSmallSvg from '../../_icons/18px/check-box.svg';

const IconCheckBoxSmall = styled(({ size, ...rest }) => <IconCheckBoxSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCheckBoxSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCheckBoxSmall.defaultProps = {
    size: 18,
};

// @component
export default IconCheckBoxSmall;
