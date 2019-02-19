import React from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import Dropdown from '../../../Dropdown';
import List from '../../../List';
import Button from '../../../Button';
import Icon from '../../../Icon';

const MINIMAL_QUERY_LENGTH = 3;
const DEBOUNCE_DURATION = 250;

class GlobalNavigationSearch extends React.Component {
    isMounted = false;

    constructor(props) {
        super(props);

        this.input = React.createRef();

        this.onSearchActivation = this.onSearchActivation.bind(this);
        this.onSearchClear = this.onSearchClear.bind(this);
        this.onSearchClose = this.onSearchClose.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onQueryChanged = this.onQueryChanged.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onSearchSuggestionClick = this.onSearchSuggestionClick.bind(this);
        this.requestSuggestionsFromAPI = debounce(this.requestSuggestionsFromAPI.bind(this), DEBOUNCE_DURATION);
    }

    state = {
        suggestions: [],
        requestsInProgress: {},
        cachedResults: {},
        searchRequestInProgress: false,
        inputFocused: false,
        selectedSuggestionIndex: -1,
        query: '',
    };

    componentDidMount() {
        const { inSearchModal } = this.props;

        this.isMounted = true;

        if (inSearchModal) {
            this.input.current.focus();
        }
    }

    componentWillUnmount() {
        this.isMounted = false;
    }

    onBlur() {
        const { query } = this.state;

        if (!query) {
            this.onSearchClose();
        }
    }

    onFocus() {
        this.setState({ inputFocused: true });
    }

    onKeyDown(event) {
        const { selectedSuggestionIndex, suggestions, query } = this.state;
        const { onSearchSuggestionChosen, onRedirectToSearchResults } = this.props;

        event.stopPropagation();

        switch (event.key) {
            // down arrow
            case 40:
                if (selectedSuggestionIndex < suggestions.length - 1) {
                    this.setState({ selectedSuggestionIndex: selectedSuggestionIndex + 1 });
                }

                break;
            // up arrow
            case 30:
                if (suggestions.length && selectedSuggestionIndex > -1) {
                    this.setState(({ selectedSuggestionIndex: selectedSuggestionIndex - 1 }));
                }

                break;
            // ESC key
            case 27:
                this.onSearchClose();

                break;
            // ENTER key
            case 13:
                if (selectedSuggestionIndex !== -1) {
                    onSearchSuggestionChosen(suggestions[selectedSuggestionIndex]);
                    this.input.current.blur();
                    this.onSearchClose();
                } else {
                    onRedirectToSearchResults(query);
                }

                break;

            default:
            // do nothing
        }
    }

    onSearchSuggestionClick(index) {
        const { track, onSearchSuggestionChosen } = this.props;
        const { suggestions } = this.state;

        onSearchSuggestionChosen(suggestions[index]);

        this.onSearchClose();

        track({
            action: 'click',
            category: 'navigation',
            label: 'search-open-suggestion-link',
        });
    }

    onSearchActivation() {
        const { onSearchActivation, isSearchExpanded } = this.props;

        if (isSearchExpanded) {
            return;
        }

        this.setState({
            inputFocused: true,
            suggestions: [],
        }, () => {
            onSearchActivation();
            this.input.current.focus();
        });
    }

    onSearchClear() {
        this.setState({
            suggestions: [],
            searchRequestInProgress: false,
            inputFocused: true,
            selectedSuggestionIndex: -1,
            query: '',
        });

        this.input.current.focus();
    }

    onSearchClose() {
        const { onSearchClose } = this.props;

        this.setState({
            suggestions: [],
            searchRequestInProgress: false,
            inputFocused: false,
            selectedSuggestionIndex: -1,
            query: '',
        });

        onSearchClose();
    }

    onSearchSubmit() {
        const { track, onRedirectToSearchResults } = this.props;
        const { query } = this.state;

        track({
            action: 'open',
            category: 'navigation',
            label: 'search-open-special-search',
        });

        this.setState({
            searchRequestInProgress: true,
        }, () => {
            onRedirectToSearchResults(query);

            this.onSearchClose();
        });
    }

    onQueryChanged(event) {
        this.getSuggestions(event.target.value);
    }

    onRequestEnd() {
        if (!this.isMounted) {
            return;
        }

        const { query, requestsInProgress } = this.state;

        this.setState({
            requestsInProgress: { ...requestsInProgress, [query]: false },
        });
    }

    getSuggestions(query) {
        if (!this.isMounted) {
            return;
        }

        const { cachedResults } = this.state;
        const isQueryTooShort = !query || query.length < MINIMAL_QUERY_LENGTH;

        this.setState({
            suggestions: [],
            selectedSuggestionIndex: -1,
            searchRequestInProgress: false,
            query,
        });

        if (isQueryTooShort) {
            return;
        }

        if (this.hasCachedResult(query)) {
            this.setState({
                suggestions: cachedResults[query],
            });
        } else {
            this.requestSuggestionsFromAPI();
        }
    }

