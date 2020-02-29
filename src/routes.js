import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main/index';
import Page from './pages/Page/index';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/page" component={Page} />
        </Switch>
    );
}
