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
    onSearch,
    onSuggestedTag,
    searchResults,
    suggestedTags,
    tags,
}) {
    const [query, setQuery] = React.useState('');
    const maxNumOfTagsAdded = tags && (tags.length >= maxAllowed);

    const searchCallback = (q) => {
        setQuery(q);
        onSearch(q);
    };

    return (
        <Wrapper className={className}>
            <SearchForm
                communityName={communityName}
                maxNumOfTagsAdded={maxNumOfTagsAdded}
                onAddTag={onAddTag}
                query={query}
                onSearch={searchCallback}
                searchResults={searchResults}
            />
            <AddedTags tags={tags} onRemove={onRemoveTag} />
            {!maxNumOfTagsAdded && <SuggestedTags tags={suggestedTags} onClick={onSuggestedTag} />}
        </Wrapper>
    );
}

StyledArticleTagsSelector.propTypes = {
    /** Extra class name */
    className: PropTypes.string,
    /** Name of the current community */
    communityName: PropTypes.string.isRequired,
    /** How many tags are allowed */
    maxAllowed: PropTypes.number,
    /** Callback called when clicking on tags in the "Add Tag" dropdown; `(id: string) => void` */
    onAddTag: PropTypes.func.isRequired,
    /** Callback called when clicking on X in the current tags list; `(id: string) => void` */
    onRemoveTag: PropTypes.func.isRequired,
    /** Callback called when search should be called; `(query: string) => void` */
    onSearch: PropTypes.func.isRequired,
    /** Callback called when clicking on one of the suggested tags; `(id: string) => void` */
    onSuggestedTag: PropTypes.func.isRequired,
    /** Search result tags; [{id: string, title: string}]; current query will automatically be highlighted */
    searchResults: PropTypes.arrayOf(TagShape),
    /** Suggested tags; [{id: string, title: string}] */
    suggestedTags: PropTypes.arrayOf(TagShape),
    /** Current tags; [{id: string, title: string}] */
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
