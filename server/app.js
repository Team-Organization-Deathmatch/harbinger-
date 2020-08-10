const express = require('express')
const path = require('path')
const app = express();
const { searchRoute } = require('./routes/search');
const { homeRoute } = require('./routes/home');
const { profileRoute } = require('./routes/profile');
const { loginRoute } = require('./routes/login');
const { reviewRoute } = require('./routes/review');
app.use(express.json());
app.use('/api/websites', searchRoute);
app.use('/', homeRoute);
app.use('/profile', profileRoute);
app.use('/login', loginRoute);
app.use('/review', reviewRoute);
//app.use()
module.exports = {
  app,
}