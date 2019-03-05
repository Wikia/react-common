import React from 'react';
import PropTypes from 'prop-types';

import UserLoggedIn from './UserLoggedIn';
import UserAnon from './UserAnon';

const User = ({ data }) => {
    if (data.user) {
        return <UserLoggedIn data={data.user} />;
    }

    if (data.anon) {
        return <UserAnon data={data.anon} />;
    }

    return null;
};

User.propTypes = {
    data: PropTypes.shape().isRequired,
};

export default User;
