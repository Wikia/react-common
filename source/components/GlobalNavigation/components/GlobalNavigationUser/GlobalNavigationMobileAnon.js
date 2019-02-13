import React from 'react';
import withRedirectUrl from "../../hocs/withRedirectUrl";
import Button from "../../../Button";
import Avatar from "../../../Avatar";

const GlobalNavigationMobileAnon = ({ data, getUrlWithRedirect }) => {
    return (
        <Button text
            href={getUrlWithRedirect(data.signin.href)}
            className="wds-global-navigation__modal-control wds-global-navigation__modal-control-anon">
            <Avatar />
        </Button>
    )
};

export default withRedirectUrl(GlobalNavigationMobileAnon);
