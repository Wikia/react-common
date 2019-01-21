// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconUserAvatarSvg from '../../_icons/24x24/user avatar.svg';

const IconUserAvatar = styled(IconUserAvatarSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconUserAvatar.propTypes = {
    size: PropTypes.number,
};

IconUserAvatar.defaultProps = {
    size: 24,
};

// @component
export default IconUserAvatar;
