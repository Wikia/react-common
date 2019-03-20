import PropTypes from 'prop-types';

const HideComponent = ({ hide, children }) => {
    if (hide === true) {
        return false;
    }

    return children;
}

HideComponent.propTypes = {
    hide: PropTypes.bool,
};

HideComponent.defaultProps = {
    hide: false,
};

export default HideComponent;
