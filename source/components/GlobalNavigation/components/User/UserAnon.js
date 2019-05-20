import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Dropdown from '../../../Dropdown';
import Avatar from '../../../Avatar';
import Button from '../../../Button';
import List from '../../../List';

import withRedirectUrl from '../../hocs/withRedirectUrl';
import I18nNamespaceContext from '../../context/I18nNamespaceContext';

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
    const [t] = useTranslation(useContext(I18nNamespaceContext));

    return (
        <Dropdown
            toggle={chevron => <UserToggle chevron={chevron} />}
            className="wds-global-navigation__user-menu wds-global-navigation__user-anon"
            contentScrollable={false}
            contentClassName="wds-global-navigation__dropdown-content"
            iconName="dropdown-tiny"
            hasShadow
            dropdownRightAligned
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
                        {t('global-navigation-anon-register-description')}
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
    data: PropTypes.shape().isRequired,
    getUrlWithRedirect: PropTypes.func.isRequired,
};

export default withRedirectUrl(UserAnon);
