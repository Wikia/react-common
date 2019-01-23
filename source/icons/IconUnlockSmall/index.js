// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUnlockSmallSvg from '../../_icons/18px/unlock.svg';

const IconUnlockSmall = styled(({ size, ...rest }) => <IconUnlockSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUnlockSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUnlockSmall.defaultProps = {
    size: 18,
};

// @component
export default IconUnlockSmall;
