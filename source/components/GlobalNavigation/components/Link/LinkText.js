import React from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const LinkText = ({ link, isStandaloneLink }) => {
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

LinkText.propTypes = {
    isStandaloneLink: PropTypes.bool,
    link: PropTypes.shape().isRequired,
};

LinkText.defaultProps = {
    isStandaloneLink: false,
};

export default LinkText;
