import React from 'react';
import GlobalNavigationMobileAnon from './GlobalNavigationMobileAnon';
import GlobalNavigationMobileLoggedIn from './GlobalNavigationMobileLoggedIn';

const GlobalNavigationMobileUser = ({ data, openModal, modalOpen }) => {
    if (data.user) {
        return (
            <React.Fragment>
                <GlobalNavigationMobileLoggedIn user={data.user} openModal={openModal} modalOpen={modalOpen}/>
            </React.Fragment>
        )
    }

    if (data.anon) {
        return <GlobalNavigationMobileAnon data={data.anon}/>
    }

    return null;
};

export default GlobalNavigationMobileUser
