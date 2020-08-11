const { Router } = require('express');
require('../db/database');
const { isLoggedIn } = require('../app')
const profileRoute = Router();

profileRoute.get('/', (req, res) => {
  //here we will grab info from the DB for a single user profile and render it to the page
  if(req.user){
    res.status(200);
    res.send('profile GET');

  } else {
    res.status(401);
    res.send('unauthorized');
  }
});

profileRoute.post('/', (req, res) => {
  //this could be POST or Patch or PUT
  // it should allow the user to either create update their profile information
  //can all this functionality be included in the same route??
  if(req.user){
    res.status(201);
    res.send('profile POST');

  } else {
    res.status(401);
    res.send('unauthorized');
  }
})


module.exports = {
  profileRoute,
};