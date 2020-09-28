'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var PropTypes = _interopDefault(require('prop-types'));
var reactI18next = require('react-i18next');

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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var LogoWikiaOrgWhite = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 128 29"
}, props), React__default.createElement("defs", null, React__default.createElement("clipPath", {
  id: "wds-company-logo-wikia-org-path"
}, React__default.createElement("path", {
  fill: "none",
  clipRule: "evenodd",
  d: "M83.06 19.53v3h3v-3zm8.77-4a7 7 0 01.34-2.28 4.92 4.92 0 01.94-1.68 4 4 0 011.41-1 4.28 4.28 0 013.41 0 4 4 0 011.41 1 4.92 4.92 0 01.94 1.68 7 7 0 01.34 2.28 7 7 0 01-.34 2.28 4.77 4.77 0 01-.94 1.67 4.09 4.09 0 01-1.41 1 4.28 4.28 0 01-3.41 0 4.09 4.09 0 01-1.41-1 4.77 4.77 0 01-.94-1.67 7 7 0 01-.34-2.28zm-2.46 0a9.28 9.28 0 00.44 2.9 6.61 6.61 0 001.31 2.34 6 6 0 002.16 1.56 8.09 8.09 0 005.91 0 6.06 6.06 0 002.14-1.56 6.61 6.61 0 001.31-2.34 9.28 9.28 0 00.44-2.9 9.41 9.41 0 00-.44-2.91 6.59 6.59 0 00-1.31-2.35 6.21 6.21 0 00-2.13-1.58 7.91 7.91 0 00-5.91 0 6.18 6.18 0 00-2.16 1.57 6.59 6.59 0 00-1.31 2.35 9.41 9.41 0 00-.44 2.91zm16.36-7.08v14.12h2.32v-6.29a9.66 9.66 0 01.27-2.42 4.63 4.63 0 01.87-1.79 3.75 3.75 0 011.6-1.07 6.57 6.57 0 012.38-.38V8.11a5.22 5.22 0 00-3.11.76 6.29 6.29 0 00-2.06 2.55h-.05v-3zm21.37 12.91V8.44h-2.19v2a4.13 4.13 0 00-1.75-1.76 5.21 5.21 0 00-2.46-.59 6.29 6.29 0 00-3.09.7 6 6 0 00-2 1.78 7 7 0 00-1.09 2.4 10.73 10.73 0 00-.33 2.58 9.35 9.35 0 00.4 2.75 6.57 6.57 0 001.19 2.27 5.77 5.77 0 002 1.54 6.22 6.22 0 002.76.57 5.64 5.64 0 002.58-.61 3.9 3.9 0 001.82-1.93h.05v.93a9.39 9.39 0 01-.23 2.16 4.51 4.51 0 01-.75 1.68 3.64 3.64 0 01-1.39 1.09 4.31 4.31 0 01-1.94.4 6.26 6.26 0 01-1.2-.12 4.37 4.37 0 01-1.16-.4 2.89 2.89 0 01-.9-.71 1.72 1.72 0 01-.4-1.07h-2.32a3.65 3.65 0 00.6 1.94 4.33 4.33 0 001.38 1.28 6.15 6.15 0 001.86.71 9.61 9.61 0 002 .22q3.39 0 5-1.72a7.44 7.44 0 001.58-5.19zm-6.5-.68a3.55 3.55 0 01-1.91-.48 3.69 3.69 0 01-1.23-1.26 5.44 5.44 0 01-.66-1.73 9.73 9.73 0 01-.19-1.91 8 8 0 01.23-1.94 4.81 4.81 0 01.74-1.64 3.72 3.72 0 011.3-1.13 4 4 0 011.91-.42 3.69 3.69 0 011.86.44 3.62 3.62 0 011.24 1.16 5.11 5.11 0 01.7 1.63 7.74 7.74 0 01.22 1.83 8.53 8.53 0 01-.23 2 5.74 5.74 0 01-.72 1.76 3.81 3.81 0 01-1.3 1.26 3.76 3.76 0 01-2 .48z"
}))), React__default.createElement("path", {
  fill: "#FFF",
  d: "M37.35 22.64V1.14h4.8v12l1.29-1.57 2.77-3.32h6.83l-5.72 5.72 5.99 8.67h-6.27l-3.23-5.44-1.66 1.57v3.87h-4.8zM10.23 8.25l-2.4 9.78-1.85-9.78H1l3.69 14.39h6.46l1.84-7.47 1.76 7.47h6.55l3.69-14.39h-5.08l-1.84 9.78-2.31-9.78h-5.53zm69.84 4.24l.28-4.24h-4.43l-.37 1.57A5.64 5.64 0 0071 7.88c-4 0-6.18 2.58-6.18 7.47s2.21 7.47 6.18 7.47a5.94 5.94 0 004.52-1.94l.37 1.66h4.43l-.28-4.24zm-4.8 4.71a3.39 3.39 0 01-2.86 1.29c-1.48 0-2.58-.92-2.58-3.14s1.11-3.14 2.58-3.14a3.46 3.46 0 012.86 1.38zM30.16 1.23A2.78 2.78 0 0027.39 4a2.72 2.72 0 002.77 2.77A2.78 2.78 0 0032.92 4a2.84 2.84 0 00-2.76-2.77zm4.15 10.06V8.25h-6.92v14.39h6.92V19.6h-2.22v-8.31h2.22zM57 4a2.72 2.72 0 002.77 2.77A2.77 2.77 0 1057 4zm.84 7.29v8.31h-2.22v3.04h6.92V8.25h-6.92v3.04h2.22z"
}), React__default.createElement("g", {
  clipPath: "url(#wds-company-logo-wikia-org-path)"
}, React__default.createElement("path", {
  fill: "#dee7e5",
  d: "M76.25 5.78h60.19v24.44H76.25z"
}))));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var LogoWikiaOrgWhite$1 = (function (props) {
  return React__default.createElement(LogoWikiaOrgWhite, props);
});

var I18nNamespaceContext = React__default.createContext(null);
var I18nNamespaceProvider = I18nNamespaceContext.Provider;
var I18nNamespaceConsumer = I18nNamespaceContext.Consumer;

