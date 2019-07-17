import { css } from 'styled-components';
import Color from 'color';

import { COLORS } from '../theme/colors';

export const MIN_LUMINOSITY = 128;

// sqrt( .299 R2 + .587 G2 + .114 B2 )
export const calculateBrightness = (r, g, b) => (
    Math.sqrt(0.299 * (r ** 2) + 0.587 * (g ** 2) + 0.114 * (b ** 2))
);

export const isDark = color => (
    calculateBrightness(Color(color).rgb().array()) < MIN_LUMINOSITY
);
export const isLight = color => !isDark(color);


export const ellipsis = () => css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

export const borderRadius = (size = 4) => css`
    border-radius: ${size}px;
`;

export const isRightAligned = () => css`
    left: auto;
    right: 0;
    transform: none;
}
`;

export const colorWithAlpha = (color, alpha) => Color(color).alpha(alpha).string();

/* scrollable-list.scss */
export const scrollableList = (maxHeight, colorBackground = COLORS.white) => {
    const colorShadow = isLight(colorBackground)
        ? colorWithAlpha(COLORS.black, 0.12)
        : colorWithAlpha(COLORS.white, 0.4);

    return css`
        background: {
            image: radial-gradient(farthest-side at 50% 0, ${colorShadow}, transparent),
            radial-gradient(farthest-side at 50% 100%, ${colorShadow}, transparent);
            position: 0 0, 0 100%;
            repeat: no-repeat;
            size: 100% 9px;
        }

        max-height: ${maxHeight};
        overflow-y: auto;
        position: relative;
        z-index: 1;

        &::after,
        &::before {
            background-color: ${colorBackground};
            content: '';
            display: block;
            height: 30px;
            margin: 0 0 -30px;
            position: relative;
            z-index: -1;
        }

        &::after {
            background-color: ${colorBackground};
            margin: -29px 0 0;
        }
    `;
};
