import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import IconMagnifyingGlassSmall from '../../icons/IconMagnifyingGlassSmall';
import IconCloseSmall from '../../icons/IconCloseSmall';

import { colorWithAlpha } from '../../utils/css';

import StyledList from '../StyledList';
import HighlightedText from '../HighlightedText';

import TagShape from './TagShape';
import getAccentColor from './getAccentColor';

const ICON_STYLES = css`
    fill: currentColor;
    height: 16px;
    width: 16px;
`;

const List = styled(StyledList)`
    background-color: ${({ theme }) => theme.color.white};
    border: 1px solid ${({ theme }) => theme.color.fandom_middle_gray};
    overflow: hidden;
    padding: 10px 0;
    position: absolute;
    width: 100%;

    @media ${({ theme }) => theme.media.medium_up} {
        top: 24px;
    }

    > li {
        cursor: pointer;
        line-height: 36px;
        margin: 0 10px;
        padding: 0 10px;

        &:hover {
            background-color: ${({ theme }) => colorWithAlpha(getAccentColor(theme), 0.1)};
        }
    }

    mark {
        background-color: transparent;
        font-weight: ${({ theme }) => theme.font_weight.bold};
    }
`;

const Wrapper = styled.div`
    align-items: center;
    border-bottom: solid 1px ${({ theme }) => theme.color.black};
    display: flex;
    position: relative;

    @media ${({ theme }) => theme.media.small_down} {
    }

    @media ${({ theme }) => theme.media.medium_up} {
        flex: 1;
        /* flex-direction: column; */
    }
`;

const Input = styled.input`
    border: none;
    line-height: ${({ theme }) => theme.line_height.normal};
    width: 100%;
    background-color: transparent;

    flex-grow: 1;

    @media ${({ theme }) => theme.media.medium_up} {
        font-size: ${({ theme }) => theme.font_size.s};
    }

    &:focus {
        outline: none;
    }
`;

const IconSearch = styled(IconMagnifyingGlassSmall)`
    ${ICON_STYLES}
    margin-right: 6px;
`;

const IconClose = styled(IconCloseSmall)`
    ${ICON_STYLES}

    cursor: pointer;
`;

function SearchInput({
    className,
    onChange,
    onClose,
    onAddTag,
    communityName,
    list,
    query,
}) {
    const ref = React.createRef();

    return (
        <Wrapper className={className}>
            <IconSearch />
            <Input
                placeholder={`Searching ${communityName}`}
                ref={ref}
                onChange={onChange}
                autoFocus
            />
            {list && (
                <List>
                    {list.map(({ id, title }) => (
                        <li
                            key={id}
                            onClick={() => onAddTag(id)}
                        >
                            <HighlightedText
                                highlight={query}
                                text={title}
                            />
                        </li>
                    ))}
                </List>
            )}
            <IconClose onClick={onClose} />
        </Wrapper>
    );
}

SearchInput.propTypes = {
    /** Extra class name */
    className: PropTypes.string,
    communityName: PropTypes.string,
    list: PropTypes.arrayOf(TagShape),
    onAddTag: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    query: PropTypes.string,
};

SearchInput.defaultProps = {
    className: '',
    communityName: '',
    query: '',
    list: null,
};

export default SearchInput;
