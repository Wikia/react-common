// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUserSmallSvg from '../../_icons/18px/user.svg';

const IconUserSmall = styled(({ size, ...rest }) => <IconUserSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUserSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUserSmall.defaultProps = {
    size: 18,
};

// @component
export default IconUserSmall;
