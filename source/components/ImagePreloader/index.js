import React from 'react';
import PropTypes from 'prop-types';

/**
 * A helper component that encapsulates image preloading logic.
 */
class ImagePreloader extends React.Component {
    static STATE = Object.freeze({
        PENDING: 'pending',
        SUCCESS: 'success',
        ERROR: 'error',
    });

    static propTypes = {
        /** A function that will recieve the state, see below */
        children: PropTypes.func,
        /* source for the image */
        src: PropTypes.string,
        /** Optional `srcSet` for the image */
        srcSet: PropTypes.string,
    };

    static defaultProps = {
        children: null,
        src: null,
        srcSet: null,
    };

    state = {
        src: null,
        srcSet: null,
        state: ImagePreloader.STATE.PENDING,
        error: null,
    }

    requestId = null;

    image = null;

    componentDidMount() {
        if (this.props.src) {
            this.handleStartFetch(this.props.src);
        }
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            src: nextProps.src === null ? null : prevState.src,
            srcSet: nextProps.srcSet === null ? null : prevState.srcSet,
            state: nextProps.src === prevState.src ? prevState.state : ImagePreloader.STATE.PENDING,
        };
    }

    componentDidUpdate(prevProps) {
        if (this.props.src === null) {
            this.handleStopFetch();
        }

        if (
            this.props.src
            && this.props.src !== prevProps.src
            && !this.state.state !== ImagePreloader.STATE.PENDING
        ) {
            this.handleStartFetch(this.props.src, this.props.srcSet);
        }
    }

    componentWillUnmount() {
        this.handleStopFetch();
    }

    handleStartFetch = (src, srcSet) => {
        this.handleStopFetch();

        /* istanbul ignore next */
        this.requestId = requestAnimationFrame(() => {
            const image = document.createElement('img');

            image.onload = this.handleSuccess;
            image.onerror = this.handleError;
            image.src = src;
            image.srcset = srcSet || src;

            if (image.complete) {
                this.handleSuccess();
            }

            this.image = image;
        });
    };

    handleStopFetch = () => {
        if (this.requestId) {
            cancelAnimationFrame(this.requestId);
            this.requestId = null;
        }

        this.handleImageClear();
    };

    handleImageClear = () => {
        /* istanbul ignore next */
        if (this.image) {
            this.image.src = '';
            this.image.srcset = '';
            this.image.onload = null;
            this.image.onerror = null;
            this.image = null;
        }
    };

    handleSuccess = () => {
        this.setState({
            state: ImagePreloader.STATE.SUCCESS,
            src: this.props.src,
        });

        this.handleStopFetch();
    };

    handleError = (error) => {
        this.setState({
            state: ImagePreloader.STATE.ERROR,
            src: this.props.src,
            srcSet: this.props.srcSet,
            error,
        });

        this.handleStopFetch();
    };

    render() {
        return this.props.children(this.state);
    }
}

export default ImagePreloader;
