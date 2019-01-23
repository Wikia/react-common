// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTagSmallSvg from '../../_icons/18px/tag.svg';

const IconTagSmall = styled(({ size, ...rest }) => <IconTagSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTagSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTagSmall.defaultProps = {
    size: 18,
};

// @component
export default IconTagSmall;
