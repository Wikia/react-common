import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import IconAvatar from '../../icons/IconAvatar';

// we have alt prop in rest
// eslint-disable-next-line jsx-a11y/alt-text
const DefaultAvatar = styled(({ borderWidth, size, ...rest }) => <IconAvatar height={size} width={size} {...rest} />)`
    background-color: #fff;
    border-radius: 50%;
    border: 0;
    box-sizing: border-box;
    display: inline-block;
    fill: ${props => props.theme.color.fandom_mid_light_gray};
`;

DefaultAvatar.defaultProps = {
    alt: PropTypes.string.isRequired,
    borderWidth: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    size: PropTypes.string.isRequired,
};

DefaultAvatar.defaultProps = {
    className: '',
};

export default DefaultAvatar;
