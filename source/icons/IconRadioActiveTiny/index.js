// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconRadioActiveTinySvg from '../../_icons/12px/radio-active.svg';

const IconRadioActiveTiny = styled(({ size, ...rest }) => <IconRadioActiveTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconRadioActiveTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconRadioActiveTiny.defaultProps = {
    size: 12,
};

// @component
export default IconRadioActiveTiny;
