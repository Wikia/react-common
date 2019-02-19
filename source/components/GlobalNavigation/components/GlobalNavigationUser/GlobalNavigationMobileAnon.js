import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../Button';
import Avatar from '../../../Avatar';

import withRedirectUrl from '../../hocs/withRedirectUrl';

const GlobalNavigationMobileAnon = ({ data, getUrlWithRedirect }) => (
    <Button
        className="wds-global-navigation__modal-control wds-global-navigation__modal-control-anon"
        href={getUrlWithRedirect(data.signin.href)}
        text
    >
        <Avatar />
    </Button>
);

GlobalNavigationMobileAnon.propTypes = {
    data: PropTypes.object.isRequired,
    getUrlWithRedirect: PropTypes.func.isRequired,
};

export default withRedirectUrl(GlobalNavigationMobileAnon);
