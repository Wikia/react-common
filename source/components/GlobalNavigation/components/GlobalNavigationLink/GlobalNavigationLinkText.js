import React from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

const GlobalNavigationLinkText = ({ link, isStandaloneLink }) => {
    const [t] = useTranslation();

    return (
        <a
            href={link.href}
            data-tracking-label={link['tracking-label']}
            className={classNames({ 'wds-global-navigation__link': isStandaloneLink })}
        >
            {t(link.title.key)}
        </a>
    );
};

export default GlobalNavigationLinkText;
