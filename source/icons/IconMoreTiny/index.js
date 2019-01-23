// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMoreTinySvg from '../../_icons/12px/more.svg';

const IconMoreTiny = styled(({ size, ...rest }) => <IconMoreTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMoreTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconMoreTiny.defaultProps = {
    size: 12,
};

// @component
export default IconMoreTiny;
