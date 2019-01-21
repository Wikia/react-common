// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconPauseSvg from '../../_icons/24x24/pause.svg';

const IconPause = styled(IconPauseSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconPause.propTypes = {
    size: PropTypes.number,
};

IconPause.defaultProps = {
    size: 24,
};

// @component
export default IconPause;
