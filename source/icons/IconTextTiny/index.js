// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconTextTinySvg from '../../_icons/12px/text.svg';

const IconTextTiny = styled(({ size, ...rest }) => <IconTextTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconTextTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconTextTiny.defaultProps = {
    size: 12,
};

// @component
export default IconTextTiny;
