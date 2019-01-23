// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconH2SmallSvg from '../../_icons/18px/H2.svg';

const IconH2Small = styled(({ size, ...rest }) => <IconH2SmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconH2Small.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconH2Small.defaultProps = {
    size: 18,
};

// @component
export default IconH2Small;
