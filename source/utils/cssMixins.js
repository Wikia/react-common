import { css } from 'styled-components';

export const ellipsis = () => css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const borderRadius = (size = 4) => css`
    border-radius: ${size}px;
`;
