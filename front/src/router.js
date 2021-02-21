import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ListEmployee from './apps/pages/listEmployee'
import Home from './apps/pages/home'
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component = {Home} />
            <Route exact path='/home' component = {ListEmployee} />
        </Switch>
</BrowserRouter>
)

export default Router