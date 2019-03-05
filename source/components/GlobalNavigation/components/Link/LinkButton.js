import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Button from '../../../Button';

const LinkButton = ({ link }) => {
    const [t] = useTranslation();

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
