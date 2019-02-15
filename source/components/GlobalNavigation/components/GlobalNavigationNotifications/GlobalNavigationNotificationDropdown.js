import React from 'react';
import PropTypes from 'prop-types';

import Button from "../../../Button";
import Icon from "../../../Icon";
import Dropdown from "../../../Dropdown";

class GlobalNavigationNotificationDropdown extends React.Component {

    constructor(props) {
        super(props);

        this.onMouseEnter = this.onMouseEnter.bind(this);
    }



    render() {
        const { openModal, children, isOpen } = this.props;

        return (
            <Dropdown
                className="wds-global-navigation__notifications-dropdown"
                onMouseEnter={}
            >

            </Dropdown>
        )
    }
}

GlobalNavigationNotificationDropdown.propTypes = {
    track: PropTypes.func.isRequired,
};

export default GlobalNavigationNotificationDropdown;
