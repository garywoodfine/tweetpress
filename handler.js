'use strict';
const twitCtrl = require('./twitter_controller');

module.exports.favourite = (event, context, callback) => {

const ctrl = new twitCtrl();

 const response = {
   statusCode: 200,
    body: JSON.stringify({
      message: ctrl.favourite('#nodejs', callback)
     
    }),
};

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
