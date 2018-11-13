import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownIcon from '../DropdownIcon/index';

/**
 * Basic DropdownToggle component
 */
const DropdownToggle = ({
    isLevel2,
    children
}) => {
    const className = classNames({
        'wds-dropdown__toggle': true,
        'wds-dropdown-level-2__toggle': isLevel2
    });

    return (
        <div className={className}>
            <span>{children}</span>
            <DropdownIcon isLevel2={isLevel2}/>
        </div>
    );
};

DropdownToggle.propTypes = {
    children: PropTypes.node,
    isLevel2: PropTypes.bool
};

DropdownToggle.defaultProps = {
    children: null,
    isLevel2: false
};

export default DropdownToggle;
