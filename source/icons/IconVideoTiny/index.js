// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconVideoTinySvg from '../../_icons/12px/video.svg';

const IconVideoTiny = styled(({ size, ...rest }) => <IconVideoTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconVideoTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconVideoTiny.defaultProps = {
    size: 12,
};

// @component
export default IconVideoTiny;
