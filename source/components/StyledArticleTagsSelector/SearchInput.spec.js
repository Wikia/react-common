import React from 'react';

import SearchInput from './SearchInput';

const tags = [
    { id: '1', title: 'Foo' },
    { id: '2', title: 'Bar' },
    { id: '3', title: 'FooBar' },
];

test('SearchInput renders empty', () => {
    const component = mountWithThemeProvider(<SearchInput />);
    expect(component.find(SearchInput)).toMatchSnapshot();
});


test('SearchInput renders with props', () => {
    const component = mountWithThemeProvider(<SearchInput
        className="foo"
        communityName="bar"
        query="q"
        list={tags}
    />);
    expect(component.find(SearchInput)).toMatchSnapshot();
});
