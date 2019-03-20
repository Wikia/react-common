import React from 'react';
import PropTypes from 'prop-types';

function withHideComponent(component) {
    function HideComponentView(props) {
        const { isHidden, ...rest } = props;
        if (isHidden) {
            return false;
        }

        const Component = component;
        return (
            <Component
                {...rest}
            />
        );
    }

    HideComponentView.propTypes = {
        isHidden: PropTypes.bool,
    };

    HideComponentView.defaultProps = {
        isHidden: false,
    };

    return HideComponentView;
}

export default withHideComponent;
