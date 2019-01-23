// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBentoTinySvg from '../../_icons/12px/bento.svg';

const IconBentoTiny = styled(({ size, ...rest }) => <IconBentoTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBentoTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBentoTiny.defaultProps = {
    size: 12,
};

// @component
export default IconBentoTiny;
