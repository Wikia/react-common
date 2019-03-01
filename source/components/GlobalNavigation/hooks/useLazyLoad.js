import { useEffect, useRef } from 'react';

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

const useLazyLoad = (lazyLoadHandler) => {
    const element = useRef(null);

    useEffect(() => {
        const onScroll = getOnScrollListener(lazyLoadHandler);

        element.current.addEventListener('scroll', onScroll);
        element.current.addEventListener('mousewheel', onMouseWheel);
        element.current.addEventListener('DOMMouseScroll', onMouseWheel);

        return () => {
            element.current.removeEventListener('scroll', onScroll);
            element.current.removeEventListener('mousewheel', onMouseWheel);
            element.current.removeEventListener('DOMMouseScroll', onMouseWheel);
        };
    });

    return element;
};

export default useLazyLoad;
