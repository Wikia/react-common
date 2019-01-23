// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconNoteTinySvg from '../../_icons/12px/note.svg';

const IconNoteTiny = styled(({ size, ...rest }) => <IconNoteTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconNoteTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconNoteTiny.defaultProps = {
    size: 12,
};

// @component
export default IconNoteTiny;
