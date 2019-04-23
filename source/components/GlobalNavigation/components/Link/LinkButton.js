import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '../../../Button';

import I18nNamespaceContext from '../../context/I18nNamespaceContext';

const LinkButton = ({ link }) => {
    const [t] = useTranslation(useContext(I18nNamespaceContext));

    return (
        <Button
            className="wds-global-navigation__link-button"
            secondary
            data-tracking-label={link['tracking-label']}
            href={link.href}
        >
            {t(link.title.key)}
        </Button>
    );
};

LinkButton.propTypes = {
    link: PropTypes.shape().isRequired,
};

export default LinkButton;
