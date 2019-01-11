import React from 'react';
import PropTypes from 'prop-types';

import DefaultAvatar from 'design-system/dist/svg/wds-avatar-icon-user.svg';

const AvatarImage = ({ src, alt }) => {
    const className = "wds-avatar__image";
    return src
        ? <img src={src} alt={alt} title={alt} className={className} />
        : <DefaultAvatar className="wds-avatar__image" title={className} />
};

AvatarImage.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string,
};

AvatarImage.defaultProps = {
    alt: undefined,
    src: undefined,
};

export default AvatarImage;
