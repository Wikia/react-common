import React from 'react';
import { withTranslation } from 'react-i18next';

const LinkText = ({ t, model }) => {
    return <a
        href={model.href}
        className="wds-global-footer__link"
        data-tracking-label={model.tracking_label}
    >
        {t(model.title.key)}
    </a>
};

export default withTranslation()(LinkText);
