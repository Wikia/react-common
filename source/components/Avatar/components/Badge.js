import React from 'react';
import PropTypes from 'prop-types';

import WdsAvatarBadgeAdmin from 'design-system/dist/svg/wds-avatar-badges-admin.svg';
import WdsAvatarBadgeContentModerator from 'design-system/dist/svg/wds-avatar-badges-content-moderator.svg';
import WdsAvatarBadgeDiscussionModerator from 'design-system/dist/svg/wds-avatar-badges-discussion-moderator.svg';
import WdsAvatarGlobalDiscussionsModerator from 'design-system/dist/svg/wds-avatar-badges-global-discussions-moderator.svg';
import WdsAvatarBadgeHelper from 'design-system/dist/svg/wds-avatar-badges-helper.svg';
import WdsAvatarBadgeStaff from 'design-system/dist/svg/wds-avatar-badges-staff.svg';
import WdsAvatarBadgeVSTF from 'design-system/dist/svg/wds-avatar-badges-vstf.svg';

const Badge = ({ badge }) => {
    const badgeIcons = {
        admin: {
            icon: <WdsAvatarBadgeAdmin />,
            title: 'Community Admin',
        },
        'content-moderator': {
            icon: <WdsAvatarBadgeContentModerator />,
            title: 'Content Moderator',
        },
        'discussion-moderator': {
            icon: <WdsAvatarBadgeDiscussionModerator />,
            title: 'Discussions Moderator',
        },
        'global-discussions-moderator': {
            icon: <WdsAvatarGlobalDiscussionsModerator />,
            title: 'Global Discussions Moderator',
        },
        helper: {
            icon: <WdsAvatarBadgeHelper />,
            title: 'FANDOM Helper',
        },
        staff: {
            icon: <WdsAvatarBadgeStaff />,
            title: 'FANDOM Staff',
        },
        vstf: {
            icon: <WdsAvatarBadgeVSTF />,
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
