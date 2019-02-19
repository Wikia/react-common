import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../../../Dropdown';
import Avatar from '../../../Avatar';
import List from '../../../List';

import LinkText from '../Link/LinkText';
import LinkLogOut from '../Link/LinkLogOut';

/* eslint-disable react/no-array-index-key */
class UserLoggedIn extends React.Component {
    renderToggle = (chevron) => {
        const { data } = this.props;

        return (
            <React.Fragment>
                <Avatar alt={data.username} src={data.avatar_url} />
                {chevron}
            </React.Fragment>
        );
    };

    render() {
        const { data } = this.props;

        return (
            <Dropdown
                toggle={this.renderToggle}
                className="wds-global-navigation__user-menu wds-global-navigation__user-logged-in"
                contentScrollable={false}
                dropdownRightAligned
                hasShadow
                contentClassName="wds-global-navigation__dropdown-content"
            >
                <List isLinked>
                    {data.items.map((item, index) => {
                        if (item.type === 'link-text') {
                            return <li key={index}><LinkText link={item} /></li>;
                        }

                        if (item.type === 'link-logout') {
                            return <li key={index}><LinkLogOut link={item} /></li>;
                        }

                        return null;
                    })}
                </List>
            </Dropdown>
        );
    }
}

UserLoggedIn.propTypes = {
    data: PropTypes.object.isRequired,
};

export default UserLoggedIn;