var GlobalFooterWikiaOrg = function GlobalFooterWikiaOrg(_ref) {
  var model = _ref.model;
  var year = new Date().getFullYear();

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement("footer", {
    className: "wds-global-footer-wikia-org"
  }, model.header && React__default.createElement("h2", {
    className: "wds-global-footer-wikia-org__header"
  }, React__default.createElement("a", {
    href: model.header.href,
    title: model.header.title.value
  }, React__default.createElement(LogoWikiaOrgWhite$1, {
    className: "wds-global-footer__header-logo"
  }))), React__default.createElement("ul", {
    className: "wds-global-footer-wikia-org__links"
  }, React__default.createElement("li", {
    className: "wds-global-footer-wikia-org__link"
  }, t('global-footer-site-overview-link-wikia-inc', {
    year: year
  })), model.site_overview.links.map(function (link, index) {
    return (// eslint-disable-next-line react/no-array-index-key
      React__default.createElement("li", {
        className: "wds-global-footer-wikia-org__link",
        key: index
      }, React__default.createElement("a", {
        href: link.href,
        "data-tracking-label": link.tracking_label
      }, t(link.title.key)))
    );
  })));
};

GlobalFooterWikiaOrg.propTypes = {
  model: PropTypes.shape().isRequired
};

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }
var LogoFandomWhite = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$1({
  viewBox: "0 0 164 35",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, React__default.createElement("path", {
  d: "M32.003 16.524c0 .288-.115.564-.32.768L18.3 30.712c-.226.224-.454.324-.738.324-.292 0-.55-.11-.77-.325l-.943-.886a.41.41 0 01-.01-.59l15.45-15.46c.262-.263.716-.078.716.29v2.46zm-17.167 10.12l-.766.685a.642.642 0 01-.872-.02L3.01 17.362c-.257-.25-.4-.593-.4-.95v-1.858c0-.67.816-1.007 1.298-.536l10.814 10.56c.188.187.505.57.505 1.033 0 .296-.068.715-.39 1.035zM5.73 7.395L9.236 3.93a.421.421 0 01.592 0l11.736 11.603a3.158 3.158 0 010 4.5l-3.503 3.462a.423.423 0 01-.59 0L5.732 11.89a3.132 3.132 0 01-.937-2.25c0-.85.332-1.65.935-2.246zm13.89 1.982l3.662-3.62a3.232 3.232 0 012.737-.897c.722.098 1.378.47 1.893.978l3.708 3.667a.41.41 0 010 .585l-5.64 5.576a.419.419 0 01-.59 0l-5.77-5.704a.411.411 0 010-.585zm14.56-.687L26.014.475a.869.869 0 00-1.228-.002L18.307 6.94c-.5.5-1.316.5-1.82.004l-6.48-6.4A.87.87 0 008.793.542L.447 8.67C.16 8.95 0 9.33 0 9.727v7.7c0 .392.158.77.44 1.048l16.263 16.072a.87.87 0 001.22 0l16.25-16.073c.28-.278.438-.655.438-1.048V9.73c0-.39-.153-.763-.43-1.04z",
  fill: "#00D6D6"
}), React__default.createElement("path", {
  d: "M62.852 20.51l2.58-6.716a.468.468 0 01.87 0l2.58 6.717h-6.03zm5.856-12.428c-.184-.48-.65-.8-1.17-.8h-3.342c-.52 0-.986.32-1.17.8l-7.083 18.5c-.21.552.2 1.14.796 1.14h2.753c.353 0 .67-.215.796-.542l.738-1.922a.849.849 0 01.795-.542h8.088a.85.85 0 01.796.542l.74 1.922c.125.327.44.543.795.543h2.754a.843.843 0 00.796-1.14l-7.082-18.5zm93.504-.8h-2.715a1.86 1.86 0 00-1.677 1.047l-5.393 11.162-5.393-11.163a1.858 1.858 0 00-1.677-1.047h-2.715a.889.889 0 00-.893.883V26.84c0 .487.4.883.892.883h2.608a.889.889 0 00.893-.883v-9.686l4.945 10.072c.15.304.46.497.803.497h1.073a.893.893 0 00.803-.497l4.945-10.072v9.686c0 .487.4.883.894.883h2.608a.889.889 0 00.893-.883V8.166c0-.487-.4-.883-.893-.883zm-106.972 8.8h-8.63V11.49h10.918a.88.88 0 00.83-.578l.888-2.464a.872.872 0 00-.83-1.163h-15.18c-.486 0-.88.39-.88.87v18.7c0 .48.394.87.88.87h2.492c.486 0 .88-.39.88-.87V20.29h7.743a.88.88 0 00.83-.578l.89-2.464a.872.872 0 00-.83-1.163zm51.76 7.61h-3.615V11.315H107c3.828 0 6.41 2.517 6.41 6.188 0 3.672-2.582 6.19-6.41 6.19zm-.124-16.41h-7.128c-.486 0-.88.39-.88.872v18.698c0 .48.394.87.88.87h7.128c6.453 0 10.912-4.44 10.912-10.16v-.117c0-5.72-4.46-10.162-10.912-10.162zm-11.947.03h-2.642a.87.87 0 00-.876.866v12.36l-8.755-12.72a1.242 1.242 0 00-1.023-.535H78.32a.873.873 0 00-.876.867v18.706c0 .48.393.867.877.867h2.64a.872.872 0 00.878-.867V14.71l8.608 12.478c.23.334.613.535 1.022.535h3.46a.872.872 0 00.877-.867V8.178a.87.87 0 00-.876-.867zm40.71 10.3c0 3.323-2.712 6.016-6.056 6.016-3.345 0-6.056-2.693-6.056-6.015v-.22c0-3.322 2.71-6.015 6.056-6.015 3.344 0 6.055 2.693 6.055 6.015v.22zm-6.056-10.44c-5.694 0-10.31 4.576-10.31 10.22v.22c0 5.646 4.616 10.22 10.31 10.22 5.693 0 10.308-4.574 10.308-10.22v-.22c0-5.644-4.615-10.22-10.308-10.22z",
  fill: "#FFF"
}))));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var LogoFandomWhite$1 = (function (props) {
  return React__default.createElement(LogoFandomWhite, props);
});

var BottomBar = function BottomBar(_ref) {
  var model = _ref.model;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement("div", {
    className: "wds-global-footer__bottom-bar"
  }, React__default.createElement("div", {
    className: "wds-global-footer__bottom-bar-row wds-has-padding"
  }, t(model.licensing_and_vertical.description.key, {
    sitename: model.licensing_and_vertical.description.params.sitename.value,
    vertical: t(model.licensing_and_vertical.description.params.vertical.key)
  })));
};

