import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { DESIGN_SYSTEM_I18N_NAMESPACE } from '../../../consts';

const LinkBranded = ({ model }) => {
    const [t] = useTranslation(DESIGN_SYSTEM_I18N_NAMESPACE);

    return (
        <a href={model.href} className="wds-global-footer__link" data-tracking-label={model.tracking_label}>
            <div>
                {t(model.title.key)}
            </div>
        </a>
    );
};

LinkBranded.propTypes = {
    model: PropTypes.shape().isRequired,
};

export default LinkBranded;
