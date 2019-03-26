export const VIGNETTE_MODES = Object.freeze({
    auto: 'auto',
    scale: 'scale',
    smart: 'smart',
    thumbnail: 'thumbnail',
    topCrop: 'top-crop',
});
export const VIGNETTE_DEFAULT_SERVER = 'https://static.wikia.nocookie.net/';

export const VIGNETTE_UUID_REGEX = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/;
export const VIGNETTE_SERVER_REGEX = /^https?:\/\/(vignette|static)\.wikia(-dev)?\.(pl|us|com|nocookie\.net)\//;
const VIGNETTE_BASE_IMAGE_REGEX = new RegExp(VIGNETTE_SERVER_REGEX.source + VIGNETTE_UUID_REGEX.source);

export function isVignetteUrl(imageUrl) {
    return VIGNETTE_BASE_IMAGE_REGEX.test(imageUrl);
}

export function isVignetteId(id) {
    return VIGNETTE_UUID_REGEX.test(id);
}

/**
 * Helper factory function
 */
export function vignette(imageUrl) {
    return new VignetteHelper(imageUrl);
}

export class VignetteHelper {
    constructor(imageUrl) {
        this.baseImage = undefined;

        this.set(imageUrl);
    }

    isOk() {
        return !!this.baseImage;
    }

    resetParams() {
        this.allowUpscaling = false;
        this.height = undefined;
        this.mode = undefined;
        this.width = undefined;
    }

    set(imageUrl) {
        this.resetParams();

        if (isVignetteUrl(imageUrl)) {
            const matches = imageUrl.match(VIGNETTE_BASE_IMAGE_REGEX);
            this.baseImage = matches[0]; // eslint-disable-line prefer-destructuring

            const paramsStr = imageUrl.substring(this.baseImage.length + 1);

            // if `imageUrl` has some params, grab them - basically revert `::getParams`
            if (paramsStr) {
                const params = paramsStr.split('/');
                switch (params[0]) {
                    case 'smart':
                        // /smart/width/123/height/123
                        this.mode = VIGNETTE_MODES.smart;
                        this.height = params[4]; // eslint-disable-line prefer-destructuring
                        this.width = params[2]; // eslint-disable-line prefer-destructuring
                        break;

                    case 'top-crop':
                        // /top-crop/width/123/height/123
                        this.mode = VIGNETTE_MODES.topCrop;
                        this.height = params[4]; // eslint-disable-line prefer-destructuring
                        this.width = params[2]; // eslint-disable-line prefer-destructuring
                        break;

                    case 'thumbnail':
                        // /thumbnail/width/123/height/123
                        this.mode = VIGNETTE_MODES.thumbnail;
                        this.allowUpscaling = true;
                        this.height = params[4]; // eslint-disable-line prefer-destructuring
                        this.width = params[2]; // eslint-disable-line prefer-destructuring
                        break;

                    case 'thumbnail-down':
                        // /thumbnail-down/width/123/height/123
                        this.mode = VIGNETTE_MODES.thumbnail;
                        this.height = params[4]; // eslint-disable-line prefer-destructuring
                        this.width = params[2]; // eslint-disable-line prefer-destructuring
                        break;

                    case 'scale-to-width':
                        // /scale-to-width/1234
                        this.mode = VIGNETTE_MODES.scale;
                        this.allowUpscaling = true;
                        this.width = params[1]; // eslint-disable-line prefer-destructuring
                        break;

                    case 'scale-to-width-down':
                        // /scale-to-width-down/1234
                        this.mode = VIGNETTE_MODES.scale;
                        this.width = params[1]; // eslint-disable-line prefer-destructuring
                        break;

                    case 'scale-to-height-down':
                        // /scale-to-height/1234
                        this.mode = VIGNETTE_MODES.scale;
                        this.height = params[1]; // eslint-disable-line prefer-destructuring
                        break;

                    default:
                        console.error(`Unknown vignette mode: ${params[0]}, ignoring`);
                }
            }

            return true;
        }

        this.baseImage = undefined;
        return false;
    }

    getParams() {
        const { height, width, allowUpscaling } = this;
        let { mode } = this;

        if (mode === VIGNETTE_MODES.auto) {
            mode = (width && height) ? VIGNETTE_MODES.thumbnail : VIGNETTE_MODES.scale;
        }

        switch (mode) {
            case VIGNETTE_MODES.smart:
                return `/smart/width/${width}/height/${height}`;

            case VIGNETTE_MODES.topCrop:
                return `/top-crop/width/${width}/height/${height}`;

            case VIGNETTE_MODES.thumbnail:
                if (allowUpscaling) {
                    return `/thumbnail/width/${width}/height/${height}`;
                }
                return `/thumbnail-down/width/${width}/height/${height}`;

            case VIGNETTE_MODES.scale:
                if (width) {
                    if (allowUpscaling) {
                        return `/scale-to-width/${width}`;
                    }
                    return `/scale-to-width-down/${width}`;
                }

                if (height) {
                    return `/scale-to-height-down/${height}`;
                }
                return '';

            default:
                return '';
        }
    }

    get() {
        return `${this.baseImage}${this.getParams()}`;
    }

    clone() {
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    withTransform(kv) {
        const myClone = this.clone();
        myClone.resetParams();

        Object.keys(kv).forEach((key) => {
            myClone[key] = kv[key];
        });

        return myClone;
    }

    withScaleToHeight(height, allowUpscaling = false) {
        return this.withTransform({ mode: VIGNETTE_MODES.scale, width: undefined, height, allowUpscaling });
    }

    withScaleToWidth(width, allowUpscaling = false) {
        return this.withTransform({ mode: VIGNETTE_MODES.scale, height: undefined, width, allowUpscaling });
    }

    withThumbnail(width, height, allowUpscaling = false) {
        return this.withTransform({ mode: VIGNETTE_MODES.thumbnail, width, height, allowUpscaling });
    }

    withTopCrop(width, height) {
        return this.withTransform({ mode: VIGNETTE_MODES.topCrop, width, height });
    }

    withSmart(width, height) {
        return this.withTransform({ mode: VIGNETTE_MODES.smart, width, height });
    }

    withAuto(width = undefined, height = undefined, allowUpscaling = false) {
        return this.withTransform({ mode: VIGNETTE_MODES.auto, width, height, allowUpscaling });
    }
}
