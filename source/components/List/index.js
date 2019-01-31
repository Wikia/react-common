import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

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
    bigItems: PropTypes.bool,
    boldItems: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    hasEllipsis: PropTypes.bool,
    isLinked: PropTypes.bool,
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
