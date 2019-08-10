import React from 'react';

import SearchForm from './SearchForm';

const tags = [
    { id: '1', title: 'Foo' },
    { id: '2', title: 'Bar' },
    { id: '3', title: 'FooBar' },
];

test('SearchForm renders empty', () => {
    const component = mountWithThemeProvider(<SearchForm />);
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
