import React from 'react';

import AddedTags from './AddedTags';

const tags = [
    { id: '1', title: 'Foo' },
    { id: '2', title: 'Bar' },
    { id: '3', title: 'FooBar' },
];

test('AddedTags renders with default props', () => {
    const component = mountWithThemeProvider(<AddedTags className="foo" tags={tags} />);
    expect(component.find(AddedTags)).toMatchSnapshot();
});

test('AddedTags does not render empty', () => {
    const component = mountWithThemeProvider(<AddedTags />);
    expect(component.text()).toBe('');
});
