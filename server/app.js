const express = require('express');
const path = require('path');

const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
require('./passport-setup');

const passport = require('passport');

const { searchRoute } = require('./routes/search');
const { homeRoute } = require('./routes/home');
const { profileRoute } = require('./routes/profile');
const { loginRoute } = require('./routes/login');
const { reviewRoute } = require('./routes/review');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// per video tutorial @ 6:19
// figure out which dynamic values to give name and keys
app.use(
  cookieSession({
    name: 'login-session',
    keys: ['key1', 'key2'],
  }),
);
// per video tutorial @5:23
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/websites', searchRoute);
app.use('/', express.static(path.resolve(__dirname, '../client/dist')));

app.use('/profile', profileRoute);
app.use('/login', express.static(path.resolve(__dirname, '../client/dist')));
app.use('/review', reviewRoute);
// app.use()

// video @ 12:37 is logged in function
const isLoggedIn = (req, res, next) => {
  // console.log(req.user);
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// login failed attempt, change this to login again if it fails?
app.get('/failed', (req, res) => {
  res.send('You failed to login!');
});

// if successful login, send users to this page
app.get('/good', isLoggedIn, (req, res) => {
  res.send(`Welcome Mr ${req.user.id}`);
});

app.get(
  '/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }),
);

app.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/failed' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/good');
  },
);

app.get('/logout', (req, res) => {
  req.session = null;
  req.logout();
  // redirect them to login page?
  res.redirect('/google');
});

module.exports = {
  app, isLoggedIn,
};
