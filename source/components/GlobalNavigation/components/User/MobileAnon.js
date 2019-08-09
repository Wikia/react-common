import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../../Button';
import Avatar from '../../../Avatar';

import withRedirectUrl from '../../hocs/withRedirectUrl';

const MobileAnon = ({ model, getUrlWithRedirect }) => (
    <Button
        className="wds-global-navigation__modal-control wds-global-navigation__modal-control-anon"
        href={getUrlWithRedirect(model.signin.href, model.signin['param-name'])}
        text
    >
        <Avatar />
    </Button>
);

MobileAnon.propTypes = {
    getUrlWithRedirect: PropTypes.func.isRequired,
    model: PropTypes.shape().isRequired,
};

export default withRedirectUrl(MobileAnon);
