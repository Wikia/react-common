// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUnlockSvg from '../../_icons/24px/unlock.svg';

const IconUnlock = styled(({ size, ...rest }) => <IconUnlockSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUnlock.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUnlock.defaultProps = {
    size: 24,
};

// @component
export default IconUnlock;
