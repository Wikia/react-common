// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconRadioEmptySvg from '../../_icons/24px/radio-empty.svg';

const IconRadioEmpty = styled(({ size, ...rest }) => <IconRadioEmptySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconRadioEmpty.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconRadioEmpty.defaultProps = {
    size: 24,
};

// @component
export default IconRadioEmpty;
