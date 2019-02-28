import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// eslint-disable-next-line no-restricted-imports
import FandomContentWell from '../FandomContentWell';

import './styles.scss';

/**
 * SimpleLocalNavigation is a simple navigation than can be used with links or `react-router`.
 *
 * To mark child as active use exported static `SimpleLocalNavigation.ACTIVE_CLASS_NAME`.
 */
class SimpleLocalNavigation extends React.PureComponent {
    static ACTIVE_CLASS_NAME = 'is-active';

    addClassName = (child) => {
        const className = classNames(
            child.props.className,
            'simple-local-navigation__item',
        );

        const props = {
            className,
        };

        return React.cloneElement(child, props);
    }

    render() {
        const className = classNames(
            'simple-local-navigation',
            this.props.className,
        );

        return (
            <div className={className}>
                <FandomContentWell>
                    {React.Children.map(this.props.children, child => this.addClassName(child))}
                </FandomContentWell>
            </div>
        );
    }
}


SimpleLocalNavigation.propTypes = {
    /** ignore */
    children: PropTypes.node.isRequired,
    /** Additional class name */
    className: PropTypes.string,
};

SimpleLocalNavigation.defaultProps = {
    className: undefined,
};


export default SimpleLocalNavigation;
