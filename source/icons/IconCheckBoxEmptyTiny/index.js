// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCheckBoxEmptyTinySvg from '../../_icons/12px/check-box-empty.svg';

const IconCheckBoxEmptyTiny = styled(({ size, ...rest }) => <IconCheckBoxEmptyTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCheckBoxEmptyTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCheckBoxEmptyTiny.defaultProps = {
    size: 12,
};

// @component
export default IconCheckBoxEmptyTiny;
