import React from 'react';

import ArticleTagsSelector from './index';

const tags = [
    { articleId: '1', articleTitle: 'Foo' },
    { articleId: '2', articleTitle: 'Bar' },
    { articleId: '3', articleTitle: 'FooBar' },
];

test('ArticleTagsSelector renders empty', () => {
    const component = mountWithThemeProvider(<ArticleTagsSelector />);
    expect(component.find(ArticleTagsSelector)).toMatchSnapshot();
});


test('ArticleTagsSelector renders with props', () => {
    const component = mountWithThemeProvider(<ArticleTagsSelector
        accentColor="#00f"
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
