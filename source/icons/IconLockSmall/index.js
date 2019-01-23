// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconLockSmallSvg from '../../_icons/18px/lock.svg';

const IconLockSmall = styled(({ size, ...rest }) => <IconLockSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconLockSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconLockSmall.defaultProps = {
    size: 18,
};

// @component
export default IconLockSmall;
