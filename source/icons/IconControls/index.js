// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconControlsSvg from '../../_icons/24x24/controls.svg';

const IconControls = styled(IconControlsSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconControls.propTypes = {
    size: PropTypes.number,
};

IconControls.defaultProps = {
    size: 24,
};

// @component
export default IconControls;
