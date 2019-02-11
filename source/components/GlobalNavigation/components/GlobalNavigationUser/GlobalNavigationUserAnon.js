import React from 'react';
import { withTranslation } from 'react-i18next';

import Dropdown from '../../../Dropdown';
import Avatar from '../../../Avatar';
import Button from "../../../Button";

class GlobalNavigationUserAnon extends React.Component {
    renderToggle = (chevron) => {
        return (
            <React.Fragment>
                <Avatar />{chevron}
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
                        <Button
                            fullwidth
                            href={data.signin.href}
                            rel="nofollow"
                            data-tracking-label="account.sign-in"
                        >
                            {t(data.signin.title.key)}
                        </Button>
                    </li>
                    <li>
                        <div className="wds-global-navigation__user-menu-dropdown-caption">
                            Don't have an account?
                        </div>
                        <Button
                            href={data.register.href}
                            rel="nofollow"
                            data-tracking-label="account.register"
                            fullwidth
                            secondary
                        >
                            {t(data.register.title.key)}
                        </Button>
                    </li>
                </ul>
            </Dropdown>
        );
    }
}

export default withTranslation()(GlobalNavigationUserAnon);
