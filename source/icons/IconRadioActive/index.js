// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconRadioActiveSvg from '../../_icons/24px/radio-active.svg';

const IconRadioActive = styled(({ size, ...rest }) => <IconRadioActiveSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconRadioActive.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconRadioActive.defaultProps = {
    size: 24,
};

// @component
export default IconRadioActive;
