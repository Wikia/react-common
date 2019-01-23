// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCalendarTinySvg from '../../_icons/12px/calendar.svg';

const IconCalendarTiny = styled(({ size, ...rest }) => <IconCalendarTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCalendarTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCalendarTiny.defaultProps = {
    size: 12,
};

// @component
export default IconCalendarTiny;
