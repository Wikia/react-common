// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFandomTinySvg from '../../_icons/12px/fandom.svg';

const IconFandomTiny = styled(({ size, ...rest }) => <IconFandomTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFandomTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconFandomTiny.defaultProps = {
    size: 12,
};

// @component
export default IconFandomTiny;
