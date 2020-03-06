import React from 'react';

import SearchInput from './SearchInput';

const tags = [
    { articleId: '1', articleTitle: 'Foo' },
    { articleId: '2', articleTitle: 'Bar' },
    { articleId: '3', articleTitle: 'FooBar' },
];

test('SearchInput renders empty', () => {
    const component = mountWithThemeProvider(<SearchInput accentColor="#00f" />);
    expect(component.find(SearchInput)).toMatchSnapshot();
});


test('SearchInput renders with props', () => {
    const component = mountWithThemeProvider(<SearchInput
        accentColor="#00f"
        className="foo"
        communityName="bar"
        query="q"
        list={tags}
    />);
    expect(component.find(SearchInput)).toMatchSnapshot();
});
