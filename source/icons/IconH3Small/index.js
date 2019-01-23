// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconH3SmallSvg from '../../_icons/18px/H3.svg';

const IconH3Small = styled(({ size, ...rest }) => <IconH3SmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconH3Small.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconH3Small.defaultProps = {
    size: 18,
};

// @component
export default IconH3Small;
