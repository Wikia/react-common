'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var PropTypes = _interopDefault(require('prop-types'));
var classNames = _interopDefault(require('classnames'));
var Color = _interopDefault(require('color'));
var IconDropdownTiny = _interopDefault(require('@wikia/react-common/icons/IconDropdownTiny'));
var IconMenuControlTiny = _interopDefault(require('@wikia/react-common/icons/IconMenuControlTiny'));

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
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

var MIN_LUMINOSITY = 128; // sqrt( .299 R2 + .587 G2 + .114 B2 )

var calculateBrightness = function calculateBrightness(r, g, b) {
  return Math.sqrt(0.299 * Math.pow(r, 2) + 0.587 * Math.pow(g, 2) + 0.114 * Math.pow(b, 2));
};
var isDark = function isDark(color) {
  return calculateBrightness(Color(color).rgb().array()) < MIN_LUMINOSITY;
};
var isLight = function isLight(color) {
  return !isDark(color);
};
var ellipsis = function ellipsis() {
  return styled.css(["overflow:hidden;text-overflow:ellipsis;white-space:nowrap;"]);
};
var borderRadius = function borderRadius() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 4;
  return styled.css(["border-radius:", "px;"], size);
};
var isRightAligned = function isRightAligned() {
  return styled.css(["left:auto;right:0;transform:none;}"]);
};
var colorWithAlpha = function colorWithAlpha(color, alpha) {
  return Color(color).alpha(alpha).string();
};
/* scrollable-list.scss */

