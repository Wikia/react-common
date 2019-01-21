// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconHomeSvg from '../../_icons/24x24/home.svg';

const IconHome = styled(IconHomeSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconHome.propTypes = {
    size: PropTypes.number,
};

IconHome.defaultProps = {
    size: 24,
};

// @component
export default IconHome;
