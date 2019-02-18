import React from 'react';
import PropTypes from 'prop-types';

import GlobalNavigationUserLoggedIn from './GlobalNavigationUserLoggedIn';
import GlobalNavigationUserAnon from './GlobalNavigationUserAnon';

const GlobalNavigationUser = ({ data }) => {
    if (data.user) {
        return <GlobalNavigationUserLoggedIn data={data.user} />;
    }

    if (data.anon) {
        return <GlobalNavigationUserAnon data={data.anon} />;
    }

    return null;
};

GlobalNavigationUser.propTypes = {
    data: PropTypes.object.isRequired,
};

export default GlobalNavigationUser;
