The `utils/vignette.js` offers few utilities that can be used to deal with Vignette images - most importantly the validation and manipulation of Vignette's URLs.

## Validation

There are two functions can be used to validate a proper Vignette ID and URL:

* `isVignetteUrl(url: String): Boolean`
* `isVignetteId(id: String): Boolean`
* `vignette(imageUrl): VignetteHelper`

## `VignetteHelper` class

This class can be used to extract and manipulate URLs - it can extract Vignette params from given image and new options can be applied.
Class' instance keeps the base image URL (server + ID) as well as all the Vignette params.

**NOTE**: The `vignette(url)` function can be used instead of `new VignetteHelper(url)`.

### API

All the following are instance methods:

* `isOk(): Boolean` - returns true if the image has been correctly set
* `resetParams(): void` - resets Vignette params
* `set(url: String): Boolean` - extracts base image URL and params from Vignette URL; returns false if the URL is not a Vignette one
* `getParams(): String` - returns the Vigentte params
* `get(): String` - returns full Vignette URL
* `clone(): VignetteHelper` - returns clone of the instance
* `withScaleToHeight(height: Number, allowUpscaling: Boolean = false): void` - returns new instance with changed Vignette params
* `withScaleToWidth(width: Number, allowUpscaling: Boolean = false): void` - returns new instance with changed Vignette params
* `withThumbnail(width: Number, height: Number, allowUpscaling: Boolean = false): void` - returns new instance with changed Vignette params
* `withTopCrop(width: Number, height: Number): void` - returns new instance with changed Vignette params
* `withSmart(width: Number, height: Number): void` - returns new instance with changed Vignette params
* `withAuto(width: Number, height: Number, allowUpscaling: Boolean = false): void` - returns new instance with changed Vignette params
* `withTransform(): VignetteHelper` - returns clone of the instance with changed Vignette params

Usage:

```js static
import { VignetteHelper } from '@wikia/react-common/utils/vignette';

const ThumbImage = ({ alt, src, width, height }) => {
    const image = new VignetteHelper(src);
    const image300px = image.withScaleToWidth(300).get();

    const srcSet = `
        ${image300px} 300w
        ${image.withScaleToWidth(600).get()} 600w
        ${image.withScaleToWidth(1000).get()} 2x
    `;

    return <img src={image300px} alt={alt} srcSet={srcSet} />;
}

// this will be the same as

import { VignetteHelper } from '@wikia/react-common/utils/vignette';

const ThumbImage = ({ alt, src, width, height }) => {
    const standardImage = vignette(src);

    const srcSet = `
        ${standardImage.withScaleToWidth(300).get()} 300w
        ${standardImage.withScaleToWidth(600).get()} 600w
        ${standardImage.withScaleToWidth(1000).get()} 2x
    `;

    return <img src={standardImage.get()} alt={alt} srcSet={srcSet} />;
}
```

## More

Additionally, there are few other exports that are used internally, but might be useful:

* `VIGNETTE_DEFAULT_SERVER`
* `VIGNETTE_MODES`
* `VIGNETTE_UUID_REGEX`
* `VIGNETTE_SERVER_REGEX`
* `VIGNETTE_BASE_IMAGE_REGEX`
