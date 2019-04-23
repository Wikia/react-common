import React from 'react';
import { shallow } from 'enzyme';
import merge from 'lodash/merge';

import SearchInput from './SearchInput';

const defaultProps = {
    query: 'some query',
    model: {
        type: 'search',
        results: {
            'tracking-label': 'search',
            'param-name': 'query',
            url: '//starwars.wikia.com/wiki/Special:Search',
        },
        'placeholder-inactive': {
            type: 'translatable-text',
            key: 'global-navigation-search-placeholder-inactive',
        },
        'placeholder-active': {
            type: 'translatable-text',
            key: 'global-navigation-search-placeholder-in-wiki',
            params: {
                sitename: {
                    type: 'text',
                    value: 'Wookieepedia',
                },
            },
        },
        suggestions: {
            url: '/mocks/searchSuggestions.json?',
            'param-name': 'query',
            'tracking-label': 'search-suggestion',
        },
    },
    onSearchActivation: () => null,
    onQueryChanged: () => null,
    onFocus: () => null,
    onBlur: () => null,
    onSearchClear: () => null,
    onSearchClose: () => null,
    onSearchSubmit: () => null,
};

function renderComponent(props, options = {}) {
    const computedProps = merge({}, defaultProps, props);

    return shallow(<SearchInput {...computedProps} />, options);
}

test('SearchInput renders', () => {
    const component = renderComponent();

    expect(component).toMatchSnapshot();
});
