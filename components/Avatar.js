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
var AvatarIconUser = ((_ref) => {
  let props = _objectWithoutProperties(_ref, ["styles"]);

  return React.createElement(
    "svg",
    _extends({ xmlns: "http://www.w3.org/2000/svg", viewBox: "6 6 138 138" }, props),
    React.createElement("path", { d: "M75 76.667c11.03 0 20-8.97 20-20V50c0-11.03-8.97-20-20-20s-20 8.97-20 20v6.667c0 11.03 8.97 20 20 20zm-16.667 6.666C45.467 83.333 35 93.8 35 106.667c0 1.84-.874 23.546.966 23.546 0 0 22.608 12.983 35.606 13.978 12.998.995 42.383-8.007 42.383-8.007 1.84 0 1.045-27.677 1.045-29.517 0-12.867-10.467-23.334-23.333-23.334H58.333z" })
  );
});

// This file is generated automatically via extract-assets-from-ds.js

var AvatarImage = function AvatarImage(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  var className = 'wds-avatar__image';
  return src ? React.createElement("img", {
    src: src,
    alt: alt,
    title: alt,
    className: className
  }) : React.createElement(AvatarIconUser, {
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

var Badge = function Badge(_ref) {
  var badge = _ref.badge;
  var badgeIcons = {
    admin: {
      icon: React.createElement(AvatarBadgeAdmin, null),
      title: 'Community Admin'
    },
    'content-moderator': {
      icon: React.createElement(AvatarBadgeContentModerator, null),
      title: 'Content Moderator'
    },
    'discussion-moderator': {
      icon: React.createElement(AvatarBadgeDiscussionModerator, null),
      title: 'Discussions Moderator'
    },
    'global-discussions-moderator': {
      icon: React.createElement(AvatarBadgeGlobalDiscussionsModerator, null),
      title: 'Global Discussions Moderator'
    },
    helper: {
      icon: React.createElement(AvatarBadgeHelper, null),
      title: 'FANDOM Helper'
    },
    staff: {
      icon: React.createElement(AvatarBadgeStaff, null),
      title: 'FANDOM Staff'
    },
    vstf: {
      icon: React.createElement(AvatarBadgeVstf, null),
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
  badge: PropTypes.oneOf(['admin', 'content-moderator', 'discussion-moderator', 'global-discussions-moderator', 'helper', 'staff', 'vstf']),

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
