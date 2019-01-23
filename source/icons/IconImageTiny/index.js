// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconImageTinySvg from '../../_icons/12px/image.svg';

const IconImageTiny = styled(({ size, ...rest }) => <IconImageTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconImageTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconImageTiny.defaultProps = {
    size: 12,
};

// @component
export default IconImageTiny;
