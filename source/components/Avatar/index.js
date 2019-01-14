import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import AvatarImage from './AvatarImage';
import Badge from './Badge';

import './styles.scss';

const getAvatarImage = (href, alt, src) => {
    const avatarImage = <AvatarImage alt={alt} src={src} />;
    return href ? <a href={href}>{avatarImage}</a> : avatarImage;
};

const Avatar = ({
    alt,
    badge,
    className,
    href,
    src,
    title,
}) => (
    <div className={classNames('wds-avatar', className)} title={title}>
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
    /** Additional class name */
    className: PropTypes.string,
    /** Link to user's profile */
    href: PropTypes.string,
    /** Image src for avatar */
    src: PropTypes.string,
    /** Title attribute for avatar */
    title: PropTypes.string,
};

Avatar.defaultProps = {
    alt: 'User avatar',
    badge: undefined,
    className: undefined,
    href: undefined,
    src: undefined,
    title: undefined,
};

export default Avatar;
