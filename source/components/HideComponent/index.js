import PropTypes from 'prop-types';

function HideComponent({ isHidden, children }) {
    if (isHidden === true) {
        return false;
    }

    return children;
}

HideComponent.propTypes = {
    isHidden: PropTypes.bool,
};

HideComponent.defaultProps = {
    isHidden: false,
};

export default HideComponent;
