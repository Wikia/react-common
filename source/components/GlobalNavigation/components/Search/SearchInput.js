import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import Icon from '../../../Icon';
import Button from '../../../Button';

import I18nNamespaceContext from '../../context/I18nNamespaceContext';

const SearchInput = React.forwardRef((props, ref) => {
    const {
        model,
        query,
        onSearchActivation,
        onQueryChanged,
        onFocus,
        onBlur,
        onSearchClear,
        onSearchClose,
        onSearchSubmit,
    } = props;
    const placeholderConfig = model['placeholder-active'];
    const [t] = useTranslation(useContext(I18nNamespaceContext));

    return (
        <React.Fragment>
            <input
                className="wds-global-navigation__search-input"
                placeholder={t(placeholderConfig.key, { sitename: placeholderConfig.params.sitename.value })}
                value={query}
                onClick={onSearchActivation}
                ref={ref}
                onChange={onQueryChanged}
                onFocus={onFocus}
                onBlur={onBlur}
                type="search"
            />
            <Button
                className="wds-global-navigation__search-clear"
                type="button"
                onClick={onSearchClear}
                text
            >
                <Icon name="add" small className="wds-global-navigation__search-clear-icon" />
            </Button>
            <Button
                className="wds-global-navigation__search-close"
                type="button"
                onClick={onSearchClose}
                text
            >
                <Icon name="close-tiny" className="wds-global-navigation__search-close-icon" tiny />
            </Button>
            <Button
                className="wds-global-navigation__search-submit"
                type="submit"
                disabled={!query}
                onClick={onSearchSubmit}
                data-tracking-label={model.results['tracking-label']}
            >
                <Icon name="arrow-small" className="wds-global-navigation__search-submit-icon" small />
            </Button>
        </React.Fragment>
    );
});

SearchInput.propTypes = {
    model: PropTypes.shape().isRequired,
    onBlur: PropTypes.func.isRequired,
    onFocus: PropTypes.func.isRequired,
    onQueryChanged: PropTypes.func.isRequired,
    onSearchActivation: PropTypes.func.isRequired,
    onSearchClear: PropTypes.func.isRequired,
    onSearchClose: PropTypes.func.isRequired,
    onSearchSubmit: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
};

export default SearchInput;
