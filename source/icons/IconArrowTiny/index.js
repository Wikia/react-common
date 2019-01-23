// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconArrowTinySvg from '../../_icons/12px/arrow.svg';

const IconArrowTiny = styled(({ size, ...rest }) => <IconArrowTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconArrowTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconArrowTiny.defaultProps = {
    size: 12,
};

// @component
export default IconArrowTiny;
