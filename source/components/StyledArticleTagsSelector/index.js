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
 * `StyledArticleTagsSelector` component.
 *
 * **NOTE**: Several props are arrays of `Tag`s - `Tag` is defined as follows:
 * ```typescript
 * interface Tag {
 *   id: string;
 *   title: string;
 *   url?: string;
 * }
 * ```
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

    const searchCallback = /* istanbul ignore next */ (q) => {
        setQuery(q);
        onSearch(q);
    };

    return (
        <Wrapper className={className}>
            <SearchForm
                communityName={communityName}
                maxNumOfTagsAdded={maxNumOfTagsAdded}
                maxAllowed={maxAllowed}
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
    /** Search result tags; `Tag[]` (see above); current query will automatically be highlighted */
    searchResults: PropTypes.arrayOf(TagShape),
    /** Suggested tags; `Tag[]` (see above) */
    suggestedTags: PropTypes.arrayOf(TagShape),
    /** Current tags; `Tag[]` (see above) */
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
