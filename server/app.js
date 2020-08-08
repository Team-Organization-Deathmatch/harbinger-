const express = require('express')
const path = require('path')
const app = express();
const { route } = require('./server')
app.use('/api/websites', route);

//app.use()
module.exports = {
  app,
}