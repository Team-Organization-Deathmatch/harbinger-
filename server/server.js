// testing upstream
const { Router } = require('express');
const path = require('path');
//const azure = require('server/azure.js');
const route = Router();
const { webSearchApiClient } = require('./azure.js');

route.get('/', (req, res) => {
  console.log('working GET');
  res.status(200);
  res.send('working GET');
});

route.post('/', (req, res) => {
  res.status(201);
  res.send('working POST');
});

route.post('/search', (req, res) => {
  res.status(201);
  // res.send('hello world');

  // call azure search function??
  // send data back from function call
  webSearchApiClient.web
    .search('seahawks')
    .then((result) => {
      let properties = ['webPages'];
      for (let i = 0; i < properties.length; i++) {
        if (result[properties[i]]) {
          res.send(result);
          console.log(result[properties[i]].value);
        } else {
          console.log(`No ${properties[i]} data`);
        }
      }
    })
    .catch((err) => {
      throw err;
    });
});
// one post for making an article

// another post for searching the web

route.get('/homepage', (req, res) => {
  // this will pull most recent and upvoted
  // stories from our database
});
// Question, will we incorporate the home page and search on one page and render one at a time?
// or will it be it's complete own route?

route.get('/profile', (req, res) => {
  // take you to your user profile where you can edit
  // basic information about yourself
});

// how will Google auth work?? That's for Monday

module.exports = {
  route,
};