BottomBar.propTypes = {
  model: PropTypes.shape().isRequired
};

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }
var StoreAppstore = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$2({
  viewBox: "0 0 119 35",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, React__default.createElement("path", {
  d: "M114.766 35H4.17C1.87 35 0 33.138 0 30.859V4.135C0 1.855 1.87 0 4.169 0h110.597C117.063 0 119 1.855 119 4.135V30.86c0 2.279-1.937 4.141-4.234 4.141",
  fill: "#A9AAA9"
}), React__default.createElement("path", {
  d: "M118.147 30.86c0 1.851-1.511 3.35-3.38 3.35H4.17c-1.87 0-3.385-1.498-3.385-3.35V4.134C.785 2.284 2.3.78 4.169.78h110.597c1.87 0 3.38 1.505 3.38 3.355V30.86",
  fill: "#0A0B09"
}), React__default.createElement("path", {
  d: "M26.557 17.311c-.025-2.82 2.327-4.192 2.434-4.257-1.332-1.928-3.396-2.19-4.122-2.211-1.734-.181-3.416 1.03-4.299 1.03-.9 0-2.262-1.012-3.727-.983-1.885.03-3.65 1.113-4.619 2.797-1.997 3.432-.507 8.477 1.406 11.251.958 1.36 2.076 2.877 3.54 2.823 1.432-.06 1.967-.907 3.696-.907 1.713 0 2.216.907 3.709.873 1.537-.025 2.505-1.365 3.429-2.736 1.106-1.558 1.55-3.092 1.568-3.171-.036-.012-2.986-1.129-3.015-4.509m-2.82-8.293c.77-.957 1.296-2.258 1.15-3.578-1.115.049-2.51.765-3.312 1.7-.71.825-1.345 2.176-1.181 3.447 1.253.092 2.539-.628 3.343-1.57M43.858 22.71l-.992-3.04c-.104-.31-.301-1.042-.592-2.194h-.034a84.012 84.012 0 01-.557 2.195l-.974 3.04h3.15zm3.43 4.856h-2.003l-1.096-3.42h-3.811l-1.045 3.42h-1.948l3.776-11.644h2.332l3.794 11.644zm7.796-4.233c0-.817-.185-1.491-.557-2.021-.407-.553-.951-.83-1.636-.83a1.96 1.96 0 00-1.262.459 2.115 2.115 0 00-.74 1.2 2.42 2.42 0 00-.087.57v1.4c0 .61.19 1.126.566 1.546.378.42.868.63 1.47.63.708 0 1.26-.27 1.654-.811.394-.542.592-1.256.592-2.143zm1.914-.068c0 1.427-.388 2.556-1.166 3.385-.696.738-1.56 1.106-2.593 1.106-1.113 0-1.914-.397-2.401-1.193h-.036v4.423h-1.879v-9.052c0-.898-.024-1.82-.07-2.765h1.653l.105 1.331h.035c.626-1.002 1.578-1.503 2.854-1.503.998 0 1.83.391 2.498 1.174.667.784 1 1.815 1 3.094zm7.815.068c0-.817-.186-1.491-.557-2.021-.407-.553-.952-.83-1.636-.83-.465 0-.885.154-1.263.459a2.123 2.123 0 00-.738 1.2c-.058.231-.088.42-.088.57v1.4c0 .61.189 1.126.564 1.546.378.42.869.63 1.473.63.707 0 1.258-.27 1.652-.811.395-.542.593-1.256.593-2.143zm1.914-.068c0 1.427-.388 2.556-1.167 3.385-.695.738-1.56 1.106-2.592 1.106-1.114 0-1.915-.397-2.401-1.193h-.036v4.423h-1.879v-9.052c0-.898-.024-1.82-.07-2.765h1.654l.104 1.331h.035c.626-1.002 1.576-1.503 2.854-1.503.997 0 1.83.391 2.498 1.174.666.784 1 1.815 1 3.094zm10.878 1.036c0 .99-.347 1.796-1.042 2.418-.764.68-1.828 1.02-3.196 1.02-1.26 0-2.274-.242-3.04-.726l.436-1.555a5.18 5.18 0 002.716.743c.708 0 1.26-.158 1.655-.476.395-.317.59-.741.59-1.272 0-.473-.16-.87-.487-1.194-.323-.323-.864-.623-1.617-.9-2.054-.76-3.081-1.874-3.081-3.34 0-.956.36-1.741 1.08-2.353.717-.611 1.674-.917 2.871-.917 1.068 0 1.955.184 2.662.552l-.47 1.521c-.661-.357-1.409-.535-2.245-.535-.661 0-1.178.16-1.548.483a1.38 1.38 0 00-.47 1.055c0 .46.179.84.54 1.139.312.277.88.577 1.705.9 1.01.403 1.75.874 2.228 1.415.476.542.713 1.216.713 2.022m6.213-3.731h-2.071v4.076c0 1.037.365 1.555 1.096 1.555.336 0 .616-.029.836-.086l.051 1.417c-.37.137-.857.206-1.461.206-.743 0-1.323-.224-1.741-.672-.416-.45-.627-1.204-.627-2.264V20.57h-1.234v-1.4H79.9v-1.538l1.846-.553v2.09h2.071v1.4m7.398 2.79c0-.774-.168-1.438-.505-1.992-.394-.67-.958-1.005-1.687-1.005-.756 0-1.33.334-1.724 1.005-.337.554-.504 1.229-.504 2.027 0 .774.167 1.439.504 1.992.407.67.975 1.005 1.707 1.005.717 0 1.28-.34 1.687-1.022.347-.565.522-1.236.522-2.01zm1.95-.06c0 1.29-.371 2.35-1.114 3.178-.778.853-1.811 1.279-3.099 1.279-1.241 0-2.23-.409-2.966-1.227-.737-.817-1.106-1.849-1.106-3.092 0-1.301.38-2.367 1.14-3.196.76-.83 1.783-1.244 3.071-1.244 1.242 0 2.24.409 2.995 1.227.719.794 1.079 1.819 1.079 3.075zm6.108-2.489a3.281 3.281 0 00-.592-.05c-.661 0-1.172.247-1.532.742-.314.438-.47.99-.47 1.658v4.406h-1.878l.016-5.752c0-.969-.023-1.85-.07-2.645h1.638l.068 1.607h.052c.198-.552.512-.997.94-1.33.418-.3.871-.449 1.358-.449.174 0 .331.012.47.034v1.78m6.613 1.676c.013-.553-.11-1.03-.365-1.434-.325-.518-.825-.777-1.497-.777-.615 0-1.115.252-1.496.76-.314.403-.5.887-.556 1.45h3.914zm1.792.484c0 .334-.022.616-.069.846h-5.637c.022.83.294 1.463.817 1.901.475.391 1.09.587 1.844.587.834 0 1.596-.133 2.281-.398l.294 1.296c-.8.346-1.745.519-2.835.519-1.312 0-2.342-.384-3.09-1.15-.747-.766-1.123-1.794-1.123-3.084 0-1.267.347-2.32 1.046-3.16.73-.9 1.716-1.348 2.957-1.348 1.219 0 2.142.448 2.769 1.347.497.714.746 1.596.746 2.643zM42.263 8.783c0-.667-.178-1.18-.535-1.536-.357-.356-.877-.535-1.56-.535-.292 0-.54.02-.745.06v4.277c.114.018.322.026.624.026.707 0 1.253-.195 1.638-.585.385-.39.578-.96.578-1.707zm.974-.025c0 1.03-.31 1.805-.932 2.326-.577.48-1.394.72-2.454.72-.525 0-.975-.022-1.351-.067V6.11c.49-.079 1.02-.118 1.59-.118 1.01 0 1.77.218 2.284.654.574.492.863 1.196.863 2.113zm4.206.929c0-.38-.083-.706-.248-.978-.194-.33-.47-.495-.83-.495-.37 0-.652.165-.846.495-.165.272-.248.604-.248.995 0 .38.083.707.248.98.2.328.478.492.838.492.354 0 .63-.167.83-.501.17-.278.256-.607.256-.988zm.958-.03c0 .635-.182 1.155-.547 1.562-.383.42-.89.629-1.522.629-.61 0-1.096-.2-1.458-.603-.362-.402-.543-.909-.543-1.52 0-.639.186-1.162.56-1.57.373-.408.876-.61 1.508-.61.611 0 1.1.2 1.472.602.352.39.53.894.53 1.51zm6.925-2.027l-1.3 4.124h-.845l-.54-1.791a13.32 13.32 0 01-.334-1.333h-.016c-.08.453-.191.898-.334 1.333l-.573 1.79h-.855L49.307 7.63h.949l.47 1.96c.113.465.208.906.283 1.325h.016c.068-.345.182-.784.342-1.316l.59-1.969h.752l.565 1.927c.137.47.248.922.333 1.358h.026c.062-.425.157-.877.283-1.358l.504-1.927h.906m4.789 4.124h-.924V9.39c0-.728-.278-1.092-.837-1.092a.837.837 0 00-.667.301c-.171.2-.257.436-.257.707v2.447h-.924V8.809c0-.363-.011-.755-.033-1.18h.812l.043.645h.026c.107-.2.268-.367.478-.498.25-.155.53-.232.838-.232.387 0 .71.125.967.374.319.305.478.76.478 1.366v2.47m1.625-6.017h.923v6.017h-.923zm5.402 3.95c0-.38-.082-.706-.247-.978-.193-.33-.471-.495-.829-.495-.372 0-.654.165-.847.495-.165.272-.248.604-.248.995 0 .38.083.707.248.98.2.328.479.492.838.492.354 0 .629-.167.829-.501.172-.278.256-.607.256-.988zm.96-.03c0 .635-.183 1.155-.548 1.562-.382.42-.89.629-1.522.629-.611 0-1.097-.2-1.458-.603-.362-.402-.542-.909-.542-1.52 0-.639.186-1.162.559-1.57.373-.408.877-.61 1.508-.61.612 0 1.1.2 1.472.602.353.39.53.894.53 1.51zm3.511.679V9.7c-1.019-.017-1.528.26-1.528.832 0 .215.058.376.177.483.119.108.27.161.451.161a.927.927 0 00.564-.19.777.777 0 00.336-.65zm.96 1.418h-.83l-.07-.475h-.025c-.284.379-.689.569-1.214.569-.392 0-.709-.125-.949-.374a1.168 1.168 0 01-.325-.84c0-.504.212-.888.637-1.155.425-.265 1.023-.396 1.793-.39v-.077c0-.543-.288-.814-.863-.814-.41 0-.772.101-1.083.305l-.188-.603c.386-.237.862-.356 1.426-.356 1.086 0 1.63.569 1.63 1.707v1.519c0 .412.02.74.06.984zm4.291-1.74v-.687a1.043 1.043 0 00-.36-.844.908.908 0 00-.617-.226.952.952 0 00-.813.407c-.197.272-.296.62-.296 1.044 0 .408.094.739.284.993.2.271.47.408.807.408a.895.895 0 00.73-.34c.178-.209.265-.46.265-.755zm.958 1.74h-.82l-.042-.662h-.027c-.262.503-.707.755-1.334.755-.501 0-.917-.195-1.248-.585-.33-.391-.496-.897-.496-1.52 0-.667.179-1.208.539-1.62a1.662 1.662 0 011.283-.578c.557 0 .948.187 1.17.56h.017V5.737h.925v4.906c0 .401.01.771.033 1.11zm6.943-2.067c0-.38-.083-.706-.248-.978-.194-.33-.47-.495-.83-.495-.37 0-.652.165-.847.495-.165.272-.248.604-.248.995 0 .38.083.707.248.98.2.328.479.492.839.492.353 0 .63-.167.83-.501.17-.278.256-.607.256-.988zm.957-.03c0 .635-.182 1.155-.547 1.562-.383.42-.889.629-1.522.629-.61 0-1.095-.2-1.458-.603-.362-.402-.542-.909-.542-1.52 0-.639.186-1.162.56-1.57.372-.408.875-.61 1.51-.61.608 0 1.1.2 1.469.602.353.39.53.894.53 1.51zm4.968 2.097h-.923V9.39c0-.728-.279-1.092-.839-1.092a.833.833 0 00-.666.301c-.17.2-.257.436-.257.707v2.447h-.924V8.809c0-.363-.01-.755-.033-1.18h.811l.043.645h.026c.108-.2.269-.367.478-.498.252-.155.531-.232.839-.232.388 0 .71.125.966.374.32.305.478.76.478 1.366v2.47m6.218-3.438h-1.019v2.004c0 .509.181.764.54.764.165 0 .302-.014.41-.043l.025.696c-.182.068-.422.102-.718.102-.365 0-.649-.11-.853-.331-.207-.221-.309-.591-.309-1.112v-2.08h-.608v-.687h.608v-.756l.905-.271v1.027h1.019v.687m4.89 3.438h-.924V9.409c0-.74-.28-1.11-.837-1.11-.429 0-.721.215-.882.644-.027.09-.042.2-.042.33v2.48h-.923V5.738h.923v2.485h.017c.29-.452.708-.678 1.248-.678.383 0 .699.125.95.374.314.31.47.772.47 1.383v2.453m4.163-2.497a1.23 1.23 0 00-.179-.704c-.16-.255-.404-.382-.735-.382a.88.88 0 00-.735.374 1.38 1.38 0 00-.274.712h1.923zm.882.238c0 .165-.013.303-.035.416h-2.77c.012.408.144.718.4.934.235.192.539.288.909.288.41 0 .783-.064 1.12-.195l.145.636c-.394.17-.857.256-1.395.256-.643 0-1.15-.188-1.516-.565-.368-.377-.55-.882-.55-1.515 0-.622.17-1.14.512-1.553.358-.442.842-.663 1.453-.663.598 0 1.052.221 1.358.663.246.35.369.784.369 1.298z",
  fill: "#FFF"
}))));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var StoreAppstore$1 = (function (props) {
  return React__default.createElement(StoreAppstore, props);
});

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }
var StoreGoogleplay = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$3({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 119 35"
}, props), React__default.createElement("defs", null, React__default.createElement("linearGradient", {
  id: "store-googleplay-gradient-1",
  x1: "91.536%",
  x2: "-37.559%",
  y1: "4.839%",
  y2: "71.968%"
}, React__default.createElement("stop", {
  stopColor: "#00A0FF",
  offset: "0%"
}), React__default.createElement("stop", {
  stopColor: "#00A1FF",
  offset: ".657%"
}), React__default.createElement("stop", {
  stopColor: "#00BEFF",
  offset: "26.01%"
}), React__default.createElement("stop", {
  stopColor: "#00D2FF",
  offset: "51.22%"
}), React__default.createElement("stop", {
  stopColor: "#00DFFF",
  offset: "76.04%"
}), React__default.createElement("stop", {
  stopColor: "#00E3FF",
  offset: "100%"
})), React__default.createElement("linearGradient", {
  id: "store-googleplay-gradient-2",
  x1: "107.728%",
  x2: "-130.665%",
  y1: "49.428%",
  y2: "49.428%"
}, React__default.createElement("stop", {
  stopColor: "#FFE000",
  offset: "0%"
}), React__default.createElement("stop", {
  stopColor: "#FFBD00",
  offset: "40.87%"
}), React__default.createElement("stop", {
  stopColor: "orange",
  offset: "77.54%"
}), React__default.createElement("stop", {
  stopColor: "#FF9C00",
  offset: "100%"
})), React__default.createElement("linearGradient", {
  id: "store-googleplay-gradient-3",
  x1: "86.389%",
  x2: "-49.888%",
  y1: "17.815%",
  y2: "194.393%"
}, React__default.createElement("stop", {
  stopColor: "#FF3A44",
  offset: "0%"
}), React__default.createElement("stop", {
  stopColor: "#C31162",
  offset: "100%"
})), React__default.createElement("linearGradient", {
  id: "store-googleplay-gradient-4",
  x1: "-18.579%",
  x2: "42.275%",
  y1: "-54.527%",
  y2: "24.69%"
}, React__default.createElement("stop", {
  stopColor: "#32A071",
  offset: "0%"
}), React__default.createElement("stop", {
  stopColor: "#2DA771",
  offset: "6.85%"
}), React__default.createElement("stop", {
  stopColor: "#15CF74",
  offset: "47.62%"
}), React__default.createElement("stop", {
  stopColor: "#06E775",
  offset: "80.09%"
}), React__default.createElement("stop", {
  stopColor: "#00F076",
  offset: "100%"
}))), React__default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, React__default.createElement("path", {
  fill: "#000",
  d: "M114.593 35H4.407C1.94 35 0 33.075 0 30.625V4.375C0 1.925 1.94 0 4.407 0h110.186C117.06 0 119 1.925 119 4.375v26.25c0 2.362-1.94 4.375-4.407 4.375z"
}), React__default.createElement("path", {
  fill: "#A6A6A6",
  d: "M114.593.7c2.027 0 3.702 1.662 3.702 3.675v26.25c0 2.013-1.675 3.675-3.702 3.675H4.407C2.38 34.3.705 32.638.705 30.625V4.375C.705 2.362 2.38.7 4.407.7h110.186zm0-.7H4.407C1.94 0 0 1.925 0 4.375v26.25C0 33.075 1.94 35 4.407 35h110.186c2.468 0 4.407-1.925 4.407-4.375V4.375C119 2.013 117.06 0 114.593 0z"
}), React__default.createElement("path", {
  fill: "#FFF",
  stroke: "#FFF",
  strokeWidth: ".2",
  d: "M41.475 8.925c0 .7-.175 1.313-.613 1.75-.525.525-1.137.787-1.925.787-.787 0-1.4-.262-1.924-.787-.526-.525-.788-1.138-.788-1.925 0-.787.262-1.4.788-1.925.525-.525 1.137-.788 1.925-.788.35 0 .7.088 1.05.263.35.175.612.35.787.612l-.438.438c-.35-.438-.787-.612-1.4-.612-.524 0-1.05.174-1.4.612-.437.35-.612.875-.612 1.488 0 .612.175 1.137.613 1.487.437.35.875.613 1.4.613.612 0 1.05-.176 1.487-.613.263-.262.438-.612.438-1.05h-1.925v-.613h2.537v.263zM45.5 6.737h-2.362V8.4h2.187v.612h-2.187v1.663H45.5v.7h-3.062v-5.25H45.5zm2.888 4.638h-.7V6.737H46.2v-.612h3.675v.612h-1.487zm4.025 0v-5.25h.7v5.25zm3.674 0h-.7V6.737H53.9v-.612h3.587v.612H56v4.638zm8.313-.7c-.525.525-1.138.787-1.925.787-.788 0-1.4-.262-1.925-.787-.525-.525-.787-1.138-.787-1.925 0-.787.262-1.4.787-1.925.525-.525 1.138-.788 1.925-.788.788 0 1.4.263 1.925.788.525.525.787 1.138.787 1.925 0 .787-.262 1.4-.787 1.925zm-3.325-.438c.35.35.875.613 1.4.613.525 0 1.05-.175 1.4-.612.35-.35.612-.875.612-1.488s-.174-1.138-.612-1.487c-.35-.35-.875-.613-1.4-.613-.525 0-1.05.175-1.4.612-.35.35-.613.875-.613 1.488s.175 1.137.613 1.488zm5.075 1.138v-5.25h.788l2.537 4.113V6.125h.7v5.25h-.7l-2.712-4.287v4.287z"
}), React__default.createElement("path", {
  fill: "#FFF",
  d: "M59.587 19.075c-2.1 0-3.762 1.575-3.762 3.762 0 2.1 1.662 3.763 3.762 3.763s3.763-1.575 3.763-3.763c0-2.274-1.663-3.762-3.763-3.762zm0 5.95c-1.137 0-2.1-.962-2.1-2.275s.963-2.275 2.1-2.275c1.138 0 2.1.875 2.1 2.275 0 1.313-.962 2.275-2.1 2.275zm-8.137-5.95c-2.1 0-3.763 1.575-3.763 3.762 0 2.1 1.663 3.763 3.763 3.763 2.1 0 3.762-1.575 3.762-3.763 0-2.274-1.662-3.762-3.762-3.762zm0 5.95c-1.138 0-2.1-.962-2.1-2.275s.962-2.275 2.1-2.275c1.137 0 2.1.875 2.1 2.275 0 1.313-.962 2.275-2.1 2.275zm-9.713-4.813v1.576H45.5c-.087.875-.438 1.575-.875 2.012-.525.525-1.4 1.137-2.888 1.137-2.362 0-4.112-1.837-4.112-4.2 0-2.362 1.837-4.2 4.112-4.2 1.225 0 2.188.526 2.888 1.138l1.138-1.137c-.963-.876-2.188-1.575-3.938-1.575-3.15 0-5.863 2.624-5.863 5.775 0 3.15 2.713 5.774 5.863 5.774 1.75 0 2.975-.524 4.025-1.662 1.05-1.05 1.4-2.538 1.4-3.675 0-.35 0-.7-.087-.963h-5.425zm39.726 1.226c-.35-.875-1.225-2.363-3.15-2.363-1.925 0-3.5 1.488-3.5 3.762 0 2.1 1.575 3.763 3.674 3.763 1.663 0 2.713-1.05 3.063-1.663l-1.225-.875c-.438.613-.963 1.05-1.838 1.05-.874 0-1.4-.35-1.837-1.137l4.987-2.1-.174-.438zm-5.075 1.225c0-1.4 1.137-2.188 1.924-2.188.613 0 1.225.35 1.4.787l-3.325 1.4zm-4.113 3.587h1.662V15.312h-1.662V26.25zm-2.625-6.387c-.438-.438-1.138-.875-2.013-.875-1.837 0-3.587 1.662-3.587 3.762s1.663 3.675 3.588 3.675c.874 0 1.575-.438 1.924-.875h.088v.525c0 1.4-.788 2.188-2.013 2.188-.962 0-1.662-.7-1.837-1.313l-1.4.613c.438.962 1.487 2.187 3.325 2.187 1.925 0 3.5-1.137 3.5-3.85v-6.65H69.65v.613zm-1.925 5.162c-1.137 0-2.1-.962-2.1-2.275s.963-2.275 2.1-2.275c1.138 0 2.013.962 2.013 2.275s-.876 2.275-2.013 2.275zm21.35-9.712h-3.938V26.25H86.8v-4.113h2.275c1.837 0 3.587-1.312 3.587-3.412 0-2.1-1.75-3.413-3.587-3.413zm.087 5.25H86.8V16.8h2.362c1.225 0 1.925 1.05 1.925 1.837-.087.963-.787 1.925-1.925 1.925zm10.063-1.575c-1.225 0-2.45.524-2.887 1.662l1.487.613c.35-.613.875-.788 1.487-.788.876 0 1.663.525 1.75 1.4v.087c-.262-.174-.962-.437-1.662-.437-1.575 0-3.15.875-3.15 2.45 0 1.487 1.313 2.45 2.713 2.45 1.137 0 1.662-.525 2.1-1.05h.087v.875h1.575v-4.2c-.175-1.925-1.662-3.063-3.5-3.063zm-.175 6.037c-.525 0-1.313-.262-1.313-.962 0-.875.963-1.138 1.75-1.138.7 0 1.05.175 1.488.35-.175 1.05-1.05 1.75-1.925 1.75zm9.188-5.775l-1.838 4.725h-.088l-1.924-4.725h-1.75l2.887 6.65-1.663 3.675h1.663l4.462-10.325h-1.75zm-14.7 7H95.2V15.312h-1.663V26.25z"
}), React__default.createElement("path", {
  fill: "url(#store-googleplay-gradient-1)",
  d: "M9.1 6.563c-.262.262-.438.7-.438 1.224v19.338c0 .525.175.962.438 1.225l.088.087 10.85-10.85v-.174L9.1 6.563z"
}), React__default.createElement("path", {
  fill: "url(#store-googleplay-gradient-2)",
  d: "M23.625 21.262l-3.587-3.587v-.262l3.587-3.588.087.088L28 16.363c1.225.7 1.225 1.837 0 2.537l-4.375 2.363z"
}), React__default.createElement("path", {
  fill: "url(#store-googleplay-gradient-3)",
  d: "M23.712 21.175L20.038 17.5 9.1 28.438c.438.437 1.05.437 1.838.087l12.774-7.35"
}), React__default.createElement("path", {
  fill: "url(#store-googleplay-gradient-4)",
  d: "M23.712 13.825L10.938 6.563c-.788-.438-1.4-.35-1.838.087L20.038 17.5l3.674-3.675z"
}), React__default.createElement("path", {
  fill: "#000",
  d: "M23.625 21.087l-12.688 7.175c-.7.438-1.312.35-1.75 0l-.087.088.088.087c.437.35 1.05.438 1.75 0l12.687-7.35z",
  opacity: ".2"
}), React__default.createElement("path", {
  fill: "#000",
  d: "M9.15 28.262c-.3-.262-.4-.7-.4-1.224v.087c0 .525.2.962.5 1.225v-.088h-.1zM28 18.637l-4.375 2.45.087.088L28 18.725c.613-.35.875-.788.875-1.225 0 .438-.35.788-.875 1.137z",
  opacity: ".12"
}), React__default.createElement("path", {
  fill: "#FFF",
  d: "M10.938 6.65L28 16.363c.525.35.875.7.875 1.137 0-.438-.262-.875-.875-1.225L10.937 6.563c-1.224-.7-2.187-.088-2.187 1.312v.088c0-1.4.963-2.013 2.188-1.313z",
  opacity: ".25"
}))));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var StoreGoogleplay$1 = (function (props) {
  return React__default.createElement(StoreGoogleplay, props);
});

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }
var StoreLogoDdb = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$4({
  viewBox: "0 0 78 78",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
}, props), React__default.createElement("defs", null, React__default.createElement("rect", {
  id: "path-1",
  x: ".222",
  y: ".111",
  width: "78",
  height: "78",
  rx: "6"
})), React__default.createElement("g", {
  transform: "translate(-.222 -.111)",
  fill: "none",
  fillRule: "evenodd"
}, React__default.createElement("mask", {
  id: "mask-2",
  fill: "#fff"
}, React__default.createElement("use", {
  xlinkHref: "#path-1"
})), React__default.createElement("image", {
  mask: "url(#mask-2)",
  x: "-3",
  y: "-2",
  width: "84.444",
  height: "85",
  xlinkHref: "data:image/png;base64,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"
}))));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var StoreLogoDdb$1 = (function (props) {
  return React__default.createElement(StoreLogoDdb, props);
});

