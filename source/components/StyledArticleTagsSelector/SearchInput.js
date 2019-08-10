import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import IconMagnifyingGlassSmall from '../../icons/IconMagnifyingGlassSmall';
import IconCloseSmall from '../../icons/IconCloseSmall';

import { colorWithAlpha } from '../../utils/css';

import StyledList from '../StyledList';
import HighlightedText from '../HighlightedText';

import TagShape from './TagShape';

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
    top: 32px;

    @media ${({ theme }) => theme.media.medium_up} {
        top: 24px;
    }

    > li {
        cursor: pointer;
        line-height: 36px;
        margin: 0 10px;
        padding: 0 10px;

        &:hover {
            background-color: ${({ accentColor }) => colorWithAlpha(accentColor, 0.1)};
        }
    }

    mark {
        background-color: transparent;
        font-weight: ${({ theme }) => theme.font_weight.bold};
    }
`;

const Slider = styled.div`
    @media ${({ theme }) => theme.media.small_down} {
        background-color: ${({ theme }) => theme.color.white};
        height: 100vh;
        left: 0;
        position: fixed;
        top: 0;
        width: 100vw;
        z-index: 1;
    }

    @media ${({ theme }) => theme.media.medium_up} {
        flex: 1;
    }
`;

const Wrapper = styled.div`
    align-items: center;
    border-bottom: solid 1px ${({ theme }) => theme.color.black};
    display: flex;
    position: relative;

    @media ${({ theme }) => theme.media.small_only} {
        margin: 13px;
    }
`;

const Input = styled.input`
    background-color: transparent;
    border: none;
    flex-grow: 1;
    font-size: ${({ theme }) => theme.font_size.base};
    line-height: ${({ theme }) => theme.line_height.normal};
    width: 100%;

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
    accentColor,
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
        <Slider className={className}>
            <Wrapper>
                <IconSearch />
                <Input
                    placeholder={`Searching ${communityName}`}
                    ref={ref}
                    onChange={onChange}
                    autoFocus
                />
                {list && (
                    <List accentColor={accentColor}>
                        {list.map(({ id, title }) => (
                            <li
                                key={id}
                                onClick={/* istanbul ignore next */ () => onAddTag(id)}
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
        </Slider>
    );
}

SearchInput.propTypes = {
    accentColor: PropTypes.string.isRequired,
    /** Extra class name */
    className: PropTypes.string,
    communityName: PropTypes.string,
    list: PropTypes.arrayOf(TagShape),
    onAddTag: PropTypes.func,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    query: PropTypes.string,
};

SearchInput.defaultProps = {
    className: '',
    communityName: '',
    list: null,
    onAddTag: noop,
    onChange: noop,
    onClose: noop,
    query: '',
};

export default SearchInput;
