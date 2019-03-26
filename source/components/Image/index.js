import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import ImagePreloader from '../ImagePreloader';
import { isVignetteUrl, Vignette } from '../../utils/vignette';

const LAZY_IMAGE_SIZE = 5;

class Image extends React.Component {
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
        isLimbo: false,
    };

    // When the src changes first replace the src with a temp image so it doesn't stall displaying
    // the old image
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state
    static getDerivedStateFromProps(props, state) {
        // when only the src changes we are in "limbo" mode
        return {
            isLimbo: props.src !== state.src,
        };
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
    getLowResSrc() {
        const image = Vignette(this.props.src);
        return image.isOk() ? image.withSmart(LAZY_IMAGE_SIZE, LAZY_IMAGE_SIZE).get() : this.props.src;
    }

    renderPlainImage() {
        const { src, alt, className, disableLazy, ...rest } = this.props;

        return <img className={classNames(className)} src={src} alt={alt} {...rest} />;
    }

    renderVignetteImage() {
        const { src: _skip1, srcSet: _skip2, alt, className, disableLazy, ...rest } = this.props;

        if (disableLazy) {
            return this.renderPlainImage();
        }

        return (
            <ImagePreloader src={this.state.src} srcSet={this.props.srcSet}>
                {({ src, srcSet, state }) => {
                    // we will not test the functionality of ImagePreloader here
                    /* istanbul ignore next */
                    if (state !== ImagePreloader.STATE.PENDING) {
                        return <img className={classNames(className)} src={src} srcSet={srcSet} alt={alt} {...rest} />;
                    }

                    // if the image is loading, render low quality image
                    return <img className={classNames(className)} src={this.getLowResSrc()} alt={alt} {...rest} />;
                }}
            </ImagePreloader>
        );
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

        // if the image is not a Vignette one, just render it and don't care
        return this.renderPlainImage();
    }
}

export default Image;
