// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconLinkTinySvg from '../../_icons/12px/link.svg';

const IconLinkTiny = styled(({ size, ...rest }) => <IconLinkTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconLinkTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconLinkTiny.defaultProps = {
    size: 12,
};

// @component
export default IconLinkTiny;
