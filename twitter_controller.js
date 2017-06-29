'use strict';

var Twitter = require('twitter');
var config = require('./config');

var T = new Twitter(config);

module.exports = class TwitterController {
    constructor() { }

    // Favourite tweets  with certain hashtags
    favourite(args, callback) {

        var params = {
            q: args.tag,
            count: args.count,
            result_type: 'recent',
            lang: 'en'
        }


        T.get('search/tweets', params, function (err, data, response) {

            if (!err) {
                for (let i = 0; i < data.statuses.length; i++) {
                    let id = { id: data.statuses[i].id_str }
                    T.post('favorites/create', id, function (err, response) {
                        if (err) {
                            callback(err[0].message);
                        }

                    });
                }
            } else {
                callback(err);
            }
        })

        const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: 'Tweets Favourited',
                data: args // eslint-disable-line
            })
        };
        callback(null, response);
    }

    //follow people tweeting with a hashtag
    follow(args, callback) {

        var params = {
            q: args.tag,
            count: args.count,
            result_type: 'popular',
            lang: 'en'
        }
         var followed = {};
         var user = [];
        T.get('search/tweets', params, function (err, data, response) {
          
            if (!err) {
               
                for (let i = 0; i < data.statuses.length; i++) {
                    
                    let screen_name = data.statuses[i].user.screen_name;
                   
                    T.post('friendships/create', { screen_name }, function (err, response) {
                        if (err) {
                            console.log(err);
                        } else {
                            user.push({ "name": screen_name });
                          
                        }
                    });
                }
            } else {
                console.log(err);
            }
        })

        followed.user = user;
          const response = {
            statusCode: 200,
            body: JSON.stringify({
                message: followed,
                data: args // eslint-disable-line
            })
        };
        callback(null, response);
    }

      

}