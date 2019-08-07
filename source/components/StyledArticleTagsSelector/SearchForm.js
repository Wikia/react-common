import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import IconTagSmall from '../../icons/IconTagSmall';
import IconAddSmall from '../../icons/IconAddSmall';
import IconAlertSmall from '../../icons/IconAlertSmall';

import SearchInput from './SearchInput';
import TagShape from './TagShape';
import getAccentColor from './getAccentColor';

const ICON_STYLES = css`
    fill: currentColor;
    height: 18px;
    width: 18px;
`;

const IconTag = styled(IconTagSmall)`
    ${ICON_STYLES}
    margin-right: 6px;
`;

const IconAlert = styled(IconAlertSmall)`
    ${ICON_STYLES}

    fill: ${({ theme }) => theme.color.fandom_red};
    margin-right: 6px;
`;

const IconAdd = styled(IconAddSmall)`
    fill: currentColor;
    height: 12px;
    width: 12px;
    margin-left: 6px;
`;

const Wrapper = styled.div`
    display: flex;
    height: 24px;
`;

const Header = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 12px;
`;

const AddTagButton = styled.button`
    align-items: center;
    background: transparent;
    border: 0;
    color: ${({ theme }) => getAccentColor(theme)};
    cursor: pointer;
    display: inline-flex;
    font: inherit;
    font-weight: ${({ theme }) => theme.font_weight.medium};
    line-height: 1;
    margin: 0;
    padding: 0;

    &:disabled {
        opacity: .5;
        pointer-events: none;
    }
`;

const MaxTagsAdded = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
`;

function SearchForm({
    className,
    communityName,
    maxNumOfTagsAdded,
    onAddTag,
    onSearch,
    query,
    searchResults,
}) {
    const [showSearch, setShowSearch] = React.useState(false);
    const doSearch = debounce(onSearch, 300);
    const onChange = event => doSearch(event.target.value.trim());

    return (
        <Wrapper className={className}>
            <Header>
                <IconTag />
                Tag Wiki Pages
            </Header>
            {showSearch ? (
                <SearchInput
                    communityName={communityName}
                    list={searchResults}
                    onAddTag={onAddTag}
                    onChange={onChange}
                    onClose={() => setShowSearch(false)}
                    query={query}
                />
            ) : (
                <React.Fragment>
                    <AddTagButton
                        onClick={() => setShowSearch(true)}
                        disabled={maxNumOfTagsAdded}
                    >
                        Add Tag
                        <IconAdd />
                    </AddTagButton>
                    {maxNumOfTagsAdded && (
                        <MaxTagsAdded>
                            <IconAlert />
                            Maximum 10 tags
                        </MaxTagsAdded>
                    )}
                </React.Fragment>
            )}
        </Wrapper>
    );
}

SearchForm.propTypes = {
    /** Extra class name */
    className: PropTypes.string,
    communityName: PropTypes.string.isRequired,
    maxNumOfTagsAdded: PropTypes.bool,
    onAddTag: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    query: PropTypes.string,
    searchResults: PropTypes.arrayOf(TagShape),
};

SearchForm.defaultProps = {
    className: '',
    maxNumOfTagsAdded: false,
    query: '',
    searchResults: null,
};

export default SearchForm;
