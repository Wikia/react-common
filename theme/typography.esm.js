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

export { FONT_FAMILY, FONT_SIZES, FONT_SIZES_PX, FONT_WEIGHTS, LINE_HEIGHTS };
