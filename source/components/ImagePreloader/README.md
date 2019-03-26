`ImagePreloader` component can be used to load (or preload) any image. Both `onChange` and children are functions that are called with `ImagePreloader`'s state with the following:

* `state` - the current state of the preloading - can be either `pending`, `success` or `error`
    All the states are xported via `ImagePreloader.STATE` const.
* `error` - a JavaScript `Error` object (if the `state` is `error`) or null
* `src` - taken from `ImagePreloader`'s props
* `srcSet` - taken from `ImagePreloader`'s props

### Usage:

```js static
import ImagePreloader from '@wikia/react-common/components/ImagePreloader';

export default ImageWithLoadingMessage = () => (
    <ImagePreloader src="http://path.to.image.jpg">
        {({ state, src }) => {
            if (state === ImagePreloader.STATE.PENDING) {
                return <span>Loading image...</span>;
            }

            if (state === ImagePreloader.STATE.ERROR) {
                return <span>Error loading image</span>;
            }

            return <img src={src} />;
        }}
    </ImagePreloader>
);

```
