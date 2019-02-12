import React from 'react';

import GlobalNavigationUserLoggedIn from './GlobalNavigationUserLoggedIn';
import GlobalNavigationUserAnon from './GlobalNavigationUserAnon';

class GlobalNavigationUser extends React.Component {
    render() {
        const { data } = this.props;

        if (data.user) {
            return <GlobalNavigationUserLoggedIn data={data.user}/>
        }

        if (data.anon) {
            return <GlobalNavigationUserAnon data={data.anon}/>
        }
    }
}

export default GlobalNavigationUser;
