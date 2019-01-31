import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './styles.scss';

const List = ({
    children, isLinked, bigItems, boldItems, linesBetween, hasEllipsis, className,
}) => (
    <ul className={classNames('wds-list', className, {
        'wds-has-big-items': bigItems,
        'wds-has-bolded-items': boldItems,
        'wds-has-lines-between': linesBetween,
        'wds-is-linked': isLinked,
        'wds-has-ellipsis': hasEllipsis,
    })}
    >
        {children}
    </ul>
);

List.propTypes = {
    /** Whether or not the list contains big items */
    bigItems: PropTypes.bool,
    /** Whether or not list items should be bold */
    boldItems: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    hasEllipsis: PropTypes.bool,
    /** Whether or not items are links */
    isLinked: PropTypes.bool,
    /** Whether or not show line separator between items */
    linesBetween: PropTypes.bool,
};

List.defaultProps = {
    bigItems: false,
    boldItems: false,
    children: null,
    className: '',
    hasEllipsis: false,
    isLinked: false,
    linesBetween: false,
};

export default List;
