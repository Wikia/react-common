// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconRedditTinySvg from '../../_icons/12px/reddit.svg';

const IconRedditTiny = styled(({ size, ...rest }) => <IconRedditTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconRedditTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconRedditTiny.defaultProps = {
    size: 12,
};

// @component
export default IconRedditTiny;
