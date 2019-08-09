import React from 'react';

import ArticleTagsSelector from './index';

const tags = [
    { id: '1', title: 'Foo' },
    { id: '2', title: 'Bar' },
    { id: '3', title: 'FooBar' },
];

test('ArticleTagsSelector renders empty', () => {
    const component = mountWithThemeProvider(<ArticleTagsSelector />);
    expect(component.find(ArticleTagsSelector)).toMatchSnapshot();
});


test('ArticleTagsSelector renders with props', () => {
    const component = mountWithThemeProvider(<ArticleTagsSelector
        className="foo"
        communityName="bar"
        maxAllowed={10}
        query="q"
        searchResults={tags}
        tags={tags}
        suggestedTags={tags}
        maxNumOfTagsAdded
    />);
    expect(component.find(ArticleTagsSelector)).toMatchSnapshot();
});
