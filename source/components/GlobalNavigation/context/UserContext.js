/* istanbul ignore file */
import React, { useContext } from 'react';

const UserContext = React.createContext({
    id: undefined,
    username: undefined,
});

export default UserContext;

export function useUserData() {
    return useContext(UserContext);
}
