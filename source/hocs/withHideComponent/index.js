import React from 'react';
import PropTypes from 'prop-types';

function withHideComponent(component) {
    function HideComponentView(props) {
        const { hide, ...rest } = props;
        if (hide) {
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
        hide: PropTypes.bool,
    };

    HideComponentView.defaultProps = {
        hide: false,
    };

    return HideComponentView;
}

export default withHideComponent;
