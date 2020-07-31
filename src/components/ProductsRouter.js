import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import FeaturedProducts from './FeaturedProducts';

export default function ProductsRouter(){

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={FeaturedProducts} />
            </Switch>
        </BrowserRouter>
    );
}