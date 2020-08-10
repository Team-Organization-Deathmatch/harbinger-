const { Router } = require('express');
const path = require('path');
require('../db/database');
const loginRoute = Router();

loginRoute.get('/', (req, res) => {
  res.status(200)
  res.send('login GET');
})


module.exports = {
  loginRoute
}