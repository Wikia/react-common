// This file is generated automatically via generate-icon-components.js
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconQuestionSmallSvg from '../../_icons/18px/question.svg';

const IconQuestionSmall = styled(({ size, ...rest }) => <IconQuestionSmallSvg height={size} width={size} {...rest} />)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconQuestionSmall.propTypes = {
    /** Size of the icon */
    size: PropTypes.number,
};

IconQuestionSmall.defaultProps = {
    size: 18,
};

// @component
export default IconQuestionSmall;
