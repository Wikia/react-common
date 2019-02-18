import React from 'react';
import PropTypes from 'prop-types';

import GlobalNavigationMobileAnon from './GlobalNavigationMobileAnon';
import GlobalNavigationMobileLoggedIn from './GlobalNavigationMobileLoggedIn';

const GlobalNavigationMobileUser = ({ data, openModal, isOpen, track }) => {
    if (data.user) {
        return (
            <GlobalNavigationMobileLoggedIn
                user={data.user}
                openModal={openModal}
                isOpen={isOpen}
                track={track}
            />
        );
    }

    if (data.anon) {
        return <GlobalNavigationMobileAnon data={data.anon} />;
    }

    return null;
};

GlobalNavigationMobileUser.propTypes = {
    data: PropTypes.object.isRequired,
    isOpen: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
    track: PropTypes.func.isRequired,
};

export default GlobalNavigationMobileUser;
