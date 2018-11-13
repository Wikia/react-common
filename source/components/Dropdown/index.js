import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DropdownContent from '../DropdownContent/index';
import DropdownToggle from '../DropdownToggle/index';

import './styles.scss';

const isTouchDevice = ('ontouchstart' in window);

/**
 * Basic Dropdown component
 */
class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isClicked: false,
        };

        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    render() {
        const {children} = this.props;
        const className = classNames({
            'wds-dropdown': true,
            'wds-is-active': this.state.isClicked || this.props.isActive,
            'wds-has-shadow': this.props.hasShadow,
            'wds-no-chevron': this.props.noChevron,
            'wds-has-dark-shadow': this.props.hasDarkShadow,
            'wds-dropdown-level-2': this.props.isLevel2,
            'wds-is-touch-device': isTouchDevice,
        });

        return (
            <div className={className} onClick={this.onClick} onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter}>
                {children}
            </div>
        );
    }

    onClick(e) {
        if (isTouchDevice) {
            this.setState('isClicked', !this.isClicked);
            e.preventDefault();
        }
    }

    onMouseLeave() {
        if (isTouchDevice) {
            this.set('isClicked', false);
        }
    }
}

Dropdown.propTypes = {
    children: PropTypes.node,
    hasShadow: PropTypes.bool,
    noChevron: PropTypes.bool,
    hasDarkShadow: PropTypes.bool,
    isLevel2: PropTypes.bool,
};

Dropdown.defaultProps = {
    children: null,
    hasShadow: false,
    noChevron: false,
    hasDarkShadow: false,
    isLevel2: false,
};

export default Dropdown;
export {DropdownToggle, DropdownContent};
