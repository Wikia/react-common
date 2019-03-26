import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styled from 'styled-components';

import IconAvatar from '../../icons/IconAvatar';

import Badge from './Badge';

// const AvatarContext = React.createContext();

const Wrapper = styled.div`
    display: inline-block;
    height: ${props => `${props.diameter}px`};
    min-width: ${props => `${props.diameter}px`};
    position: relative;
    width: ${props => `${props.diameter}px`};

    a,
    img,
    svg {
        height: 100%;
        width: 100%;
    }

    a {
        color: #000;

            &:hover {
                color: #00acac;
            }
        }
    }

    img {
        border-radius: 50%;
        border: ${props => props.borderWidth} solid #ccc;

        &:hover {
            border-color: ${props => (props.hasLink ? '#00acac' : '#ccc')};
        }
    }

    svg {
        background-color: #fff;
        fill: #333;

        &:hover {
            fill: ${props => (props.hasLink ? '#00acac' : '#333')};
        }
    }

    .wds-avatar__badge {
        height: ${props => `${props.badgeSize}px`};
        min-width: ${props => `${props.badgeSize}px`};
        width: ${props => `${props.badgeSize}px`};

        left: ${props => `${-1 * props.badgeSize / (props.diameter > 48 ? 4.5 : 3.5)}px`};
        top: ${props => `${-1 * props.badgeSize / (props.diameter > 48 ? 3.5 : 2.5)}px`};
    }
`;

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageSrc: props.src,
        };
    }

    componentDidMount() {
        if (!this.state.imageSrc) {
            fetch(`https://services.wikia.com/user-attribute/user/${this.props.userId}/attr/avatar`)
                .then(response => response.json())
                .then(data => this.setState({ imageSrc: data.value }));
        }
    }

    getBorderWidth() {
        const diameter = parseInt(this.props.size, 10);
        let borderWidth = 2;
        if (diameter >= 48) {
            borderWidth = 3;
        }
        if (diameter >= 120) {
            borderWidth = 4;
        }
        return `${borderWidth}px`;
    }

    getBadgeSize() {
        return (0.2539 * parseInt(this.props.size, 10)) + 8;
    }

    getAvatarImage(href, alt, src, linkBuilder) {
        const className = 'user-avatar__image';
        const avatarImage = src
            ? <img src={src} alt={alt} title={alt} className={className} />
            : <IconAvatar className="user-avatar__image" title={className} />;

        if (linkBuilder) {
            return linkBuilder(avatarImage);
        }

        return href ? <a href={href}>{avatarImage}</a> : avatarImage;
    }

    render() {
        return (
            <Wrapper
                badgeSize={this.getBadgeSize()}
                borderWidth={this.getBorderWidth()}
                className={classNames('user-avatar', this.props.className)}
                hasLink={!!this.props.href}
                diameter={this.props.size}
                title={this.props.title}
            >
                {this.getAvatarImage(this.props.href, this.props.alt, this.state.imageSrc, this.props.linkBuilder)}
                {this.props.badge && <Badge badge={this.props.badge} />}
            </Wrapper>
        );
    }
}

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
    /** Function that returns wrapped avatar image, accepts one argument avatarImage which provides the actual avatar image */
    linkBuilder: PropTypes.func,
    /** Diameter of avatar in px */
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Image src for avatar */
    src: PropTypes.string,
    /** Title attribute for avatar */
    title: PropTypes.string,
    /** Optional user ID to fetch avatar for, if `src` prop is not provided */
    userId: PropTypes.string,
};

Avatar.defaultProps = {
    alt: 'User avatar',
    badge: undefined,
    className: undefined,
    href: undefined,
    linkBuilder: undefined,
    size: 30,
    src: undefined,
    title: undefined,
    userId: undefined,
};

export default Avatar;
