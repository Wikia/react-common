import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * Basic DropdownIcon component
 */
const DropdownIcon = ({
    isLevel2,
}) => {
    if (isLevel2) {
        return <Icon name="menu-control-tiny" className="wds-icon wds-icon-tiny wds-dropdown-chevron" />;
    } else {
        return <Icon name="menu-control-tiny" className="wds-icon wds-icon-tiny wds-dropdown__toggle-chevron" />;
    }
};

DropdownIcon.propTypes = {
    isLevel2: PropTypes.bool
};

DropdownIcon.defaultProps = {
    isLevel2: false
};

export default DropdownIcon;
