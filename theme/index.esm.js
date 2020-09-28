/**
 * BREAKPOINTS:
 * @see https://github.com/Wikia/design-system/blob/master/style-guide/styles/wds-variables/_wds-breakpoints.scss
 */
var BREAKPOINTS = Object.freeze({
  small: 0,
  medium: 768,
  large: 1024,
  xlarge: 1280,
  xxlarge: 1500
});

var mediaQueryString = function mediaQueryString(query) {
  return "only screen and ".concat(query);
};

var MEDIAQUERIES = Object.freeze({
  // up breakpoints
  small_up: 'only screen',
  medium_up: mediaQueryString("(min-width: ".concat(BREAKPOINTS.medium, "px)")),
  large_up: mediaQueryString("(min-width: ".concat(BREAKPOINTS.large, "px)")),
  xlarge_up: mediaQueryString("(min-width: ".concat(BREAKPOINTS.xlarge, "px)")),
  xxlarge_up: mediaQueryString("(min-width: ".concat(BREAKPOINTS.xxlarge, "px)")),
  // down breakpoints
  small_down: mediaQueryString("(max-width: ".concat(BREAKPOINTS.medium - 1, "px)")),
  medium_down: mediaQueryString("(max-width: ".concat(BREAKPOINTS.large - 1, "px)")),
  large_down: mediaQueryString("(max-width: ".concat(BREAKPOINTS.xlarge - 1, "px)")),
  xlarge_down: mediaQueryString("(max-width: ".concat(BREAKPOINTS.xxlarge - 1, "px)")),
  xxlarge_down: 'only screen',
  // only breakpoints
  small_only: mediaQueryString("(max-width: ".concat(BREAKPOINTS.medium - 1, "px)")),
  medium_only: mediaQueryString("(min-width: ".concat(BREAKPOINTS.medium, "px) and (max-width: ").concat(BREAKPOINTS.large - 1, "px)")),
  large_only: mediaQueryString("(min-width: ".concat(BREAKPOINTS.large, "px) and (max-width: ").concat(BREAKPOINTS.xlarge - 1, "px)")),
  xlarge_only: mediaQueryString("(min-width: ".concat(BREAKPOINTS.xlarge, "px) and (max-width: ").concat(BREAKPOINTS.xxlarge - 1, "px)")),
  xxlarge_only: mediaQueryString("(min-width: ".concat(BREAKPOINTS.xxlarge, "px)"))
});
var CONTENT_WELL_MARGIN = 18;
var CONTENT_WELL_MARGIN_PX = "".concat(CONTENT_WELL_MARGIN, "px");
var BREAKPOINTS_AVAILABLE_WIDTH = Object.freeze({
  medium: BREAKPOINTS.medium - 2 * CONTENT_WELL_MARGIN,
  large: BREAKPOINTS.large - 2 * CONTENT_WELL_MARGIN,
  xlarge: BREAKPOINTS.xlarge - 2 * CONTENT_WELL_MARGIN,
  xxlarge: BREAKPOINTS.xxlarge - 2 * CONTENT_WELL_MARGIN
});
var BREAKPOINTS_AVAILABLE_WIDTH_PX = Object.freeze({
  medium: "".concat(BREAKPOINTS_AVAILABLE_WIDTH.medium, "px"),
  large: "".concat(BREAKPOINTS_AVAILABLE_WIDTH.large, "px"),
  xlarge: "".concat(BREAKPOINTS_AVAILABLE_WIDTH.xlarge, "px"),
  xxlarge: "".concat(BREAKPOINTS_AVAILABLE_WIDTH.xxlarge, "px")
});

/**
 * COLORS
 * @see https://github.com/Wikia/design-system/blob/master/style-guide/styles/wds-variables/_colors.scss
 */
