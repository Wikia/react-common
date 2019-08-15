import React from 'react';

import SuggestedTags from './SuggestedTags';

const tags = [
    { articleId: '1', articleTitle: 'Foo' },
    { articleId: '2', articleTitle: 'Bar' },
    { articleId: '3', articleTitle: 'FooBar' },
];

test('SuggestedTags renders with default props', () => {
    const component = mountWithThemeProvider(<SuggestedTags className="foo" tags={tags} />);
    expect(component.find(SuggestedTags)).toMatchSnapshot();
});

test('SuggestedTags does not render empty', () => {
    const component = mountWithThemeProvider(<SuggestedTags />);
    expect(component.text()).toBe('');
});