function _extends$5() { _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$5.apply(this, arguments); }
var StoreLogoFandom = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$5({
  viewBox: "0 0 78 78",
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink"
}, props), React__default.createElement("defs", null, React__default.createElement("rect", {
  id: "path-1",
  x: ".667",
  y: "0",
  width: "78",
  height: "78",
  rx: "6"
})), React__default.createElement("g", {
  transform: "translate(-.667)",
  fill: "none",
  fillRule: "evenodd"
}, React__default.createElement("mask", {
  id: "mask-2",
  fill: "#fff"
}, React__default.createElement("use", {
  xlinkHref: "#path-1"
})), React__default.createElement("use", {
  fillOpacity: ".405",
  fill: "#FFE2E2",
  xlinkHref: "#path-1"
}), React__default.createElement("image", {
  mask: "url(#mask-2)",
  x: "-2",
  y: "-1",
  width: "83.333",
  height: "83.889",
  xlinkHref: "data:image/png;base64,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"
}))));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var StoreLogoFandom$1 = (function (props) {
  return React__default.createElement(StoreLogoFandom, props);
});

function _extends$6() { _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$6.apply(this, arguments); }
var IconFacebook = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$6({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React__default.createElement("defs", null, React__default.createElement("path", {
  id: "facebook-a",
  d: "M16.762 5.432h-1.786c-1.428 0-1.666.71-1.666 1.657v2.248h3.452l-.357 3.55h-2.857V22H9.976v-9.112H7v-3.55h2.976V6.733C9.976 3.775 11.762 2 14.381 2c1.19 0 2.262.118 2.619.118v3.314h-.238z"
})), React__default.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#facebook-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconFacebook$1 = (function (props) {
  return React__default.createElement(IconFacebook, props);
});

