// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUserSvg from '../../_icons/24x24/user.svg';

const IconUser = styled(IconUserSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUser.propTypes = {
    size: PropTypes.number,
};

IconUser.defaultProps = {
    size: 24,
};

// @component
export default IconUser;
