// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBentoSmallSvg from '../../_icons/18px/bento.svg';

const IconBentoSmall = styled(({ size, ...rest }) => <IconBentoSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBentoSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBentoSmall.defaultProps = {
    size: 18,
};

// @component
export default IconBentoSmall;
