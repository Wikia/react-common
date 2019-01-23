// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconNoteSmallSvg from '../../_icons/18px/note.svg';

const IconNoteSmall = styled(({ size, ...rest }) => <IconNoteSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconNoteSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconNoteSmall.defaultProps = {
    size: 18,
};

// @component
export default IconNoteSmall;
