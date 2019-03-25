import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { isVignetteUrl, VignetteHelper } from '../../utils/vignette';

const LAZY_IMAGE_SIZE = 5;

class Img extends React.Component {
    static propTypes = {
        alt: PropTypes.string.isRequired,
        className: PropTypes.string,
        disableLazy: PropTypes.bool,
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string,
    };

    static defaultProps = {
        className: undefined,
        disableLazy: false,
        srcSet: undefined,
    };

    state = {
        src: this.props.src,
        isLoading: true,
        isLimbo: false,
    };

    // When the src changes first replace the src with a temp image so it doesn't stall displaying
    // the old image
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state
    static getDerivedStateFromProps(props, state) {
        // when only the src changes we are in "limbo" mode
        if (props.src !== state.src) {
            return {
                // try go get low resolution image of new image first
                isLoading: true,
                isLimbo: true,
            };
        }

        return {
            isLoading: state.isLoading,
            isLimbo: false,
        };
    }

    componentDidMount() {
        // jsom will not load image
        /* istanbul ignore next */
        if (this.image && this.image.current && this.image.current.complete) {
            this.setState({ isLoading: false });
        }
    }

    // after the component updates once we want to
    componentDidUpdate() {
        if (this.props.src !== this.state.src) {
            // this is one of the rare cases to conditionally call setState after a component update
            // this allows the images to be removed from the DOM properly
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState(() => ({ src: this.props.src }));
        }
    }

    /**
     * Create a super low resolution image that will automatically be blurred in most browsers
     *
     * But only from Vignette
     */
    getLowResImageUrl() {
        const image = new VignetteHelper(this.props.src);
        return image.isOk() ? image.withSmart(LAZY_IMAGE_SIZE, LAZY_IMAGE_SIZE).get() : this.props.src;
    }

    onLoad = () => {
        this.destroyLoader();
        this.setState(() => ({ isLoading: false }));
    }

    onError = () => {
        this.destroyLoader();
        console.error(`Cannot load image: ${this.props.src}`);
    }

    destroyLoader() {
        if (this.imageLoader) {
            this.imageLoader.onload = null;
            this.imageLoader.onerror = null;
            this.imageLoader = null;
        }
    }

    createLoader(src, srcSet = undefined) {
        console.log('createLoader', src);
        if (!this.imageLoader) {
            this.imageLoader = new Image();
            this.imageLoader.onload = this.handleLoad;
            this.imageLoader.onerror = this.handleError;
            this.imageLoader.src = src;

            // if srcSet is not passed in then use src for srcset
            // Setting srcset to a non-string is a bad idea. E.g. imageLoader.srcset = undefined actually sets srcset to the string "undefined", causing a load failure)
            this.imageLoader.srcset = srcSet || src;
        }
    }

    renderPlainImage() {
        const { alt, className, disableLazy, ...rest } = this.props;
        const { src } = this.state;

        return <img className={classNames(className)} src={src} alt={alt} {...rest} />;
    }

    renderVignetteImage() {
        const { alt, className, srcSet, disableLazy, ...rest } = this.props;
        const { src, isLoading } = this.state;

        if (isLoading) {
            this.createLoader(src, srcSet);

            const imageSrc = this.getLowResImageUrl();
            return <img className={classNames(className)} src={imageSrc} alt={alt} {...rest} />;
        }

        return <img className={classNames(className)} srcSet={srcSet} src={src} alt={alt} {...rest} />;
    }

    render() {
        const { src, isLimbo } = this.state;

        if (isVignetteUrl(src)) {
            // Limbo state happens when only the src and/or srcset is changed
            // there is no standard on how to handle the state of the image when the src is changed across browsers
            // lets just remove the entire node from html when in limbo
            return (
                <React.Fragment>
                    {!isLimbo && this.renderVignetteImage()}
                    {/* // support no-js and SSR */}
                    <noscript>
                        {this.renderPlainImage()}
                    </noscript>
                </React.Fragment>
            );
        }

        return this.renderPlainImage();
    }
}

export default Img;
