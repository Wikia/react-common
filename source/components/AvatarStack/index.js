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
                    .map(({ src, alt, link, badge = '' }, index) => (
                        <Avatar key={index} src={src} alt={alt} badge={badge} href={link} />
                    ))
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
    avatars: PropTypes.array.isRequired,
    className: PropTypes.string,
    hideOverflow: PropTypes.bool,
    maxStackSize: PropTypes.number,
    overrideCount: PropTypes.number,
};

AvatarStack.defaultProps = {
    className: '',
    hideOverflow: false,
    maxStackSize: 5,
    overrideCount: 0,
};

export default AvatarStack;
