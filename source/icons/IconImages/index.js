// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconImagesSvg from '../../_icons/24x24/images.svg';

const IconImages = styled(IconImagesSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconImages.propTypes = {
    size: PropTypes.number,
};

IconImages.defaultProps = {
    size: 24,
};

// @component
export default IconImages;
