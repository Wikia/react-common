import React from 'react';

import SearchForm from './SearchForm';

const tags = [
    { articleId: '1', articleTitle: 'Foo' },
    { articleId: '2', articleTitle: 'Bar' },
    { articleId: '3', articleTitle: 'FooBar' },
];

test('SearchForm renders empty', () => {
    const component = mountWithThemeProvider(<SearchForm accentColor="#00f" />);
    expect(component.find(SearchForm)).toMatchSnapshot();
});


test('SearchForm renders with props', () => {
    const component = mountWithThemeProvider(<SearchForm
        accentColor="#00f"
        className="foo"
        communityName="bar"
        maxAllowed={3}
        query="q"
        searchResults={tags}
        maxNumOfTagsAdded
    />);
    expect(component.find(SearchForm)).toMatchSnapshot();
});
