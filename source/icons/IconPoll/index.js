// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPollSvg from '../../_icons/24x24/poll.svg';

const IconPoll = styled(IconPollSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPoll.propTypes = {
    size: PropTypes.number,
};

IconPoll.defaultProps = {
    size: 24,
};

// @component
export default IconPoll;
