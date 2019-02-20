import { useEffect } from 'react';

const BOTTOM_COMPENSATION = 100;

const hasAlmostScrolledToTheBottom = element => (
    element.scrollHeight - BOTTOM_COMPENSATION <= element.scrollTop + element.offsetHeight
);

const getOnScrollListener = handler => (event) => {
    if (hasAlmostScrolledToTheBottom(event.target)) {
        handler();
    }
};

const onMouseWheel = (event) => {
    const { detail, wheelDelta, currentTarget } = event;
    const { clientHeight, scrollHeight, scrollTop } = currentTarget;
    const delta = -wheelDelta || detail;

    if ((delta < 0 && scrollTop === 0) || (delta > 0 && scrollHeight - clientHeight - scrollTop === 0)) {
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
