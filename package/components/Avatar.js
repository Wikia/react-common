'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var PropTypes = _interopDefault(require('prop-types'));

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var IconAvatar = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 24 24" }, props),
    React.createElement(
      "defs",
      null,
      React.createElement("path", { id: "id-source/components/Avatar-a", d: "M12 11c-.965 0-1.75-.785-1.75-1.75S11.035 7.5 12 7.5s1.75.785 1.75 1.75S12.965 11 12 11m0-5.5a3.754 3.754 0 0 0-3.75 3.75A3.754 3.754 0 0 0 12 13a3.754 3.754 0 0 0 3.75-3.75A3.754 3.754 0 0 0 12 5.5m7.679 12.914c-1.987-2.104-4.727-3.289-7.679-3.289-2.953 0-5.692 1.185-7.679 3.289A9.955 9.955 0 0 1 2 12C2 6.486 6.486 2 12 2s10 4.486 10 10a9.956 9.956 0 0 1-2.321 6.414M12 22a9.995 9.995 0 0 1-6.25-2.187c1.613-1.719 3.844-2.688 6.25-2.688s4.637.969 6.249 2.688A9.993 9.993 0 0 1 12 22m0-22C5.383 0 0 5.383 0 12c0 3.268 1.294 6.33 3.651 8.63l.012.013A12 12 0 0 0 12 24h.036a12.008 12.008 0 0 0 8.306-3.363C22.701 18.341 24 15.273 24 12c0-6.617-5.383-12-12-12" })
    ),
    React.createElement("use", { fillRule: "evenodd", xlinkHref: "#id-source/components/Avatar-a" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var IconAvatar$1 = (function (props) {
  return React.createElement(IconAvatar, props);
});

var AvatarImage = function AvatarImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  var className = 'wds-avatar__image';
  return src ? React.createElement("img", {
    src: src,
    alt: alt,
    title: alt,
    className: className
  }) : React.createElement(IconAvatar$1, {
    className: "wds-avatar__image",
    title: className
  });
};

AvatarImage.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
};
AvatarImage.defaultProps = {
  alt: undefined,
  src: undefined
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$1(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeAdmin = ((_ref) => {
  let props = _objectWithoutProperties$1(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$1({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#E3BD00", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement("path", { fill: "#FFF", d: "M12.567 7.523L10.41 7.21l-.964-1.954c-.17-.341-.728-.341-.897 0L7.585 7.21l-2.157.313a.5.5 0 0 0-.277.853l1.561 1.521-.368 2.148a.5.5 0 0 0 .725.527l1.928-1.014 1.93 1.014a.5.5 0 0 0 .725-.526l-.369-2.148 1.561-1.521a.501.501 0 0 0-.277-.854z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeAdmin$1 = (function (props) {
  return React.createElement(AvatarBadgeAdmin, props);
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$2(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeContentModerator = ((_ref) => {
  let props = _objectWithoutProperties$2(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$2({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#999", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement("path", { d: "M9.05 6.75l-3.9 3.9c-.1.1-.15.2-.15.35v1.5c0 .3.2.5.5.5H7c.15 0 .25-.05.35-.15l3.9-3.9-2.2-2.2zm3.8-.1l-1.5-1.5c-.2-.2-.5-.2-.7 0l-.9.9 2.2 2.2.9-.9c.2-.2.2-.5 0-.7z", fill: "#FFF" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeContentModerator$1 = (function (props) {
  return React.createElement(AvatarBadgeContentModerator, props);
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$3(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeDiscussionModerator = ((_ref) => {
  let props = _objectWithoutProperties$3(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$3({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#999", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement("path", { fill: "#FFF", d: "M12.821 8.232c0 1.782-1.754 3.232-3.91 3.232a4.71 4.71 0 0 1-.98-.104l-1.832.727a.328.328 0 0 1-.319-.043.323.323 0 0 1-.126-.293l.171-1.533C5.292 9.653 5 8.953 5 8.232 5 6.45 6.754 5 8.91 5c2.157 0 3.911 1.45 3.911 3.232z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeDiscussionModerator$1 = (function (props) {
  return React.createElement(AvatarBadgeDiscussionModerator, props);
});

var _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$4(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeGlobalDiscussionsModerator = ((_ref) => {
  let props = _objectWithoutProperties$4(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$4({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#00B7E0", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement("path", { fill: "#FFF", d: "M12.821 8.232c0 1.782-1.754 3.232-3.91 3.232a4.71 4.71 0 0 1-.98-.104l-1.832.727a.328.328 0 0 1-.319-.043.323.323 0 0 1-.126-.293l.171-1.533C5.292 9.653 5 8.953 5 8.232 5 6.45 6.754 5 8.91 5c2.157 0 3.911 1.45 3.911 3.232z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeGlobalDiscussionsModerator$1 = (function (props) {
  return React.createElement(AvatarBadgeGlobalDiscussionsModerator, props);
});

var _extends$5 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$5(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeHelper = ((_ref) => {
  let props = _objectWithoutProperties$5(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$5({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#00B7E0", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement(
        "g",
        { fill: "#FFF" },
        React.createElement("path", { d: "M7.667 5h2.667v8H7.667z" }),
        React.createElement("path", { d: "M13 7.667v2.667H5V7.667z" })
      )
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeHelper$1 = (function (props) {
  return React.createElement(AvatarBadgeHelper, props);
});

var _extends$6 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$6(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeStaff = ((_ref) => {
  let props = _objectWithoutProperties$6(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$6({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#00B7E0", d: "M1.661 5.96c.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9s1.247-2.04 1.661-3.04z" }),
      React.createElement("path", { fill: "#FFF", d: "M11.234 4L9.06 6.055 6.89 4.008 4 6.445V9.14L8.995 14 14 9.14l-.01-2.688L11.235 4zM5.245 6.703l1.608-1.356 3.739 3.526-1.484 1.485-3.863-3.655zm4.542.038l1.466-1.385L12.764 6.7l-1.467 1.468-1.51-1.426zM5 8.717v-.87l3.401 3.22-.487.486L5 8.717zm3.63 3.533l4.366-4.369.002.836-4.003 3.89-.365-.357z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeStaff$1 = (function (props) {
  return React.createElement(AvatarBadgeStaff, props);
});

var _extends$7 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties$7(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }
var AvatarBadgeVstf = ((_ref) => {
  let props = _objectWithoutProperties$7(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends$7({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 18" }, props),
    React.createElement(
      "g",
      { fill: "none", fillRule: "evenodd" },
      React.createElement("path", { fill: "#00B7E0", d: "M0 9c0-1.149 1.247-2.04 1.661-3.04.43-1.035.195-2.544.975-3.324.78-.78 2.29-.546 3.324-.975C6.96 1.247 7.851 0 9 0s2.04 1.247 3.04 1.661c1.035.43 2.544.195 3.324.975.78.78.546 2.29.975 3.324C16.753 6.96 18 7.851 18 9s-1.247 2.04-1.661 3.04c-.43 1.035-.195 2.544-.975 3.324-.78.78-2.29.546-3.324.975C11.04 16.753 10.149 18 9 18s-2.04-1.247-3.04-1.661c-1.035-.43-2.544-.195-3.324-.975-.78-.78-.546-2.29-.975-3.324C1.247 11.04 0 10.149 0 9" }),
      React.createElement("path", { fill: "#FFF", d: "M8.767 12.856a.268.268 0 0 0 .465 0l3.735-6.453A.268.268 0 0 0 12.735 6h-1.616a.268.268 0 0 0-.232.134L9 9.397l-.289-.5-1.596-2.763A.268.268 0 0 0 6.884 6H5.268a.268.268 0 0 0-.232.403l3.73 6.453z" })
    )
  );
});

// This file is generated automatically via extract-assets-from-ds.js
/** @component */

var AvatarBadgeVstf$1 = (function (props) {
  return React.createElement(AvatarBadgeVstf, props);
});

var Badge = function Badge(_ref) {
  var badge = _ref.badge;
  var badgeIcons = {
    admin: {
      icon: React.createElement(AvatarBadgeAdmin$1, null),
      title: 'Community Admin'
    },
    'content-moderator': {
      icon: React.createElement(AvatarBadgeContentModerator$1, null),
      title: 'Content Moderator'
    },
    'discussion-moderator': {
      icon: React.createElement(AvatarBadgeDiscussionModerator$1, null),
      title: 'Discussions Moderator'
    },
    'global-discussions-moderator': {
      icon: React.createElement(AvatarBadgeGlobalDiscussionsModerator$1, null),
      title: 'Global Discussions Moderator'
    },
    helper: {
      icon: React.createElement(AvatarBadgeHelper$1, null),
      title: 'FANDOM Helper'
    },
    staff: {
      icon: React.createElement(AvatarBadgeStaff$1, null),
      title: 'FANDOM Staff'
    },
    vstf: {
      icon: React.createElement(AvatarBadgeVstf$1, null),
      title: 'VSTF'
    }
  };
  var badgeIcon = badgeIcons[badge];
  return badgeIcon ? React.createElement("span", {
    title: badgeIcon.title,
    className: "wds-avatar__badge"
  }, badgeIcon.icon) : null;
};

Badge.propTypes = {
  badge: PropTypes.string
};
Badge.defaultProps = {
  badge: undefined
};

var getAvatarImage = function getAvatarImage(href, alt, src) {
  var avatarImage = React.createElement(AvatarImage, {
    alt: alt,
    src: src
  });
  return href ? React.createElement("a", {
    href: href
  }, avatarImage) : avatarImage;
};

var Avatar = function Avatar(_ref) {
  var alt = _ref.alt,
      badge = _ref.badge,
      className = _ref.className,
      href = _ref.href,
      src = _ref.src,
      title = _ref.title;
  return React.createElement("div", {
    className: classnames('wds-avatar', className),
    title: title
  }, getAvatarImage(href, alt, src), badge && React.createElement(Badge, {
    badge: badge
  }));
};

Avatar.propTypes = {
  /** Alt text for avatar */
  alt: PropTypes.string,

  /** Badge to display for avatar. */
  badge: PropTypes.oneOf(['admin', 'content-moderator', 'discussion-moderator', 'sysop', 'global-discussions-moderator', 'helper', 'staff', 'vstf', '']),

  /** Additional class name */
  className: PropTypes.string,

  /** Link to user's profile */
  href: PropTypes.string,

  /** Image src for avatar */
  src: PropTypes.string,

  /** Title attribute for avatar */
  title: PropTypes.string
};
Avatar.defaultProps = {
  alt: 'User avatar',
  badge: undefined,
  className: undefined,
  href: undefined,
  src: undefined,
  title: undefined
};

module.exports = Avatar;
