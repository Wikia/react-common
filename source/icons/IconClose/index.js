// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCloseSvg from '../../_icons/24px/close.svg';

const IconClose = styled(({ size, ...rest }) => <IconCloseSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconClose.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconClose.defaultProps = {
    size: 24,
};

// @component
export default IconClose;
