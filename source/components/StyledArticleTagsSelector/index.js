import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
    onSuggestedTag,
    searchResults,
    suggestedTags,
    tags,
}) {
    return (
        <Wrapper className={className}>
            <SearchForm
                communityName={communityName}
                maxAllowed={maxAllowed}
                onAddTag={onAddTag}
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
    onAddTag: PropTypes.func,
    onRemoveTag: PropTypes.func,
    onSuggestedTag: PropTypes.func,
    searchResults: PropTypes.arrayOf(TagShape),
    suggestedTags: PropTypes.arrayOf(TagShape),
    tags: PropTypes.arrayOf(TagShape),
};

StyledArticleTagsSelector.defaultProps = {
    className: '',
    maxAllowed: 10,
    onAddTag: null,
    onRemoveTag: null,
    onSuggestedTag: null,
    searchResults: null,
    suggestedTags: null,
    tags: null,
};

export default StyledArticleTagsSelector;
