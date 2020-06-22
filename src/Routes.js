import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Painel from "./pages/Painel";
import {autenticado} from "./Auth.js";

function PrivateRoute({component: Component, ...resto}) {
    return (
        <Route {...resto} render={props => (
            autenticado() ? (
                <Component {...props}/>
            ):(
                <Redirect to={{pathname: "/", state: {from:props.location}}}/>
            )
        )}/>
    );
}

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <PrivateRoute exact path={"/painel"} component={Painel}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