var COLORS = Object.freeze({
  // ## Corporate Colors
  blue_gray: '#c5ced9',
  dark_blue_gray: '#39424d',
  dark_blue: '#092344',
  faint_blue_gray: '#f2f6fa',
  light_blue_gray: '#e6ebf2',
  light_blue: '#1a5eb8',
  slate_gray: '#656e78',
  // ## Fandom Corporate Colors
  link: '#00b7e0',
  // ## Vertical Colors
  books: '#ff7f26',
  comics: '#ff5400',
  games: '#94d11f',
  lifestyle: '#ffd000',
  movies: '#09d3bf',
  music: '#c819ad',
  tv: '#00b7e0',
  // ## Alerts
  alert: '#e81a3f',
  message: '#008c8f',
  success: '#018c30',
  warning: '#de5e33',
  // ## Social network colors
  social_facebook: '#3b5998',
  social_googleplus: '#dd4b39',
  social_instagram: '#e02d69',
  social_line: '#00c300',
  social_linkedin: '#0077b5',
  social_meneame: '#ff6400',
  social_nk: '#4077a7',
  social_odnoklassniki: '#f96900',
  social_reddit: '#ff4500',
  social_tumblr: '#34465d',
  social_twitter: '#1da1f2',
  social_vkontakte: '#587ca3',
  social_wykop: '#fb803f',
  social_weibo: '#ff8140',
  social_youtube: '#cd201f',
  // # Theming Colors
  // ## Color Names
  black: '#1a1a1a',
  dark_gray: '#333',
  faint_gray: '#ccc',
  gold: '#e3bd00',
  light_gray: '#999',
  medium_gray: '#666',
  mist_gray: '#e6e6e6',
  night_sky: '#262626',
  off_white: '#f6f6f6',
  white: '#fff',
  // # Fandom 2.0 Colors
  // ## Color Names
  fandom_aqua: '#00d6d6',
  fandom_black: '#0e191a',
  fandom_button_background: '#00cdd0',
  fandom_coral: '#ff776d',
  fandom_dark_gray: '#5f7a7b',
  fandom_light_gray: '#f2f5f5',
  fandom_link: '#088488',
  fandom_link_hover: '#005252',
  fandom_mid_light_gray: '#bed1cf',
  fandom_middle_gray: '#7f9998',
  fandom_navy: '#002a32',
  fandom_purple: '#460084',
  fandom_red: '#ee1a41',
  fandom_warm_gray: '#eeecdc',
  fandom_yellow: '#dfec24'
});
var COLORS_LIGHT_THEME = Object.freeze({
  // ## Light Theme
  c1: COLORS.white,
  c2: COLORS.off_white,
  c3: COLORS.mist_gray,
  c4: COLORS.faint_gray,
  c5: COLORS.gray,
  c6: COLORS.dark_gray,
  c7: COLORS.medium_gray,
  c8: COLORS.gold
});
var COLORS_DARK_THEME = Object.freeze({
  // ## Dark Theme
  c1: COLORS.night_sky,
  c2: COLORS.black,
  c3: COLORS.gray,
  c4: COLORS.medium_gray,
  c5: COLORS.light_gray,
  c6: COLORS.faint_gray,
  c7: COLORS.white,
  c8: COLORS.gold
});

/**
 * Typography
 * @see https://github.com/Wikia/design-system/blob/master/style-guide/styles/wds-variables/_typography.scss
 */
var FONT_FAMILY = 'Rubik, Helvetica, Arial, sans-serif';
var LINE_HEIGHTS = Object.freeze({
  none: 1,
  tight: 1.25,
  normal: 1.5,
  loose: 1.75
});
var FONT_WEIGHTS = Object.freeze({
  light: 300,
  normal: 400,
  medium: 500,
  bold: 700,
  black: 900
});
var FONT_SIZES = Object.freeze({
  xxs: 10,
  xs: 12,
  s: 14,
  base: 16,
  l: 18,
  xl: 24,
  xxl: 28,
  xxxl: 36,
  xxxxl: 52
});
var FONT_SIZES_PX = Object.freeze({
  xxs: '10px',
  xs: '12px',
  s: '14px',
  base: '16px',
  l: '18px',
  xl: '24px',
  xxl: '28px',
  xxxl: '36px',
  xxxxl: '52px'
});

/**
 * THEME OBJECT
 */

var theme = Object.freeze({
  breakpoint_values: BREAKPOINTS,
  breakpoint_available_width: BREAKPOINTS_AVAILABLE_WIDTH_PX,
  breakpoint_available_width_values: BREAKPOINTS_AVAILABLE_WIDTH,
  color: COLORS,
  color_theme: {
    light: COLORS_LIGHT_THEME,
    dark: COLORS_DARK_THEME
  },
  content_well_margin: CONTENT_WELL_MARGIN_PX,
  content_well_margin_value: CONTENT_WELL_MARGIN,
  font_family: FONT_FAMILY,
  font_size: FONT_SIZES_PX,
  font_size_value: FONT_SIZES,
  font_weight: FONT_WEIGHTS,
  line_height: LINE_HEIGHTS,
  media: MEDIAQUERIES
}); // can be used by `ThemeProvider`

export default theme;
