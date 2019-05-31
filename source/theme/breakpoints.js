/**
 * BREAKPOINTS:
 * @see https://github.com/Wikia/design-system/blob/master/style-guide/styles/wds-variables/_wds-breakpoints.scss
 */

export const BREAKPOINTS = Object.freeze({
    small: 0,
    medium: 768,
    large: 1024,
    xlarge: 1280,
    xxlarge: 1500,
});

const mediaQueryString = query => `only screen and ${query}`;

export const MEDIAQUERIES = Object.freeze({
    // up breakpoints
    small_up: 'only screen',
    medium_up: mediaQueryString(`(min-width: ${BREAKPOINTS.medium}px)`),
    large_up: mediaQueryString(`(min-width: ${BREAKPOINTS.large}px)`),
    xlarge_up: mediaQueryString(`(min-width: ${BREAKPOINTS.xlarge}px)`),
    xxlarge_up: mediaQueryString(`(min-width: ${BREAKPOINTS.xxlarge}px)`),
    // down breakpoints
    small_down: mediaQueryString(`(max-width: ${BREAKPOINTS.medium - 1}px)`),
    medium_down: mediaQueryString(`(max-width: ${BREAKPOINTS.large - 1}px)`),
    large_down: mediaQueryString(`(max-width: ${BREAKPOINTS.xlarge - 1}px)`),
    xlarge_down: mediaQueryString(`(max-width: ${BREAKPOINTS.xxlarge - 1}px)`),
    xxlarge_down: 'only screen',
    // only breakpoints
    small_only: mediaQueryString(`(max-width: ${BREAKPOINTS.medium - 1}px)`),
    medium_only: mediaQueryString(`(min-width: ${BREAKPOINTS.medium}px) and (max-width: ${BREAKPOINTS.large - 1}px)`),
    large_only: mediaQueryString(`(min-width: ${BREAKPOINTS.large}px) and (max-width: ${BREAKPOINTS.xlarge - 1}px)`),
    xlarge_only: mediaQueryString(`(min-width: ${BREAKPOINTS.xlarge}px) and (max-width: ${BREAKPOINTS.xxlarge - 1}px)`),
    xxlarge_only: mediaQueryString(`(min-width: ${BREAKPOINTS.xxlarge}px)`),
});

export const CONTENT_WELL_MARGIN = 18;
export const CONTENT_WELL_MARGIN_PX = `${CONTENT_WELL_MARGIN}px`;

export const BREAKPOINTS_AVAILABLE_WIDTH = Object.freeze({
    medium: BREAKPOINTS.medium - 2 * CONTENT_WELL_MARGIN,
    large: BREAKPOINTS.large - 2 * CONTENT_WELL_MARGIN,
    xlarge: BREAKPOINTS.xlarge - 2 * CONTENT_WELL_MARGIN,
    xxlarge: BREAKPOINTS.xxlarge - 2 * CONTENT_WELL_MARGIN,
});

export const BREAKPOINTS_AVAILABLE_WIDTH_PX = Object.freeze({
    medium: `${BREAKPOINTS_AVAILABLE_WIDTH.medium}px`,
    large: `${BREAKPOINTS_AVAILABLE_WIDTH.large}px`,
    xlarge: `${BREAKPOINTS_AVAILABLE_WIDTH.xlarge}px`,
    xxlarge: `${BREAKPOINTS_AVAILABLE_WIDTH.xxlarge}px`,
});
