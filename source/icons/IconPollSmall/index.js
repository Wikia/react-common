// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPollSmallSvg from '../../_icons/18px/poll.svg';

const IconPollSmall = styled(({ size, ...rest }) => <IconPollSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPollSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPollSmall.defaultProps = {
    size: 18,
};

// @component
export default IconPollSmall;
