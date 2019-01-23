// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFandomSvg from '../../_icons/24px/fandom.svg';

const IconFandom = styled(({ size, ...rest }) => <IconFandomSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFandom.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconFandom.defaultProps = {
    size: 24,
};

// @component
export default IconFandom;
