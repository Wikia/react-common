import React from 'react';
import { withTranslation } from 'react-i18next';

import Dropdown from '../../../Dropdown';
import Avatar from '../../../Avatar';
import Button from "../../../Button";
import List from '../../../List/index';
import withRedirectUrl from "../../hocs/withRedirectUrl";

class GlobalNavigationUserAnon extends React.Component {
    renderToggle = (chevron) => {
        return (
            <React.Fragment>
                <Avatar />{chevron}
            </React.Fragment>
        );
    };

    render() {
        const { data, t, getUrlWithRedirect } = this.props;

        return (
            <Dropdown
                toggle={this.renderToggle}
                className="wds-global-navigation__user-menu wds-global-navigation__user-anon"
                contentScrollable={false}
                dropdownRightAligned
                hasShadow
                contentClassName="wds-global-navigation__dropdown-content"
            >
                <List linesBetween>
                    <li>
                        <Button
                            fullwidth
                            href={getUrlWithRedirect(data.signin.href)}
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
                            href={getUrlWithRedirect(data.register.href)}
                            rel="nofollow"
                            data-tracking-label="account.register"
                            fullwidth
                            secondary
                        >
                            {t(data.register.title.key)}
                        </Button>
                    </li>
                </List>
            </Dropdown>
        );
    }
}

export default withTranslation()(withRedirectUrl(GlobalNavigationUserAnon));
