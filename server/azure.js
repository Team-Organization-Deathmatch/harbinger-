require('dotenv').config();
const CognitiveServicesCredentials = require('ms-rest-azure')
  .CognitiveServicesCredentials;
const WebSearchAPIClient = require('azure-cognitiveservices-websearch');

let credentials = new CognitiveServicesCredentials(process.env.KEY);
let webSearchApiClient = new WebSearchAPIClient(credentials);

// webSearchApiClient.web
//   .search('seahawks')
//   .then((result) => {
//     let properties = ['webPages'];
//     for (let i = 0; i < properties.length; i++) {
//       if (result[properties[i]]) {
//         console.log(result[properties[i]].value);
//       } else {
//         console.log(`No ${properties[i]} data`);
//       }
//     }
//   })
//   .catch((err) => {
//     throw err;
//   });

module.exports.webSearchApiClient = webSearchApiClient;
