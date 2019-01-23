// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconLockSvg from '../../_icons/24px/lock.svg';

const IconLock = styled(({ size, ...rest }) => <IconLockSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconLock.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconLock.defaultProps = {
    size: 24,
};

// @component
export default IconLock;
