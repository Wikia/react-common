import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

/**
 * A single WDS icon.
 *
 * **NOTE**: This icon is using `IconSprite` component.
 */
const Icon = ({
    name, className, small, tiny, ...rest
}) => {
    const isSmall = small || /-small$/.test(name);
    const isTiny = tiny || /-tiny$/.test(name);

    const classes = [
        'wds-icon',
        className,
        isSmall ? 'wds-icon-small' : '',
        isTiny ? 'wds-icon-tiny' : '',
    ].filter(c => c).join(' ');

    return (
        <svg className={classes} {...rest}>
            <use xlinkHref={`#wds-icons-${name}`} />
        </svg>
    );
};

Icon.propTypes = {
    /** Additional class name */
    className: PropTypes.string,
    /** name - both `-small` and `-tiny` prefix are also updating class name */
    name: PropTypes.string.isRequired,
    /** `wds-icon-small` flag for the class name (but not for the icon name) */
    small: PropTypes.bool,
    /** `wds-icon-tiny` flag for the class name (but not for the icon name) */
    tiny: PropTypes.bool,
};

Icon.defaultProps = {
    className: '',
    small: false,
    tiny: false,
};

export default Icon;
