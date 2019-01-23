// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconActivityTinySvg from '../../_icons/12px/activity.svg';

const IconActivityTiny = styled(({ size, ...rest }) => <IconActivityTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconActivityTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconActivityTiny.defaultProps = {
    size: 12,
};

// @component
export default IconActivityTiny;
