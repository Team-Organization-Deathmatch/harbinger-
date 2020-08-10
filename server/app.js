const express = require('express')
const path = require('path')
const app = express();
const { searchRoute } = require('./search');
const { homeRoute } = require('./home');
const { profileRoute } = require('./profile');
const { loginRoute } = require('./login');
const { reviewRoute } = require('./review');
app.use('/api/websites', searchRoute);
app.use('/', homeRoute);
app.use('/profile', profileRoute);
app.use('/login', loginRoute);
app.use('/review', reviewRoute);
//app.use()
module.exports = {
  app,
}