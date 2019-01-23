// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconNoteSvg from '../../_icons/24px/note.svg';

const IconNote = styled(({ size, ...rest }) => <IconNoteSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconNote.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconNote.defaultProps = {
    size: 24,
};

// @component
export default IconNote;
