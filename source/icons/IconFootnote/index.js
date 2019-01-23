// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconFootnoteSvg from '../../_icons/24px/footnote.svg';

const IconFootnote = styled(({ size, ...rest }) => <IconFootnoteSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconFootnote.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconFootnote.defaultProps = {
    size: 24,
};

// @component
export default IconFootnote;
