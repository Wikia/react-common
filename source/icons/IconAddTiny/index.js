// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconAddTinySvg from '../../_icons/12px/add.svg';

const IconAddTiny = styled(({ size, ...rest }) => <IconAddTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconAddTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconAddTiny.defaultProps = {
    size: 12,
};

// @component
export default IconAddTiny;
