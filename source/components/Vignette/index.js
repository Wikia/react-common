import React from 'react';
import PropTypes from 'prop-types';

import { getVignetteParams, getUuid } from '../../utils/vignetteHelper';

/**
 * Vignette helper for getting scaled/resized images from Static Image Assets service.
 *
 * Works for any URL (non-vignette ones won't be resized) and for UUIDs.
 * The `mode` along with `width`, `height` and '`allowUpscaling` will dictate if
 * the final image will be scaled, resized or cropped.
 */
const Vignette = ({
    allowUpscaling,
    alt,
    className,
    height,
    image,
    method,
    width,
    ...rest
}) => {
    let imageUrlOrUuid = image.replace('//static.wikia.nocookie.net/', '//vignette.wikia.nocookie.net/');

    if (imageUrlOrUuid.indexOf('vignette.wikia.nocookie.net') !== -1) {
        const uuid = getUuid(imageUrlOrUuid);

        if (uuid) {
            const params = getVignetteParams({
                width, height, method, allowUpscaling,
            });
            imageUrlOrUuid = `https://vignette.wikia.nocookie.net/${uuid}${params}`;
        }
    }

    return <img className={className} src={imageUrlOrUuid} alt={alt} {...rest} />;
};

Vignette.propTypes = {
    /** Do we want to upscale image if needed? */
    allowUpscaling: PropTypes.bool,
    /** Alt text */
    alt: PropTypes.string,
    /** Additional class name */
    className: PropTypes.string,
    /** Desired image height */
    height: PropTypes.number,
    /** Either an URL to image or UUID. */
    image: PropTypes.string.isRequired,
    /** Desired image mode */
    method: PropTypes.oneOf([
        'auto',
        'scale',
        'thumbnail',
        'top-crop',
    ]),
    /** Desired image width */
    width: PropTypes.number,
};

Vignette.defaultProps = {
    allowUpscaling: false,
    alt: '',
    className: '',
    height: null,
    method: 'auto',
    width: null,
};

export default Vignette;
