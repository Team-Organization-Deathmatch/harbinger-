const { Router } = require('express');
const { getUserReviews } = require('../db/database');
require('../db/database');
const userProfile = Router();

userProfile.get('/:user', (req, res) => {
  let username = req.params.user;
  if (req.user) {
    console.log(username);
    res.status(201);
    getUserReviews(username).then((data) => res.send(data));
  } else {
    res.status(401);
    res.send('unauthorized');
  }
});

module.exports = {
  userProfile,
};
