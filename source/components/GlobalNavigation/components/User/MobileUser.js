import React from 'react';
import PropTypes from 'prop-types';

import MobileAnon from './MobileAnon';
import MobileLoggedIn from './MobileLoggedIn';

const MobileUser = ({ data, openModal, isOpen, track }) => {
    if (data.user) {
        return (
            <MobileLoggedIn
                user={data.user}
                openModal={openModal}
                isOpen={isOpen}
                track={track}
            />
        );
    }

    if (data.anon) {
        return <MobileAnon data={data.anon} />;
    }

    return null;
};

MobileUser.propTypes = {
    data: PropTypes.shape().isRequired,
    isOpen: PropTypes.bool.isRequired,
    openModal: PropTypes.func.isRequired,
    track: PropTypes.func.isRequired,
};

export default MobileUser;
