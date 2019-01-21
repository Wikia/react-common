// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUsersSvg from '../../_icons/24x24/users.svg';

const IconUsers = styled(IconUsersSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUsers.propTypes = {
    size: PropTypes.number,
};

IconUsers.defaultProps = {
    size: 24,
};

// @component
export default IconUsers;
