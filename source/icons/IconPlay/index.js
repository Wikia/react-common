// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPlaySvg from '../../_icons/24x24/play.svg';

const IconPlay = styled(IconPlaySvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPlay.propTypes = {
    size: PropTypes.number,
};

IconPlay.defaultProps = {
    size: 24,
};

// @component
export default IconPlay;
