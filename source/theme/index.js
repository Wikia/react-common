import {
    BREAKPOINTS,
    BREAKPOINTS_AVAILABLE_WIDTH,
    BREAKPOINTS_AVAILABLE_WIDTH_PX,
    CONTENT_WELL_MARGIN,
    CONTENT_WELL_MARGIN_PX,
    MEDIAQUERIES,
} from './breakpoints';

import {
    COLORS,
    COLORS_LIGHT_THEME,
    COLORS_DARK_THEME,
} from './colors';

import {
    FONT_FAMILY,
    FONT_SIZES,
    FONT_SIZES_PX,
    FONT_WEIGHTS,
    LINE_HEIGHTS,
} from './typography';

/**
 * THEME OBJECT
 */
const theme = Object.freeze({
    breakpoint_values: BREAKPOINTS,
    breakpoint_available_width: BREAKPOINTS_AVAILABLE_WIDTH_PX,
    breakpoint_available_width_values: BREAKPOINTS_AVAILABLE_WIDTH,
    color: COLORS,
    color_theme: {
        light: COLORS_LIGHT_THEME,
        dark: COLORS_DARK_THEME,
    },
    content_well_margin: CONTENT_WELL_MARGIN_PX,
    content_well_margin_value: CONTENT_WELL_MARGIN,
    font_family: FONT_FAMILY,
    font_size: FONT_SIZES_PX,
    font_size_value: FONT_SIZES,
    font_weight: FONT_WEIGHTS,
    line_height: LINE_HEIGHTS,
    media: MEDIAQUERIES,
});

// can be used by `ThemeProvider`
export default theme;
