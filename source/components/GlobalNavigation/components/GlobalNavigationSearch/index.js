import React from 'react';
import Dropdown from '../../../Dropdown';
import IconMagnifyingGlassSmall from '../../../../icons/IconMagnifyingGlassSmall';
import IconMagnifyingGlass from '../../../../icons/IconMagnifyingGlass';
import List from '../../../List';


class GlobalNavigationSearch extends React.Component {
    render() {
        return (
            <form className="wds-global-navigation__search-container">
                <div className="wds-global-navigation__search">
                    <div className="wds-global-navigation__search-toggle" role="searchbox">
                        <IconMagnifyingGlassSmall
                            className="wds-global-navigation__search-toggle-icon wds-icon wds-icon-small" />
                        <IconMagnifyingGlass
                            className="wds-global-navigation__search-toggle-icon wds-icon" />
                        <span className="wds-global-navigation__search-toggle-text">
                                Search
                        </span>
                    </div>
                    <Dropdown
                        className="wds-global-navigation__search-dropdown"
                        toggle={<input className="wds-global-navigation__search-input" placeholder="Search Wookieepedia..." />}
                        toggleClassName="wds-global-navigation__search-input-wrapper"
                        contentClassName="wds-global-navigation__search-suggestions"
                    >
                        <List>
                            <li>
                                <a
                                    href="#"
                                    className="wds-global-navigation__dropdown-link"
                                >
                                    Suggestion 1
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="wds-global-navigation__dropdown-link"
                                >
                                    Suggestion 2
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="wds-global-navigation__dropdown-link"
                                >
                                    Suggestion 3
                                </a>
                            </li>
                        </List>
                        {/*
                        {{#if suggestions}}
        <dropdown.content @class="wds-global-navigation__search-suggestions">
          <List @linked={{true}} @ellipsis={{true}}>
            {{#each suggestions as |suggestion index|}}
              <li
                class="{{if (equal index selectedSuggestionIndex) "wds-is-selected"}} wds-global-navigation__search-suggestion"
                onmouseenter={{action (mut selectedSuggestionIndex) index}}
                {{action "onSearchSuggestionClick" index}}
              >
                <a
                  href={{suggestion.uri}}
                  class="wds-global-navigation__dropdown-link"
                  data-tracking-label={{model.suggestions.tracking-label}}
                >
                  {{{suggestion.text}}}
                </a>
              </li>
            {{/each}}
          </List>
        </dropdown.content>
      {{/if}}

                        */}
                    </Dropdown>
                </div>
            </form>
        );
    }
}

export default GlobalNavigationSearch;
