const { Router } = require('express');
require('../db/database');
const { saveReview, getUser } = require('../db/database');

const reviewRoute = Router();

reviewRoute.get('/retrieve/:id', (req, res) => {
  console.log(req.params.id);
  res.status(200)
  res.send('Top Reviews');
})

reviewRoute.post('/retrieve', (req, res) => {
  // this is the route that will retrieve a specific review based on user input
  if (req.user) {
    res.status(201);
    res.send('review POST');
  } else {
    res.status(401);
    res.send('unauthorized');
  }
});

reviewRoute.post('/submit', (req, res) =>
  // if (req.user) {
  getUser(req.user)
    .then((data) => {
      console.log(typeof data.dataValues.username)
      const { text, weburl, keyword } = req.body;
      console.log(text, weburl, keyword)
      return saveReview(data.dataValues.username, text.message, weburl, keyword)
        .then(() => {
          res.status(201);
          res.send('review POST');
        });
    }));
// })

// } else {
//   res.status(401);
//   res.send('unauthorized');
// }


module.exports = {
  reviewRoute,
};
