import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './styles.scss';
/**
 * **NOTE**: This component should only be used with `<Switch.Item>`,
 * see `<Switch>` above for a complete example.
 */
const SwitchWrapper = ({
    children,
    className,
}) => {
    const allClassNames = classNames(
        'switch-wrapper',
        className,
    );


    return (
        <div className={allClassNames}>
            {children}
        </div>
    );
};

SwitchWrapper.propTypes = {
    /** @ignore */
    children: PropTypes.node.isRequired,
    /** Additional class name */
    className: PropTypes.string,
};

SwitchWrapper.defaultProps = {
    className: undefined,
};

export default SwitchWrapper;
