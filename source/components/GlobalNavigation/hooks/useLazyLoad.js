import React, { useEffect } from 'react';

const BOTTOM_COMPENSATION = 100;

const hasAlmostScrolledToTheBottom = (element) => {
    return element.scrollHeight - BOTTOM_COMPENSATION <= element.scrollTop + element.offsetHeight;
};

const getOnScrollListener = (handler) => (event) => {
    if (hasAlmostScrolledToTheBottom(event.target)) {
        handler();
    }
};

const onMouseWheel = (event) => {
    const delta = -event.wheelDelta || event.detail,
        scrollTop = event.target.scrollTop;

    if ((delta < 0 && scrollTop === 0) || (delta > 0 && event.target.scrollHeight - event.target.clientHeight - scrollTop === 0)) {
        event.preventDefault();
    }
};

const useLazyLoad = (lazyLoadHandler, listEl) => {
    useEffect(() => {
        const onScroll = getOnScrollListener(lazyLoadHandler);

        listEl.current.addEventListener('scroll', onScroll);
        listEl.current.addEventListener('mousewheel', onMouseWheel);
        listEl.current.addEventListener('DOMMouseScroll', onMouseWheel);

        return () => {
            listEl.current.removeEventListener('scroll', onScroll);
            listEl.current.removeEventListener('mousewheel', onMouseWheel);
            listEl.current.removeEventListener('DOMMouseScroll', onMouseWheel);
        };
    });
};

export default useLazyLoad;
