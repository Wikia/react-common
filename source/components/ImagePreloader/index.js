import React from 'react';
import PropTypes from 'prop-types';

class ImagePreloader extends React.Component {
    static STATE = Object.freeze({
        PENDING: 'pending',
        SUCCESS: 'success',
        ERROR: 'error',
    });

    static propTypes = {
        children: PropTypes.func,
        onChange: PropTypes.func,
        src: PropTypes.string,
    };

    static defaultProps = {
        children: null,
        onChange: null,
        src: null,
    };

    state = {
        src: null,
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
            this.handleStartFetch(this.props.src);
        }

        if (this.props.onChange) {
            this.props.onChange(ImagePreloader.STATE);
        }
    }

    componentWillUnmount() {
        this.handleStopFetch();
    }

    handleStartFetch = (src) => {
        this.handleStopFetch();

        this.requestId = requestAnimationFrame(() => {
            const image = document.createElement('img');

            image.onload = this.handleSuccess;
            image.onerror = this.handleError;
            image.src = src;

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
        if (this.image) {
            this.image.src = '';
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
            error,
        });

        this.handleStopFetch();
    };

    render() {
        return this.props.children(this.state);
    }
}

export default ImagePreloader;
