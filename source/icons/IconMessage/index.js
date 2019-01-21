// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconMessageSvg from '../../_icons/24x24/message.svg';

const IconMessage = styled(IconMessageSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconMessage.propTypes = {
    size: PropTypes.number,
};

IconMessage.defaultProps = {
    size: 24,
};

// @component
export default IconMessage;
