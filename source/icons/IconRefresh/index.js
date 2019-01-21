// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconRefreshSvg from '../../_icons/24x24/refresh.svg';

const IconRefresh = styled(IconRefreshSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconRefresh.propTypes = {
    size: PropTypes.number,
};

IconRefresh.defaultProps = {
    size: 24,
};

// @component
export default IconRefresh;