function _extends$7() { _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$7.apply(this, arguments); }
var IconInstagram = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$7({
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React__default.createElement("g", {
  fillRule: "evenodd"
}, React__default.createElement("path", {
  d: "M12 2.162c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.265.07 1.645.07 4.849s-.012 3.584-.07 4.849c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.265.058-1.645.07-4.849.07s-3.584-.012-4.849-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.265-.07-1.645-.07-4.849s.012-3.584.07-4.849c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.265-.058 1.645-.07 4.849-.07zM12 0C8.741 0 8.332.014 7.052.072c-1.95.089-3.663.567-5.038 1.942C.639 3.389.161 5.102.072 7.052.014 8.332 0 8.741 0 12c0 3.259.014 3.668.072 4.948.089 1.95.567 3.663 1.942 5.038 1.375 1.375 3.088 1.853 5.038 1.942C8.332 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 1.95-.089 3.663-.567 5.038-1.942 1.375-1.375 1.853-3.088 1.942-5.038.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.089-1.95-.567-3.663-1.942-5.038C20.611.639 18.898.161 16.948.072 15.668.014 15.259 0 12 0z"
}), React__default.createElement("path", {
  d: "M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"
}), React__default.createElement("circle", {
  cx: "18.406",
  cy: "5.594",
  r: "1.44"
}))));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconInstagram$1 = (function (props) {
  return React__default.createElement(IconInstagram, props);
});

