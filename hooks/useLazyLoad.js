'use strict';

var react = require('react');

var BOTTOM_COMPENSATION = 100;

var hasAlmostScrolledToTheBottom = function hasAlmostScrolledToTheBottom(element) {
  return element.scrollHeight - BOTTOM_COMPENSATION <= element.scrollTop + element.offsetHeight;
};

var getOnScrollListener = function getOnScrollListener(handler) {
  return function (event) {
    /* istanbul ignore else */
    if (hasAlmostScrolledToTheBottom(event.target)) {
      handler();
    }
  };
};

var useLazyLoad = function useLazyLoad(lazyLoadHandler) {
  var element = react.useRef(null);
  react.useEffect(function () {
    var onScroll = getOnScrollListener(lazyLoadHandler);
    element.current.addEventListener('scroll', onScroll);
    return function () {
      element.current.removeEventListener('scroll', onScroll);
    };
  });
  return element;
};

module.exports = useLazyLoad;
