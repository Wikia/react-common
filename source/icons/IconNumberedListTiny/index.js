// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconNumberedListTinySvg from '../../_icons/12px/numbered-list.svg';

const IconNumberedListTiny = styled(({ size, ...rest }) => <IconNumberedListTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconNumberedListTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconNumberedListTiny.defaultProps = {
    size: 12,
};

// @component
export default IconNumberedListTiny;
