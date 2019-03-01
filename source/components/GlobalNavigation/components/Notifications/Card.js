import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import get from 'lodash/get';

import Timeago from '../../../Timeago';
import AvatarStack from '../../../AvatarStack';

import { isAnnouncement, isDiscussionReply } from '../../models/notificationTypes';

import MarkAsReadIcon from './MarkAsReadIcon';
import CardText from './CardText';
import CardLink from './CardLink';

const Card = ({ model, track }) => {
    const { totalUniqueActors, isUnread, type, title, latestActors, timestamp, communityName, snippet } = model;
    const computedClass = classNames('wds-notification-card', { 'wds-is-unread': isUnread });
    const showAvatars = totalUniqueActors > 2 && isDiscussionReply(type);
    const showSnippet = !title && !isAnnouncement(type);
    const showLastActor = isAnnouncement(type);
    const dateOfCreation = new Date(timestamp * 1000).toDateString();
    const avatars = latestActors.map(({ profileUrl, avatarUrl }) => ({ link: profileUrl, src: avatarUrl }));

    return (
        <li className={computedClass}>
            {
                showAvatars && (
                    <AvatarStack overrideCount={totalUniqueActors} avatars={avatars} />
                )
            }
            <CardLink model={model} track={track}>
                <MarkAsReadIcon
                    model={model}
                    track={track}
                />
                <div className="wds-notification-card__body">
                    <CardText model={model} />
                    {
                        showSnippet && (
                            <p className="wds-notification-card__snippet">
                                {snippet}
                            </p>
                        )
                    }
                    {
                        showLastActor && (
                            <p className="wds-notification-card__last-actor">
                                {get(latestActors, '[0].name')}
                            </p>
                        )
                    }
                    <ul className="wds-notification-card__context-list">
                        <li className="wds-notification-card__context-item">
                            <Timeago datetime={dateOfCreation} />
                        </li>
                        <li>
                            <span className="wds-notification-card__context-separator">·</span>
                        </li>
                        <li className="wds-notification-card__context-item wds-notification-card__community">
                            {communityName}
                        </li>
                    </ul>
                </div>
            </CardLink>
        </li>
    );
};

Card.propTypes = {
    model: PropTypes.object.isRequired,
    track: PropTypes.func.isRequired,
};

export default Card;
