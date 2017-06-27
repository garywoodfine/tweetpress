'use strict';
const twitCtrl = require('./twitter_controller');

module.exports.favourite = (event, context, callback) => {

  const ctrl = new twitCtrl();

  const data = JSON.parse(event.body);
  // Not sure this is a good idea to have the Twitter specific params created here.
  // My extract this out to some  middleware to create the parameters.
  // TODO:  Develop middle ware to create Twiiter and WPAPI parameters to pass 
  //         Also arguments will need to populated from request object
  var params = {
    q: data.hashtag ,
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
