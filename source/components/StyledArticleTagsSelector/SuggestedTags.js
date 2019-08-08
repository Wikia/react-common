import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import noop from 'lodash/noop';

import StyledTag from '../StyledTag';

import TagShape from './TagShape';

const Tag = styled(StyledTag)`
    margin-right: 10px;
    margin-top: 10px;
`;

const Wrapper = styled.div`
    margin-top: 30px;
    padding-top: 8px;
`;

const SuggestedLabel = styled.div`
    color: ${({ theme }) => theme.color.fandom_dark_gray};
    font-size: ${({ theme }) => theme.font_size.xs};
`;

function SuggestedTags({
    className,
    tags,
    onClick,
}) {
    if (Array.isArray(tags) && tags.length > 0) {
        return (
            <Wrapper className={className}>
                <SuggestedLabel>Suggested</SuggestedLabel>
                {tags.map(({ id, title }) => (
                    <Tag
                        key={id}
                        onClick={() => onClick(id)}
                        tag={title}
                        secondary
                    />
                ))}
            </Wrapper>
        );
    }

    return null;
}

SuggestedTags.propTypes = {
    /** Extra class name */
    className: PropTypes.string,
    onClick: PropTypes.func,
    tags: PropTypes.arrayOf(TagShape),
};

SuggestedTags.defaultProps = {
    className: '',
    onClick: noop,
    tags: null,
};

export default SuggestedTags;
