// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBentoSvg from '../../_icons/24px/bento.svg';

const IconBento = styled(({ size, ...rest }) => <IconBentoSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBento.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBento.defaultProps = {
    size: 24,
};

// @component
export default IconBento;
