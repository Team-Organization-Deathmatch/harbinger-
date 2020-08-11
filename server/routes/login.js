const { Router } = require('express');
const path = require('path');
require('../db/database');
const loginRoute = Router();

loginRoute.get('/', (req, res) => {
  if(req.user){
    res.status(200);
    res.send('login GET');

  } else {
    res.status(401);
    res.send('unauthorized');
  }
})


module.exports = {
  loginRoute
}