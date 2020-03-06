import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Badge from './Badge';
import { getAvatarImage } from './utils';

import './styles.scss';

class Avatar extends React.Component {
    state = {
        imageSrc: this.props.src,
    };

    componentDidMount() {
        if (!this.state.imageSrc && this.props.userId) {
            // eslint-disable-next-line
            fetch(`https://services.wikia.com/user-attribute/user/${this.props.userId}/attr/avatar`)
                .then(response => response.json())
                .then(data => this.setState({ imageSrc: data.value }));
        }
    }

    render() {
        const {
            alt,
            badge,
            className,
            href,
            title,
            linkBuilder,
        } = this.props;

        return (
            <div className={classNames('wds-avatar', className)} title={title}>
                {getAvatarImage(href, alt, this.state.imageSrc, linkBuilder)}
                {badge && <Badge badge={badge} />}
            </div>
        );
    }
}

Avatar.propTypes = {
    /** Alt text for avatar */
    alt: PropTypes.string,
    /** Badge to display for avatar. */
    badge: PropTypes.oneOf(
        [
            'content-moderator', 'discussion-moderator', 'sysop',
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
    /** Optional user ID to fetch avatar for, if `src` prop is not provided */
    userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Avatar.defaultProps = {
    alt: 'User avatar',
    badge: undefined,
    className: undefined,
    href: undefined,
    linkBuilder: undefined,
    src: undefined,
    title: undefined,
    userId: undefined,
};

export default Avatar;
