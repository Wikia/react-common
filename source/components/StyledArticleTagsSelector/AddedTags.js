import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import StyledTag from '../StyledTag';

import TagShape from './TagShape';

const Tag = styled(StyledTag)`
    margin-right: 10px;
    margin-top: 10px;
`;

const Wrapper = styled.div`
    margin-bottom: 30px;
    overflow-x: auto;
`;

function AddedTags({
    className,
    tags,
    onRemove,
}) {
    if (Array.isArray(tags) && tags.length > 0) {
        return (
            <Wrapper className={className}>
                {tags.map(({ id, title }) => (
                    <Tag
                        key={id}
                        onRemove={onRemove}
                        tag={title}
                        removable
                    />
                ))}
            </Wrapper>
        );
    }

    return null;
}

AddedTags.propTypes = {
    /** Extra class name */
    className: PropTypes.string,
    onRemove: PropTypes.func,
    tags: PropTypes.arrayOf(TagShape),
};

AddedTags.defaultProps = {
    className: '',
    onRemove: null,
    tags: null,
};

export default AddedTags;
