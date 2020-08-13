import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import HomePage from './homepage.jsx';
import Login from './login.jsx';
import Profile from './profile.jsx';
import Reviews from './reviews.jsx';
import Search from './search.jsx';

function App() {

  const [link, setLink] = useState(['']);

  useEffect(() => {
    axios.get('/good').then(({ data }) => {
      let username = data.username.split(' ');
      let username1 = username[1];
      console.log(username1);
      setLink(username1);
    });
  });

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/searchresults">
            <Search />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path={`/${link}`}>
            <Profile />
          </Route>
          <Route path="/review">
            <Reviews />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// |App will be housing every component within it.
//  \The router-dom methods will be used to activate different components based on route-based conditionals.

