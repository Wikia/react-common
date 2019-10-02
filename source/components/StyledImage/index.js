import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { vignette } from '../../utils/vignette';

const LOADING_STATES = Object.freeze({
    PENDING: 'pending',
    SUCCESS: 'success',
    ERROR: 'error',
    INITIAL: 'initial',
});

function usePreloadedImage(src, srcSet) {
    const [loadStatus, setLoadStatus] = React.useState(LOADING_STATES.INITIAL);
    const [requestId, setRequestId] = React.useState(null);

    const handleSuccess = () => {
        setLoadStatus(LOADING_STATES.SUCCESS);
        setRequestId(null);
    };

    const handleError = () => {
        setLoadStatus(LOADING_STATES.ERROR);
        setRequestId(null);
    };

    React.useEffect(() => {
        if (requestId) {
            cancelAnimationFrame(requestId);
        }

        const newRequestId = requestAnimationFrame(() => {
            const image = document.createElement('img');

            image.onload = handleSuccess;
            image.onerror = handleError;
            image.src = src;
            image.srcset = srcSet || src;

            if (image.complete) {
                handleSuccess();
            }

            this.image = image;
        });

        setRequestId(newRequestId);
    }, [src]);


    return {
        loadStatus,
    };
}

const LAZY_IMAGE_SIZE = 5;
function createLowResolutionSrc(src) {
    return vignette(src).withSmart(LAZY_IMAGE_SIZE, LAZY_IMAGE_SIZE).get();
}

// todo: get a placeholder image to swap out instead of empty string
const LIMBO_IMAGE = '';

const StyledImage = ({ src, srcSet, disableLazy, alt, className, ...rest }) => {
    const [isLimbo, setIsLimbo] = useState(false);
    const { loadStatus } = usePreloadedImage(src, srcSet);

    // limbo is intended to remove the image when the src changes but the image is not yet loaded.
    React.useEffect(() => {
        setIsLimbo(true);
    }, [src]);
    // this is odd but it allows us to quickly flush the src when an image src is swapped but react is able to use
    // the same DOM element. The other option would be to use keys but then react can't be as efficient.
    setIsLimbo(false);

    // Show low resolution image
    if (loadStatus === LOADING_STATES.PENDING) {
        const lowResolutionSrc = createLowResolutionSrc(src);
        return <img className={className} src={isLimbo ? LIMBO_IMAGE : lowResolutionSrc} alt={alt} {...rest} />;
    }

    return (
        <React.Fragment>
            <img className={className} src={src} srcSet={isLimbo ? LIMBO_IMAGE : srcSet} alt={alt} {...rest} />
        </React.Fragment>
    );
};

StyledImage.propTypes = {
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    disableLazy: PropTypes.bool,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string,
};

StyledImage.defaultProps = {
    className: undefined,
    disableLazy: false,
    srcSet: undefined,
};

export default StyledCountdown;
