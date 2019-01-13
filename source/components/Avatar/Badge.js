import React from 'react';
import PropTypes from 'prop-types';

import AvatarBadgeAdmin from '../../avatars/AvatarBadgeAdmin';
import AvatarBadgeContentModerator from '../../avatars/AvatarBadgeContentModerator';
import AvatarBadgeDiscussionModerator from '../../avatars/AvatarBadgeDiscussionModerator';
import AvatarBadgeGlobalDiscussionsModerator from '../../avatars/AvatarBadgeGlobalDiscussionsModerator';
import AvatarBadgeHelper from '../../avatars/AvatarBadgeHelper';
import AvatarBadgeStaff from '../../avatars/AvatarBadgeStaff';
import AvatarBadgeVstf from '../../avatars/AvatarBadgeVstf';

const Badge = ({ badge }) => {
    const badgeIcons = {
        admin: {
            icon: <AvatarBadgeAdmin />,
            title: 'Community Admin',
        },
        'content-moderator': {
            icon: <AvatarBadgeContentModerator />,
            title: 'Content Moderator',
        },
        'discussion-moderator': {
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
            <span title={badgeIcon.title} className="wds-avatar__badge">
                {badgeIcon.icon}
            </span>
        ) : ''
    );
};

Badge.propTypes = {
    badge: PropTypes.string,
};

Badge.defaultProps = {
    badge: undefined,
};

export default Badge;
