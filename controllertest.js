'use strict';
const twitCtrl = require('./twitter_controller');

var params = {
    tag: "#dotnet",
    count: 10
  }

   const ctrl = new twitCtrl();

   //ctrl.favourite(params, function(){console.log('callback');});
   ctrl.follow(params, function(response){console.log(response);})

   //callback(null,console.log("poo"));