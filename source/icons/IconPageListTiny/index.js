// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPageListTinySvg from '../../_icons/12px/page-list.svg';

const IconPageListTiny = styled(({ size, ...rest }) => <IconPageListTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPageListTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPageListTiny.defaultProps = {
    size: 12,
};

// @component
export default IconPageListTiny;
