import React from 'react';
import styled from 'styled-components';

const InComponentWrapper = styled.div`
    background: #fff;
    padding: 10px;
`;

const Heading = styled.h4`
    align-content: center;
    color: red;
    display: flex;
    margin-top: 0;
    margin-bottom: 0;
    padding: 10px;
`;

export default function DefaultFallbackComponent() {
    return (
        <InComponentWrapper>
            <Heading>
                Sorry, we’re having trouble displaying this content right now
            </Heading>
        </InComponentWrapper>
    );
}
