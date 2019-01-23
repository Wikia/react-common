// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconLockTinySvg from '../../_icons/12px/lock.svg';

const IconLockTiny = styled(({ size, ...rest }) => <IconLockTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconLockTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconLockTiny.defaultProps = {
    size: 12,
};

// @component
export default IconLockTiny;
