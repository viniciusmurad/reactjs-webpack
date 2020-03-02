import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Auth from '../pages/Auth/index';
import Main from '../pages/Main/index';
import Character from '../pages/Character/index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Auth} />
            <Route path="/Main" exact component={Main} isPrivate />
            <Route
                path="/Character/:id"
                exact
                component={Character}
                isPrivate
            />
        </Switch>
    );
}