var scrollableList = function scrollableList(maxHeight) {
  var colorBackground = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : COLORS.white;
  var colorShadow = isLight(colorBackground) ? colorWithAlpha(COLORS.black, 0.12) : colorWithAlpha(COLORS.white, 0.4);
  return styled.css(["background:{image:radial-gradient(farthest-side at 50% 0,", ",transparent),radial-gradient(farthest-side at 50% 100%,", ",transparent);position:0 0,0 100%;repeat:no-repeat;size:100% 9px;}max-height:", ";overflow-y:auto;position:relative;z-index:1;&::after,&::before{background-color:", ";content:'';display:block;height:30px;margin:0 0 -30px;position:relative;z-index:-1;}&::after{background-color:", ";margin:-29px 0 0;}"], colorShadow, colorShadow, maxHeight, colorBackground, colorBackground);
};

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    list-style-type: none;\n    margin: 0;\n    padding: 7px 18px;\n\n    ", "\n\n    > li {\n        font-size: ", ";\n        font-weight: normal;\n        line-height: 1em;\n        padding: ", "px 0;\n\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n\n        ", "\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var LIST_VERTICAL_PADDING = 11;
var StyledList = styled__default.ul(_templateObject(), function (_ref) {
  var bigItems = _ref.bigItems;
  return bigItems && styled.css(["padding-bottom:2px;padding-top:2px;"]);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.font_size.s;
}, LIST_VERTICAL_PADDING, function (_ref3) {
  var bigItems = _ref3.bigItems;
  return bigItems && styled.css(["font-size:", ";padding-bottom:16px;padding-top:16px;"], function (_ref4) {
    var theme = _ref4.theme;
    return theme.font_size.base;
  });
}, function (_ref5) {
  var boldItems = _ref5.boldItems;
  return boldItems && styled.css(["font-weight:bold;"]);
}, function (_ref6) {
  var linesBetween = _ref6.linesBetween,
      theme = _ref6.theme;
  return linesBetween && styled.css(["border-bottom:solid 1px ", ";&:last-child{border:0;}"], theme.color.fandom_light_gray);
}, function (_ref7) {
  var hasEllipsis = _ref7.hasEllipsis;
  return hasEllipsis && styled.css(["", " > a{", "}"], ellipsis(), ellipsis());
}, function (_ref8) {
  var isLinked = _ref8.isLinked;
  return isLinked && styled.css(["padding:0;> a{display:block;padding:", "px 0;}"], LIST_VERTICAL_PADDING);
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

function getViewportSize() {
  return {
    width: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    height: Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
  };
}

function isTouchDevice() {
  return typeof window !== 'undefined' && 'ontouchstart' in window;
}

var Element = typeof global.Element === 'undefined' ? null : global.Element;
var refPropType = PropTypes.shape({
  current: PropTypes.instanceOf(Element)
});

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n    /* this needs to be empty - all the styles are defined in index.js */\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
/**
 * Basic DropdownContent component
 */

var DropdownContent = styled__default(function (_ref) {
  var elementRef = _ref.elementRef,
      props = _objectWithoutProperties(_ref, ["elementRef"]);

  return React__default.createElement("div", _extends({
    ref: elementRef
  }, props));
})(_templateObject$1());
DropdownContent.propTypes = {
  /**
   * React Component to display as content
   */
  children: PropTypes.node,

  /**
   * Additional class name
   */
  className: PropTypes.string,

  /**
   * React ref to the content DOM element
   */
  elementRef: refPropType.isRequired
};
DropdownContent.defaultProps = {
  children: null,
  className: ''
};

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    /* this needs to be empty - all the styles are defined in index.js */\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject$2() {
  var data = _taggedTemplateLiteral(["\n    color: inherit;\n    fill: currentColor;\n    height: 12px;\n    width: 12px;\n"]);

  _templateObject$2 = function _templateObject() {
    return data;
  };

  return data;
}
var ChevronIcon = styled__default(IconMenuControlTiny)(_templateObject$2());

function getToggleIcon(iconName) {
  return iconName === 'dropdown-tiny' ? React__default.createElement(ChevronIcon, {
    as: IconDropdownTiny
  }) : React__default.createElement(ChevronIcon, null);
}

function getToggleContentComponent(toggleContent, iconName) {
  var icon = getToggleIcon(iconName);

  if (typeof toggleContent === 'function') {
    return toggleContent(icon);
  }

  if (typeof toggleContent === 'string') {
    return React__default.createElement(React__default.Fragment, null, React__default.createElement("span", null, toggleContent), icon);
  }

  return toggleContent;
}
/**
 * Basic DropdownToggle component
 */


function DropdownToggle(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      attrs = _ref.attrs,
      toggleContent = _ref.toggleContent,
      iconName = _ref.iconName;
  var Component = attrs.href ? 'a' : 'div';
  return React__default.createElement(Component, _extends({
    className: className,
    onClick: onClick
  }, attrs, {
    role: "button"
  }), getToggleContentComponent(toggleContent, iconName));
}

DropdownToggle.propTypes = {
  /**
   * HTML attributes
   */
  attrs: PropTypes.shape({
    href: PropTypes.string
  }),

  /**
   * HTML classes
   */
  className: PropTypes.string,

  /**
   *  The icon to use for the dropdown chevron
   */
  iconName: PropTypes.oneOf(['dropdown-tiny', 'menu-control-tiny']).isRequired,

  /**
   * Callback when toggle is clicked
   */
  onClick: PropTypes.func.isRequired,

  /**
   * Content of the toggle
   */
  toggleContent: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]).isRequired
};
DropdownToggle.defaultProps = {
  className: '',
  attrs: {}
};
var DropdownToggle$1 = styled__default(DropdownToggle)(_templateObject2());

var Z_INDEX = 1;
var BORDER_WIDTH = 1;
var DROPDOWN_HEIGHT = 270;
var DROPDOWN_PADDING = 18;
var LIST_VERTICAL_PADDING$1 = LIST_VERTICAL_PADDING;

function _templateObject$3() {
  var data = _taggedTemplateLiteral(["\n    display: inline-block;\n    position: relative;\n\n    ", " {\n        cursor: default;\n        position: relative;\n    }\n\n    ", " {\n        background-color: ", ";\n        border: ", "px solid ", ";\n        display: none;\n        left: 50%;\n        /* it's for long dropdowns toggles, to make sure dropdown content is always below the nodge */\n        min-width: 70%;\n        /* we assume that there will be regular size .wds-list inside the dropdown content */\n        padding: ", "px 0;\n        position: absolute;\n        top: 100%;\n        transform: translateX(-50%);\n        z-index: ", ";\n\n        ", "\n\n        .dropdown-right-aligned > & {\n            ", "\n        }\n\n        .dropdown-left-aligned > & {\n            left: 0;\n            transform: none;\n        }\n\n        .has-shadow > & {\n            border: 0;\n            box-shadow: 0 0 10px ", ";\n        }\n\n        .has-dark-shadow > & {\n            border: 0;\n            box-shadow: 0 0 10px ", ";\n        }\n\n        .scrollable-list > & {\n            ", " {\n                ", "\n            }\n        }\n\n        :not(.scrollable-list) > a {\n            ", " {\n                position: relative;\n            }\n        }\n    }\n\n    &::before, &::after {\n        bottom: -", "px;\n        content: '';\n        display: none;\n        height: 0;\n        left: 50%;\n        pointer-events: none;\n        position: absolute;\n        width: 0;\n        z-index: ", ";\n    }\n\n    &::after {\n        border: 8px solid transparent;\n        border-bottom-color: ", ";\n        margin-left: -8px;\n    }\n\n    &::before {\n        border: 9px solid transparent;\n        border-bottom-color: ", ";\n        margin-left: -9px;\n    }\n\n    &.is-active,\n    &:not(.is-touch-device):not(.is-not-hoverable):hover {\n        &:not(.no-chevron) {\n            &::before, &::after {\n                display: block;\n            }\n        }\n\n        & > ", " {\n            display: inline-block;\n        }\n\n        & > ", " > ", " {\n            transform: rotate(180deg);\n        }\n\n        &.has-shadow, &.has-dark-shadow {\n            &::before {\n                display: none;\n            }\n        }\n    }\n\n    &.is-flipped {\n        &::before, &::after {\n            bottom: unset;\n            top: -", "px;\n        }\n\n        &::before {\n            border-bottom-color: transparent;\n            border-top-color: ", ";\n        }\n\n        &::after {\n            border-bottom-color: transparent;\n            border-top-color: ", ";\n        }\n\n        ", " {\n            bottom: 100%;\n            top: unset;\n        }\n    }\n\n    &.is-level-2 {\n        margin-right: 0;\n\n        > a {\n            padding-right: ", "px\n            display: flex;\n            justify-content: space-between;\n        }\n\n        &.is-active > ", " > ", " {\n            transform: rotate(-90deg);\n            margin-left: 18px;\n        }\n\n        &.is-sticked-to-parent {\n            position: relative;\n\n            &.is-level-2 ", " {\n                top: auto;\n                bottom: -", "px;\n            }\n        }\n\n        .is-level-2 ", " {\n            background-color: ", ";\n            border: ", "px solid ", ";\n            display: none;\n            left: 100%;\n            padding: ", "px 0;\n            position: absolute;\n            top: -", "px;\n\n            ", "\n\n            .wds-list.wds-is-linked > li > a {\n                font-size: ", ";\n            }\n        }\n\n        &.is-active,\n        &:not(.is-touch-device):hover {\n            .is-level-2 ", " {\n                display: block;\n            }\n        }\n    }\n"]);

  _templateObject$3 = function _templateObject() {
    return data;
  };

  return data;
}
var DropdownComponent = styled__default.div(_templateObject$3(), DropdownToggle$1, DropdownContent, function (_ref) {
  var theme = _ref.theme;
  return theme.color.white;
}, BORDER_WIDTH, function (_ref2) {
  var theme = _ref2.theme;
  return theme.color.faint_gray;
}, DROPDOWN_PADDING - LIST_VERTICAL_PADDING$1, Z_INDEX, borderRadius(), isRightAligned(), function (_ref3) {
  var theme = _ref3.theme;
  return colorWithAlpha(theme.color.black, 0.2);
}, function (_ref4) {
  var theme = _ref4.theme;
  return colorWithAlpha(theme.color.black, 0.3);
}, StyledList, scrollableList("".concat(DROPDOWN_HEIGHT, "px")), StyledList, BORDER_WIDTH, Z_INDEX + 1, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.white;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.faint_gray;
}, DropdownContent, DropdownToggle$1, ChevronIcon, BORDER_WIDTH, function (_ref7) {
  var theme = _ref7.theme;
  return theme.color.faint_gray;
}, function (_ref8) {
  var theme = _ref8.theme;
  return theme.color.white;
}, DropdownContent, DROPDOWN_PADDING, DropdownToggle$1, ChevronIcon, DropdownContent, DROPDOWN_PADDING - LIST_VERTICAL_PADDING$1 + BORDER_WIDTH, DropdownContent, function (_ref9) {
  var theme = _ref9.theme;
  return theme.color.white;
}, BORDER_WIDTH, function (_ref10) {
  var theme = _ref10.theme;
  return theme.color.faint_gray;
}, DROPDOWN_PADDING - LIST_VERTICAL_PADDING$1, DROPDOWN_PADDING - LIST_VERTICAL_PADDING$1 + BORDER_WIDTH, borderRadius(), function (_ref11) {
  var theme = _ref11.theme;
  return theme.font_size.xxs;
}, DropdownContent);

