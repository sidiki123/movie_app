import React from 'react';
import { Switch, Route } from "react-router-dom";

import Home from '../components/pages/Home';
import Catalog from '../components/pages/Catalog';
import Detail from '../components/pages/Detail';

const Routes = () => {
    return (
        <Switch>
            <Route
                path='/:category/search/:keyword'
                component = {Catalog}
            />
            <Route
                path='/:category/:id'
                component = {Detail}
            />
            <Route
                path='/:category'
                component = {Catalog}
            />
            <Route
                path='/'
                exact
                component = {Home}
            />
        </Switch>
    );
}

export default Routes;