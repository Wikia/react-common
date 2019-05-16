import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Icon from '../../../Icon';

const SearchToggle = ({ onClick }) => {
    const [t] = useTranslation();

    return (
        <div
            className="wds-global-navigation__search-toggle"
            role="searchbox"
            tabIndex="0"
            onClick={onClick}
        >
            <Icon name="magnifying-glass-small" className="wds-global-navigation__search-toggle-icon" small />
            <Icon name="magnifying-glass" className="wds-global-navigation__search-toggle-icon" />
            <span className="wds-global-navigation__search-toggle-text">
                {t('global-navigation-search-placeholder-inactive')}
            </span>
        </div>
    );
};

SearchToggle.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default SearchToggle;
