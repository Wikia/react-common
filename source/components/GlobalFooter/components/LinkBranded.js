import React from 'react';
import { withTranslation } from 'react-i18next';

const LinkBranded = ({ t, model }) => {
    return <a href={model.href} className="wds-global-footer__link" data-tracking-label={model.tracking_label}>
        <div>
            {t(model.title.key)}
        </div>
    </a>
};

export default withTranslation()(LinkBranded)
