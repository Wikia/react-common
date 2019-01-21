// This file is generated automatically via generate-icon-components.js
import styled from 'styled-components';
import PropTypes from 'prop-types';

import IconImageSvg from '../../_icons/24x24/image.svg';

const IconImage = styled(IconImageSvg)`
    fill: currentColor;
    height: ${props => props.size}px;
    width: ${props => props.size}px;
`;

IconImage.propTypes = {
    size: PropTypes.number,
};

IconImage.defaultProps = {
    size: 24,
};

// @component
export default IconImage;
