import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Dropdown from '../../../Dropdown';
import Avatar from '../../../Avatar';
import Button from '../../../Button';
import List from '../../../List';

import withRedirectUrl from '../../hocs/withRedirectUrl';

const UserToggle = ({ chevron }) => (
    <React.Fragment>
        <Avatar />
        {chevron}
    </React.Fragment>
);

UserToggle.propTypes = {
    chevron: PropTypes.node.isRequired,
};

const UserAnon = ({ data, getUrlWithRedirect }) => {
    const [t] = useTranslation();

    return (
        <Dropdown
            toggle={chevron => <UserToggle chevron={chevron} />}
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
                        href={getUrlWithRedirect(data.signin.href, data.signin['param-name'])}
                        rel="nofollow"
                        data-tracking-label={data.signin['tracking-label']}
                    >
                        {t(data.signin.title.key)}
                    </Button>
                </li>
                <li>
                    <div className="wds-global-navigation__user-menu-dropdown-caption">
                        Don&apos;t have an account?
                    </div>
                    <Button
                        href={getUrlWithRedirect(data.register.href, data.register['param-name'])}
                        rel="nofollow"
                        data-tracking-label={data.register['tracking-label']}
                        fullwidth
                        secondary
                    >
                        {t(data.register.title.key)}
                    </Button>
                </li>
            </List>
        </Dropdown>
    );
};

UserAnon.propTypes = {
    data: PropTypes.object.isRequired,
    getUrlWithRedirect: PropTypes.func.isRequired,
};

export default withRedirectUrl(UserAnon);
