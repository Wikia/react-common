// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconExternalLinkTinySvg from '../../_icons/12px/external link.svg';

const IconExternalLinkTiny = styled(({ size, ...rest }) => <IconExternalLinkTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconExternalLinkTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconExternalLinkTiny.defaultProps = {
    size: 12,
};

// @component
export default IconExternalLinkTiny;
