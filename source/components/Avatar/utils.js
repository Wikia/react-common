import React from 'react';

import AvatarImage from './AvatarImage';

// eslint-disable-next-line
export function getAvatarImage(href, alt, src, linkBuilder) {
    const avatarImage = <AvatarImage alt={alt} src={src} />;

    if (linkBuilder) {
        return linkBuilder(avatarImage);
    }

    return href ? <a href={href}>{avatarImage}</a> : avatarImage;
}
