import React from 'react';

import GlobalNavigationUserLoggedIn from './GlobalNavigationUserLoggedIn';
import GlobalNavigationUserAnon from './GlobalNavigationUserAnon';

const GlobalNavigationUser = ({ data }) => {
    if (data.user) {
        return <GlobalNavigationUserLoggedIn data={data.user}/>
    }

    if (data.anon) {
        return <GlobalNavigationUserAnon data={data.anon}/>
    }

    return null;
};

export default GlobalNavigationUser;
