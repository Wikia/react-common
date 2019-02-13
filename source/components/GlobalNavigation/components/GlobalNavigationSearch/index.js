import React from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { withTranslation } from 'react-i18next';

import Dropdown from '../../../Dropdown';
import Icon from '../../../../components/Icon';
import List from '../../../List';
import Button from "../../../Button";

const MINIMAL_QUERY_LENGTH = 3;
const DEBOUNCE_DURATION = 250;

class GlobalNavigationSearch extends React.Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();

        this.openSearch = this.openSearch.bind(this);
        this.onInputClick = this.onInputClick.bind(this);
        this.onQueryChanged = this.onQueryChanged.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.requestSuggestionsFromAPI = debounce(this.requestSuggestionsFromAPI.bind(this), DEBOUNCE_DURATION);
    }

    isMounted = false;

    state = {
        suggestions: [],
        requestsInProgress: {},
        cachedResults: {},
        searchRequestInProgress: false,
        searchIsActive: false,
        inputFocused: false,
        selectedSuggestionIndex: -1,
        query: '',
    };

    openSearch() {

    }

    onInputClick() {
        const { onSearchToggleClicked } = this.props;
        const { searchIsActive } = this.state;

        if (searchIsActive) {
            return;
        }

        this.setState({
            searchIsActive: true,
            inputFocused: true,
            suggestions: [],
        }, () => {
            onSearchToggleClicked();
            this.input.current.focus();
        });

    }

    escapeRegex(text) {
        return text.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    normalizeToUnderscore(title = '') {
        return title
            .replace(/\s/g, '_')
            .replace(/_+/g, '_');
    }

    onQueryChanged(event) {
        this.getSuggestions(event.target.value);
    }

    requestSuggestionsFromAPI() {
        const { query, searchRequestInProgress, requestsInProgress } = this.state;
        const { data } = this.props;

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

        fetch(`${data.suggestions.url}&query=${query}`)
            .then((response) => {
                if (response.ok) {
                    if (!this.isMounted) {
                        return
                    }

                    return response.json();
                } else if (response.status === 404) {
                    // When we get a 404, it means there were no results
                    return { suggestions: [] };
                } else {
                    console.error('Search suggestions error', response);
                }
            })
            .then((data) => {
                if (!data || searchRequestInProgress) {
                    return;
                }

                this.setState({
                    suggestion: data.suggestions,
                });

                this.cacheResult(query, data.suggestions);
            })
            .catch((reason) => {
                console.error('Search suggestions error', reason)

                this.onRequestEnd();
            })
            .then(() => this.onRequestEnd());
    };

    onRequestEnd() {
        if (!this.isMounted) {
            return
        }

        const { query, requestsInProgress } = this.state;

        this.setState({
            requestsInProgress: { ...requestsInProgress, [query]: false },
        });
    }

    hasCachedResult(query) {
        const { cachedResults } = this.state;

        return cachedResults.hasOwnProperty(query)
    }

    cacheResult(query, suggestions) {
        const { cachedResults } = this.state;

        this.setState({ cachedResults: { ...cachedResults, [query]: suggestions || [] } });
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

    onCloseSearch() {
        const { onSearchCloseClicked } = this.props;

        this.setState({
            suggestions: [],
            searchRequestInProgress: false,
            searchIsActive: false,
            inputFocused: false,
            selectedSuggestionIndex: -1,
            query: '',
        });

        onSearchCloseClicked();
    }

    onClearSearch() {
        this.setState({
            suggestions: [],
            searchRequestInProgress: false,
            searchIsActive: true,
            inputFocused: true,
            selectedSuggestionIndex: -1,
            query: '',
        });

        this.input.current.focus();
    }

    onFocus() {
        this.setState({
            inputFocused: true,
        })
    }

    onBlur() {
        const { query } = this.state;

        if (query) {
            this.onCloseSearch();
        }
    }

    onSearchSuggestionClick(index) {
        const { track } = this.props;
        const { suggestions } = this.state;

        this.onSearchSuggestionChosen(suggestions[index]);
        this.onCloseSearch();

        track({
            action: 'click',
            category: 'navigation',
            label: 'search-open-suggestion-link'
        });
    }

    onKeyDown(event) {
        const { selectedSuggestionIndex, suggestions, query } = this.state;
        const { onSearchSuggestionChosen } = this.props;

        event.stopPropagation();

        switch (event.key) {
            // down arrow
            case 40:
                if (selectedSuggestionIndex < suggestions.length - 1) {
                    this.setState(({ selectedSuggestionIndex }) => ({ selectedSuggestionIndex: selectedSuggestionIndex + 1}));
                }

                break;
            // up arrow
            case 30:
                if (suggestions.length && selectedSuggestionIndex > -1) {
                    this.setState(({ selectedSuggestionIndex }) => ({ selectedSuggestionIndex: selectedSuggestionIndex - 1}));
                }

                break;
            // ESC key
            case 27:
                this.onCloseSearch();

                break;
            // ENTER key
            case 13:
                if (selectedSuggestionIndex !== -1) {
                    onSearchSuggestionChosen(suggestions[selectedSuggestionIndex]);
                    this.input.current.blur();
                    this.onCloseSearch();
                } else if (this.goToSearchResults) {
                    this.goToSearchResults(this.state.query);
                }

                break;
        }
    }

    componentDidMount() {
        this.isMounted = true;
    }

    componentWillUnmount() {
        this.isMounted = false;
    }

    renderInput() {
        const { t, data } = this.props;
        const placeholderConfig = data['placeholder-active'];
        
        return (
            <React.Fragment>
                <input
                    className="wds-global-navigation__search-input"
                    placeholder={t(placeholderConfig.key, { sitename: placeholderConfig.params.sitename.value })}
                    onClick={this.onInputClick}
                    ref={this.input}
                    onChange={this.onQueryChanged}
                    onFocus={this.onFocus}
                    onBlur={this.onBlur}
                />
                <Button className="wds-global-navigation__search-clear" text>
                    <Icon name="add" small className="wds-global-navigation__search-clear-icon" />
                </Button>
                <Button className="wds-global-navigation__search-close" text>
                    <Icon name="close" className="wds-global-navigation__search-close-icon" tiny />
                </Button>
                <Button className="wds-global-navigation__search-submit" type="submit" text>
                    <Icon name="arrow" className="wds-global-navigation__search-submit-icon" small />
                </Button>
            </React.Fragment>
        );
    }

    renderSuggestions() {
        const { suggestions, query } = this.state;
        const highlightRegex = new RegExp(`(${this.escapeRegex(query)})`, 'ig');

        return suggestions.map(suggestion => {
            const match = suggestion.match(highlightRegex);
            const highlightedPart = match ? match[0] : match;
            const regulartPart = suggestion.replace(highlightRegex, '');

            return (
                <li key={suggestion} className="wds-global-navigation__search__suggestion">
                    <a
                        href={this.normalizeToUnderscore(suggestion)}
                        className="wds-global-navigation__dropdown-link"
                    >
                        {highlightedPart && (
                            <span className="wds-global-navigation__search-suggestion-highlight">
                                {highlightedPart}
                            </span>
                        )}
                        {regulartPart}
                    </a>
                </li>
            )
        });
    }

    render() {
        const { inputFocused, suggestions } = this.state;

        return (
            <form
                className={classNames('wds-global-navigation__search-container', inputFocused && 'wds-search-is-focused')}
                onKeyDown={this.onKeyDown}
                tabIndex="0"
            >
                <div className="wds-global-navigation__search">
                    <Dropdown
                        className="wds-global-navigation__search-dropdown"
                        toggle={this.renderInput()}
                        toggleClassName="wds-global-navigation__search-input-wrapper"
                        contentClassName="wds-global-navigation__search-suggestions"
                        isActive={Boolean(suggestions.length)}
                        isNotHoverable={!Boolean(suggestions.length)}
                        noChevron
                    >
                        <div className="wds-global-navigation__search-toggle" role="searchbox" onClick={this.openSearch}>
                            <Icon name="magnifying-glass" className="wds-global-navigation__search-toggle-icon" small />
                            <Icon name="magnifying-glass" className="wds-global-navigation__search-toggle-icon" />
                            <span className="wds-global-navigation__search-toggle-text">
                                Search
                            </span>
                        </div>
                        <List isLinked hasEllipsis>
                            {this.renderSuggestions()}
                        </List>
                    </Dropdown>
                </div>
            </form>
        );
    }
}

GlobalNavigationSearch.defaultProps = {
    onSearchToggleClicked: () => {},
    onSearchCloseClicked: () => {},
    onSearchSuggestionChosen: () => {},
    goToSearchResults: () => {},
    track: () => {},
};

export default withTranslation()(GlobalNavigationSearch);
