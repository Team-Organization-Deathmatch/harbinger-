import React, { useState } from 'react';
import HomePage from './homepage.jsx';
import Login from './login.jsx';
import Profile from './profile.jsx';
import Reviews from './reviews.jsx';
import Search from './search.jsx';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/search" >
                        <Search />
                    </Route>
                    <Route path="/login3456">
                        <Login />
                    </Route>
                    <Profile />
                    <Reviews />
                </Switch>
            </div>
        </Router>
    )
}

export default App;



//|App will be housing every component within it.
//  \The router-dom methods will be used to activate different components based on route-based conditionals.


