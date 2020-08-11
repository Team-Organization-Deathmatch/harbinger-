require('dotenv').config();
const { CognitiveServicesCredentials } = require('ms-rest-azure');
const WebSearchAPIClient = require('azure-cognitiveservices-websearch');

const credentials = new CognitiveServicesCredentials(process.env.KEY);
const webSearchApiClient = new WebSearchAPIClient(credentials);

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
