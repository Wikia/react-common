// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCheckBoxSvg from '../../_icons/24px/check-box.svg';

const IconCheckBox = styled(({ size, ...rest }) => <IconCheckBoxSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCheckBox.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCheckBox.defaultProps = {
    size: 24,
};

// @component
export default IconCheckBox;
