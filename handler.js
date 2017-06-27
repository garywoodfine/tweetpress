'use strict';
const twitCtrl = require('./twitter_controller');

module.exports.favourite = (event, context, callback) => {

  const ctrl = new twitCtrl();

  const requestBody = JSON.parse(event.body);
  const hashTag = requestBody.hashtag;
 
  var params = {
    q: hashTag,
    count: 10,
    result_type: 'recent',
    lang: 'en'
  }
  
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: ctrl.favourite(params, callback)

    }),
  };
  

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
