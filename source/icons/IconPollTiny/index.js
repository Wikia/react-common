// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPollTinySvg from '../../_icons/12px/poll.svg';

const IconPollTiny = styled(({ size, ...rest }) => <IconPollTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPollTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconPollTiny.defaultProps = {
    size: 12,
};

// @component
export default IconPollTiny;
