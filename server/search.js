// testing upstream
const { Router } = require('express');
const path = require('path');
require('./db/database');

//const azure = require('server/azure.js');
const searchRoute = Router();
const { webSearchApiClient } = require('./azure.js');


searchRoute.post('/search', (req, res) => {
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


// Question, will we incorporate the home page and search on one page and render one at a time?
// or will it be it's complete own route?


module.exports = {
  searchRoute,
};
