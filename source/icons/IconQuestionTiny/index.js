// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconQuestionTinySvg from '../../_icons/12px/question.svg';

const IconQuestionTiny = styled(({ size, ...rest }) => <IconQuestionTinySvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconQuestionTiny.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconQuestionTiny.defaultProps = {
    size: 12,
};

// @component
export default IconQuestionTiny;
