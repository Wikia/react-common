import React from 'react';
import { withTranslation } from 'react-i18next';

import Dropdown from '../../../Dropdown';
import Avatar from '../../../Avatar';

class GlobalNavigationUserLoggedIn extends React.Component {
    renderToggle = (chevron) => {
        const { data, t } = this.props;

        return (
            <React.Fragment>
                <Avatar alt={data.username} src={data.avatar_url}/>{chevron}
            </React.Fragment>
        );
    };

    render() {
        const { data, t } = this.props;

        return (
            <Dropdown
                toggle={this.renderToggle}
                className="wds-global-navigation__user-menu wds-global-navigation__user-anon"
                contentScrollable={false}
                dropdownRightAligned={true}
                contentClassName="wds-global-navigation__dropdown-content"
            >
                <ul className="wds-list wds-has-lines-between">
                    <li>

                    </li>
                </ul>
            </Dropdown>
        );
    }
}

export default withTranslation()(GlobalNavigationUserLoggedIn);
