import { useEffect, useRef } from 'react';

const BOTTOM_COMPENSATION = 100;

const hasAlmostScrolledToTheBottom = element => (
    element.scrollHeight - BOTTOM_COMPENSATION <= element.scrollTop + element.offsetHeight
);

const getOnScrollListener = handler => (event) => {
    /* istanbul ignore else */
    if (hasAlmostScrolledToTheBottom(event.target)) {
        handler();
    }
};

const useLazyLoad = (lazyLoadHandler) => {
    const element = useRef(null);

    useEffect(() => {
        const onScroll = getOnScrollListener(lazyLoadHandler);

        element.current.addEventListener('scroll', onScroll);

        return () => {
            element.current.removeEventListener('scroll', onScroll);
        };
    });

    return element;
};

export default useLazyLoad;
