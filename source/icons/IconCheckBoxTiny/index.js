// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCheckBoxTinySvg from '../../_icons/12px/check-box.svg';

const IconCheckBoxTiny = styled(({ size, ...rest }) => <IconCheckBoxTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCheckBoxTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCheckBoxTiny.defaultProps = {
    size: 12,
};

// @component
export default IconCheckBoxTiny;
