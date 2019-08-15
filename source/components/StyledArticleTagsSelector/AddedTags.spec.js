import React from 'react';

import AddedTags from './AddedTags';

const tags = [
    { articleId: '1', articleTitle: 'Foo' },
    { articleId: '2', articleTitle: 'Bar' },
    { articleId: '3', articleTitle: 'FooBar' },
];

test('AddedTags renders with default props', () => {
    const component = mountWithThemeProvider(<AddedTags className="foo" tags={tags} />);
    expect(component.find(AddedTags)).toMatchSnapshot();
});

test('AddedTags does not render empty', () => {
    const component = mountWithThemeProvider(<AddedTags />);
    expect(component.text()).toBe('');
});
