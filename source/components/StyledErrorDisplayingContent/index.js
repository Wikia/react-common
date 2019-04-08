import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: #fff;
    padding: 10px;
`;

const Message = styled.div`
    align-content: center;
    color: red;
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    padding: 10px;
`;

/**
 * A standard error message when content cannot be displayed.
 */
function StyledErrorDisplayingContent() {
    return (
        <Wrapper>
            <Message>
                Sorry, we’re having trouble displaying this content right now.
            </Message>
        </Wrapper>
    );
}

export default StyledErrorDisplayingContent;
