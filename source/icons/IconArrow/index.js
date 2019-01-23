// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconArrowSvg from '../../_icons/24px/arrow.svg';

const IconArrow = styled(({ size, ...rest }) => <IconArrowSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconArrow.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconArrow.defaultProps = {
    size: 24,
};

// @component
export default IconArrow;
