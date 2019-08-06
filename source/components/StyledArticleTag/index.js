import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import IconClose from '../../icons/IconCloseSmall';

const Wrapper = styled.span`
    align-items: center;
    border-radius: 25px;
    border: 1px solid ${({ theme }) => theme.color.black};
    cursor: pointer;
    display: inline-flex;
    font-size: ${({ theme }) => theme.font_size.s};
    line-height:  ${({ theme }) => theme.line_height.tight};
    padding: 2px 12px;

    ${({ secondary }) => secondary && css`
        background-color: ${({ theme }) => theme.color.fandom_light_gray};
        border: none;
    `}
`;

const Icon = styled(IconClose)`
    cursor: pointer;
    height: 11px;
    margin-left: 5px;
    width: 11px;
`;

function StyledArticleTag({
    className,
    onClick,
    onRemove,
    removable,
    secondary,
    tag,
}) {
    return (
        <Wrapper onClick={onClick} className={className} secondary={secondary}>
            {tag}
            {removable && <Icon onClick={onRemove} />}
        </Wrapper>
    );
}

StyledArticleTag.propTypes = {
    /** Extra class name */
    className: PropTypes.string,
    onClick: PropTypes.func,
    onRemove: PropTypes.func,
    /** Flag to mark tag as removable */
    removable: PropTypes.bool,
    /** Secondary flag */
    secondary: PropTypes.bool,
    /** Tag name */
    tag: PropTypes.string.isRequired,
};

StyledArticleTag.defaultProps = {
    className: '',
    onClick: null,
    onRemove: null,
    removable: false,
    secondary: false,
};

export default StyledArticleTag;
