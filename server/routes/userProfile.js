const { Router } = require('express');
const { getUserReviews, findTopReviews } = require('../db/database');
require('../db/database');
const userProfile = Router();

userProfile.post('/:user', (req, res) => {
  let username = req.params.user;
  if (req.user) {
    console.log(req.body, 'username');
    res.status(201);
    // getUserReviews(username).then((data) => res.send(data));

    findTopReviews({ where: { id_user: req.body.userId} })
      .then((data) => {
        console.log('I AM DEHDDJDSK', data);
        
        res.send(data);
      })
      .catch((err) => console.error(err));
  } else {
    res.status(401);
    res.send('unauthorized');
  }
});

module.exports = {
  userProfile,
};
