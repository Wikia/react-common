import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Avatar from '../Avatar';

import './styles.scss';

/* eslint-disable react/no-array-index-key */
const AvatarStack = ({ avatars, overrideCount, maxStackSize, hideOverflow, className }) => {
    const count = overrideCount || avatars.length;
    const overflow = !hideOverflow && (count > maxStackSize ? count - maxStackSize : 0);

    return (
        <div className={classNames('wds-avatar-stack', className)}>
            {
                avatars
                    .slice(0, maxStackSize)
                    .map((avatarProps, index) => <Avatar key={index} {...avatarProps} />)
            }
            {
                overflow && (
                    <div className="wds-avatar-stack__overflow">
                        {`+${overflow}`}
                    </div>
                )
            }
        </div>
    );
};

AvatarStack.propTypes = {
    /* An array of `Avatar` props */
    avatars: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    /* Additional class name */
    className: PropTypes.string,
    /* Flag to hide overflow */
    hideOverflow: PropTypes.bool,
    /* Max stack size */
    maxStackSize: PropTypes.number,
    /* If specified, it will be used instead of `avatars.length` */
    overrideCount: PropTypes.number,
};

AvatarStack.defaultProps = {
    className: '',
    hideOverflow: false,
    maxStackSize: 5,
    overrideCount: 0,
};

export default AvatarStack;
