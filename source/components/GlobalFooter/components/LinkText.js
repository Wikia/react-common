import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const LinkText = ({ model }) => {
    const [t] = useTranslation();

    return <a
        href={model.href}
        className="wds-global-footer__link"
        data-tracking-label={model.tracking_label}
    >
        {t(model.title.key)}
    </a>
};

LinkText.propTypes = {
    model: PropTypes.shape().isRequired,
};

export default LinkText;
