// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPollSvg from '../../_icons/24px/poll.svg';

const IconPoll = styled(({ size, ...rest }) => <IconPollSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPoll.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPoll.defaultProps = {
    size: 24,
};

// @component
export default IconPoll;