function StyledDropdown(_ref12) {
  var canFlip = _ref12.canFlip,
      children = _ref12.children,
      className = _ref12.className,
      contentClassName = _ref12.contentClassName,
      contentScrollable = _ref12.contentScrollable,
      dropdownLeftAligned = _ref12.dropdownLeftAligned,
      dropdownRightAligned = _ref12.dropdownRightAligned,
      hasDarkShadow = _ref12.hasDarkShadow,
      hasShadow = _ref12.hasShadow,
      iconName = _ref12.iconName,
      isActive = _ref12.isActive,
      isLevel2 = _ref12.isLevel2,
      isNotHoverable = _ref12.isNotHoverable,
      isStickedToParent = _ref12.isStickedToParent,
      noChevron = _ref12.noChevron,
      toggle = _ref12.toggle,
      toggleAttrs = _ref12.toggleAttrs,
      toggleClassName = _ref12.toggleClassName,
      onClose = _ref12.onClose,
      onMouseEnter = _ref12.onMouseEnter;

  var _useState = React.useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isClicked = _useState2[0],
      setClicked = _useState2[1];

  var _useState3 = React.useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isFlipped = _useState4[0],
      setFlipped = _useState4[1];

  var contentElementRef = React.useRef(null);

  var handleClick =
  /* istanbul ignore next */
  function handleClick(shouldPreventDefault, event) {
    if (isTouchDevice()) {
      setClicked(!isClicked);

      if (shouldPreventDefault) {
        event.preventDefault();
        event.stopPropagation();
      }

      if (isClicked === true && typeof onClose === 'function') {
        onClose();
      }
    }
  };

  var onClickHandler =
  /* istanbul ignore next */
  function onClickHandler() {
    return handleClick(false);
  };

  var onToggleClickedHandler =
  /* istanbul ignore next */
  function onToggleClickedHandler(event) {
    return handleClick(true, event);
  };

  var onMouseLeaveHandler =
  /* istanbul ignore next */
  function onMouseLeaveHandler() {
    if (isTouchDevice()) {
      setClicked(false);
    }

    if (canFlip && !isLevel2) {
      setFlipped(false);
    }
  };

  var onMouseEnterHandler =
  /* istanbul ignore next */
  function onMouseEnterHandler(event) {
    var contentElement = contentElementRef.current;

    if (canFlip && !isLevel2 && contentElement) {
      var contentElementBoundingRect = contentElement.getBoundingClientRect();
      var shouldFlip = contentElementBoundingRect.bottom > getViewportSize().height;
      setFlipped(shouldFlip);
    }

    if (onMouseEnter) {
      onMouseEnter(event);
    }
  };

  var allClassNames = classNames({
    'is-active': isClicked || isActive,
    'has-shadow': hasShadow,
    'no-chevron': noChevron,
    'has-dark-shadow': hasDarkShadow,
    'is-level-2': isLevel2,
    'is-touch-device': isTouchDevice(),
    'is-sticked-to-parent': isStickedToParent,
    'is-not-hoverable': isNotHoverable,
    'dropdown-left-aligned': dropdownLeftAligned,
    'dropdown-right-aligned': dropdownRightAligned,
    'content-scrollable': contentScrollable,
    'is-flipped': isFlipped
  }, className);
  return React__default.createElement(DropdownComponent, {
    as: isLevel2 ? 'li' : 'div',
    className: allClassNames,
    onClick: onClickHandler,
    onMouseEnter: onMouseEnterHandler,
    onMouseLeave: onMouseLeaveHandler
  }, React__default.createElement(DropdownToggle$1, {
    attrs: toggleAttrs,
    className: toggleClassName,
    iconName: iconName,
    isLevel2: isLevel2,
    isTouchDevice: isTouchDevice(),
    onClick: onToggleClickedHandler,
    toggleContent: toggle
  }), React__default.createElement(DropdownContent, {
    className: contentClassName,
    elementRef: contentElementRef
  }, children));
}

