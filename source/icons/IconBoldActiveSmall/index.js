// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBoldActiveSmallSvg from '../../_icons/18px/bold-active.svg';

const IconBoldActiveSmall = styled(({ size, ...rest }) => <IconBoldActiveSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBoldActiveSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBoldActiveSmall.defaultProps = {
    size: 18,
};

// @component
export default IconBoldActiveSmall;
