// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconNumberedListSmallSvg from '../../_icons/18px/numbered-list.svg';

const IconNumberedListSmall = styled(({ size, ...rest }) => <IconNumberedListSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconNumberedListSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconNumberedListSmall.defaultProps = {
    size: 18,
};

// @component
export default IconNumberedListSmall;
