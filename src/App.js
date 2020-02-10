import React from 'react';
import './App.css';
import Main from "./Main";
import {HashRouter, Route, Link, Switch} from "react-router-dom";

function App() {
    return (
        <HashRouter>
        <Switch>
            <Route path="/" component={Main}/>
        </Switch>
        </HashRouter>
    );
}

export default App;
