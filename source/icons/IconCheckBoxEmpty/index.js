// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCheckBoxEmptySvg from '../../_icons/24px/check-box-empty.svg';

const IconCheckBoxEmpty = styled(({ size, ...rest }) => <IconCheckBoxEmptySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCheckBoxEmpty.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCheckBoxEmpty.defaultProps = {
    size: 24,
};

// @component
export default IconCheckBoxEmpty;
