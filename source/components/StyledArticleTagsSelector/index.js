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



/**
 * `StyledArticleTagsSelector` component
 */
function StyledArticleTagsSelector({
    className,
    communityName,
    maxAllowed,
    onAddTag,
    onRemoveTag,
    onSearch,
    onSuggestedTag,
    searchResults,
    suggestedTags,
    tags,
}) {
    const [query, setQuery] = React.useState('');

    console.log('searchResults', searchResults);

    const searchCallback = (q) => {
        setQuery(q);
        onSearch(q);
    };

    return (
        <Wrapper className={className}>
            <SearchForm
                communityName={communityName}
                maxNumOfTagsAdded={tags.length >= maxAllowed}
                onAddTag={onAddTag}
                query={query}
                onSearch={searchCallback}
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
    onSearch: PropTypes.func.isRequired,
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
