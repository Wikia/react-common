// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconQuoteTinySvg from '../../_icons/12px/quote.svg';

const IconQuoteTiny = styled(({ size, ...rest }) => <IconQuoteTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconQuoteTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconQuoteTiny.defaultProps = {
    size: 12,
};

// @component
export default IconQuoteTiny;
