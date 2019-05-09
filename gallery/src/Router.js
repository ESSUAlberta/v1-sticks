import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route component={() => null} path={"/"} />
        </Switch>
    </BrowserRouter>
);

export default Router;
