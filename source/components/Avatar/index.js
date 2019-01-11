import React from 'react';
import PropTypes from 'prop-types';

import AvatarImage from './components/AvatarImage';
import Badge from './components/Badge';

import './styles.scss';

const getAvatarImage = (href, alt, src) => {
    const avatarImage =  <AvatarImage alt={alt} src={src} />;
    return href ? <a href={href}>{avatarImage}</a> : avatarImage;
};

const Avatar = ({
    href, alt, src, badge,
}) => {
    return (
        <div className="wds-avatar">
            {getAvatarImage(href, alt, src)}
            {badge && <Badge badge={badge} />}
        </div>
    );
};

Avatar.propTypes = {
    alt: PropTypes.string,
    badge: PropTypes.string,
    href: PropTypes.string,
    src: PropTypes.string,
};

Avatar.defaultProps = {
    alt: 'User avatar',
    badge: undefined,
    href: undefined,
    src: undefined,
};

export default Avatar;
