// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconRadioEmptyTinySvg from '../../_icons/12px/radio-empty.svg';

const IconRadioEmptyTiny = styled(({ size, ...rest }) => <IconRadioEmptyTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconRadioEmptyTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconRadioEmptyTiny.defaultProps = {
    size: 12,
};

// @component
export default IconRadioEmptyTiny;
