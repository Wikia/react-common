import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Badge from './Badge';
import { getAvatarImage } from './utils';

import './styles.scss';

const Avatar = ({
    alt,
    badge,
    className,
    href,
    src,
    title,
    linkBuilder,
}) => (
    <div className={classNames('wds-avatar', className)} title={title}>
        {getAvatarImage(href, alt, src, linkBuilder)}
        {badge && <Badge badge={badge} />}
    </div>
);

Avatar.propTypes = {
    /** Alt text for avatar */
    alt: PropTypes.string,
    /** Badge to display for avatar. */
    badge: PropTypes.oneOf(
        [
            'admin', 'content-moderator', 'discussion-moderator', 'sysop',
            'global-discussions-moderator', 'helper', 'staff', 'vstf', '',
        ],
    ),
    /** Additional class name */
    className: PropTypes.string,
    /** Link to user's profile */
    href: PropTypes.string,
    /** Function which returns wrapped AvatarImage, accepts one argument avatarImage which provides the actual avatar image */
    linkBuilder: PropTypes.func,
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
    linkBuilder: undefined,
    src: undefined,
    title: undefined,
};

export default Avatar;
