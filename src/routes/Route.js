import React from 'react';
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
