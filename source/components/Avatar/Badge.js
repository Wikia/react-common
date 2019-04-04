import React from 'react';
import PropTypes from 'prop-types';

import AvatarBadgeAdmin from '../../assets/AvatarBadgeAdmin';
import AvatarBadgeContentModerator from '../../assets/AvatarBadgeContentModerator';
import AvatarBadgeDiscussionModerator from '../../assets/AvatarBadgeDiscussionModerator';
import AvatarBadgeGlobalDiscussionsModerator from '../../assets/AvatarBadgeGlobalDiscussionsModerator';
import AvatarBadgeHelper from '../../assets/AvatarBadgeHelper';
import AvatarBadgeStaff from '../../assets/AvatarBadgeStaff';
import AvatarBadgeVstf from '../../assets/AvatarBadgeVstf';

const Badge = ({ badge, className }) => {
    const badgeIcons = {
        admin: {
            icon: <AvatarBadgeAdmin />,
            title: 'Community Admin',
        },
        'content-moderator': {
            icon: <AvatarBadgeContentModerator />,
            title: 'Content Moderator',
        },
        'threadmoderator': {
            icon: <AvatarBadgeDiscussionModerator />,
            title: 'Discussions Moderator',
        },
        'global-discussions-moderator': {
            icon: <AvatarBadgeGlobalDiscussionsModerator />,
            title: 'Global Discussions Moderator',
        },
        helper: {
            icon: <AvatarBadgeHelper />,
            title: 'FANDOM Helper',
        },
        staff: {
            icon: <AvatarBadgeStaff />,
            title: 'FANDOM Staff',
        },
        vstf: {
            icon: <AvatarBadgeVstf />,
            title: 'VSTF',
        },
    };
    const badgeIcon = badgeIcons[badge];

    return (badgeIcon
        ? (
            <span title={badgeIcon.title} className={`wds-avatar__badge ${className}`}>
                {badgeIcon.icon}
            </span>
        ) : null
    );
};

Badge.propTypes = {
    badge: PropTypes.string,
    className: PropTypes.string,
};

Badge.defaultProps = {
    badge: undefined,
    className: '',
};

export default Badge;
