import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// we have alt prop in rest
// eslint-disable-next-line jsx-a11y/alt-text
const UserAvatar = styled(({ borderWidth, ...rest }) => <img {...rest} />)`
    height: 100%;
    width: 100%;
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    border: ${props => props.borderWidth} solid #ccc;
`;

UserAvatar.propTypes = {
    alt: PropTypes.string.isRequired,
    borderWidth: PropTypes.string.isRequired,
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
};

UserAvatar.defaultProps = {
    className: '',
};

export default UserAvatar;
