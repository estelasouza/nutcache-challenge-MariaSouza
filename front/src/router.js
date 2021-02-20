import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './apps/pages/home'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/home' component = {Home} />
        </Switch>
</BrowserRouter>
)

export default Router