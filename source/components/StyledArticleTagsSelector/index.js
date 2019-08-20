import noop from 'lodash/noop';
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { COLORS } from '../../theme/colors';

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
 *   articleId: string;
 *   articleTitle: string;
 *   url?: string;
 * }
 * ```
 */
function StyledArticleTagsSelector({
    accentColor,
    className,
    communityName,
    maxAllowed,
    onAddTag,
    onOpenSearch,
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
                accentColor={accentColor}
                communityName={communityName}
                maxNumOfTagsAdded={maxNumOfTagsAdded}
                maxAllowed={maxAllowed}
                onAddTag={onAddTag}
                query={query}
                onOpenSearch={onOpenSearch}
                onSearch={searchCallback}
                searchResults={searchResults}
            />
            <AddedTags tags={tags} onRemove={onRemoveTag} />
            {!maxNumOfTagsAdded && <SuggestedTags tags={suggestedTags} onClick={onSuggestedTag} />}
        </Wrapper>
    );
}

StyledArticleTagsSelector.propTypes = {
    /** Accent color */
    accentColor: PropTypes.string,
    /** Extra class name */
    className: PropTypes.string,
    /** Name of the current community */
    communityName: PropTypes.string.isRequired,
    /** How many tags are allowed */
    maxAllowed: PropTypes.number,
    /** Callback called when clicking on tags in the "Add Tag" dropdown; `(id: string) => void` */
    onAddTag: PropTypes.func.isRequired,
    /** Callback called when search is opened/shown */
    onOpenSearch: PropTypes.func,
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
    // TODO: remove once theming is refactored
    accentColor: COLORS.fandom_aqua,
    className: '',
    maxAllowed: 10,
    onOpenSearch: noop,
    searchResults: null,
    suggestedTags: null,
    tags: null,
};

export default StyledArticleTagsSelector;
