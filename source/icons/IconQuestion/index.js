// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconQuestionSvg from '../../_icons/24px/question.svg';

const IconQuestion = styled(({ size, ...rest }) => <IconQuestionSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconQuestion.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconQuestion.defaultProps = {
    size: 24,
};

// @component
export default IconQuestion;
