import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import faker from 'faker';

import TagShape from './TagShape';
import AddedTags from './AddedTags';
import SuggestedTags from './SuggestedTags';
import SearchForm from './SearchForm';

const Wrapper = styled.div`
    font-size: ${({ theme }) => theme.font_size.s};
`;

function getSearchResults(query) {
    if (!query) {
        return null;
    }

    const count = Math.floor(Math.random() * 3 + 3);
    const generateEntry = q => ({
        id: faker.random.number(100).toString(),
        title: `${q}${faker.random.words(faker.random.number(2) + 1)}`,
    });

    return (new Array(count)).fill(null).map(() => generateEntry(query));
}

/**
 * `StyledArticleTagsSelector` component
 */
function StyledArticleTagsSelector({
    className,
    communityName,
    maxAllowed,
    onAddTag,
    onRemoveTag,
    onSuggestedTag,
    // searchResults,
    suggestedTags,
    tags,
}) {
    const [query, setQuery] = React.useState('');
    const searchResults = getSearchResults(query);

    return (
        <Wrapper className={className}>
            <SearchForm
                communityName={communityName}
                maxNumOfTagsAdded={tags.length >= maxAllowed}
                onAddTag={onAddTag}
                query={query}
                onSearch={q => setQuery(q)}
                searchResults={searchResults}
            />
            <AddedTags tags={tags} onRemove={onRemoveTag} />
            <SuggestedTags tags={suggestedTags} onClick={onSuggestedTag} />
        </Wrapper>
    );
}

StyledArticleTagsSelector.propTypes = {
    /** Extra class name */
    className: PropTypes.string,
    communityName: PropTypes.string.isRequired,
    maxAllowed: PropTypes.number,
    onAddTag: PropTypes.func.isRequired,
    onRemoveTag: PropTypes.func.isRequired,
    onSuggestedTag: PropTypes.func.isRequired,
    searchResults: PropTypes.arrayOf(TagShape),
    suggestedTags: PropTypes.arrayOf(TagShape),
    tags: PropTypes.arrayOf(TagShape),
};

StyledArticleTagsSelector.defaultProps = {
    className: '',
    maxAllowed: 10,
    searchResults: null,
    suggestedTags: null,
    tags: null,
};

export default StyledArticleTagsSelector;
