import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
// import Vignette from 'vignette'; // todo fix

/**
 * Create a super low resolution image that will automatically be blurred in most browsers
 *
 * @param vignetteUrl
 * @returns {String}
 */
function getLowRes(vignetteUrl) {
    // return Vignette.getThumbURL(vignetteUrl, {
    //     mode: 'smart',
    //     width: 5,
    //     height: 5,
    // });
}

class ImageView extends React.Component {
    static propTypes = {
        alt: PropTypes.string.uired,
        className: PropTypes.string,
        disableLazy: PropTypes.bool,
        src: PropTypes.string.isRequired,
        srcSet: PropTypes.string,
    };

    static defaultProps = {
        disableLazy: false,
        srcSet: '',
        className: '',
    };

    state = {
        src: this.props.src,
        isLoading: true,
        isLimbo: false,
    };

    image = React.createRef();

    // When the src changes first replace the src with a temp image so it doesn't stall displaying
    // the old image
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#when-to-use-derived-state
    static getDerivedStateFromProps(props, state) {
        // when only the src changes we are in "limbo" mode
        if (props.src !== state.src) {
            return {
                // try go get low resolution image of new image first
                isLimbo: true,
                isLoading: true,
            };
        }

        return {
            isLimbo: false,
            isLoading: state.isLoading,
        };
    }

    componentDidMount() {
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

    onLoad = () => { this.setState(() => ({ isLoading: false })); };

    render() {
        const {
            className, alt, src, srcSet, disableLazy, ...rest
        } = this.props;

        if (disableLazy) {
            return <img src={this.props.src} alt={alt} className={className} srcSet={srcSet} {...rest} />;
        }

        // Limbo state happens when only the src and/or srcset is changed
        // there is no standard on how to handle the state of the image when the src is changed across browsers
        // lets just remove the entire node from html when in limbo
        return (
            <React.Fragment>
                {!this.state.isLimbo && <img src={getLowRes(src)} alt={alt} className={classNames('imageview', className, { 'is-hidden': !this.state.isLoading })} {...rest} />}
                {!this.state.isLimbo && <img ref={this.image} onLoad={() => { this.onLoad(); }} src={src} alt={alt} className={classNames('imageview', className, { 'is-hidden': this.state.isLoading })} srcSet={srcSet} {...rest} />}

                {/* // support SSR */}
                <noscript>
                    <img src={src} alt={alt} className={className} srcSet={srcSet} {...rest} />
                </noscript>
            </React.Fragment>
        );
    }

export default ImageView;
