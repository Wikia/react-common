// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconCalendarSmallSvg from '../../_icons/18px/calendar.svg';

const IconCalendarSmall = styled(({ size, ...rest }) => <IconCalendarSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconCalendarSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconCalendarSmall.defaultProps = {
    size: 18,
};

// @component
export default IconCalendarSmall;
