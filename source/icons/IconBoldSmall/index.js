// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBoldSmallSvg from '../../_icons/18px/bold.svg';

const IconBoldSmall = styled(({ size, ...rest }) => <IconBoldSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBoldSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBoldSmall.defaultProps = {
    size: 18,
};

// @component
export default IconBoldSmall;