    requestSuggestionsFromAPI() {
        const { query, searchRequestInProgress, requestsInProgress } = this.state;
        const { model } = this.props;

        /**
         * This was queued to run before the user has finished typing, and when they
         * finished typing it may have turned out that they were just backspacing OR
         * they finished typing something that was already in the cache, in which case
         * we just ignore this request because the search fn already put the cached
         * value into the window.
         */
        if (requestsInProgress[query] || !this.isMounted) {
            return;
        }

        this.setState({ requestsInProgress: { ...requestsInProgress, [query]: true } });

        fetch(`${model.suggestions.url}&query=${query}`)
            .then((response) => {
                if (response.ok) {
                    if (!this.isMounted) {
                        return null;
                    }

                    return response.json();
                }
                if (response.status === 404) {
                    // When we get a 404, it means there were no results
                    return { suggestions: [] };
                }

                console.error('Search suggestions error', response);

                return null;
            })
            .then((response) => {
                if (!response || searchRequestInProgress) {
                    return;
                }

                this.setState({ suggestions: response.suggestions });

                this.cacheResult(query, response.suggestions);
            })
            .catch((reason) => {
                console.error('Search suggestions error', reason);

                this.onRequestEnd();
            })
            .then(() => this.onRequestEnd());
    }

    escapeRegex(text) {
        return text.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    normalizeToUnderscore(title = '') {
        return title
            .replace(/\s/g, '_')
            .replace(/_+/g, '_');
    }

    cacheResult(query, suggestions) {
        const { cachedResults } = this.state;

        this.setState({ cachedResults: { ...cachedResults, [query]: suggestions || [] } });
    }

    hasCachedResult(query) {
        const { cachedResults } = this.state;

        return Object.prototype.hasOwnProperty.call(cachedResults, query);
    }

    renderInput() {
        const { t, model } = this.props;
        const { query } = this.state;
        const placeholderConfig = model['placeholder-active'];

        return (
            <React.Fragment>
                <input
                    className="wds-global-navigation__search-input"
                    placeholder={t(placeholderConfig.key, { sitename: placeholderConfig.params.sitename.value })}
                    value={query}
                    onClick={this.onSearchActivation}
                    ref={this.input}
                    onChange={this.onQueryChanged}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
                <Button
                    className="wds-global-navigation__search-clear"
                    type="button"
                    onClick={this.onSearchClear}
                    text
                >
                    <Icon name="add" small className="wds-global-navigation__search-clear-icon" />
                </Button>
                <Button
                    className="wds-global-navigation__search-close"
                    type="button"
                    onClick={this.onSearchClose}
                    text
                >
                    <Icon name="close" className="wds-global-navigation__search-close-icon" tiny />
                </Button>
                <Button
                    className="wds-global-navigation__search-submit"
                    type="submit"
                    disabled={!query}
                    onClick={this.onSearchSubmit}
                    data-tracking-label={model.results['tracking-label']}
                    text
                >
                    <Icon name="arrow" className="wds-global-navigation__search-submit-icon" small />
                </Button>
            </React.Fragment>
        );
    }

    renderSuggestions() {
        const { suggestions, query } = this.state;
        const { model } = this.props;
        const highlightRegex = new RegExp(`(${this.escapeRegex(query)})`, 'ig');

        return suggestions.map((suggestion) => {
            const match = suggestion.match(highlightRegex);
            const highlightedPart = match ? match[0] : match;
            const regularPart = suggestion.replace(highlightRegex, '');

            return (
                <li
                    key={suggestion}
                    className="wds-global-navigation__search__suggestion"
                    onClick={this.onSearchSuggestionClick}
                >
                    <a
                        href={this.normalizeToUnderscore(suggestion)}
                        className="wds-global-navigation__dropdown-link"
                        data-tracking-label={model.suggestions['tracking-label']}
                    >
                        {highlightedPart && (
                            <span className="wds-global-navigation__search-suggestion-highlight">
                                {highlightedPart}
                            </span>
                        )}
                        {regularPart}
                    </a>
                </li>
            );
        });
    }

    render() {
        const { inputFocused, suggestions } = this.state;
        const computedClass = classNames(
            'wds-global-navigation__search-container',
            { 'wds-search-is-focused': inputFocused },
        );

        return (
            <form className={computedClass} onKeyDown={this.onKeyDown}>
                <div className="wds-global-navigation__search">
                    <div
                        className="wds-global-navigation__search-toggle"
                        role="searchbox"
                        tabIndex="0"
                        onClick={this.onSearchActivation}
                    >
                        <Icon name="magnifying-glass" className="wds-global-navigation__search-toggle-icon" small />
                        <Icon name="magnifying-glass" className="wds-global-navigation__search-toggle-icon" />
                        <span className="wds-global-navigation__search-toggle-text">
                                Search
                        </span>
                    </div>
                    <Dropdown
                        className="wds-global-navigation__search-dropdown"
                        toggle={this.renderInput()}
                        toggleClassName="wds-global-navigation__search-input-wrapper"
                        contentClassName="wds-global-navigation__search-suggestions"
                        isActive={Boolean(suggestions.length)}
                        isNotHoverable={!suggestions.length}
                        noChevron
                    >
                        <List isLinked hasEllipsis>
                            {this.renderSuggestions()}
                        </List>
                    </Dropdown>
                </div>
            </form>
        );
    }
}

GlobalNavigationSearch.propTypes = {
    inSearchModal: PropTypes.bool,
    isSearchExpanded: PropTypes.bool.isRequired,
    model: PropTypes.object.isRequired,
    onRedirectToSearchResults: PropTypes.func.isRequired,
    onSearchActivation: PropTypes.func.isRequired,
    onSearchClose: PropTypes.func.isRequired,
    onSearchSuggestionChosen: PropTypes.func.isRequired,
    t: PropTypes.func.isRequired,
    track: PropTypes.func.isRequired,
};

GlobalNavigationSearch.defaultProps = {
    inSearchModal: false,
};

export default withTranslation()(GlobalNavigationSearch);
