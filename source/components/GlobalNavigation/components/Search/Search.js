import React from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';
import merge from 'lodash/merge';

import uuidv4 from '../../../../utils/uuidv4';

import Dropdown from '../../../Dropdown';
import List from '../../../List';

import SearchInput from './SearchInput';
import SearchToggle from './SearchToggle';

const MINIMAL_QUERY_LENGTH = 3;
const DEBOUNCE_DURATION = 250;

class Search extends React.Component {
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
        this.requestSuggestionsFromAPI = debounce(this.requestSuggestionsFromAPI.bind(this), DEBOUNCE_DURATION);
    }

    state = {
        suggestions: [],
        suggestionId: 0,
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
        const { inSearchModal } = this.props;
        const { query } = this.state;

        if (!query && !inSearchModal) {
            this.onSearchClose();
        }
    }

    onFocus() {
        this.setState({ inputFocused: true });
    }

    onKeyDown(event) {
        const { selectedSuggestionIndex, suggestions, suggestionId, query } = this.state;
        const { onSearchSuggestionChosen, onRedirectToSearchResults } = this.props;

        event.stopPropagation();

        switch (event.keyCode) {
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
                    onSearchSuggestionChosen(suggestions[selectedSuggestionIndex], suggestions, suggestionId);
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

    onSearchSuggestionClick(index, event) {
        const { track, onSearchSuggestionChosen } = this.props;
        const { suggestions, suggestionId } = this.state;

        const isOpenInNewTabClick = event && (event.ctrlKey || event.metaKey);

        if (!isOpenInNewTabClick) {
            onSearchSuggestionChosen(suggestions[index], suggestions, suggestionId);
            this.onSearchClose();
        }

        track({
            action: 'click',
            category: 'navigation',
            label: 'search-open-suggestion-link',
        });

        if (event && !isOpenInNewTabClick) {
            event.preventDefault();
        }
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
        }, () => {
            this.input.current.focus();
        });
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

    onSuggestionHover(index) {
        this.setState({
            selectedSuggestionIndex: index,
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
            this.setSuggestions(cachedResults[query]);
        } else {
            this.requestSuggestionsFromAPI();
        }
    }

    setSuggestions(suggestions) {
        if (!this.isMounted) {
            return;
        }

        const { onSearchSuggestionsImpression } = this.props;
        const suggestionId = uuidv4();

        this.setState({
            suggestions,
            suggestionId,
        }, () => {
            onSearchSuggestionsImpression(suggestions, suggestionId);
        });
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
            return Promise.reject();
        }

        this.setState({ requestsInProgress: { ...requestsInProgress, [query]: true } });

        return fetch(`${model.suggestions.url}&${model.suggestions['param-name']}=${query}`)
            .then((response) => {
                if (response.ok) {
                    /* istanbul ignore next */
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

                // Depending on which api we query for data, response schema may differ
                if (response.suggestions) {
                    this.setSuggestions(response.suggestions);
                    this.cacheResult(query, response.suggestions);
                } else if (response.query.prefixsearch) {
                    const suggestions = response.query.prefixsearch.map(s => s.title);
                    this.setSuggestions(suggestions);
                    this.cacheResult(query, suggestions);
                }
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

    normalizeToUnderscore(title) {
        return title
            .replace(/\s/g, '_')
            .replace(/_+/g, '_');
    }

    cacheResult(query, suggestions) {
        const { cachedResults } = this.state;

        this.setState({ cachedResults: merge({}, cachedResults, { [query]: suggestions || [] }) });
    }

    hasCachedResult(query) {
        const { cachedResults } = this.state;

        return Object.prototype.hasOwnProperty.call(cachedResults, query);
    }

    renderInput() {
        const { model } = this.props;
        const { query } = this.state;

        return (
            <SearchInput
                ref={this.input}
                model={model}
                query={query}
                onSearchClear={this.onSearchClear}
                onSearchActivation={this.onSearchActivation}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onQueryChanged={this.onQueryChanged}
                onSearchClose={this.onSearchClose}
                onSearchSubmit={this.onSearchSubmit}
            />
        );
    }

    renderSuggestions() {
        const { suggestions, query, selectedSuggestionIndex } = this.state;
        const { model, communityBasePath } = this.props;
        const highlightRegex = new RegExp(`(${this.escapeRegex(query)})`, 'ig');

        return suggestions.map((suggestion, index) => {
            const match = suggestion.match(highlightRegex);
            const highlightedPart = match ? match[0] : match;
            const regularPart = suggestion.replace(highlightRegex, '');
            const wrapperClassName = classNames('wds-global-navigation__search__suggestion', {
                'wds-is-selected': selectedSuggestionIndex === index,
            });

            return (
                <li
                    key={suggestion}
                    className={wrapperClassName}
                    onClick={this.onSearchSuggestionClick.bind(this, index)}
                    onMouseEnter={this.onSuggestionHover.bind(this, index)}
                >
                    <a
                        href={`${communityBasePath}/wiki/${this.normalizeToUnderscore(suggestion)}`}
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
        const hasSuggestions = Boolean(suggestions.length);
        const computedClass = classNames(
            'wds-global-navigation__search-container',
            { 'wds-search-is-focused': inputFocused },
        );

        return (
            <form className={computedClass} onKeyDown={this.onKeyDown}>
                <div className="wds-global-navigation__search">
                    <SearchToggle onClick={this.onSearchActivation} />
                    <Dropdown
                        className="wds-global-navigation__search-dropdown"
                        toggle={this.renderInput()}
                        toggleClassName="wds-global-navigation__search-input-wrapper"
                        contentClassName="wds-global-navigation__search-suggestions"
                        isActive={hasSuggestions}
                        isNotHoverable={!hasSuggestions}
                        iconName="dropdown-tiny"
                        noChevron
                    >
                        {
                            hasSuggestions && (
                                <List className="wds-global-navigation__search-suggestions-list" isLinked hasEllipsis>
                                    {this.renderSuggestions()}
                                </List>
                            )
                        }
                    </Dropdown>
                </div>
            </form>
        );
    }
}

Search.propTypes = {
    communityBasePath: PropTypes.string.isRequired,
    inSearchModal: PropTypes.bool,
    isSearchExpanded: PropTypes.bool.isRequired,
    model: PropTypes.shape().isRequired,
    onRedirectToSearchResults: PropTypes.func.isRequired,
    onSearchActivation: PropTypes.func.isRequired,
    onSearchClose: PropTypes.func.isRequired,
    onSearchSuggestionChosen: PropTypes.func.isRequired,
    onSearchSuggestionsImpression: PropTypes.func.isRequired,
    track: PropTypes.func.isRequired,
};

Search.defaultProps = {
    inSearchModal: false,
};

export default Search;
