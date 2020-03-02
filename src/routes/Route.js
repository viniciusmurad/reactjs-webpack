import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}) {
    const { authorized } = store.getState().characters;
    if (!authorized && isPrivate) {
        return <Redirect to="/" />;
    }

    if (authorized && !isPrivate) {
        return <Redirect to="/Main" />;
    }

    return <Route {...rest} render={props => <Component {...props} />} />;
}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
        .isRequired,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
};
