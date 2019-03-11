import React from 'react';

import AvatarImage from './AvatarImage';

// eslint-disable-next-line
export function getAvatarImage(href, alt, src) {
    const avatarImage = <AvatarImage alt={alt} src={src} />;
    return href ? <a href={href}>{avatarImage}</a> : avatarImage;
}
