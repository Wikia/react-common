// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUnlockTinySvg from '../../_icons/12px/unlock.svg';

const IconUnlockTiny = styled(({ size, ...rest }) => <IconUnlockTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUnlockTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconUnlockTiny.defaultProps = {
    size: 12,
};

// @component
export default IconUnlockTiny;
