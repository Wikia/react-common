import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../../../Button';

const GlobalNavigationLinkButton = ({ link }) => {
    const [t] = useTranslation();

    return (
        <Button
            className="wds-global-navigation__link-button"
            secondary
            dataTrackingLabel={link['tracking-label']}
            href={link.href}
        >
            {t(link.title.key)}
        </Button>
    );
};

export default GlobalNavigationLinkButton;
