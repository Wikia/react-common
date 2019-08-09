import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import I18nNamespaceContext from '../context/I18nNamespaceContext';

const LinkBranded = ({ model }) => {
    const [t] = useTranslation(useContext(I18nNamespaceContext));

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
