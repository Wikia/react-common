import debounce from 'lodash/debounce';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

import IconTagSmall from '../../icons/IconTagSmall';
import IconAddSmall from '../../icons/IconAddSmall';
import IconAlertSmall from '../../icons/IconAlertSmall';

import SearchInput from './SearchInput';
import TagShape from './TagShape';

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

    @media ${({ theme }) => theme.media.small_down} {
        justify-content: space-between;
    }
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
    color: ${({ accentColor }) => accentColor};
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
    margin-left: 6px;
`;

function SearchForm({
    accentColor,
    className,
    communityName,
    maxAllowed,
    maxNumOfTagsAdded,
    onAddTag,
    onOpenSearch,
    onSearch,
    query,
    searchResults,
}) {
    /* istanbul ignore next  */
    const [showSearch, setShowSearch] = React.useState(false);
    /* istanbul ignore next  */
    const doSearch = debounce(onSearch, 300);
    /* istanbul ignore next  */
    const onChange = event => doSearch(event.target.value.trim());

    return (
        <Wrapper className={className}>
            <Header>
                <IconTag />
                Tag Wiki Pages
            </Header>
            {/* istanbul ignore next */ showSearch ? (
                <SearchInput
                    communityName={communityName}
                    accentColor={accentColor}
                    list={searchResults}
                    onAddTag={/* istanbul ignore next */ (id) => { setShowSearch(false); onAddTag(id); }}
                    onChange={onChange}
                    onClose={/* istanbul ignore next */ () => setShowSearch(false)}
                    query={query}
                />
            ) : (
                <React.Fragment>
                    <AddTagButton
                        accentColor={accentColor}
                        onClick={/* istanbul ignore next */ () => { onOpenSearch(); setShowSearch(true); }}
                        disabled={maxNumOfTagsAdded}
                    >
                        Add Tag
                        <IconAdd />
                    </AddTagButton>
                    {maxNumOfTagsAdded && (
                        <MaxTagsAdded>
                            <IconAlert />
                            {`Maximum ${maxAllowed} tag`}
                        </MaxTagsAdded>
                    )}
                </React.Fragment>
            )}
        </Wrapper>
    );
}

SearchForm.propTypes = {
    accentColor: PropTypes.string.isRequired,
    /** Extra class name */
    className: PropTypes.string,
    communityName: PropTypes.string,
    maxAllowed: PropTypes.number,
    maxNumOfTagsAdded: PropTypes.bool,
    onAddTag: PropTypes.func,
    onOpenSearch: PropTypes.func,
    onSearch: PropTypes.func,
    query: PropTypes.string,
    searchResults: PropTypes.arrayOf(TagShape),
};

SearchForm.defaultProps = {
    className: '',
    communityName: '',
    maxAllowed: 10,
    maxNumOfTagsAdded: false,
    onAddTag: noop,
    onOpenSearch: noop,
    onSearch: noop,
    query: '',
    searchResults: null,
};

export default SearchForm;
