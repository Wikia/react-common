// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCalendarSvg from '../../_icons/24px/calendar.svg';

const IconCalendar = styled(({ size, ...rest }) => <IconCalendarSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCalendar.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCalendar.defaultProps = {
    size: 24,
};

// @component
export default IconCalendar;
