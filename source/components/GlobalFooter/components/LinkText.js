import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import I18nNamespaceContext from '../context/I18nNamespaceContext';

const LinkText = ({ model }) => {
    const [t] = useTranslation(useContext(I18nNamespaceContext));

    return (
        <a
            href={model.href}
            className="wds-global-footer__link"
            data-tracking-label={model.tracking_label}
        >
            {t(model.title.key)}
        </a>
    );
};

LinkText.propTypes = {
    model: PropTypes.shape().isRequired,
};

export default LinkText;
