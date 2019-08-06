import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';

import IconTagSmall from '../../icons/IconTagSmall';
import IconAddSmall from '../../icons/IconAddSmall';
import IconAlertSmall from '../../icons/IconAlertSmall';

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
`;

const Header = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 12px;
`;

function getAccentColor(theme) {
    return get(theme, 'site.color.accent') || get(theme, 'color.fandom_aqua');
}

const AddTagButton = styled.span`
    align-items: center;
    color: ${({ theme }) => getAccentColor(theme)};
    cursor: pointer;
    display: inline-flex;
    font-weight: ${({ theme }) => theme.font_weight.medium};
`;

const MaxTagsAdded = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 6px;
`;

function SearchForm({
    className,
    communityName,
    maxAllowed,
    onAddTag,
    searchResults,
}) {
    return (
        <Wrapper className={className}>
            <Header>
                <IconTag />
                Tag Wiki Pages
            </Header>
            <AddTagButton>
                Add Tag
                <IconAdd />
            </AddTagButton>
            <MaxTagsAdded>
                <IconAlert />
                Maximum 10 tags
            </MaxTagsAdded>
        </Wrapper>
    );
}

SearchForm.propTypes = {
    /** Extra class name */
    className: PropTypes.string,
    communityName: PropTypes.string,
    maxAllowed: PropTypes.number,
    onAddTag: PropTypes.func,
    searchResults: PropTypes.arrayOf(TagShape),
};

SearchForm.defaultProps = {
    className: '',
    onAddTag: null,
    searchResults: null,
};

export default SearchForm;
