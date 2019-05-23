import React from 'react';
import PropTypes from 'prop-types';

// use class component so `react-docgen` can parse this file as a component (doesn't work with functional components)
/**
 * Component that's used to either show or hide own children.
 *
 * Since both `show` and `hide` shouldn't be used at the same time, `hide` has a priority
 *
 * | `hide` | `show` | Component visible? |
 * | ----------- | ----------- | ----------- |
 * | `undefined` | `undefined` | yes |
 * | `undefined` | `true` | yes |
 * | `undefined` | `false` | no |
 * | `true` | (any value) | no |
 * | `false` | (any value) | yes |
 */
class HideComponent extends React.PureComponent {
    shouldShow() {
        const { show, hide } = this.props;

        if (typeof hide !== 'undefined') {
            if (hide === true) {
                return false;
            }

            return true;
        }

        if (typeof show === 'undefined' || show === true) {
            return true;
        }

        return false;
    }

    render() {
        return this.shouldShow() ? this.props.children : null;
    }
}

HideComponent.propTypes = {
    /** @ignore */
    children: PropTypes.node,
    /** if `true` the component will be hidden; if `false` the component will be shown */
    hide: PropTypes.bool,
    /** if `true` the component will be shown; if `false` the component will be hidden */
    show: PropTypes.bool,
};

HideComponent.defaultProps = {
    children: null,
    hide: undefined,
    show: undefined,
};

export default HideComponent;
