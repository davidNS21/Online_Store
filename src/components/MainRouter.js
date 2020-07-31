import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainPage from './MainPage';

export default function Router(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={MainPage} />
            </Switch>
        </BrowserRouter>
    );
}
    