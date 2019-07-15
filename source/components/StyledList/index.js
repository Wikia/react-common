import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { ellipsis } from '../../utils/cssMixins';

const LIST_ITEM_PADDING = css`
    padding: 11px 0;
`;

const StyledList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 7px 18px;

    ${({ bigItems }) => bigItems && css`
        padding-bottom: 2px;
        padding-top: 2px;
    `}

    > li {
        font-size: ${({ theme }) => theme.font_size.s};
        font-weight: normal;
        line-height: 1em;
        ${LIST_ITEM_PADDING}

        ${({ bigItems }) => bigItems && css`
            font-size: ${({ theme }) => theme.font_size.base};
            padding-bottom: 16px;
            padding-top: 16px;
        `}

        ${({ boldItems }) => boldItems && css`
            font-weight: bold;
        `}

        ${({ linesBetween, theme }) => linesBetween && css`
            border-bottom: solid 1px ${theme.color.fandom_light_gray};

            &:last-child {
                border: 0;
            }
        `}

        ${({ hasEllipsis }) => hasEllipsis && css`
            ${ellipsis()}

            > a {
                ${ellipsis()}
            }
        `}

        ${({ isLinked }) => isLinked && css`
            padding: 0;

            > a {
                display: block;
                ${LIST_ITEM_PADDING}
            }
        `}
    }
`;

StyledList.propTypes = {
    /** Whether or not the list contains big items */
    bigItems: PropTypes.bool,
    /** Whether or not list items should be bold */
    boldItems: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    hasEllipsis: PropTypes.bool,
    /** Whether or not items are links */
    isLinked: PropTypes.bool,
    /** Whether or not show line separator between items */
    linesBetween: PropTypes.bool,
};

StyledList.defaultProps = {
    bigItems: false,
    boldItems: false,
    children: null,
    className: '',
    hasEllipsis: false,
    isLinked: false,
    linesBetween: false,
};

export default StyledList;
