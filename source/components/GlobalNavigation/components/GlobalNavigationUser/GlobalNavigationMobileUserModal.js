import React from 'react';
import GlobalNavigationMobileAnon from './GlobalNavigationMobileAnon';
import GlobalNavigationMobileLoggedIn from './GlobalNavigationMobileLoggedIn';

const GlobalNavigationMobileUserModal = ({ data }) => {
    if (data.user) {
        return <GlobalNavigationMobileLoggedIn data={data.user}/>
    }

    if (data.anon) {
        return <GlobalNavigationMobileAnon data={data.anon}/>
    }

    return null;
};

export default GlobalNavigationMobileUserModal
