const { Router } = require('express');
require('../db/database');
const userProfile = Router();

userProfile.get('/:user', (req, res) => {
  let testVal = req.params.user;
  console.log(testVal, 'testVal');
  console.log(req.user, 'req.user');
  console.log(req.body, 'req.body');
  // here we will grab info from the DB for a single user profile and render it to the page
  if (req.user) {
    console.log(req.body);

    res.status(200);
    res.send('profile GET');
  } else {
    res.status(401);
    res.send('unauthorized');
  }
});

module.exports = {
  userProfile,
};
