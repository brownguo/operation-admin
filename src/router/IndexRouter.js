import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Login from "../views/login/Login";
import NewsSandbox from "../views/NewsSandbox/NewsSandbox";

export default function IndexRouter() {
    console.log()
    return (
        <Router>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/" render={()=>{
                    return (
                        localStorage.getItem("token")?
                            <NewsSandbox></NewsSandbox>: <Redirect to="/login"></Redirect>
                    )
                }}></Route>
            </Switch>
        </Router>
    );
}