StyledDropdown.propTypes = {
  /**
   * Whether or nor not dropdown should automatically flip when it's near the bottom of the viewport
   */
  canFlip: PropTypes.bool,

  /**
   * React Component to display as the Dropdown Content
   */
  children: PropTypes.node,

  /**
   * Additional class name
   */
  className: PropTypes.string,

  /**
   * HTML classes to add to content element
   */
  contentClassName: PropTypes.string,

  /**
   * Should dropdown content be scrollable
   */
  contentScrollable: PropTypes.bool,

  /**
   * Should dropdown content be left-aligned with the dropdown toggle
   */
  dropdownLeftAligned: PropTypes.bool,

  /**
   * Should dropdown content be right-aligned with the dropdown toggle
   */
  dropdownRightAligned: PropTypes.bool,

  /**
   * Whether or not dropdown should have a drop shadow (darker than the one produced by hasShadow)
   */
  hasDarkShadow: PropTypes.bool,

  /**
   * Whether or not dropdown should have a slight drop shadow
   */
  hasShadow: PropTypes.bool,

  /**
   *  The icon to use for the dropdown chevron
   */
  iconName: PropTypes.oneOf(['dropdown-tiny', 'menu-control-tiny']),

  /**
   * is active
   */
  isActive: PropTypes.bool,

  /**
   * Is it a nested dropdown
   */
  isLevel2: PropTypes.bool,

  /**
   * If dropdown should not be hoverable
   */
  isNotHoverable: PropTypes.bool,

  /**
   * if the top of nested dropdown content should be positioned at the same height as toggle
   */
  isStickedToParent: PropTypes.bool,

  /**
   * Should chevron on the top of dropdown content be hidden
   */
  noChevron: PropTypes.bool,

  /**
   * Function to call when dropdown will be closed
   */
  onClose: PropTypes.func,

  /**
   * Function to call when dropdown will be hovered
   */
  onMouseEnter: PropTypes.func,

  /**
   * React Component to display as a dropdown toggle
   */
  toggle: PropTypes.oneOfType([PropTypes.func, PropTypes.string, PropTypes.node]).isRequired,

  /**
   * HTML attributes to add to toggle
   */
  toggleAttrs: PropTypes.shape({
    href: PropTypes.string
  }),

  /**
   * HTML classes to add to toggle
   */
  toggleClassName: PropTypes.string
};
StyledDropdown.defaultProps = {
  canFlip: false,
  children: null,
  className: '',
  contentClassName: '',
  contentScrollable: false,
  dropdownLeftAligned: false,
  dropdownRightAligned: false,
  hasDarkShadow: false,
  hasShadow: false,
  iconName: 'menu-control-tiny',
  isLevel2: false,
  isActive: false,
  isNotHoverable: false,
  isStickedToParent: false,
  noChevron: false,
  onClose: null,
  onMouseEnter: null,
  toggleClassName: '',
  toggleAttrs: {}
};

module.exports = StyledDropdown;
