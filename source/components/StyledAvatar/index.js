import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Badge from './Badge';
import DefaultAvatar from './DefaultAvatar';
import UserAvatar from './UserAvatar';

function getBorderWidth(size) {
    const diameter = parseInt(size, 10);
    let borderWidth = 2;
    if (diameter >= 48) {
        borderWidth = 3;
    }
    if (diameter >= 120) {
        borderWidth = 4;
    }
    return `${borderWidth}px`;
}

function getBadgeSize(size) {
    return (0.2539 * parseInt(size, 10)) + 8;
}

const Link = styled.a`
    color: #000;
    height: 100%;
    width: 100%;

    &:hover {
        color: ${props => props.theme.color.fandom_aqua};
    }
`;

const Wrapper = styled.div`
    display: inline-block;
    height: ${props => `${props.size}px`};
    min-width: ${props => `${props.size}px`};
    position: relative;
    width: ${props => `${props.size}px`};

    ${Link} ${DefaultAvatar}:hover {
        fill: ${props => (props.href ? props.theme.color.fandom_aqua : props.theme.color.fandom_mid_light_gray)};
    }

    ${Link} ${UserAvatar}:hover {
        border-color: ${props => (props.href ? props.theme.color.fandom_aqua : props.theme.color.fandom_mid_light_gray)};
    }
`;

/**
 * A `styled-component` version of Avatar component
 */
class StyledAvatar extends React.Component {
    state = {
        imageSrc: this.props.src,
    };

    componentDidMount() {
        if (!this.state.imageSrc && this.props.userId) {
            fetch(`https://services.wikia.com/user-attribute/user/${this.props.userId}/attr/avatar`)
                .then(response => response.json())
                .then(data => this.setState({ imageSrc: data.value }));
        }
    }

    renderAvatarImage() {
        const borderWidth = getBorderWidth(this.props.size);
        const { alt } = this.props;
        const avatarImage = this.state.imageSrc
            ? <UserAvatar borderWidth={borderWidth} src={this.state.imageSrc} alt={alt} title={alt} />
            : <DefaultAvatar size={this.props.size.toString()} borderWidth={borderWidth} alt={alt} title={alt} />;

        if (this.props.linkBuilder) {
            return this.props.linkBuilder(avatarImage);
        }

        return this.props.href ? <Link href={this.props.href}>{avatarImage}</Link> : avatarImage;
    }

    render() {
        return (
            <Wrapper className={this.props.className} title={this.props.title} size={this.props.size} href={this.props.href}>
                {this.renderAvatarImage()}
                {this.props.badge && <Badge badge={this.props.badge} diameter={parseInt(this.props.size, 10)} size={getBadgeSize(this.props.size)} />}
            </Wrapper>
        );
    }
}

StyledAvatar.propTypes = {
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
    /** Function that returns wrapped avatar image, accepts one argument avatarImage which provides the actual avatar image */
    linkBuilder: PropTypes.func,
    /** Size of avatar in px */
    size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /** Image src for avatar */
    src: PropTypes.string,
    /** Title attribute for avatar */
    title: PropTypes.string,
    /** Optional user ID to fetch avatar for, if `src` prop is not provided */
    userId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

StyledAvatar.defaultProps = {
    alt: 'User avatar',
    badge: undefined,
    className: undefined,
    href: undefined,
    linkBuilder: undefined,
    size: 48,
    src: undefined,
    title: undefined,
    userId: undefined,
};

export default StyledAvatar;
