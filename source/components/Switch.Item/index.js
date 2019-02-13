import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';

/**
 * **NOTE**: This component should only be used with `<Switch.Wrapper>`,
 * see `<Switch>` above for a complete example.
 */
const SwitchItem = ({
    active,
    children,
    className,
    onClick,
}) => {
    const allClassNames = classNames(
        'switch-item',
        className,
        { 'switch-item__active': active }
    );


    return (
        <button type="button" className={allClassNames} onClick={onClick}>
            {children}
        </button>
    );
};

SwitchItem.propTypes = {
    /** is the current item active */
    active: PropTypes.bool,
    /** @ignore */
    children: PropTypes.node.isRequired,
    /** Additional class name */
    className: PropTypes.string,
    /** Function fired when clicking on the element */
    onClick: PropTypes.func,
};

SwitchItem.defaultProps = {
    active: false,
    className: undefined,
    onClick: undefined,
};

export default SwitchItem;
