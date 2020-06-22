import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Filme from "./pages/Filme";
import Error from "./pages/Error";

class Routes extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header/>
                <Switch>
                    <Route exact path={"/"} component={Home}/>
                    <Route exact path={"/filme/:id"} component={Filme}/>
                    <Route path={"*"} component={Error}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;
