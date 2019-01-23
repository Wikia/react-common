// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconActivitySvg from '../../_icons/24px/activity.svg';

const IconActivity = styled(({ size, ...rest }) => <IconActivitySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconActivity.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconActivity.defaultProps = {
    size: 24,
};

// @component
export default IconActivity;
