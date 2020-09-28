import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import 'color';

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

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

var ellipsis = function ellipsis() {
  return css(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    list-style-type: none;\n    margin: 0;\n    padding: 7px 18px;\n\n    ", "\n\n    > li {\n        font-size: ", ";\n        font-weight: normal;\n        line-height: 1em;\n        padding: ", "px 0;\n\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var LIST_VERTICAL_PADDING = 11;
var StyledList = styled.ul(_templateObject(), function (_ref) {
  var bigItems = _ref.bigItems;
  return bigItems && css(["padding-bottom:2px;padding-top:2px;"]);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.font_size.s;
}, LIST_VERTICAL_PADDING, function (_ref3) {
  var bigItems = _ref3.bigItems;
  return bigItems && css(["font-size:", ";padding-bottom:16px;padding-top:16px;"], function (_ref4) {
    var theme = _ref4.theme;
    return theme.font_size.base;
  });
}, function (_ref5) {
  var boldItems = _ref5.boldItems;
  return boldItems && css(["font-weight:bold;"]);
}, function (_ref6) {
  var linesBetween = _ref6.linesBetween,
      theme = _ref6.theme;
  return linesBetween && css(["border-bottom:solid 1px ", ";&:last-child{border:0;}"], theme.color.fandom_light_gray);
}, function (_ref7) {
  var hasEllipsis = _ref7.hasEllipsis;
  return hasEllipsis && css(["", " > a{", "}"], ellipsis(), ellipsis());
}, function (_ref8) {
  var isLinked = _ref8.isLinked;
  return isLinked && css(["padding:0;> a{display:block;padding:", "px 0;}"], LIST_VERTICAL_PADDING);
});
StyledList.propTypes = {
  /** Whether or not the list contains big items */
  bigItems: PropTypes.bool,

  /** Whether or not list items should be bold */
  boldItems: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hasEllipsis: PropTypes.bool,

  /** Whether or not items are links */
  isLinked: PropTypes.bool,

  /** Whether or not show line separator between items */
  linesBetween: PropTypes.bool
};
StyledList.defaultProps = {
  bigItems: false,
  boldItems: false,
  children: null,
  className: '',
  hasEllipsis: false,
  isLinked: false,
  linesBetween: false
};

export default StyledList;
export { LIST_VERTICAL_PADDING };
