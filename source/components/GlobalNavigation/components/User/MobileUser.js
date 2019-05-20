import React from 'react';
import PropTypes from 'prop-types';

import MobileAnon from './MobileAnon';
import MobileLoggedIn from './MobileLoggedIn';

const MobileUser = ({ model, openModal, isOpen, track }) => {
    if (model.user) {
        return (
            <MobileLoggedIn
                user={model.user}
                header={model.notifications.header.title.key}
                openModal={openModal}
                isOpen={isOpen}
                track={track}
            />
        );
    }

    if (model.anon) {
        return <MobileAnon model={model.anon} />;
    }

    return null;
};

MobileUser.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    model: PropTypes.shape().isRequired,
    openModal: PropTypes.func.isRequired,
    track: PropTypes.func.isRequired,
};

export default MobileUser;
