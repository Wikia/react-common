import React from 'react';
import Dropdown from '../../../Dropdown';
import Avatar from '../../../Avatar';

class GlobalNavigationUserAnon extends React.Component {
    render() {
        return (
            <Dropdown toggle={(chevron) => (<React.Fragment><Avatar />{chevron}</React.Fragment>)}
                      className="wds-global-navigation__user-menu wds-global-navigation__user-anon">
                Content
            </Dropdown>
        );
    }
}

export default GlobalNavigationUserAnon;