function _extends$8() { _extends$8 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$8.apply(this, arguments); }
var IconLinkedin = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$8({
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React__default.createElement("path", {
  d: "M.351 24h4.982V7.93H.351zM18.035 7.509c-2.386 0-4.07 1.333-4.702 2.596h-.07V7.93H8.491V24h4.983v-7.93c0-2.105.421-4.14 3.017-4.14 2.597 0 2.597 2.386 2.597 4.28V24H24v-8.842c0-4.351-.912-7.65-5.965-7.65M2.877 0A2.845 2.845 0 000 2.877a2.845 2.845 0 002.877 2.877c1.614 0 2.877-1.333 2.877-2.877A2.845 2.845 0 002.877 0"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconLinkedin$1 = (function (props) {
  return React__default.createElement(IconLinkedin, props);
});

function _extends$9() { _extends$9 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$9.apply(this, arguments); }
var IconTwitter = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$9({
  xmlns: "http://www.w3.org/2000/svg",
  xmlnsXlink: "http://www.w3.org/1999/xlink",
  viewBox: "0 0 24 24"
}, props), React__default.createElement("defs", null, React__default.createElement("path", {
  id: "twitter-a",
  d: "M20.681 7.328v.577c0 5.915-4.486 12.695-12.735 12.695-2.605 0-4.92-.721-6.946-2.02.434 0 .724.145 1.158.145 2.026 0 4.052-.722 5.644-1.876-1.882 0-3.618-1.298-4.197-3.174.29 0 .579.145.868.145.434 0 .434 0 1.013-.145-2.17-.432-4.052-2.308-4.052-4.472 0 .433 1.592.433 2.316.577-1.158-.865-1.882-2.164-1.882-3.75 0-.866.29-1.587.724-2.309 2.17 2.741 5.644 4.472 9.261 4.761-.144-.433-.144-.721-.144-1.01C11.709 5.02 13.735 3 16.195 3c1.302 0 2.46.433 3.328 1.443 1.013-.289 1.882-.577 2.75-1.154-.434 1.154-1.158 1.875-1.881 2.452a13.73 13.73 0 002.604-.721c-.723.865-1.447 1.73-2.315 2.308z"
})), React__default.createElement("use", {
  fillRule: "evenodd",
  xlinkHref: "#twitter-a"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconTwitter$1 = (function (props) {
  return React__default.createElement(IconTwitter, props);
});

function _extends$a() { _extends$a = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$a.apply(this, arguments); }
var IconYoutube = (({
  styles = {},
  ...props
}) => React__default.createElement("svg", _extends$a({
  viewBox: "0 0 24 24",
  xmlns: "http://www.w3.org/2000/svg"
}, props), React__default.createElement("path", {
  d: "M23.8 7.6s-.2-1.7-1-2.4c-.9-1-1.9-1-2.4-1C17 4 12 4 12 4s-5 0-8.4.2c-.5.1-1.5.1-2.4 1-.7.7-1 2.4-1 2.4S0 9.5 0 11.5v1.8c0 1.9.2 3.9.2 3.9s.2 1.7 1 2.4c.9 1 2.1.9 2.6 1 1.9.2 8.2.2 8.2.2s5 0 8.4-.3c.5-.1 1.5-.1 2.4-1 .7-.7 1-2.4 1-2.4s.2-1.9.2-3.9v-1.8c0-1.9-.2-3.8-.2-3.8zM9.5 15.5V8.8l6.5 3.4-6.5 3.3z"
})));

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconYoutube$1 = (function (props) {
  return React__default.createElement(IconYoutube, props);
});

var svgMap = {
  'wds-company-store-appstore': StoreAppstore$1,
  'wds-company-store-googleplay': StoreGoogleplay$1,
  'wds-icons-facebook': IconFacebook$1,
  'wds-icons-twitter': IconTwitter$1,
  'wds-icons-youtube': IconYoutube$1,
  'wds-icons-instagram': IconInstagram$1,
  'wds-icons-linkedin': IconLinkedin$1
};

var LinkImage = function LinkImage(_ref) {
  var model = _ref.model;
  var Svg = svgMap[model['image-data'].name];
  return React__default.createElement("a", {
    href: model.href,
    className: "wds-global-footer__link",
    "data-tracking-label": model.tracking_label
  }, React__default.createElement(Svg, {
    className: "wds-global-footer__link-image wds-icon"
  }));
};

LinkImage.propTypes = {
  model: PropTypes.shape().isRequired
};

var LinkBranded = function LinkBranded(_ref) {
  var model = _ref.model;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement("a", {
    href: model.href,
    className: "wds-global-footer__link",
    "data-tracking-label": model.tracking_label
  }, React__default.createElement("div", null, t(model.title.key)));
};

LinkBranded.propTypes = {
  model: PropTypes.shape().isRequired
};

var LinkText = function LinkText(_ref) {
  var model = _ref.model;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement("a", {
    href: model.href,
    className: "wds-global-footer__link",
    "data-tracking-label": model.tracking_label
  }, model.title.type === 'translatable-text' ? t(model.title.key) : model.title.value);
};

LinkText.propTypes = {
  model: PropTypes.shape().isRequired
};

var svgMap$1 = {
  'wds-company-store-logo-fandom': StoreLogoFandom$1,
  'wds-company-store-logo-ddb': StoreLogoDdb$1
};

var Image = function Image(_ref) {
  var name = _ref.name,
      caption = _ref.caption;
  var Svg = svgMap$1[name];

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement("figure", {
    className: "wds-global-footer__image"
  }, React__default.createElement(Svg, {
    className: "wds-icon"
  }), caption && React__default.createElement("figcaption", {
    className: "wds-global-footer__image-caption"
  }, t(caption.key), caption.type === 'translatable-text' ? t(caption.key) : caption.value));
};

Image.propTypes = {
  caption: PropTypes.shape(),
  name: PropTypes.string.isRequired
};
Image.defaultProps = {
  caption: null
};

var renderLink = function renderLink(type, model) {
  switch (type) {
    case 'link-image':
      return React__default.createElement(LinkImage, {
        model: model
      });

    case 'link-branded':
      return React__default.createElement(LinkBranded, {
        model: model
      });

    default:
      return React__default.createElement(LinkText, {
        model: model
      });
  }
};

var Section = function Section(_ref) {
  var model = _ref.model,
      name = _ref.name;
  var title = model.header ? model.header.title : '';
  var description = model.description,
      links = model.links,
      image = model.image;

  var _useTranslation = reactI18next.useTranslation(React.useContext(I18nNamespaceContext)),
      _useTranslation2 = _slicedToArray(_useTranslation, 1),
      t = _useTranslation2[0];

  return React__default.createElement("section", {
    className: "wds-global-footer__section wds-is-".concat(name)
  }, title && React__default.createElement("h3", {
    className: "wds-global-footer__section-header"
  }, t(title.key)), description && React__default.createElement("span", {
    className: "wds-global-footer__section-description"
  }, t(description.key)), image && React__default.createElement(Image, {
    name: image.name,
    caption: image.caption,
    alt: image.name
  }), links && React__default.createElement("ul", {
    className: "wds-global-footer__links-list"
  }, links.map(function (link, index) {
    return (// eslint-disable-next-line react/no-array-index-key
      React__default.createElement("li", {
        className: "wds-global-footer__links-list-item",
        key: index
      }, renderLink(link.type, link))
    );
  })));
};

Section.propTypes = {
  model: PropTypes.shape().isRequired,
  name: PropTypes.string.isRequired
};

var GlobalFooterFandom = function GlobalFooterFandom(_ref) {
  var model = _ref.model;
  var header = model.header;
  var hasHeader = !!header;
  return React__default.createElement("footer", {
    className: "wds-global-footer"
  }, hasHeader && React__default.createElement("h2", {
    className: "wds-global-footer__header"
  }, React__default.createElement("a", {
    href: header.href,
    title: header.title.value
  }, React__default.createElement(LogoFandomWhite$1, {
    className: "wds-global-footer__header-logo"
  }))), React__default.createElement("div", {
    className: "wds-global-footer__main"
  }, React__default.createElement("div", {
    className: "wds-global-footer__column"
  }, React__default.createElement(Section, {
    model: model.fandom_overview,
    name: "fandom-overview"
  }), React__default.createElement(Section, {
    model: model.follow_us,
    name: "follow-us"
  })), React__default.createElement("div", {
    className: "wds-global-footer__column"
  }, React__default.createElement(Section, {
    model: model.site_overview,
    name: "site-overview"
  })), React__default.createElement("div", {
    className: "wds-global-footer__column"
  }, React__default.createElement(Section, {
    model: model.community,
    name: "community"
  }), React__default.createElement(Section, {
    model: model.advertise,
    name: "advertise"
  })), React__default.createElement("div", {
    className: "wds-global-footer__column"
  }, React__default.createElement(Section, {
    model: model.fandom_apps,
    name: "fandom-apps"
  }), React__default.createElement(Section, {
    model: model.fandom_stores,
    name: "fandom-stores"
  }), React__default.createElement(Section, {
    model: model.ddb_stores,
    name: "ddb-stores"
  }))), React__default.createElement(BottomBar, {
    model: model
  }));
};

GlobalFooterFandom.propTypes = {
  model: PropTypes.shape().isRequired
};

var GlobalFooter = function GlobalFooter(_ref) {
  var model = _ref.model,
      i18nNamespace = _ref.i18nNamespace;
  var isWikiaOrg = model['is-wikia-org'];
  return React__default.createElement(I18nNamespaceProvider, {
    value: i18nNamespace
  }, isWikiaOrg ? React__default.createElement(GlobalFooterWikiaOrg, {
    model: model
  }) : React__default.createElement(GlobalFooterFandom, {
    model: model
  }));
};

GlobalFooter.propTypes = {
  /** i18next namespace for translated strings from Design System */
  i18nNamespace: PropTypes.string.isRequired,

  /** data model retrieved from DesignSystem API */
  model: PropTypes.shape().isRequired
};

module.exports = GlobalFooter;
