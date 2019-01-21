// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconAlertSvg from '../../_icons/24x24/alert.svg';

const IconAlert = styled(IconAlertSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconAlert.propTypes = {
    size: PropTypes.number,
};

IconAlert.defaultProps = {
    size: 24,
};

// @component
export default IconAlert;
