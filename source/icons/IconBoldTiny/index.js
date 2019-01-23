// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconBoldTinySvg from '../../_icons/12px/bold.svg';

const IconBoldTiny = styled(({ size, ...rest }) => <IconBoldTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconBoldTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconBoldTiny.defaultProps = {
    size: 12,
};

// @component
export default IconBoldTiny;
