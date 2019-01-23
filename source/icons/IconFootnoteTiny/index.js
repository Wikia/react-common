// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFootnoteTinySvg from '../../_icons/12px/footnote.svg';

const IconFootnoteTiny = styled(({ size, ...rest }) => <IconFootnoteTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFootnoteTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconFootnoteTiny.defaultProps = {
    size: 12,
};

// @component
export default IconFootnoteTiny;
