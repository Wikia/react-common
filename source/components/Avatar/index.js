import React from 'react';
import PropTypes from 'prop-types';

import AvatarImage from './AvatarImage';
import Badge from './Badge';

import './styles.scss';

const getAvatarImage = (href, alt, src) => {
    const avatarImage = <AvatarImage alt={alt} src={src} />;
    return href ? <a href={href}>{avatarImage}</a> : avatarImage;
};

const Avatar = ({
    href, alt, src, badge,
}) => (
    <div className="wds-avatar">
        {getAvatarImage(href, alt, src)}
        {badge && <Badge badge={badge} />}
    </div>
);

Avatar.propTypes = {
    /** Alt text for avatar */
    alt: PropTypes.string,
    /** Badge to display for avatar. */
    badge: PropTypes.oneOf(
        [
            'admin', 'content-moderator', 'discussion-moderator',
            'global-discussions-moderator', 'helper', 'staff', 'vstf',
        ],
    ),
    /** Link to user's profile */
    href: PropTypes.string,
    /** Image src for avatar */
    src: PropTypes.string,
};

Avatar.defaultProps = {
    alt: 'User avatar',
    badge: undefined,
    href: undefined,
    src: undefined,
};

export default Avatar;
