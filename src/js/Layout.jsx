import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";

/**
 * Here we import to components that we will be using as "views" in our app
 * - Home: Will render when the url is /home or /index.html
 * - Product: Will render if the url is similar to /product/1,  /product/2,  /product/3... etc.
 */
import Home from "./views/Home.jsx";
import Product from "./views/Product.jsx";

/**
 * The idea is to declare a component that will take care off laying out the entire application
 * resolving all the possible URL
 */
export default class Layout extends Flux.View {
    render() {
        return (
            <div>
                {/*
                    The <BrowserRouter> is needed when you want your application to use the React-Router npm package.
                */}
                <BrowserRouter>
                    <div>
                        {/*
                            Inside the <Switch> component is were we declare all of our application routes
                        */}
                        <Switch>
                            {/* For example, here we are saying that we want to render the component Home when the url is /index.html */}
                            <Route exact path="/index.html" component={Home} />
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            {/* you can also define variables in the url, this url will match for any product*/}
                            <Route exact path="/product/:id" component={Product} />
                            {/* for the last Rout we don't specify any path because we want it to render if no other path have matched */}
                            <Route render={() => <h1>Not found!</h1>} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}
