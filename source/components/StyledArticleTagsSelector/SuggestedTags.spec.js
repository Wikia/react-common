import React from 'react';

import SuggestedTags from './SuggestedTags';

const tags = [
    { id: '1', title: 'Foo' },
    { id: '2', title: 'Bar' },
    { id: '3', title: 'FooBar' },
];

test('SuggestedTags renders with default props', () => {
    const component = mountWithThemeProvider(<SuggestedTags className="foo" tags={tags} />);
    expect(component.find(SuggestedTags)).toMatchSnapshot();
});

test('SuggestedTags does not render empty', () => {
    const component = mountWithThemeProvider(<SuggestedTags />);
    expect(component.text()).toBe('');
});
