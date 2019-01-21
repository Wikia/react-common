// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUpvoteSvg from '../../_icons/24x24/upvote.svg';

const IconUpvote = styled(IconUpvoteSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUpvote.propTypes = {
    size: PropTypes.number,
};

IconUpvote.defaultProps = {
    size: 24,
};

// @component
export default IconUpvote;
